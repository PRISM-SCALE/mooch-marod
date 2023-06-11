import {useMemo} from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {createTheme, ThemeProvider} from "@mui/material";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFns";
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
import Outlets from "./pages/Outlets.tsx";
import Offers from "./pages/Offers.tsx";
import LandingPage from "./pages/LandingPage.tsx";

const App = () => {
	const theme = useMemo(() => createTheme(themeSettings), []);

	const router = createBrowserRouter([
		{
			path: "/",
			element: <RootLayout />,
			// errorElement: <ErrorPage />,
			children: [
				// {index: true, element: <LandingPage />},
				{
					path: "/home",
					element: <Home />,
				},
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
				{
					path: "/outlets",
					element: <Outlets />,
				},
				{
					path: "/offers",
					element: <Offers />,
				},
			],
		},

		{
			index: true,
			element: <LandingPage />,
		},

		{
			path: "*",
			element: <NotFound />,
		},
	]);

	return (
		<ThemeProvider theme={theme}>
			<ParallaxProvider>
				<LocalizationProvider dateAdapter={AdapterDateFns}>
					<RouterProvider router={router} />
				</LocalizationProvider>
			</ParallaxProvider>
		</ThemeProvider>
	);
};

export default App;

// VITE_MAILCHIMP_EMAIL_URL=https://gmail.us21.list-manage.com/subscribe/post?u=df01cb0e908fd7c2333212809&amp;id=1c0a3c998b&amp;f_id=0003d7e6f0

// VITE_MAILCHIMP_CONTACT_URL=https://gmail.us21.list-manage.com/subscribe/post
// VITE_MAILCHIMP_U=df01cb0e908fd7c2333212809
// VITE_MAILCHIMP_ID=1c0a3c998b
