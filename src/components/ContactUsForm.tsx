import {TextField, Button, Box, useTheme} from "@mui/material";
import {ContactFormState} from "../types/ContactForm.types";

type Props = {
	formData: ContactFormState;
	handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	handleSubmit: (event: React.FormEvent<HTMLFormElement>) => Promise<void>;
};

const ContactUsForm = ({formData, handleChange, handleSubmit}: Props) => {
	const theme = useTheme();

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
