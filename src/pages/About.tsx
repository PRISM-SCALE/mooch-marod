import {Box} from "@mui/material";
import MoochStory from "../sections/About/MoochStory";
import AboutBanner from "../sections/About/AboutBanner";
import Team from "../sections/About/Team";
import PageHeader from "../sections/PageHeader";

const About = () => {
	return (
		<Box>
			<PageHeader tagline="know about us" title="about us" />
			<MoochStory />
			<AboutBanner />
			<Team />
		</Box>
	);
};

export default About;
