import {Box} from "@mui/material";

// SECTIONS
import PageHeader from "../sections/PageHeader";
import FKOutlets from "../sections/Outlets/FKOutlets";

const Outlets = () => {
	return (
		<Box>
			<PageHeader tagline="Find Us" title="Outlets" />
			<FKOutlets />
		</Box>
	);
};

export default Outlets;
