import {Point, Feature, GeoJsonProperties, FeatureCollection} from "geojson";

export interface GeoData {
	type: string;
	coordinates: number[];
}

export interface AddressData {
	phoneFormatted: string;
	phone: number;
	address: string;
	city: string;
	country: string;
	pincode: number;
	state: string;
	id?: number | string;
}

export interface MapFeaturesData {
	type: string;
	geometry: GeoData;
	properties: AddressData;
}

export interface MapData extends FeatureCollection<Point, GeoJsonProperties> {
	type: "FeatureCollection";
	features: Feature<Point, GeoJsonProperties>[];
}
