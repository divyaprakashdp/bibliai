import mdx from '@mdx-js/rollup'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
// ---cut---
// …
const viteConfig = defineConfig({
    plugins: [
        { enforce: 'pre', ...mdx({/* jsxImportSource: …, otherOptions… */ }) },
        react({ include: /\.(jsx|js|mdx|md|tsx|ts)$/ })
    ]
})
// …