import {Box, Button, Container, Divider, Typography, useTheme} from "@mui/material";

const Hero = () => {
	const theme = useTheme();
	return (
		<Box
			component={"section"}
			id="hero_section"
			sx={{
				background: theme.palette.custom.achar,
				height: "100vh",
				width: "100%",
				display: "flex",
				justifyContent: "center",
				flexDirection: "column",
			}}
		>
			<Container>
				<Box sx={{}}>
					<Box sx={{display: "flex", alignItems: "center"}}>
						<Typography color={theme.palette.custom.paratha} fontWeight={600} fontSize={".8rem"}>
							PARATHA TIME
						</Typography>
						<Box
							sx={{
								width: "80px",
								height: "2px",
								backgroundColor: theme.palette.custom.paratha,
								ml: 2,
							}}
						/>
					</Box>
					<Typography
						variant="h1"
						fontSize={{xs: "1.8rem", sm: "2.8rem", md: "4rem"}}
						color="white"
						sx={{textTransform: "uppercase"}}
					>
						share your love for <br /> paratha!
					</Typography>

					<Button
						sx={{
							backgroundColor: theme.palette.custom.paratha,
							borderRadius: 30,
							px: 6,
							py: 2,
							color: "white",
							mt: 4,
							fontSize: "1rem",
							"&:hover": {
								backgroundColor: theme.palette.custom.paratha,
							},
						}}
						disableElevation
						disableRipple
					>
						Book a table
					</Button>
				</Box>
			</Container>
		</Box>
	);
};

export default Hero;
