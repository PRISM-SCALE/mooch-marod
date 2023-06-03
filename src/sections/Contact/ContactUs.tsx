import {useState} from "react";
import {Box, Container, Typography, useTheme} from "@mui/material";
import ContactUsForm from "../../components/ContactUsForm";
import {ContactFormState, initialFormData} from "../../types/ContactForm";

const ContactUs = () => {
	const theme = useTheme();
	const [formData, setFormData] = useState<ContactFormState>(initialFormData);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setFormData({
			...formData,
			[event.target.name]: event.target.value,
		});
	};

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		// Add your logic to handle form submission here

		// Handle form submission here
		try {
			const response = await fetch("<YOUR_AZURE_FUNCTION_URL>", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});

			if (response.ok) {
				console.log("Form data sent successfully");
				// Reset the form
				setFormData(initialFormData);
			} else {
				console.error("Error occurred while sending form data");
			}
		} catch (error) {
			console.error("An error occurred:", error);
		}
		console.log(formData);
	};
	return (
		<Box component="section" py={{xs: "2rem", md: "4rem"}}>
			<Container>
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
						<ContactUsForm
							formData={formData}
							handleChange={handleChange}
							handleSubmit={handleSubmit}
						/>
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
