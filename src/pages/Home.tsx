import {Box} from "@mui/material";

// SECTIONS
import Counts from "../sections/LandingPage/Counts.tsx";
import Offers from "../sections/LandingPage/Offers.tsx";
import Menu from "../sections/LandingPage/Menu.tsx";
import ParathaBanner from "../sections/LandingPage/ParathaBanner.tsx";
import GoogleReviews from "../sections/LandingPage/GoogleReviews.tsx";

const Home = () => {
	return (
		<Box>
			{/* <Typography variant="h1">Mooch Marod</Typography> */}
			<Counts />
			<Offers />
			<Menu />
			<ParathaBanner />
			<GoogleReviews />
		</Box>
	);
};

export default Home;
