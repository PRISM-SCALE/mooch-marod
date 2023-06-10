// import {menu} from "../_mock/menu.json";

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
	genre?: string;
}

export interface GroupedMenuData {
	[category: string]: MenuItem[];
}

// Group the menu items by category
export const groupData = (menu: MenuItem[]): GroupedMenuData => {
	const menuData: MenuItem[] = menu;

	const groupedMenuData: GroupedMenuData = {};

	menuData.forEach((menuItem) => {
		if (groupedMenuData[menuItem.category]) {
			groupedMenuData[menuItem.category].push(menuItem);
		} else {
			groupedMenuData[menuItem.category] = [menuItem];
		}
	});

	// Log the grouped menu data for testing
	return groupedMenuData;
};
