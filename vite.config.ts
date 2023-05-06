import {defineConfig} from "vite";
import reactSWC from "@vitejs/plugin-react-swc";
// import reactRefresh from "@vitejs/plugin-react-refresh";
// import react from "vite-plugin-react";
// import {createServerRenderer} from "vite-plugin-react/server";
// import imagemin from "vite-plugin-imagemin";
// import sitemap from "vite-plugin-sitemap";
// import html from "vite-plugin-html";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		reactSWC(),
		// reactRefresh(),
		// react(),
		// imagemin(),
		// sitemap({
		// 	// baseURL: "https://example.com",
		// }),
		// html({
		// 	meta: {
		// 		viewport: "width=device-width, initial-scale=1.0",
		// 	},
		// }),
	],
	// ssr: {
	// 	noExternal: ["react", "react-dom"],
	// 	render: createServerRenderer((url) => {
	// 		// Your server rendering logic goes here
	// 	}),
	// },
});
