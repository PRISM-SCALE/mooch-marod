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
}

export interface MapFeaturesData {
	type: string;
	geometry: GeoData;
	properties: AddressData;
}

export interface MapData {
	type: string;
	features: MapFeaturesData[];
}
