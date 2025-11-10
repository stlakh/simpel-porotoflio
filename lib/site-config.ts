/**
 * UTILITY: Site Configuration
 *
 * Fungsi: Mengimport dan menyediakan akses ke konfigurasi situs
 * Ini memastikan data terpusat dan mudah diakses dari semua komponen
 *
 * Cara Menggunakan:
 * import { config } from '@/lib/site-config'
 * const name = config.personal.name
 * const projects = config.projects
 */

import siteConfig from "@/src/config/site-config.json"

export const config = siteConfig as typeof import("@/src/config/site-config.json")

export type SiteConfig = typeof config
