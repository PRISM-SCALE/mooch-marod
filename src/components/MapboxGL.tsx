import {useEffect, useState} from "react";
import mapboxgl, {Map} from "mapbox-gl";
import {Box} from "@mui/material";
import {MapData} from "../types/map.types";

type Props = {stores: MapData};

mapboxgl.accessToken =
	"pk.eyJ1Ijoic2VzaDEwMjIiLCJhIjoiY2xpYWE5aGs4MDFyYjNkbXRldWVtamozYSJ9.QYKM62CgV7gy0jFrgmQW3g";

const MapboxGL = ({stores}: Props) => {
	const [map, setMap] = useState<Map>();
	const [pageIsMounted, setPageIsMounted] = useState(false);

	useEffect(() => {
		setPageIsMounted(true);
		const newMap = new mapboxgl.Map({
			container: "map",
			style: "mapbox://styles/mapbox/light-v10",
			center: [12.980711036401607, 77.59041302396872],
			zoom: 12.5,
			// scrollZoom: false
		});

		// Add zoom and rotation controls to the map.
		newMap.addControl(new mapboxgl.NavigationControl(), "top-right");
		setMap(newMap);

		return () => {
			newMap.remove();
		};
	}, []); // Add dependencies to re-initialize map when values change

	useEffect(() => {
		if (pageIsMounted && stores) {
			map.on("load", () => {
				map.addSource("places", {
					type: "geojson",
					data: stores,
				});
				// buildLocationList(features);
				// addMarkers();
			});
		}
	});

	return (
		<Box className="map">
			{/* <Box
				sx={{
					backgroundColor: "rgba(35, 55, 75, 0.9)",
					color: "#fff",
					padding: "6px 12px",
					fontFamily: "monospace",
					zIndex: "1",
					position: "absolute",
					top: "0",
					left: "0",
					margin: "12px",
					borderRadius: "4px",
				}}
			>
				Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
			</Box> */}

			<Box sx={{height: "500px"}} />
		</Box>
	);
};

export default MapboxGL;
