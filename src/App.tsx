import {useMemo} from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {createTheme, ThemeProvider} from "@mui/material";
import {ParallaxProvider} from "react-scroll-parallax";

// THEMING
import {themeSettings} from "./theme";

// LAYOUT
import RootLayout from "./pages/RootLayout.tsx";

// NOT FOUND (404)
import NotFound from "./sections/NotFound.tsx";

// PAGES
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import Contact from "./pages/Contact.tsx";
import Menu from "./pages/Menu.tsx";

const App = () => {
	const theme = useMemo(() => createTheme(themeSettings), []);

	const router = createBrowserRouter([
		{
			path: "/",
			element: <RootLayout />,
			// errorElement: <ErrorPage />,
			children: [
				{index: true, element: <Home />},
				{
					path: "/about",
					element: <About />,
				},
				{
					path: "/contact",
					element: <Contact />,
				},
				{
					path: "/menu",
					element: <Menu />,
				},
			],
		},
		{
			path: "*",
			element: <NotFound />,
		},
	]);

	return (
		<ThemeProvider theme={theme}>
			<ParallaxProvider>
				<RouterProvider router={router} />
			</ParallaxProvider>
		</ThemeProvider>
	);
};

export default App;
