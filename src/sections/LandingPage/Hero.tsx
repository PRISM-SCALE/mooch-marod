import {Box, Button, Container, Typography, useTheme} from "@mui/material";

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
			{/* HERO Section Navigation */}
			<Container>
				<img
					src="/images/jabardast_desi.png"
					alt="jabardast_desi"
					style={{
						position: "absolute",
						top: "50%",
						left: "50%",
						transform: "translate(-50%, -50%)",
						zIndex: 0,
					}}
				/>

				<Box sx={{position: "relative"}}>
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
							mr: 2,
						}}
						disableElevation
						disableRipple
					>
						Book a table
					</Button>
					<Button
						sx={{
							border: `3px solid ${theme.palette.custom.paratha}`,
							backgroundColor: "transparent",
							borderRadius: 30,
							px: 6,
							py: 2,
							color: "white",
							mt: 4,
							fontSize: "1rem",
							"&:hover": {
								backgroundColor: "transparent",
							},
						}}
						disableElevation
						disableRipple
					>
						Bulk order
					</Button>
				</Box>
			</Container>
		</Box>
	);
};

export default Hero;

//https://youtube.com/shorts/ITogH7lJTyE?feature=share