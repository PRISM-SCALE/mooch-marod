import {Box} from "@mui/material";

const Footer = () => {
	return (
		<Box
			component="section"
			id="footer_section"
			sx={{
				py: {xs: "2rem", md: "4rem"},
				backgroundImage: `url(/images/footer_image.png)`,
				backgroundSize: "cover",
				backgroundRepeat: "no-repeat",
			}}
		>
			<Box>{/* LOGO */}</Box>
		</Box>
	);
};

export default Footer;
