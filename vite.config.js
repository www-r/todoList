import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		// @ 라는 별칭을 활용해서 컴포넌트 등을 import 할 수 있게 함
		alias: {
			'@': path.resolve(__dirname, './src')
		}
	},
	server: {
		// port 설정
		port: 3000
	}
});
