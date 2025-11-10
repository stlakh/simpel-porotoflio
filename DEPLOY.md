# Deployment Guide

Panduan lengkap untuk deploy portfolio ke berbagai platform.

## Deployment Options

### 1. Vercel (Recommended) ⭐

Vercel adalah creator Next.js dan memberikan hosting terbaik untuk Next.js apps.

#### Setup

1. **Push ke GitHub**
\`\`\`bash
git add .
git commit -m "Initial commit"
git push origin main
\`\`\`

2. **Login ke Vercel**
   - Buka https://vercel.com
   - Click "Sign Up" dan gunakan GitHub account

3. **Import Project**
   - Click "New Project"
   - Select GitHub repository
   - Vercel akan auto-detect Next.js
   - Click "Deploy"

4. **Custom Domain (Optional)**
   - Di Vercel dashboard
   - Settings → Domains
   - Tambahkan custom domain Anda
   - Update DNS settings di registrar domain

**Keuntungan:**
- Free tier generous
- Auto SSL certificate
- Auto deploy pada push ke main branch
- Excellent performance
- Built-in analytics

### 2. Netlify

#### Setup

\`\`\`bash
# Install Netlify CLI
npm install -g netlify-cli

# Build project
npm run build

# Deploy
netlify deploy --prod
\`\`\`

Atau drag & drop folder `.next`:

1. Buka https://app.netlify.com
2. Drag folder `.next` ke window
3. Netlify akan auto-configure

**Keuntungan:**
- Simple setup
- Good performance
- Free tier
- Custom domains

### 3. Self-Hosting

#### Requirements
- VPS atau dedicated server
- Node.js installed
- PM2 atau similar untuk process management

#### Steps

\`\`\`bash
# SSH ke server
ssh user@your-server.com

# Clone repository
git clone <your-repo>
cd portfolio

# Install dependencies
npm install

# Build
npm run build

# Start dengan PM2
npm install -g pm2
pm2 start npm --name "portfolio" -- start

# Setup Nginx as reverse proxy
# Edit /etc/nginx/sites-available/portfolio
# Point ke localhost:3000

# Setup SSL dengan Let's Encrypt
sudo apt install certbot
sudo certbot certonly --standalone -d yourdomain.com
\`\`\`

#### Nginx Config Example

\`\`\`nginx
server {
    listen 443 ssl http2;
    server_name yourdomain.com;

    ssl_certificate /etc/letsencrypt/live/yourdomain.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/yourdomain.com/privkey.pem;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
    }
}

server {
    listen 80;
    server_name yourdomain.com;
    return 301 https://$server_name$request_uri;
}
\`\`\`

### 4. Docker + Cloud Run (Google Cloud)

#### Dockerfile

\`\`\`dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
\`\`\`

#### Deploy ke Google Cloud Run

\`\`\`bash
# Install Google Cloud CLI
# https://cloud.google.com/sdk/docs/install

# Authenticate
gcloud auth login

# Set project
gcloud config set project YOUR_PROJECT_ID

# Build dan push
gcloud run deploy portfolio \
  --source . \
  --platform managed \
  --region us-central1
\`\`\`

### 5. Railway

#### Setup

1. Buka https://railway.app
2. Click "Create New"
3. Connect GitHub repository
4. Railway auto-detect Next.js
5. Click "Deploy"

**Keuntungan:**
- Auto-deploys on push
- Free tier available
- Simple setup
- Good documentation

### Environment Variables

Jika Anda menggunakan environment variables:

1. **Di Vercel:**
   - Project Settings → Environment Variables
   - Tambahkan variable
   - Redeploy

2. **Di Netlify:**
   - Site settings → Build & deploy → Environment
   - Tambahkan variable

3. **Di Dockerfile:**
\`\`\`dockerfile
ENV NEXT_PUBLIC_API_URL=production-api-url
\`\`\`

## Performance Optimization

### 1. Enable Static Generation

Portfolio Anda adalah static site, pastikan Anda leverage cache:

\`\`\`typescript
// app/page.tsx
export const revalidate = 3600 // Revalidate every hour
\`\`\`

### 2. Image Optimization

Gunakan Next.js Image component:

\`\`\`tsx
import Image from 'next/image'

<Image 
  src="/images/hero.jpg"
  alt="Hero"
  width={1200}
  height={600}
  priority
/>
\`\`\`

### 3. Bundle Analysis

\`\`\`bash
npm install --save-dev @next/bundle-analyzer

# Edit next.config.mjs
const withBundleAnalyzer = require('@next/bundle-analyzer')()

module.exports = withBundleAnalyzer({
  reactStrictMode: true,
})

# Run
ANALYZE=true npm run build
\`\`\`

## Monitoring

### Vercel Analytics

Built-in, no setup needed. Check at https://vercel.com/dashboard

### Self-Hosted Monitoring

\`\`\`bash
# Install PM2 Plus
pm2 plus

# View logs
pm2 logs portfolio
\`\`\`

## Troubleshooting

### Build Errors

\`\`\`bash
# Clear cache dan rebuild
rm -rf .next
npm run build
\`\`\`

### Performance Issues

1. Check bundle size: `npm run analyze`
2. Enable compression di server
3. Use CDN untuk static files

### Domain Issues

- Ensure DNS records are correct (check at https://dnschecker.org)
- Wait 24-48 hours for DNS propagation
- Check SSL certificate is valid

## Backup Strategy

\`\`\`bash
# Backup sebelum deploy besar
git tag backup-$(date +%Y%m%d)
git push origin backup-$(date +%Y%m%d)

# Jika ada masalah, rollback ke tag
git revert <commit-hash>
git push origin main
\`\`\`

## Checklist Sebelum Deploy

- [ ] Semua link bekerja dengan baik
- [ ] Dark mode berfungsi
- [ ] Mobile responsive
- [ ] Metadata SEO lengkap
- [ ] Image terus-menerus
- [ ] No console errors
- [ ] Build berhasil tanpa warning
- [ ] Tested di multiple browsers

---

Happy deploying! 🚀
\`\`\`

```docker file="Dockerfile"
# <CHANGE> Added complete Docker setup for containerization
FROM node:18-alpine AS base

WORKDIR /app

# Install dependencies
FROM base AS deps
COPY package.json package-lock.json* ./
RUN npm ci --only=production

# Build application
FROM base AS builder
COPY package.json package-lock.json* ./
RUN npm ci
COPY . .
RUN npm run build

# Production runtime
FROM base AS runner
ENV NODE_ENV=production

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

# Copy built application
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/src ./src
COPY --from=builder /app/public ./public

USER nextjs

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["npm", "start"]
