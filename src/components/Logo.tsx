import {Box, styled} from "@mui/material";
import logo from "/icons/logo_notag_white.svg";

const ImageWrapper = styled(Box)(({theme}) => ({
	width: "80px",
	maxWidth: "80px",
	overflow: "hidden",
	display: "inline-block",
	// margin: "0 1rem",
	[theme.breakpoints.down("sm")]: {
		width: "70px",
		maxWidth: "70px",
	},
}));
const Image = styled("img")(({theme}) => ({
	height: "auto",
	width: "80px",
	objectFit: "cover",
	[theme.breakpoints.down("sm")]: {
		width: "70px",
	},
}));

const Logo = () => {
	return (
		<ImageWrapper>
			<Image src={logo} alt="logo" loading="lazy" />
		</ImageWrapper>
	);
};

export default Logo;
