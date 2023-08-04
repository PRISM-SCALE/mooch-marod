import {Box} from "@mui/material";
import BrandingCard from "../components/BrandingCard";
import {fk_background_image, fk_logo, logo_butter, mm_background_image} from "../utils/common";

const LandingPage = () => {
	// const PROD_OR_DEV = import.meta.env.PROD ? `${import.meta.env.VITE_BRAND_URL}home` : "/home";

	return (
		<Box sx={{display: "flex", flexDirection: {xs: "column", md: "row"}}}>
			<BrandingCard
				alt="Food Kasoot"
				background={fk_background_image}
				logo={fk_logo}
				path={"#"}
				sx={{width: {xs: "100%", md: "50%"}}}
			/>

			<BrandingCard
				alt="Mooch Marod"
				background={mm_background_image}
				logo={logo_butter}
				path="/home"
				sx={{width: {xs: "100%", md: "50%"}}}
				height={400}
			/>
		</Box>
	);
};

export default LandingPage;
