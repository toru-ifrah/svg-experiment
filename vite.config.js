// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
	base : "/logo/",
	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, 'index.html'),
				flat1: resolve(__dirname, 'flat-1/index.html'),
				ribbon1: resolve(__dirname, 'ribbon-2/index.html'),
				scrollTrigger: resolve(__dirname, 'scroll-trigger/index.html'),
			},
		},
	},
})