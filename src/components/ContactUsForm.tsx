import {useState} from "react";
import {TextField, Button, Box, useTheme} from "@mui/material";
import {ContactFormState, initialFormData} from "../types/ContactForm.types";
// import {EmailFormFields} from "react-mailchimp-subscribe";

type Props = {
	status: "error" | "success" | "sending" | null;
	message: string | Error | null;
	onSubmitted: (data: any) => void;
};

const ContactUsForm = ({status, message, onSubmitted}: Props) => {
	const theme = useTheme();
	const [formData, setFormData] = useState<ContactFormState>(initialFormData);

	console.log(message)

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setFormData({
			...formData,
			[event.target.name]: event.target.value,
		});
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		// Add your logic to handle form submission here

		// Handle form submission here

		formData.name &&
			formData.email &&
			formData.phone &&
			formData.message &&
			formData.email.indexOf("@") > -1 &&
			onSubmitted({
				EMAIL: formData.email,
				MERGE1: formData.name,
				MERGE2: formData.message,
				MERGE4: formData.phone,
			});

		setFormData(initialFormData);
	};

	let buttonText: string;

	if (status === "sending") {
		buttonText = "Loading...";
	} else if (status === "success") {
		buttonText = "Thank you for Contacting us";
	} else {
		buttonText = "Send us";
	}

	return (
		<Box component="form" onSubmit={handleSubmit}>
			<TextField
				label="Name"
				name="name"
				value={formData.name}
				onChange={handleChange}
				fullWidth
				margin="normal"
				required
			/>
			<TextField
				label="Email"
				name="email"
				value={formData.email}
				onChange={handleChange}
				fullWidth
				margin="normal"
				required
			/>
			<TextField
				label="Phone"
				name="phone"
				value={formData.phone}
				onChange={handleChange}
				fullWidth
				margin="normal"
				required
			/>
			<TextField
				label="Message"
				name="message"
				value={formData.message}
				onChange={handleChange}
				fullWidth
				margin="normal"
				required
				multiline
				rows={4}
			/>
			<Button
				type="submit"
				variant="contained"
				sx={{
					backgroundColor: theme.palette.custom.achar,
					borderRadius: 30,
					px: {xs: 2, md: 4},
					py: 1,
					color: "white",
					mt: 2,
					fontSize: {xs: ".8rem", md: "1rem"},
					fontWeight: 400,
					textTransform: "none",
					"&:hover": {
						backgroundColor: theme.palette.custom.achar,
					},
					mr: 2,
				}}
				disableElevation
				disableRipple
			>
				{buttonText}
			</Button>
		</Box>
	);
};

export default ContactUsForm;
