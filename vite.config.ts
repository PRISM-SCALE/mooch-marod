import {defineConfig} from "vite";
import reactSWC from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/

export default defineConfig({
	plugins: [
		reactSWC(),
		// sitemap({
		// baseURL: "https://example.com",
		// }),
	],
	build: {
		chunkSizeWarningLimit: 200, // Optional: Adjust the limit as per your project's requirements
	},
});
