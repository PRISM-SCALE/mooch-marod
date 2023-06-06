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

const Address = () => {
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
			style: "mapbox://styles/mapbox/outdoors-v12",
			center: [77.59041302396872, 12.980711036401607],
			zoom: 10,
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
				// addMarkers();
			});
		}
	});

	function addMarkers() {
		/* For each feature in the GeoJSON object above: */
		for (const marker of stores.features) {
			/* Create a div element for the marker. */
			const el = document.createElement("div");
			/* Assign a unique `id` to the marker. */
			el.id = `marker-${marker?.properties?.id}`;

			/* Assign the `marker` class to each marker for styling. */
			el.className = "marker";

			/**
			 * Create a marker using the div element
			 * defined above and add it to the map.
			 **/

			new mapboxgl.Marker(el, {offset: [0, -23]})
				.setLngLat(marker.geometry.coordinates as LngLatLike)
				.addTo(mapData as Map);

			/**
			 * Listen to the element and when it is clicked, do three things:
			 * 1. Fly to the point
			 * 2. Close all other popups and display popup for clicked store
			 * 3. Highlight listing in sidebar (and remove highlight for all other listings)
			 **/
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
	// function createPopUp(currentFeature: Feature<Point, GeoJsonProperties>) {
	// 	const popUps = document.getElementsByClassName("mapboxgl-popup");
	// 	if (popUps[0]) popUps[0].remove();
	// 	const popup = new mapboxgl.Popup({closeOnClick: false})
	// 		.setLngLat(currentFeature.geometry.coordinates as LngLatLike)
	// 		.setHTML(
	// 			`<h3>${currentFeature?.properties?.location}</h3><h4>${currentFeature?.properties?.address}</h4>`
	// 		)
	// 		.addTo(mapData as Map);
	// }

	return (
		<Box component="section" id="outlet_section">
			<Box
				sx={{
					minHeight: "120vh",
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
						width: "40%",
						height: "100%",
						top: "0",
						left: "0",
						overflow: "hidden",
					}}
				>
					{stores.features.map((currentFeature) => {
						const {properties, id} = currentFeature;
						return (
							<LocationCard
								key={id}
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
					sx={{position: "absolute", left: "40%", width: "60%", top: "0", bottom: "0"}}
				>
					{/* ********************************************************** */}
					{/* Add a marker to the map for every store listing. */}
					{/* ********************************************************** */}
					{stores.features.map(({geometry, id}) => {
						/**
						 * Create a marker using the div element
						 * defined above and add it to the map.
						 **/

						// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
						const el = document.getElementById(`marker-${id}`)!;
						new mapboxgl.Marker(el, {offset: [0, -23]})
							.setLngLat(geometry.coordinates as LngLatLike)
							.addTo(mapData as Map);

						return (
							<Box
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
					<MapboxGL stores={stores} />
				</Box>
			</Box>
		</Box>
	);
};

export default Address;
