import {Box, Container, Typography, alpha, useTheme} from "@mui/material";

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
						justifyContent: isMediumScreen !== isSmallScreen ? "flex-start" : "space-between",
						gap: 6,
						py: 4,
					}}
				>
					<Box>
						<Box
							component={"img"}
							src={logo_with_tag}
							alt="logo"
							sx={{
								width: {xs: 120, md: 200},
								height: {xs: 120, md: 200},
							}}
						/>
					</Box>

					<Box>
						<Typography
							variant="h3"
							fontWeight={400}
							sx={{color: theme.palette.custom.paratha, textTransform: "uppercase", mb: 2}}
						>
							Working Hours
						</Typography>
						<Typography sx={{color: "#fff"}}>
							Monday - Friday <br /> 10.00 AM - 11.00 PM
						</Typography>
					</Box>

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
								55 main Street, New York
							</Typography>
						</Box>

						<Box sx={{mb: 2}}>
							<Typography variant="caption" sx={{color: theme.palette.custom.butter}}>
								Email Address
							</Typography>
							<Typography variant="body1" color={"#fff"}>
								testing@test.com
							</Typography>
						</Box>

						<Box sx={{mb: 2}}>
							<Typography variant="caption" sx={{color: theme.palette.custom.butter}}>
								Phone Number
							</Typography>
							<Typography variant="body1" color={"#fff"}>
								+91 (808) 643 9045
							</Typography>
						</Box>
					</Box>

					{/* FOOTER GALLERY */}
					{mediumScreenAndUp ? (
						<Box>
							<FooterGallery />
						</Box>
					) : null}
				</Box>

				<Box
					sx={{
						display: "flex",
						alignItems: "center",
						justifyContent: {xs: "center", md: "space-between"},
						flexDirection: {xs: "column-reverse", md: "row"},

						pt: 2,
						borderTop: `1px solid ${alpha(theme.palette.custom.butter, 0.2)}`,
					}}
				>
					<Box
						sx={{
							display: "flex",
							alignItems: "center",
							justifyContent: "space-between",
						}}
					>
						<Typography sx={{color: theme.palette.custom.butter, fontSize: ".8rem"}}>
							Copyright © 2023 PRISMSCALE. All Right Reserved
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
