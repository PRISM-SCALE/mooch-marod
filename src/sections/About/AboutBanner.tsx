import {Box, Container, Typography} from "@mui/material";
import {useTheme} from "@mui/material/styles";
import {ParallaxBanner} from "react-scroll-parallax";

const AboutBanner = () => {
	const theme = useTheme();
	return (
		<Box
			component={ParallaxBanner}
			layers={[{image: "/images/city.jpg", speed: -20}]}
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
						justifyContent: "center",

						[theme.breakpoints.down("lg")]: {
							paddingLeft: 4,
						},
					}}
				>
					<Typography
						variant="h1"
						sx={{textTransform: "uppercase", fontSize: {xs: 32, md: 54}}}
						color={theme.palette.custom.butter}
						fontWeight={600}
						gutterBottom
					>
						HE RUNS THE PLACE SOME MIGHT <br />
						SAY IT WAS HIS DESTINY.
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
