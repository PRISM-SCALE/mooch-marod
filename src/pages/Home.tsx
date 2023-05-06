import {Box} from "@mui/material";

// SECTIONS
import Hero from "../sections/LandingPage/Hero.tsx";
import Counts from "../sections/LandingPage/Counts.tsx";
import Offers from "../sections/LandingPage/Offers.tsx";
import Menu from "../sections/LandingPage/Menu.tsx";
import ParathaBanner from "../sections/LandingPage/ParathaBanner.tsx";
import GoogleReviews from "../sections/LandingPage/GoogleReviews.tsx";
import Instagram from "../sections/LandingPage/Instagram.tsx";

const Home = () => {
	return (
		<Box>
			{/* <Typography variant="h1">Mooch Marod</Typography> */}
			<Hero />
			<Counts />
			<Offers />
			<Menu />
			<ParathaBanner />
			<GoogleReviews />
			<Instagram />
		</Box>
	);
};

export default Home;
