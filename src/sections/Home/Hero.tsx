import {Box, Button, Container, Typography, useTheme} from "@mui/material";
import {TypeAnimation} from "react-type-animation";
import {useSpring, animated} from "@react-spring/web";

// HOOKS
import {useResponsive} from "../../hooks/useResponsive";

// COMPONENTS
import MMHeroElements from "../../components/MMHeroElements";

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

	// TEXT ANIMATION
	const captionProps = useSpring({
		transform: "translateY(0px)",
		opacity: 1,
		from: {transform: "translateY(20px)", opacity: 0},
		delay: 1300,
	});

	const titleProps = useSpring({
		transform: "translateY(0px)",
		opacity: 1,
		from: {transform: "translateY(30px)", opacity: 0},
		delay: 1500,
	});

	const buttonProps = useSpring({
		transform: "translateY(0px)",
		opacity: 1,
		from: {transform: "translateY(30px)", opacity: 0},
		delay: 1800,
	});

	const heroImageProps = useSpring({
		transform: "scale(1)",
		opacity: 1,
		from: {transform: "scale(1.2)", opacity: 0},
		delay: 400,
	});

	const banner1Props = useSpring({
		transform: "translateY(0px)",
		opacity: 1,
		from: {transform: "translateY(-20px)", opacity: 0},
		delay: 700,
	});

	const banner2Props = useSpring({
		transform: "translateY(0px)",
		opacity: 1,
		from: {transform: "translateY(20px)", opacity: 0},
		delay: 1000,
	});

	return (
		<Box
			component={"section"}
			id="hero_section"
			sx={{
				background: `linear-gradient(359.53deg, #D93423 0.43%, #F15443 53.13%, #D93423 96.53%), url(/images/brick_wall.png)`,
				mixBlendMode: "multiply",
				height: "100vh",
				width: "100%",
				display: "flex",
				justifyContent: "center",
				flexDirection: "column",
				overflow: "hidden",
				position: "relative",
				zIndex: 5,
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
					zIndex: 10,
					opacity: 0.25,
				}}
				loading="lazy"
			/>
			{/* -------------------------------------------------- */}
			{/* IMAGE ELEMENTS */}
			{mediumScreenAndUp && <MMHeroElements />}
			{/* -------------------------------------------------- */}
			<Container maxWidth="xl">
				<Box
					sx={{
						display: "flex",
						alignItems: "center",
						justifyContent: "space-around",
						// columnGap: 3,
						flexDirection: {xs: "column", md: "row"},
					}}
				>
					<Box
						sx={{
							[theme.breakpoints.up("md")]: {
								width: "500px",
							},

							[theme.breakpoints.down("md")]: {textAlign: "center"},
							position: "relative",
							zIndex: 20,
						}}
					>
						{/* ------------------------------------------ */}

						<Box
							component={animated.div}
							style={captionProps}
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

						<Box component={animated.div} style={titleProps}>
							<Typography
								variant="h1"
								fontSize={{xs: "2rem", sm: "2.8rem", md: "4.8rem"}}
								color="white"
								sx={{textTransform: "uppercase", fontWeight: 700}}
							>
								SHARE YOUR <br />
								LOVE FOR <br />
								<TypeAnimation sequence={[" BANGALORE", 2000, "PARATHA", 2000]} repeat={Infinity} />
							</Typography>
						</Box>

						{/* ------------------------------------------ */}

						<Box component={animated.div} style={buttonProps}>
							<Button
								sx={{
									backgroundColor: theme.palette.custom.paratha,
									borderRadius: 30,
									px: {xs: 2, md: 4},
									py: 1,
									color: "white",
									mt: {xs: 2, md: 4},
									fontSize: {xs: ".6rem", sm: ".8rem", md: "1rem"},
									fontWeight: 400,
									"&:hover": {
										backgroundColor: theme.palette.custom.paratha,
									},
									mr: 2,
								}}
								disableElevation
								// disableRipple
							>
								Own A Franchise
							</Button>
							<Button
								sx={{
									border: `3px solid ${theme.palette.custom.paratha}`,
									backgroundColor: "transparent",
									borderRadius: 30,
									px: {xs: 2, md: 4},
									py: 1,
									color: "white",
									mt: {xs: 2, md: 4},
									fontSize: {xs: ".6rem", sm: ".8rem", md: "1rem"},
									fontWeight: 400,
									"&:hover": {
										backgroundColor: "transparent",
									},
								}}
								disableElevation
								// disableRipple
							>
								Bulk order
							</Button>
						</Box>

						{/* ------------------------------------------ */}
					</Box>

					<Box sx={{position: "relative", zIndex: 20, [theme.breakpoints.down("md")]: {mt: 6}}}>
						<Box component={animated.div} style={heroImageProps}>
							<Box
								component={animated.img}
								src="/images/1.webp"
								alt="paratha_animation"
								sx={{
									height: {xs: 260, sm: 340, md: 420, lg: 580},
								}}
								style={{transform}}
								loading="lazy"
							/>
						</Box>

						<Box
							component={animated.div}
							style={banner1Props}
							sx={{
								position: "absolute",
								left: 130,
								top: -100,
								zIndex: -1,
								[theme.breakpoints.down("md")]: {
									left: 70,
									top: -30,
								},
							}}
						>
							<Box
								component="img"
								src="/images/banner_image_2.png"
								alt="paratha_animation"
								sx={{
									height: {xs: 180, sm: 220, md: 320, lg: 380},
								}}
								loading="lazy"
							/>
						</Box>

						<Box
							component={animated.div}
							style={banner2Props}
							sx={{
								position: "absolute",
								left: 0,
								bottom: -120,
								zIndex: -1,
								[theme.breakpoints.down("md")]: {
									bottom: -40,
								},
							}}
						>
							<Box
								component="img"
								src="/images/banner_image_3.png"
								alt="paratha_animation"
								sx={{
									height: {xs: 180, sm: 220, md: 320, lg: 380},
								}}
								loading="lazy"
							/>
						</Box>
					</Box>
				</Box>
			</Container>
		</Box>
	);
};

export default Hero;

//https://youtube.com/shorts/ITogH7lJTyE?feature=share
