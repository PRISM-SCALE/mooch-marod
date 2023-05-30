import {Box} from "@mui/material";
import PageHeader from "../sections/PageHeader";
import Address from "../sections/Outlets/Address";

const Outlets = () => {
	return (
		<Box>
			<PageHeader tagline="Find Us" title="Outlets" />
			<Address />
		</Box>
	);
};

export default Outlets;
