export interface MenuPrice {
	type: string;
	rate: number;
	inch?: number;
}

export interface MenuItem {
	name: string;
	category: string;
	description: string;
	price: MenuPrice[];
	priority: number;
	categoryPriority?: number;
	isVeg?: boolean;
	genre: string;
}

export interface GroupedMenuData {
	[category: string]: MenuItem[];
}
