import {Box, Typography} from "@mui/material";
import {FC} from "react";
import Counts from "../sections/LandingPage/Counts.tsx";

const Home: FC = () => {
	return (
		<Box>
			<Typography variant="h1">Mooch Marod</Typography>
			<Counts />
		</Box>
	);
};

export default Home;
