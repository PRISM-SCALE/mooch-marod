import {Box} from "@mui/material";
import BrandingCard from "../components/BrandingCard";

const LandingPage = () => {
	return (
		<Box sx={{display: "flex", flexDirection: {xs: "column", md: "row"}}}>
			<BrandingCard
				alt="Food Kasoot"
				background={`linear-gradient(359.53deg, #000000 0.43%, #242424 53.13%, #000000 96.53%), url(/images/brick_wall.png)`}
				logo="/images/fk_white.png"
				path="/home"
				sx={{width: {xs: "100%", md: "50%"}}}
			/>
			<BrandingCard
				alt="Mooch Marod"
				background={`linear-gradient(359.53deg, #D93423 0.43%, #F15443 53.13%, #D93423 96.53%), url(/images/brick_wall.png)`}
				logo="/images/mm_logo.webp"
				path="/home"
				sx={{width: {xs: "100%", md: "50%"}}}
			/>
		</Box>
	);
};

export default LandingPage;
