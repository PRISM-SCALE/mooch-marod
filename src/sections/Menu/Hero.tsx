import {Box, Container, Typography, useTheme} from "@mui/material";

const Hero = () => {
	const theme = useTheme();
	return (
		<Box
			component={"section"}
			id="menu_header"
			sx={{
				background: theme.palette.custom.achar,
				height: "40vh",
				width: "100%",
				display: "flex",
				justifyContent: "center",
				flexDirection: "column",
				overflow: "hidden",
			}}
		>
			<Container>
				<Box
					sx={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						flexDirection: "column",
					}}
				>
					<Typography
						color={theme.palette.custom.paratha}
						fontWeight={600}
						fontSize={".8rem"}
						sx={{textTransform: "uppercase"}}
					>
						Choose your Paratha
					</Typography>
					<Typography
						variant="h2"
						fontSize={{xs: "1.8rem", sm: "2.8rem", md: "3rem"}}
						color="white"
						sx={{textTransform: "uppercase"}}
					>
						RESTAURANT MENU
					</Typography>
				</Box>
			</Container>
		</Box>
	);
};

export default Hero;
