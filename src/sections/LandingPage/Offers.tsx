import {Box, Container, Grid, Typography} from "@mui/material";

const Offers = () => {
	return (
		<Box component="section" id="offers_section" py={{xs: "2rem", md: "4rem"}}>
			<Container>
				<Grid container spacing={2}>
					<Grid item xs={12}>
						<Box sx={{backgroundImage: `url(/images/offers_banner.png)`, height: 220}}>
							<Typography variant="h3" sx={{color: "white", pt: "1rem", pl: "1rem"}}>
								OFFERS
							</Typography>
						</Box>
					</Grid>

					<Grid item xs={3}>
						<Box sx={{backgroundImage: `url(/images/offer_sq_temp_1.png)`, height: 220}}></Box>
					</Grid>
					<Grid item xs={3}>
						<Box sx={{backgroundImage: `url(/images/offer_sq_temp_2.png)`, height: 220}}></Box>
					</Grid>
					<Grid item xs={6}>
						<Box sx={{backgroundImage: `url(/images/offers_banner.png)`, height: 220}}>
							<Typography variant="h5" sx={{color: "white", pt: "1rem", pl: "1rem"}}>
								Find Mooch Marod <br /> location near
							</Typography>
							{/* Add Email form input */}
						</Box>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default Offers;
