import {Box, Container} from "@mui/material";
import LocationCard from "../../components/Outlets/LocationCard";

const Address = () => {
	return (
		<Box component="section" id="outlet_section" py={{xs: "2rem", md: "4rem"}}>
			<Container>
				<Box>{/* MAP */}</Box>
				<Box>
					<LocationCard
						location="Koramangala, Bangalore"
						address="466, 1st Floor, 17th G Main Rd, 6th Block, Koramangala, Bengaluru, Karnataka 560095"
						phone={9999999999}
						time="11:30 am - 9:30 pm | Mon - Sun"
					/>
					<LocationCard
						location="Koramangala, Bangalore"
						address="466, 1st Floor, 17th G Main Rd, 6th Block, Koramangala, Bengaluru, Karnataka 560095"
						phone={9999999999}
						time="11:30 am - 9:30 pm | Mon - Sun"
					/>
				</Box>
			</Container>
		</Box>
	);
};

export default Address;
