import legacy from '@vitejs/plugin-legacy'
import ViteRestart from 'vite-plugin-restart';
import path from 'path';

// https://vitejs.dev/config/
export default ({ command, mode }) => ({
	root: 'source',
	base: command === 'build' ? '' : '',
	build: {
		emptyOutDir: true,
		manifest: true,
		outDir: '../web', // (relative to `root`)
		rollupOptions: {
			output: {
				sourcemap: true
			},
		}
	},
	css: {
		postcss: '.build',
	},
	plugins: [
		legacy({
			targets: ['defaults', 'not IE 11']
		}),
		ViteRestart({
			reload: [
				'../.build/vite.config.js', // (relative to `root`)
			],
		}),
	],
	publicDir: 'static',
	server: {
		host: '0.0.0.0', // Vite server should listen on all IPs.
		port: 3000, // Use port 3000 for dev server.
		strictPort: true, // Don't try next available port if 3000 isn't available.
		origin: 'http://localhost:3000' // Rewrite asset URLs explicitly since the CMS web server is on a different host.
	}
});
