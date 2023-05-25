interface Image {
	title: string;
	imageUrl: string;
}

export const footerLinks = ["About", "Menu", "Blog", "Gallery", "Faq", "Contact"];

export const menuLinks = [
	{link: "/", path: "Home"},
	{link: "/about", path: "About"},
	{link: "/menu", path: "Menu"},
	{link: "/offers", path: "Offers"},
	{link: "/outlets", path: "Outlets"},
	{link: "/contact", path: "Contact"},
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
		title: "naan",
		imageUrl: "/images/footer_naan.jpg",
	},
	{
		title: "paratha",
		imageUrl: "/images/footer_paratha.jpg",
	},
	{
		title: "roti",
		imageUrl: "/images/footer_roti.jpg",
	},
	{
		title: "naan",
		imageUrl: "/images/footer_naan.jpg",
	},
	{
		title: "paratha",
		imageUrl: "/images/footer_paratha.jpg",
	},
	{
		title: "roti",
		imageUrl: "/images/footer_roti.jpg",
	},
];
