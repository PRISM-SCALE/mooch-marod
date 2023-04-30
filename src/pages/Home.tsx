import {Box} from "@mui/material";

// COMPONENTS
import Counts from "../sections/LandingPage/Counts.tsx";
import Offers from "../sections/LandingPage/Offers.tsx";
import Menu from "../sections/LandingPage/Menu.tsx";

const Home = () => {
	return (
		<Box>
			{/* <Typography variant="h1">Mooch Marod</Typography> */}
			<Counts />
			<Offers />
			<Menu />
		</Box>
	);
};

export default Home;
