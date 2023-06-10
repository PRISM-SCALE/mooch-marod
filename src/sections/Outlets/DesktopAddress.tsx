import {useEffect, useState} from "react";
import {Box} from "@mui/material";

// MAPBOX
import mapboxgl, {LngLatLike, Map} from "mapbox-gl";
import {Point, Feature, GeoJsonProperties} from "geojson";

// COMPONENTS
import LocationCard from "../../components/Outlets/LocationCard";
import MapboxGL from "../../components/MapboxGL";

// MAP JSON DATA
import {features} from "../../_mock/locations.json";
import {MapData} from "../../types/map.types";

mapboxgl.accessToken =
	"pk.eyJ1Ijoic2VzaDEwMjIiLCJhIjoiY2xpYWE5aGs4MDFyYjNkbXRldWVtamozYSJ9.QYKM62CgV7gy0jFrgmQW3g";

const DesktopAddress = () => {
	const [mapData, setMap] = useState<Map | null>();
	const [pageIsMounted, setPageIsMounted] = useState(false);

	const stores: MapData = {
		type: "FeatureCollection",
		features: features as Feature<Point, GeoJsonProperties>[],
	};

	stores.features.forEach((store: GeoJsonProperties, i) => {
		if (store) {
			store.properties.id = i;
		}
	});

	useEffect(() => {
		setPageIsMounted(true);

		const newMap = new mapboxgl.Map({
			container: "map_container",
			style: "mapbox://styles/mapbox/streets-v12",
			center: [77.59041302396872, 12.980711036401607],
			zoom: 11,
			// scrollZoom: false
		});

		// Add zoom and rotation controls to the map.
		newMap.addControl(new mapboxgl.NavigationControl(), "top-left");
		setMap(newMap);

		return () => {
			newMap.remove();
		};
	}, []); // Add dependencies to re-initialize map when values change

	useEffect(() => {
		if (pageIsMounted && stores && mapData) {
			mapData.on("load", () => {
				mapData.addSource("places", {
					type: "geojson",
					data: stores,
				});

				// buildLocationList(stores.features);
				addMarkers();
			});
		}
	});

	/**
	 * Create a marker using the div element
	 * defined above and add it to the map.
	 **/
	function addMarkers() {
		for (const marker of stores.features) {
			// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
			const el = document.getElementById(`marker-${marker.id}`)!;
			new mapboxgl.Marker(el, {offset: [0, -23]})
				.setLngLat(marker.geometry.coordinates as LngLatLike)
				.addTo(mapData as Map);
		}
	}

	/**
	 * Use Mapbox GL JS's `flyTo` to move the camera smoothly
	 * a given center point.
	 **/
	function flyToStore(currentFeature: Feature<Point, GeoJsonProperties>) {
		mapData?.flyTo({
			center: currentFeature.geometry.coordinates as LngLatLike,
			zoom: 15,
		});
	}

	/**
	 * Create a Mapbox GL JS `Popup`.
	 **/
	// ! .setHTML(`<h3>${currentFeature?.properties?.location}</h3><h4>${currentFeature?.properties?.address}</h4>`)
	// function createPopUp(currentFeature: Feature<Point, GeoJsonProperties>) {
	// 	const popUps = document.getElementsByClassName("mapboxgl-popup");
	// 	if (popUps[0]) popUps[0].remove();
	// 	new mapboxgl.Popup({closeOnClick: false})
	// 		.setLngLat(currentFeature.geometry.coordinates as LngLatLike)
	// 		.addTo(mapData as Map);
	// }

	return (
		<Box component="section" id="outlet_section" sx={{}}>
			<Box
				sx={{
					minHeight: "155vh",
					flex: "1",
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					position: "relative",
				}}
			>
				<Box
					sx={{
						position: "absolute",
						width: {xs: "100%", lg: "40%"},
						height: "100%",
						top: "0",
						left: "0",
						overflow: "hidden",
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
								onClick={() => flyToStore(currentFeature)}
								time="11:30 am - 9:30 pm | Mon - Sun"
							/>
						);
					})}
				</Box>

				<Box
					className="map"
					id="map"
					sx={{
						position: "absolute",
						left: "40%",
						width: "60%",
						top: "0",
						bottom: "0",
					}}
				>
					{/* ********************************************************** */}
					{/* Add a marker to the map for every store listing. */}
					{/* ********************************************************** */}
					{stores.features.map(({id}, index) => {
						return (
							<Box
								key={index}
								id={`marker-${id}`}
								sx={{
									border: "none",
									cursor: "pointer",
									height: "56px",
									width: "56px",
									backgroundImage: "url(/images/marker.png)",
								}}
							/>
						);
					})}
					<MapboxGL />
				</Box>
			</Box>
		</Box>
	);
};

export default DesktopAddress;
