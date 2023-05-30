import {Box} from "@mui/material";
import LocationCard from "../../components/Outlets/LocationCard";
import MapboxGL from "../../components/MapboxGL";

const Address = () => {
	return (
		<Box
			component="section"
			id="outlet_section"
			// py={{xs: "2rem", md: "4rem"}}
			// sx={{display: "flex", alignItems: "center"}}
		>
			<Box>
				<MapboxGL />
			</Box>
			<Box
				py={{xs: "2rem", md: "4rem"}}
				sx={{
					display: "grid",
					gridTemplateColumns: "repeat(auto-fit, minmax(600px, 1fr))",
					gridGap: "20px",
				}}
			>
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
		</Box>
	);
};

export default Address;
