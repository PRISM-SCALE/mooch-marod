import {Box, Button, Container, Grid, Typography, useTheme} from "@mui/material";

const Offers = () => {
	const theme = useTheme();
	return (
		<Box
			component="section"
			id="offers_section"
			py={{xs: "2rem", md: "4rem"}}
			// sx={{overflow: "hidden"}}
		>
			<Container>
				<Grid container spacing={2}>
					<Grid item xs={12}>
						<Box
							sx={{
								backgroundImage: `url(/images/offers_banner.webp)`,
								height: 280,
								backgroundSize: "cover",
								backgroundRepeat: "no-repeat",
								p: "2rem",
							}}
						/>
					</Grid>

					<Grid item xs={12} md={6} lg={3}>
						<Box
							sx={{
								backgroundImage: `url(/images/offer_sq_temp_1.webp)`,
								height: 280,
								backgroundSize: "cover",
								backgroundRepeat: "no-repeat",
							}}
						></Box>
					</Grid>
					<Grid item xs={12} md={6} lg={3}>
						<Box
							sx={{
								backgroundImage: `url(/images/offer_sq_temp_2.webp)`,
								height: 280,
								backgroundSize: "cover",
								backgroundRepeat: "no-repeat",
							}}
						></Box>
					</Grid>

					<Grid item xs={12} lg={6}>
						<Box
							sx={{
								backgroundImage: `url(/images/offer_email_subs.jpeg)`,
								height: {xs: "auto", md: 280},
								backgroundSize: "cover",
								backgroundRepeat: "no-repeat",
								p: 4,
							}}
						>
							<Typography
								variant="h3"
								sx={{
									color: "white",
									pt: "1rem",
									pl: "1rem",
									fontWeight: 600,
									fontSize: {xs: "1.8rem", sm: "1.5rem", md: "2rem"},
								}}
							>
								Find Mooch Marod <br /> location near
							</Typography>
							{/* Add Email form input */}
							<Box
								component="form"
								sx={{
									"& > :not(style)": {m: 1, width: "25ch"},
									pt: "1rem",
									pl: "1rem",
									pr: "1rem",
									display: "flex",
									alignItems: "center",
									flexDirection: {xs: "column", md: "row"},
								}}
								autoComplete="off"
							>
								<Box
									component="input"
									type="email"
									name="email"
									id="email"
									placeholder="Email"
									sx={{
										padding: "1rem 0.5rem",
										outline: "none",
										border: "2px solid #000",
										borderRadius: 1,
										width: {xs: "100%!important", md: "50%!important"},
										margin: "0!important",
									}}
								/>
								<Button
									variant="contained"
									sx={{
										py: "0.7rem",
										backgroundColor: theme.palette.custom.paratha,
										"&:hover": {
											backgroundColor: theme.palette.custom.paratha,
										},
										width: {xs: "40%!important", md: "30%!important"},
									}}
									disableRipple
									disableElevation
								>
									Subscribe
								</Button>
							</Box>
						</Box>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default Offers;
