import {Box} from "@mui/material";
import ContactUs from "../sections/Contact/ContactUs";
import PageHeader from "../sections/PageHeader";

const Contact = () => {
	return (
		<Box>
			<PageHeader tagline="connect" title="contact us" />
			<ContactUs />
		</Box>
	);
};

export default Contact;
