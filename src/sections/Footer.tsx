import {Box} from "@mui/material";
import logo_white from "/icons/logo_notag_white.svg";

const Footer = () => {
	return (
		<Box
			component="section"
			id="footer_section"
			sx={{
				py: {xs: "2rem", md: "4rem"},
				// backgroundImage: `url(/images/footer_image.png)`,
				// backgroundSize: "cover",
				// backgroundRepeat: "no-repeat",
				background: "#222",
			}}
		>
			<Box textAlign={"center"}>
				<img src={logo_white} alt="logo" width={120} height={120} />
			</Box>
		</Box>
	);
};

export default Footer;
