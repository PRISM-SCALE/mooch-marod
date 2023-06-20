import {useEffect, useState} from "react";
import {Box, useTheme} from "@mui/material";

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

const FKOutlets = () => {
	const theme = useTheme();
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

	return (
		<Box component="section" id="outlet_section" sx={{overflow: "hidden"}}>
			<Box
				sx={{
					display: "flex",
					height: "100vh",
					width: "100vw",
					maxHeight: 500,
					[theme.breakpoints.down("md")]: {
						flexDirection: "column-reverse",
						pl: 0,
					},
				}}
			>
				<Box
					sx={{
						overflow: "auto",
						width: "30%",

						[theme.breakpoints.down("lg")]: {
							width: "50%",
						},

						[theme.breakpoints.down("md")]: {
							width: "100%",
							maxHeight: 700,
						},
					}}
				>
					{stores.features.map((currentFeature, index) => {
						const {properties} = currentFeature;
						return (
							<LocationCard
								key={index}
								location={properties?.location}
								address={properties?.address}
								phone={properties?.phone}
								direction={properties?.direction}
								onClick={() => flyToStore(currentFeature)}
								time="11:30 am - 9:30 pm | Mon - Sun"
							/>
						);
					})}
				</Box>

				{/* ********************************************************** */}
				{/* Add a marker to the map for every store listing. */}
				{/* ********************************************************** */}
				<Box
					className="map-container mapboxgl-map"
					id="map"
					sx={{
						// overflow: "hidden",
						position: "relative",
					}}
				>
					{stores.features.map(({id}, index) => {
						return (
							<Box
								key={index}
								id={`marker-${id}`}
								sx={{
									border: "none",
									cursor: "pointer",
									height: 40,
									width: 40,
									backgroundImage: "url(/images/marker-1.webp)",
									backgroundPosition: "center",
									backgroundSize: "contain",
									backgroundRepeat: "no-repeat",
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

export default FKOutlets;
