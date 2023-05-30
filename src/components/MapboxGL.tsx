import {useEffect, useRef, useState} from "react";
import mapboxgl, {Map} from "mapbox-gl";
import {Box} from "@mui/material";

mapboxgl.accessToken =
	"pk.eyJ1Ijoic2VzaDEwMjIiLCJhIjoiY2xpYWE5aGs4MDFyYjNkbXRldWVtamozYSJ9.QYKM62CgV7gy0jFrgmQW3g";

const MapboxGL = () => {
	const mapContainer = useRef<HTMLDivElement | null>(null);
	const map = useRef<Map | null>(null);
	const [lng, setLng] = useState(77.6292);
	const [lat, setLat] = useState(12.9804);
	const [zoom, setZoom] = useState(10.5);

	useEffect(() => {
		if (map.current) return; // initialize map only once
		map.current = new mapboxgl.Map({
			container: mapContainer.current,
			style: "mapbox://styles/mapbox/streets-v12",
			center: [lng, lat],
			zoom: zoom,
		});
	}, [lng, lat, zoom]); // Add dependencies to re-initialize map when values change

	useEffect(() => {
		if (!map.current) return; // wait for map to initialize
		map.current.on("move", () => {
			setLng(map.current.getCenter().lng.toFixed(4));
			setLat(map.current.getCenter().lat.toFixed(4));
			setZoom(map.current.getZoom().toFixed(2));
		});
	});

	return (
		<Box sx={{position: "relative"}}>
			<Box
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
			</Box>

			<Box ref={mapContainer} sx={{height: "500px"}} />
		</Box>
	);
};

export default MapboxGL;
