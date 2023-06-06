import {useEffect, useState} from "react";
import mapboxgl, {LngLatLike, Map} from "mapbox-gl";
import {Box} from "@mui/material";
import {MapData, MapFeaturesData} from "../types/map.types";
import {FeatureCollection, Point, GeoJsonObject, Feature, GeoJsonProperties} from "geojson";

type Props = {stores: MapData};

mapboxgl.accessToken =
	"pk.eyJ1Ijoic2VzaDEwMjIiLCJhIjoiY2xpYWE5aGs4MDFyYjNkbXRldWVtamozYSJ9.QYKM62CgV7gy0jFrgmQW3g";

const MapboxGL = ({stores}: Props) => {
	// const mapContainerRef = useRef<HTMLDivElement | null>(null);
	// const mapRef = useRef<Map | null>(null);
	const [map, setMap] = useState<Map | null>();
	const [pageIsMounted, setPageIsMounted] = useState(false);

	useEffect(() => {
		setPageIsMounted(true);

		const newMap = new mapboxgl.Map({
			container: "map_container",
			style: "mapbox://styles/mapbox/outdoors-v12",
			center: [77.59041302396872, 12.980711036401607],
			zoom: 12,
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
		if (pageIsMounted && stores && map) {
			map.on("load", () => {
				map.addSource("places", {
					type: "geojson",
					data: stores as FeatureCollection<Point, GeoJsonProperties>,
				});
				buildLocationList();
				addMarkers();
			});
		}
	});



	/**
	 * Add a listing for each store to the sidebar.
	 **/
	function buildLocationList() {
		for (const store of stores.features) {
			/* Add a new listing section to the sidebar. */
			const listings = document.getElementById("listings");
			const listing = listings.appendChild(document.createElement("div"));
			/* Assign a unique `id` to the listing. */
			listing.id = `listing-${store.properties.id}`;
			/* Assign the `item` class to each listing for styling. */
			listing.className = "item";

			/* Add the link to the individual listing created above. */
			const link = listing.appendChild(document.createElement("a"));
			link.href = "#";
			link.className = "title";
			link.id = `link-${store.properties.id}`;
			link.innerHTML = `${store.properties.address}`;

			/* Add details to the individual listing. */
			const details = listing.appendChild(document.createElement("div"));
			details.innerHTML = `${store.properties.city}`;
			if (store.properties.phone) {
				details.innerHTML += ` &middot; ${store.properties.phoneFormatted}`;
			}

			/**
			 * Listen to the element and when it is clicked, do four things:
			 * 1. Update the `currentFeature` to the store associated with the clicked link
			 * 2. Fly to the point
			 * 3. Close all other popups and display popup for clicked store
			 * 4. Highlight listing in sidebar (and remove highlight for all other listings)
			 **/
			link.addEventListener("click", function () {
				// for (const feature of stores.features) {
				// 	if (this.id === `link-${feature.properties.id}`) {
				// 		flyToStore(feature);
				// 		createPopUp(feature);
				// 	}
				// }
				const activeItem = document.getElementsByClassName("active");
				if (activeItem[0]) {
					activeItem[0].classList.remove("active");
				}

				this.parentNode.classList.add("active");
			});
		}
	}

	return <Box id="map_container" sx={{width: "100%", height: "100%"}} />;
};

export default MapboxGL;
