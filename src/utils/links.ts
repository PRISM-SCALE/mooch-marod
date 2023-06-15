interface Image {
	title: string;
	imageUrl: string;
}

export const footerLinks = ["About", "Menu", "Blog", "Gallery", "Faq", "Contact"];

export const ROOT_LINK = "/";
export const HOME_LINK = "/home";

export const menuLinks = [
	{link: "/home", path: "Home", icon: "majesticons:home"},
	{link: "/about", path: "About", icon: "icon-park-solid:english-mustache"},
	{link: "/menu", path: "Menu", icon: "ic:round-restaurant-menu"},
	{link: "/offers", path: "Offers", icon: "icon-park-outline:weixin-cards-offers"},
	{link: "/outlets", path: "Outlets", icon: "mdi:locations"},
	{link: "/contact", path: "Contact", icon: "fluent:contact-card-24-filled"},
];

export const footerImageUrl = [
	"https://images.unsplash.com/photo-1552611052-33e04de081de",
	"https://images.unsplash.com/photo-1550547660-d9450f859349",
	"https://images.unsplash.com/photo-1598214886806-c87b84b7078b",
	"https://images.unsplash.com/photo-1568716508386-cda5cdec6827",
	"https://images.unsplash.com/photo-1619592982904-ef0a0da5b7e6",
	"https://images.unsplash.com/photo-1579065472192-c3f98f86b6c6",
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
