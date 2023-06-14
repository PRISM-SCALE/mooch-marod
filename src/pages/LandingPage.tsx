import {Box} from "@mui/material";
import BrandingCard from "../components/BrandingCard";
import {fk_background, logo_black, mm_background} from "../utils/common";

const LandingPage = () => {
	const PROD_OR_DEV = import.meta.env.PROD ? import.meta.env.VITE_BRAND_URL : "/home";

	return (
		<Box sx={{display: "flex", flexDirection: {xs: "column", md: "row"}}}>
			<BrandingCard
				alt="Food Kasoot"
				background={fk_background}
				logo="/images/fk_white.png"
				path={PROD_OR_DEV}
				sx={{width: {xs: "100%", md: "50%"}}}
			/>
			<BrandingCard
				alt="Mooch Marod"
				background={mm_background}
				logo={logo_black}
				path="/home"
				sx={{width: {xs: "100%", md: "50%"}}}
			/>
		</Box>
	);
};

export default LandingPage;
