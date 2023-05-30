import {Box, Container} from "@mui/material";
import OfferCard from "../../components/Offers/OfferCard";

const DiscountOffers = () => {
	return (
		<Box component="section" id="offers_section" py={{xs: "2rem", md: "4rem"}}>
			<Container>
				<Box
					sx={{
						display: "grid",
						gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
						gridGap: "20px",
					}}
				>
					<OfferCard
						details={{line1: "Reason for line 1", line2: "reason for line 2"}}
						img="/images/juice.png"
						off={25}
						size={150}
						title="Offer Title"
					/>

					<OfferCard
						details={{line1: "Reason for line 1", line2: "reason for line 2"}}
						img="/images/juice.png"
						off={25}
						size={150}
						title="Offer Title"
					/>
				</Box>
			</Container>
		</Box>
	);
};

export default DiscountOffers;
