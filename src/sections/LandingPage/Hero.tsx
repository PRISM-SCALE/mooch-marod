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
				overflow: "hidden",
				position: "relative",
				zIndex: -10,
			}}
		>
			<img
				src="/images/jabardast_desi.png"
				alt="jabardast_desi"
				style={{
					height: 760,
					position: "absolute",
					top: "50%",
					left: "50%",
					transform: "translate(-50%, -50%) rotate(-15deg)",
					zIndex: -5,
					opacity: 0.25,
				}}
			/>
			<Container>
				<Box sx={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
					<Box>
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
							fontSize={{xs: "2.2rem", sm: "2.8rem", md: "4.8rem"}}
							color="white"
							sx={{textTransform: "uppercase"}}
						>
							share your love
							<br /> for paratha!
						</Typography>

						{/* ------------------------------------------ */}

						<Button
							sx={{
								backgroundColor: theme.palette.custom.paratha,
								borderRadius: 30,
								px: {xs: 2, md: 4},
								py: 1,
								color: "white",
								mt: 4,
								fontSize: {xs: ".8rem", md: "1rem"},
								fontWeight: 400,
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
								px: {xs: 2, md: 4},
								py: 1,
								color: "white",
								mt: 4,
								fontSize: {xs: "8.rem", md: "1rem"},
								fontWeight: 400,
								"&:hover": {
									backgroundColor: "transparent",
								},
							}}
							disableElevation
							disableRipple
						>
							Bulk order
						</Button>

						{/* ------------------------------------------ */}
					</Box>

					<Box sx={{position: "relative"}}>
						<Box
							component="img"
							src="/images/1.webp"
							alt="paratha_animation"
							sx={{
								height: 420,
							}}
						/>
					</Box>
				</Box>
			</Container>
		</Box>
	);
};

export default Hero;

//https://youtube.com/shorts/ITogH7lJTyE?feature=share
