// import {menu} from "../_mock/menu.json";

import {GroupedMenuData, MenuItem} from "../types/Menu.types";

// Group the menu items by category
export const groupCategory = (menu: MenuItem[]): GroupedMenuData => {
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

// Group the menu items by Genre
export const groupGenre = (menu: MenuItem[]): GroupedMenuData => {
	const menuData: MenuItem[] = menu;

	const groupedMenuData: GroupedMenuData = {};

	menuData.forEach((menuItem) => {
		if (menuItem.genre !== undefined && menuItem.genre !== null) {
			if (groupedMenuData[menuItem.genre]) {
				groupedMenuData[menuItem.genre].push(menuItem);
			} else {
				groupedMenuData[menuItem.genre] = [menuItem];
			}
		}
	});

	// Log the grouped menu data for testing
	return groupedMenuData;
};
