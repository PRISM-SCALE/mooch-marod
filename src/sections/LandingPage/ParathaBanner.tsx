import {Box, Container, Typography, useTheme} from "@mui/material";
import {ParallaxBanner} from "react-scroll-parallax";

const ParathaBanner = () => {
	const theme = useTheme();

	return (
		<Box
			component={ParallaxBanner}
			layers={[{image: "/images/preview_paratha_banner.jpeg", speed: -20}]}
			sx={{height: 460}}
		>
			<Container sx={{position: "relative"}}>
				<Box
					sx={{
						position: "absolute",
						inset: "0px",
						display: "flex",
						flexDirection: "column",
						height: {xs: 460},
						justifyContent: {xs: "center", md: "flex-end"},
						paddingY: 4,

						[theme.breakpoints.down("md")]: {
							PaddingY: 0,
						},

						[theme.breakpoints.down("lg")]: {
							paddingLeft: 4,
						},
					}}
				>
					<Typography
						variant="h1"
						sx={{textTransform: "uppercase", fontSize: {xs: 32, md: 42}}}
						color={"white"}
						fontWeight={600}
						gutterBottom
					>
						paratha of the day
					</Typography>
					<Typography
						variant="body1"
						color={theme.palette.custom.butter}
						width={{xs: "100%", md: "40%"}}
					>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, asperiores.
					</Typography>
				</Box>
			</Container>
		</Box>
	);
};

export default ParathaBanner;
