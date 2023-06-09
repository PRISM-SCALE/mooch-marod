import {Box, styled} from "@mui/material";
import logo from "/icons/logo_notag_white.svg";

type Props = {
	width?: number | {xs: number; md: number};
	height?: number | {xs: number; md: number};
};

const ImageWrapper = styled(Box)(({theme}) => ({
	width: "100px",
	// maxWidth: "80px",
	// overflow: "hidden",
	display: "inline-block",
	margin: "0 1rem",
	[theme.breakpoints.down("sm")]: {
		width: "70px",
		maxWidth: "70px",
		margin: 0,
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

const Logo = ({width, height}: Props) => {
	return (
		<ImageWrapper>
			<Image src={logo} alt="logo" loading="lazy" sx={{width: width, height: height}} />
		</ImageWrapper>
	);
};

export default Logo;
