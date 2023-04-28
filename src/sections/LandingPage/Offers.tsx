import {Box, Container, Grid} from "@mui/material";

const Offers = () => {
	return (
		<Box component="section" id="offers_section" py={{xs: "2rem", md: "4rem"}}>
			<Container>
				<Grid container>
					<Grid item xs={12}>
            <Box sx={{ background: "#F1E1AA" }}>
              OFFERS
            </Box>
          </Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default Offers;
