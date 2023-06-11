import {Box, Container, Typography, useTheme} from "@mui/material";
import ContactUsForm from "../../components/ContactUsForm";
import MailchimpSubscribe from "react-mailchimp-subscribe";

const url = `${import.meta.env.VITE_MAILCHIMP_CONTACT_URL}?u=${
	import.meta.env.VITE_MAILCHIMP_U
}&id=${import.meta.env.VITE_MAILCHIMP_ID}`;

const ContactUs = () => {
	const theme = useTheme();

	return (
		<Box component="section" py={{xs: "2rem", md: "4rem"}}>
			<Container maxWidth="xl">
				<Box
					sx={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
						flexDirection: {xs: "column", md: "row"},
					}}
				>
					<Box sx={{width: {xs: "100%", md: "50%"}}}>
						<Typography
							variant="caption"
							sx={{
								color: theme.palette.custom.achar,
								fontSize: {xs: "0.8rem"},
								textTransform: "uppercase",
							}}
						>
							HAVE QUESTIONS?
						</Typography>
						<Typography
							variant="h2"
							sx={{textTransform: "uppercase", fontSize: {xs: 26, md: 42}, fontWeight: 500}}
							gutterBottom
						>
							CALL US OR VISIT PLACE
						</Typography>

						<Typography variant="body1" sx={{fontSize: {xs: 14, md: 18}, my: 2}} gutterBottom>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
							incididunt ut labore et dolore.
						</Typography>

						{/* ---------------------------------------------------- */}

						<Box
							sx={{
								display: "grid",
								gridTemplateColumns: "1fr",
								// gap: 1,

								// margin: "0 auto",
								// maxWidth: "1000px",
								[theme.breakpoints.up("sm")]: {gridTemplateColumns: "1fr 1fr"},
								[theme.breakpoints.up("md")]: {gridTemplateColumns: "repeat(2, 1fr)"},
							}}
						>
							<AddressDetails
								title="TORRE ANNUNZIATA"
								address="1614 E. Bell Rd #104. Salerno, AZ 85022"
								phone="(989) 867-1010"
							/>

							<AddressDetails
								title="TORRE DEL GRECO"
								address="Vale Puglia 54 Torre Del Greco AZ 85022"
								phone="(989) 867-1010"
							/>

							<AddressDetails
								title="POSILLIPO"
								address="204 E. Pizzetta Tommaso Sorrento, AZ 85022"
								phone="(989) 867-1010"
							/>

							<AddressDetails
								title="NAPLES MERCATO"
								address="Corso Itali AA Naples, AZ 85022"
								phone="(989) 867-1010"
							/>
						</Box>
					</Box>

					<Box
						sx={{
							mt: 4,
							width: {xs: "100%", md: "45%"},
							[theme.breakpoints.down("md")]: {
								textAlign: "center",
							},
						}}
					>
						{/* ------------------------------------------------- */}
						{/* CONTACT FORM */}
						<Typography variant="h2" color={theme.palette.custom.paratha}>
							Ask us anything!
						</Typography>
						<MailchimpSubscribe
							url={url}
							render={({subscribe, status, message}) => (
								<ContactUsForm
									status={status}
									message={message}
									onSubmitted={(formData) => subscribe(formData)}
								/>
							)}
						/>

						{/* 
							https://gmail.us21.list-manage.com/subscribe/post
							u df01cb0e908fd7c2333212809
							id 1c0a3c998b
						*/}
					</Box>
				</Box>
			</Container>
		</Box>
	);
};

type Props = {
	title: string;
	address: string;
	phone: string;
};

const AddressDetails = ({title, address, phone}: Props) => {
	const theme = useTheme();
	return (
		<Box sx={{mr: 2, mb: 4}}>
			<Typography
				variant="h3"
				sx={{textTransform: "uppercase", fontWeight: 700, color: theme.palette.custom.paratha}}
				gutterBottom
			>
				{title}
			</Typography>
			<Typography variant="body1" color="#858585" gutterBottom>
				{address}
			</Typography>
			<Typography variant="body1" color="#858585" sx={{fontWeight: 500}} gutterBottom>
				{phone}
			</Typography>

			<Typography sx={{mt: 2}}>Open today from 10AM - 11PM</Typography>
		</Box>
	);
};

export default ContactUs;
