import {Box} from "@mui/material";
import {ParallaxBanner} from "react-scroll-parallax";

const ParathaBanner = () => {
	return (
		<Box
			component={ParallaxBanner}
			layers={[{image: "/images/preview_paratha_banner.jpeg", speed: -15}]}
			sx={{
				height: {xs: 320, lg: 600},
				"& div": {
					inset: "30px 0px !important",
				},
			}}
		/>
	);
};

export default ParathaBanner;
