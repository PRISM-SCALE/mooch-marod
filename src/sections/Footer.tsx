import {Box, Container, Link, Typography, alpha, useTheme} from "@mui/material";

import FooterGallery from "../components/FooterGallery";
import {useResponsive} from "../hooks/useResponsive";
import SocialIcons from "../components/SocialIcons";
import {logo_with_tag} from "../utils/common";

// interface Styles {
// 	[key: string]: string | number | object;
// }

const Footer = () => {
	const {isMediumScreen, isSmallScreen, mediumScreenAndUp} = useResponsive();
	const theme = useTheme();
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
				// background: theme.palette.custom.achar,
			}}
		>
			<Container maxWidth="xl">
				<Box
					sx={{
						display: "flex",
						flexWrap: isMediumScreen !== isSmallScreen ? "wrap" : "nowrap",
						justifyContent: "space-between",
						gap: 2,
						py: 4,
					}}
				>
					{/* LOGO */}
					<Box>
						<Box
							component={"img"}
							src={logo_with_tag}
							alt="logo"
							sx={{
								width: {xs: 120, md: 180},
								height: {xs: 120, md: 180},
							}}
						/>
					</Box>

					{/* WORK HOURS */}
					<Box sx={{}}>
						<Typography
							variant="h3"
							fontWeight={400}
							sx={{color: theme.palette.custom.paratha, textTransform: "uppercase", mb: 2}}
						>
							Working Hours
						</Typography>
						<Typography sx={{color: "#fff"}}>
							Monday - Sunday <br />
							<strong style={{color: theme.palette.custom.paratha}}>11:30 - 16:30</strong> and{" "}
							<strong style={{color: theme.palette.custom.paratha}}>18:30 - 23:30</strong>
						</Typography>
					</Box>

					{/* CONTACT US */}
					<Box>
						<Typography
							variant="h3"
							fontWeight={400}
							sx={{color: theme.palette.custom.paratha, textTransform: "uppercase", mb: 2}}
						>
							Contact us
						</Typography>

						<Box sx={{mb: 2}}>
							<Typography variant="caption" sx={{color: theme.palette.custom.butter}}>
								Location:
							</Typography>
							<Typography variant="body1" color={"#fff"}>
								Mooch Marod, Prasanthi Complex,
								<br />
								Channasandra Main Rd, Whitefield,
								<br />
								Bengaluru, Karnataka 560067
							</Typography>
						</Box>

						<Box sx={{mb: 2}}>
							<Typography variant="caption" sx={{color: theme.palette.custom.butter}}>
								Email Address
							</Typography>
							<Typography variant="body1" color={"#fff"}>
								<Link
									href="mailto:hello@moochmarod.com"
									sx={{cursor: "pointer", textDecoration: "none", color: "#fff"}}
								>
									hello@moochmarod.com
								</Link>
							</Typography>
						</Box>

						<Box sx={{mb: 2}}>
							<Typography variant="caption" sx={{color: theme.palette.custom.butter}}>
								Phone Number
							</Typography>
							<Typography variant="body1" color={"#fff"}>
								<Link
									href="tel:+91 88844 88690"
									sx={{cursor: "pointer", textDecoration: "none", color: "#fff"}}
								>
									+91 (888) 448 8690
								</Link>
							</Typography>
						</Box>
					</Box>

					{/* FOOTER GALLERY */}
					{mediumScreenAndUp ? <FooterGallery /> : null}
				</Box>

				<Box
					sx={{
						display: "flex",
						alignItems: "center",
						justifyContent: {xs: "center", md: "space-between"},
						flexDirection: {xs: "column-reverse", md: "row"},

						pt: 2,
						pb: 8,
						borderTop: `1px solid ${alpha(theme.palette.custom.butter, 0.2)}`,
					}}
				>
					<Box
						sx={{
							display: "flex",
							alignItems: "center",
							justifyContent: "space-between",

							[theme.breakpoints.down("sm")]: {
								textAlign: "center",
							},
						}}
					>
						<Typography sx={{color: theme.palette.custom.butter, fontSize: ".8rem"}}>
							Copyright 2023 Mooch Marod. All Right Reserved. | Designed By PrismScale Private
							Limited
						</Typography>
					</Box>

					<Box>
						<SocialIcons
							width={40}
							height={40}
							size={30}
							justifyContent={"center"}
							sx={{marginY: 2}}
						/>
					</Box>
				</Box>
			</Container>
		</Box>
	);
};

export default Footer;
