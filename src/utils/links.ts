interface Image {
	title: string;
	imageUrl: string;
}

export const footerLinks = ["About", "Menu", "Blog", "Gallery", "Faq", "Contact"];

export const ROOT_LINK = "/";
export const HOME_LINK = "/home";
export const WA_LINK = "https://wa.link/nkuet6";

export const menuLinks = [
	{link: "/home", path: "home", icon: "majesticons:home"},
	{link: "/about", path: "about", icon: "icon-park-solid:english-mustache"},
	{link: "/menu", path: "menu", icon: "ic:round-restaurant-menu"},
	// {link: "/offers", path: "Offers", icon: "icon-park-outline:weixin-cards-offers"},
	{link: "/outlets", path: "outlets", icon: "mdi:locations"},
	{link: "/contact", path: "contact us", icon: "fluent:contact-card-24-filled"},
];

export const images: Image[] = [
	{
		title: "noodles",
		imageUrl: "/images/footer_1.png",
	},
	{
		title: "paratha",
		imageUrl: "/images/footer_2.png",
	},
	{
		title: "fires",
		imageUrl: "/images/footer_3.png",
	},
	{
		title: "sharbath",
		imageUrl: "/images/footer_4.png",
	},
	{
		title: "sizzler",
		imageUrl: "/images/footer_5.png",
	},
	{
		title: "curry",
		imageUrl: "/images/footer_6.png",
	},
	{
		title: "panner",
		imageUrl: "/images/footer_7.png",
	},
	{
		title: "lassi",
		imageUrl: "/images/footer_8.png",
	},
	{
		title: "chicken",
		imageUrl: "/images/footer_9.png",
	},
];
