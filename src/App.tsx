import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {ThemeProvider} from "@mui/material";

// THEMING
import theme from "./theme.ts";

// LAYOUT
import RootLayout from "./pages/RootLayout.tsx";

// PAGES
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";

const App = () => {
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
			],
		},
		// {
		// 	path: "/newsletter",
		// 	action: newsletterAction,
		// },
	]);

	return (
		<ThemeProvider theme={theme}>
			<RouterProvider router={router} />
		</ThemeProvider>
	);
};

export default App;
