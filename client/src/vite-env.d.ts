/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_HTTP_BASE_AUTH: string
  readonly VITE_API_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
