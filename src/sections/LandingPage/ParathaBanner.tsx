import {Box, Container, Typography, useTheme} from "@mui/material";
import {ParallaxBanner} from "react-scroll-parallax";

const ParathaBanner = () => {
	const theme = useTheme();

	return (
		<Box
			component={ParallaxBanner}
			layers={[{image: "/images/preview_paratha_banner.jpeg", speed: -15}]}
			sx={{
				height: 600,
				"& div": {
					inset: "30px 0px !important",
				},
			}}
		/>
	);
};

export default ParathaBanner;
