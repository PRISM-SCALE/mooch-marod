import React, {useState} from "react";
import {TextField, Button, Box, useTheme} from "@mui/material";

interface ContactFormState {
	name: string;
	email: string;
	phone: string;
	message: string;
}

const ContactUsForm: React.FC = () => {
	const theme = useTheme();
	const [formData, setFormData] = useState<ContactFormState>({
		name: "",
		email: "",
		phone: "",
		message: "",
	});

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setFormData({
			...formData,
			[event.target.name]: event.target.value,
		});
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		// Add your logic to handle form submission here
		console.log(formData);
	};

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
				Send Message
			</Button>
		</Box>
	);
};

export default ContactUsForm;
