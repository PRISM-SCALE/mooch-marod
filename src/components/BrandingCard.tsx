import {Box} from "@mui/material";
import {Link} from "react-router-dom";

type Props = {
	logo: string;
	background: string;
	alt: string;
	path: string;
	sx?: object;
};

const BrandingCard = ({logo, background, alt, path, sx}: Props) => {
	return (
		<Box
			component={Link}
			to={path}
			sx={{
				background: background,
				mixBlendMode: "multiply",
				display: "grid",
				placeContent: "center",
				height: "100vh",
				...sx,
			}}
		>
			<img
				src={logo}
				alt={alt}
				style={{
					filter: "drop-shadow(30px 30px 20px rgba(0, 0, 0, 0.15))",
					width: 400,
					height: 400,
				}}
			/>
		</Box>
	);
};

export default BrandingCard;

// linear-gradient(359.53deg, #000000 0.43%, #242424 53.13%, #000000 96.53%)
// linear-gradient(359.53deg, #D93423 0.43%, #F15443 53.13%, #D93423 96.53%)
