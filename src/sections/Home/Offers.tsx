import {useState} from "react";
import {Box, Button, Container, Grid, Typography, useTheme} from "@mui/material";
import {BANNER_HEIGHT} from "../../utils/common";
import OffersCarousel from "../../components/OffersCarousel";
import EmailSubscriptionForm from "../../components/EmailSubscriptionForm";

const Offers = () => {
	const theme = useTheme();
	const [email, setEmail] = useState("");

	const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(event.target.value);
	};

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		// Here you can add the logic to submit the email
		console.log(email);
		setEmail("");
	};
	return (
		<Box
			component="section"
			id="offers_section"
			py={{xs: "2rem", md: "4rem"}}
			// sx={{overflow: "hidden"}}
		>
			<Container maxWidth="xl">
				<Grid container spacing={2}>
					<Grid item xs={12}>
						<OffersCarousel />
					</Grid>

					<Grid item xs={12} md={6} lg={3}>
						<Box
							sx={{
								backgroundImage: `url(/images/offer_sq_temp_1.webp)`,
								height: BANNER_HEIGHT,
								backgroundSize: "cover",
								backgroundRepeat: "no-repeat",
							}}
						></Box>
					</Grid>
					<Grid item xs={12} md={6} lg={3}>
						<Box
							sx={{
								backgroundImage: `url(/images/offer_sq_temp_2.webp)`,
								height: BANNER_HEIGHT,
								backgroundSize: "cover",
								backgroundRepeat: "no-repeat",
							}}
						></Box>
					</Grid>

					<Grid item xs={12} lg={6}>
						<Box
							sx={{
								backgroundImage: `url(/images/offer_email_subs.jpeg)`,
								height: {xs: "auto", md: BANNER_HEIGHT},
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
								Subscribe to get exciting offers <br /> and exclusive events.
							</Typography>

							{/* Add Email form input */}
							<EmailSubscriptionForm
								email={email}
								handleEmailChange={handleEmailChange}
								handleSubmit={handleSubmit}
							/>
						</Box>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default Offers;
