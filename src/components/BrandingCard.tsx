import {Box, useTheme} from "@mui/material";
import {Link} from "react-router-dom";

type Props = {
	logo: string;
	background: string;
	alt: string;
	path: string;
	sx?: object;
};

const BrandingCard = ({logo, background, alt, path, sx}: Props) => {
	const theme = useTheme();
	return (
		<Box
			component={Link}
			to={path}
			sx={{
				background: background,
				mixBlendMode: "multiply",
				display: "grid",
				placeContent: "center",
				height: {xs: "50vh", md: "100vh"},
				...sx,
			}}
		>
			<Box
				component={"img"}
				src={logo}
				alt={alt}
				sx={{
					filter: "drop-shadow(30px 30px 20px rgba(0, 0, 0, 0.15))",
					width: 350,
					height: 350,

					[theme.breakpoints.down("md")]: {
						width: 200,
						height: 200,
					},
				}}
			/>
		</Box>
	);
};

export default BrandingCard;

// linear-gradient(359.53deg, #000000 0.43%, #242424 53.13%, #000000 96.53%)
// linear-gradient(359.53deg, #D93423 0.43%, #F15443 53.13%, #D93423 96.53%)
