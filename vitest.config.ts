import { resolve as _resolve } from 'path'
import { defineConfig } from 'vitest/config'

const resolve = (path: string) => _resolve(__dirname, path)

export default defineConfig({
  resolve: {
    alias: [
      {
        find: /@\/(.*)/,
        replacement: resolve('src/$1'),
      },
    ],
  },
})
