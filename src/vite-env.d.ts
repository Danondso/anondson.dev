/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_RETRO_ACHIEVEMENTS_USERNAME: string;
  readonly VITE_RETRO_ACHIEVEMENTS_API_KEY: string;
  readonly VITE_RETRO_ACHIEVEMENTS_BASE_URL: string;
  readonly VITE_HITS_COUNTER_API_URL: string;
  readonly VITE_SITE_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
