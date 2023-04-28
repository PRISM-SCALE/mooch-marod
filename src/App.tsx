import {FC} from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import RootLayout from "./pages/RootLayout.tsx";
import Home from "./pages/Home.tsx";

const App: FC = () => {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <RootLayout />,
			// errorElement: <ErrorPage />,
			children: [
				{index: true, element: <Home />},
			],
		},
		// {
		// 	path: "/newsletter",
		// 	action: newsletterAction,
		// },
	]);

	return <RouterProvider router={router} />;
};

export default App;
