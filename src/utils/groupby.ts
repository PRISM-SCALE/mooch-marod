type MenuCategory = "parathas" | "lassi" | "starters" | "food kasoot";

interface MenuItem {
	name: string;
	category: MenuCategory;
	description?: string;
	price: number;
}

interface MenuData {
	menuItems: MenuItem[];
}

interface GroupedMenuData {
	[category: string]: MenuItem[];
}

// Assuming `menuData` is the response from the JSON request
const menuData: MenuData = {
	menuItems: [
		{name: "Paratha 1", category: "parathas", price: 2.99},
		{name: "Paratha 2", category: "parathas", price: 3.99},
		{name: "Lassi 1", category: "lassi", price: 1.99},
		{name: "Lassi 2", category: "lassi", price: 2.99},
		{name: "Starter 1", category: "starters", description: "A delicious starter", price: 4.99},
		{name: "Starter 2", category: "starters", description: "Another tasty starter", price: 5.99},
		{name: "Food Kasoot 1", category: "food kasoot", description: "A spicy dish", price: 8.99},
		{name: "Food Kasoot 2", category: "food kasoot", description: "A flavorful dish", price: 9.99},
		{
			name: "Food Kasoot 3",
			category: "food kasoot",
			description: "A deliciously sweet and savory dish",
			price: 10.99,
		},
		{name: "Food Kasoot 4", category: "food kasoot", description: "A fiery dish", price: 7.99},
	],
};

// Group the menu items by category
const groupedMenuData: GroupedMenuData = {};
menuData.menuItems.forEach((menuItem) => {
	if (groupedMenuData[menuItem.category]) {
		groupedMenuData[menuItem.category].push(menuItem);
	} else {
		groupedMenuData[menuItem.category] = [menuItem];
	}
});

// Log the grouped menu data for testing
console.log(groupedMenuData);
