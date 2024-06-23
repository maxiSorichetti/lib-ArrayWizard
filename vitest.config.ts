import path from 'path'
import { defineConfig, mergeConfig } from 'vitest/config'

import viteConfig from './vite.config'

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      setupFiles: './tests/helpers', // archivo que se ejecuta antes de cada test
      // environment: 'jsdom' // emular tiempos, creamos un entorno virtual no usamos el browser real
      alias: {
        '@src': path.resolve(__dirname, '/src')
      }
    }
  })
)
