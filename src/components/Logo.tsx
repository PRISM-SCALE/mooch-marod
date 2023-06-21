import {Box, styled} from "@mui/material";

type Props = {
	width?: number | {xs: number; md: number};
	height?: number | {xs: number; md: number};
	logo: string;
};

const ImageWrapper = styled(Box)(({theme}) => ({
	// width: "100px",
	// maxWidth: "80px",
	// overflow: "hidden",
	// display: "inline-block",
	paddingLeft: "80px",
	[theme.breakpoints.down("md")]: {
		paddingLeft: 0,
	},

	[theme.breakpoints.down("sm")]: {
		// width: "70px",
		// maxWidth: "70px",
		margin: 0,
	},
}));

const Image = styled("img")(({theme}) => ({
	height: "auto",
	objectFit: "contain",

	[theme.breakpoints.down("sm")]: {
		// width: "70px",
	},
	transition: "all .3s ease-out",
	paddingTop: "10px",
}));

const Logo = ({width, height, logo}: Props) => {
	return (
		<ImageWrapper>
			<Image src={logo} alt="logo" loading="lazy" sx={{width: width, height: height}} />
		</ImageWrapper>
	);
};

export default Logo;
