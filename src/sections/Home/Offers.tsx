import {Box, Container, Grid, Typography} from "@mui/material";
import MailchimpSubscribe from "react-mailchimp-subscribe";

import {BANNER_HEIGHT} from "../../utils/common";
import OffersCarousel from "../../components/OffersCarousel";
import EmailSubscriptionForm from "../../components/EmailSubscriptionForm";
import {useResponsive} from "../../hooks/useResponsive";

const url = `${import.meta.env.VITE_MAILCHIMP_EMAIL_URL}`;

const Offers = () => {
	const {smallScreenAndUp} = useResponsive();

	return (
		<Box
			component="section"
			id="offers_section"
			py={{xs: "2rem", md: "4rem"}}
			// sx={{overflow: "hidden"}}
		>
			<Container maxWidth="xl">
				<Grid container spacing={2}>
					{smallScreenAndUp && (
						<Grid item xs={12}>
							<OffersCarousel />
						</Grid>
					)}

					<Grid item xs={12} md={6} lg={3}>
						<Box
							sx={{
								backgroundImage: `url(/images/2.webp)`,
								height: BANNER_HEIGHT,
								backgroundSize: "cover",
								backgroundRepeat: "no-repeat",
							}}
						></Box>
					</Grid>
					<Grid item xs={12} md={6} lg={3}>
						<Box
							sx={{
								backgroundImage: `url(/images/3.webp)`,
								height: BANNER_HEIGHT,
								backgroundSize: "cover",
								backgroundRepeat: "no-repeat",
							}}
						></Box>
					</Grid>

					<Grid item xs={12} lg={6}>
						<Box
							sx={{
								backgroundImage: `linear-gradient(to right bottom, rgba(11, 1, 18, 0.4), rgba(11, 1, 18, 0.7)), url(/images/food_banner.webp)`,
								height: {xs: "auto", md: BANNER_HEIGHT},
								backgroundSize: "cover",
								backgroundRepeat: "no-repeat",
								p: 4,
							}}
						>
							<Typography
								variant="h3"
								sx={{
									color: "#fff",
									pt: "1rem",
									pl: "1rem",
									fontWeight: 600,
									fontSize: {xs: "1.8rem", sm: "1.5rem", md: "2rem"},
								}}
							>
								Subscribe to get exclusive deals <br /> and Timely updates.
							</Typography>

							{/* Add Email form input */}
							<MailchimpSubscribe
								url={url}
								render={({subscribe, status, message}) => (
									<Box>
										<EmailSubscriptionForm
											status={status}
											message={message}
											onSubmitted={(formData) => subscribe(formData)}
										/>
									</Box>
								)}
							/>
						</Box>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default Offers;
