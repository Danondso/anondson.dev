/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_RETRO_ACHIEVEMENTS_USERNAME: string;
  readonly VITE_RETRO_ACHIEVEMENTS_API_KEY: string;
  readonly VITE_RETRO_ACHIEVEMENTS_BASE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
