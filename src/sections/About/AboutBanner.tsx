import {Box, Container, Typography} from "@mui/material";
import {useTheme} from "@mui/material/styles";
import {ParallaxBanner} from "react-scroll-parallax";

const AboutBanner = () => {
	const theme = useTheme();
	return (
		<Box
			component={ParallaxBanner}
			layers={[{image: "/images/food_banner.webp", speed: -20}]}
			sx={{height: 460}}
		>
			<Container maxWidth="xl" sx={{position: "relative"}}>
				<Box
					sx={{
						position: "absolute",
						inset: "0px",
						display: "flex",
						flexDirection: "column",
						height: {xs: 460},
						justifyContent: "center",

						[theme.breakpoints.down("lg")]: {
							paddingLeft: 4,
						},
					}}
				>
					<Typography
						variant="h1"
						sx={{textTransform: "uppercase", fontSize: {xs: 32, md: 54}}}
						color={"#fff"}
						fontWeight={600}
						gutterBottom
					>
						Good food is the foundation <br />
						of genuine happiness.
					</Typography>
					{/* <Typography
						variant="body1"
						color={theme.palette.custom.butter}
						width={{xs: "100%", md: "40%"}}
					>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, asperiores.
					</Typography> */}
				</Box>
			</Container>
		</Box>
	);
};

export default AboutBanner;
