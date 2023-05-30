import {Box} from "@mui/material";
import PageHeader from "../sections/PageHeader";
import DiscountOffers from "../sections/Offers/DiscountOffers";

const Offers = () => {
	return (
		<Box>
			<PageHeader title="Offers" tagline="lucky for you" />
			<DiscountOffers />
		</Box>
	);
};

export default Offers;
