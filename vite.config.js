import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte(),
    cssInjectedByJsPlugin({
      styleId: process.env.npm_package_name,
    }),
  ],
  preview:{
    port: 52952,
  },
  build:{
		lib:{
			entry: "src/app.js",
			formats: ['es'],
			fileName: "employees",
		}
	}
})
