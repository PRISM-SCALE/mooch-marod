import {Box, Button, Container, Typography, useTheme} from "@mui/material";
import {useSpring, animated} from "@react-spring/web";
import {useResponsive} from "../../hooks/useResponsive";

const Hero = () => {
	const theme = useTheme();
	const {mediumScreenAndUp} = useResponsive();

	const {transform} = useSpring({
		from: {transform: "rotate(0deg)"},
		to: {transform: "rotate(-20deg)"},
		config: {mass: 1, tension: 150, friction: 80, clamp: true, duration: 2500},
		loop: {
			reverse: true,
		},
	});

	return (
		<Box
			component={"section"}
			id="hero_section"
			sx={{
				background: theme.palette.custom.achar,
				height: "95vh",
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
				loading="lazy"
			/>
			{/* -------------------------------------------------- */}
			{/* IMAGE ELEMENTS */}
			{mediumScreenAndUp && (
				<>
					<Box
						component={"img"}
						src="/images/leaf_2.png"
						sx={{position: "absolute", height: 120, top: 15, left: 80, zIndex: -3}}
						loading="lazy"
					/>
					<Box
						component={"img"}
						src="/images/points.png"
						sx={{position: "absolute", height: 90, top: "50%", left: -150, zIndex: -3}}
						loading="lazy"
					/>
					<Box
						component={"img"}
						src="/images/leaf_3.png"
						sx={{position: "absolute", height: 40, bottom: 55, left: 40, zIndex: -3}}
						loading="lazy"
					/>

					<Box
						component={"img"}
						src="/images/leaf-1.png"
						sx={{position: "absolute", height: 70, top: 55, right: 140, zIndex: -3}}
						loading="lazy"
					/>

					<Box
						component={"img"}
						src="/images/pepper.png"
						sx={{position: "absolute", height: 70, bottom: "50%", right: 230, zIndex: -3}}
						loading="lazy"
					/>

					<Box
						component={"img"}
						src="/images/leaf_6.png"
						sx={{position: "absolute", height: 70, bottom: 55, right: 100, zIndex: -3}}
						loading="lazy"
					/>

					<Box
						component={"img"}
						src="/images/points_2.png"
						sx={{position: "absolute", height: 90, top: 80, right: "50%", zIndex: -3}}
						loading="lazy"
					/>
				</>
			)}
			{/* -------------------------------------------------- */}
			<Container maxWidth="xl">
				<Box
					sx={{
						display: "flex",
						alignItems: "center",
						justifyContent: "space-evenly",
						// columnGap: 3,
						flexDirection: {xs: "column", md: "row"},
					}}
				>
					<Box sx={{[theme.breakpoints.down("md")]: {textAlign: "center"}}}>
						<Box
							sx={{
								display: "flex",
								alignItems: "center",
								[theme.breakpoints.down("md")]: {justifyContent: "center"},
							}}
						>
							<Typography color={theme.palette.custom.paratha} fontWeight={600} fontSize={".8rem"}>
								PARATHA TIME
							</Typography>
							<Box
								sx={{
									width: "80px",
									height: "2px",
									backgroundColor: theme.palette.custom.paratha,
									ml: 2,
									[theme.breakpoints.down("md")]: {display: "none"},
								}}
							/>
						</Box>
						<Typography
							variant="h1"
							fontSize={{xs: "2.2rem", sm: "2.8rem", md: "4.8rem"}}
							color="white"
							sx={{textTransform: "uppercase", fontWeight: 700}}
						>
							share your <br /> love for <br />
							paratha!
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

					<Box sx={{position: "relative", [theme.breakpoints.down("md")]: {mt: 8}}}>
						<Box
							component={animated.img}
							src="/images/1.webp"
							alt="paratha_animation"
							sx={{
								height: {xs: 260, sm: 340, md: 420, lg: 620},
							}}
							style={{transform}}
							loading="lazy"
						/>
						<Box
							component="img"
							src="/images/banner_image_2.png"
							alt="paratha_animation"
							sx={{
								height: {xs: 180, sm: 220, md: 320, lg: 380},
								position: "absolute",
								left: 130,
								top: -100,
								zIndex: -1,
								[theme.breakpoints.down("md")]: {
									left: 70,
									top: -30,
								},
							}}
							loading="lazy"
						/>
						<Box
							component="img"
							src="/images/banner_image_3.png"
							alt="paratha_animation"
							sx={{
								height: {xs: 180, sm: 220, md: 320, lg: 380},
								position: "absolute",
								left: 0,
								bottom: -120,
								zIndex: -1,
								[theme.breakpoints.down("md")]: {
									bottom: -40,
								},
							}}
							loading="lazy"
						/>
					</Box>
				</Box>
			</Container>
		</Box>
	);
};

export default Hero;

//https://youtube.com/shorts/ITogH7lJTyE?feature=share
