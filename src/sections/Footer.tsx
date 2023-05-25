import {Box, Container, Typography, alpha} from "@mui/material";
import logo_white from "/icons/logo_notag_white.svg";
import {Link} from "react-router-dom";
import {footerLinks} from "../utils/links";
import FooterGallery from "../components/FooterGallery";
import {useResponsive} from "../hooks/useResponsive";
import SocialIcons from "../components/SocialIcons";

interface Styles {
	[key: string]: string | number | object;
}

const styles: Styles = {
	mt: 2,
	color: "#aaa",
	mx: "auto",
};

const Footer = () => {
	const {isMediumScreen, isSmallScreen} = useResponsive();
	return (
		<Box
			component="footer"
			id="footer_section"
			sx={{
				py: {xs: "2rem", md: "4rem"},
				// backgroundImage: `url(/images/footer_image.png)`,
				// backgroundSize: "cover",
				// backgroundRepeat: "no-repeat",
				background: "#222",
			}}
		>
			<Container>
				<Box textAlign={"center"}>
					<img src={logo_white} alt="logo" width={120} height={120} />
				</Box>

				<Box
					sx={{
						display: "flex",
						flexWrap: isMediumScreen !== isSmallScreen ? "wrap" : "nowrap",
						alignItems: "center",
						justifyContent: isMediumScreen !== isSmallScreen ? "center" : "space-between",
						gap: 6,
						p: isMediumScreen !== isSmallScreen ? 2 : 6,
					}}
				>
					<Box sx={{textAlign: "center"}}>
						<Typography variant="h3" fontWeight={400} sx={{color: "#fff"}}>
							Address
						</Typography>
						<Typography sx={styles}>
							570 8th Ave, New York,
							<br /> NY 10018 United States
						</Typography>
					</Box>

					<Box sx={{textAlign: "center"}}>
						<Typography variant="h3" fontWeight={400} sx={{color: "#fff"}}>
							Opening hours
						</Typography>
						<Typography sx={styles}>
							Monday - Friday <br /> 10.00 AM - 11.00 PM
						</Typography>
					</Box>

					{/* FOOTER GALLERY */}
					<Box>
						<FooterGallery />
					</Box>
				</Box>

				<Box
					sx={{
						display: "flex",
						alignItems: "center",
						justifyContent: {xs: "center", md: "space-between"},
						flexDirection: { xs: "column", md: "row" },
						
						mb: 6,
						pt: 4,
						borderTop: `1px solid ${alpha("#aaa", 0.4)}`,
					}}
				>
					<Box
						sx={{
							display: "flex",
							alignItems: "center",
							justifyContent: "space-between",
							width: {xs: "100%", sm: "40%"},
						}}
					>
						{footerLinks.map((item, index) => (
							<Box
								key={index}
								component={Link}
								to={`/${item.toLowerCase()}`}
								sx={{
									color: "#aaa",
									textDecoration: "none",
									fontSize: ".8rem",
									transition: ".5s ease-out",
									my: 2,
									"&:hover": {
										color: "white",
									},
								}}
							>
								{item}
							</Box>
						))}
					</Box>

					<Box sx={{color: "#aaa", fontSize: ".8rem"}}>
						<SocialIcons
							width={40}
							height={40}
							size={30}
							justifyContent={"center"}
							sx={{marginY: 2}}
						/>
					</Box>
				</Box>

				<Box sx={{textAlign: "center"}}>
					<Typography sx={{color: "#aaa", fontSize: ".8rem"}}>
						Copyright © 2023 PRISMSCALE. All Right Reserved
					</Typography>
				</Box>
			</Container>
		</Box>
	);
};

export default Footer;
