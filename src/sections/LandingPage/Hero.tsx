import {Box, useTheme} from "@mui/material";

const Hero = () => {
	const theme = useTheme();
	return (
		<Box
			component={"section"}
			id="hero_section"
			sx={{background: theme.palette.custom.achar, height: "100vh", width: "100%"}}
		>
			{/* HERO SECTION */}
		</Box>
	);
};

export default Hero;
