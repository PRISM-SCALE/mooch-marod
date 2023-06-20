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

// HOC
import DynamicImport from "./hoc/DynamicImport.tsx";

// PAGES
const LandingPage = () => import("./pages/LandingPage.tsx");
const Home = () => import("./pages/Home.tsx");
const About = () => import("./pages/About.tsx");
const Menu = () => import("./pages/Menu.tsx");
const Contact = () => import("./pages/Contact.tsx");
const Outlets = () => import("./pages/Outlets.tsx");
// const Offers = () => import("./pages/Offers.tsx");

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
					element: <DynamicImport load={Home} />,
				},
				{
					path: "/about",
					element: <DynamicImport load={About} />,
				},
				{
					path: "/contact",
					element: <DynamicImport load={Contact} />,
				},
				{
					path: "/menu",
					element: <DynamicImport load={Menu} />,
				},
				{
					path: "/outlets",
					element: <DynamicImport load={Outlets} />,
				},
				// {
				// 	path: "/offers",
				// 	element: <DynamicImport load={Offers} />,
				// },
			],
		},

		{
			index: true,
			element: <DynamicImport load={LandingPage} />,
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

// VITE_BRAND_URL=https://food-kasoot.netlify.app/
