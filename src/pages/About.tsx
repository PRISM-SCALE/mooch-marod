import {Box} from "@mui/material";
import MoochStory from "../sections/About/MoochStory";
import AboutBanner from "../sections/About/AboutBanner";
import Team from "../sections/About/Team";

const About = () => {
	return (
		<Box>
			<MoochStory />
			<AboutBanner />
			<Team />
		</Box>
	);
};

export default About;
