import {Box} from "@mui/material";

// COMPONENTS
import Counts from "../sections/LandingPage/Counts.tsx";
import Offers from "../sections/LandingPage/Offers.tsx";

const Home = () => {
	return (
		<Box>
			{/* <Typography variant="h1">Mooch Marod</Typography> */}
			<Counts />
			<Offers />
		</Box>
	);
};

export default Home;
