import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
	server: {
		proxy: {
			'/api': {
				target: 'https://api-dev.trace3d.app',
				changeOrigin: true,
				secure: true,
				rewrite: (path) => path.replace(/^\/api/, ''),
			},
			'/storage': {
				target: 'https://storageacceausdev.blob.core.windows.net',
				changeOrigin: true,
				secure: true,
				rewrite: (path) => path.replace(/^\/storage/, ''),
			},
		},
	},
	plugins: [react(), tsconfigPaths()],
});
