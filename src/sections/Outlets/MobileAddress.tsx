import {Box, Container, useTheme} from "@mui/material";

// MAPBOX
import {Point, Feature, GeoJsonProperties} from "geojson";

// MAP JSON DATA
import {features} from "../../_mock/locations.json";
import {MapData} from "../../types/map.types";

// COMPONENTS
import LocationCard from "../../components/Outlets/LocationCard";

const MobileAddress = () => {
	const theme = useTheme();
	const stores: MapData = {
		type: "FeatureCollection",
		features: features as Feature<Point, GeoJsonProperties>[],
	};

	stores.features.forEach((store: GeoJsonProperties, i) => {
		if (store) {
			store.properties.id = i;
		}
	});

	return (
		<Box component="section" id="outlet_section" sx={{py: {xs: "2rem", md: "4rem"}}}>
			<Container maxWidth="xl">
				<Box
					sx={{
						display: "grid",
						gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
						gap: "20px",

						[theme.breakpoints.down("sm")]: {
							gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
						},
					}}
				>
					{stores.features.map((currentFeature, index) => {
						const {properties, id} = currentFeature;
						return (
							<LocationCard
								key={index}
								location={properties?.location}
								address={properties?.address}
								phone={properties?.phone}
								// onClick={}
								time="11:30 am - 9:30 pm | Mon - Sun"
							/>
						);
					})}
				</Box>
			</Container>
		</Box>
	);
};

export default MobileAddress;
