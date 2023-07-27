import {Box} from "@mui/material";
import {BANNER_HEIGHT} from "../../utils/common";

type Props = {
	image: string;
};

const OfferBanner = ({image}: Props) => {
	return (
		<Box
			sx={{
				backgroundImage: `url(${image})`,
				height: BANNER_HEIGHT,
				backgroundSize: "cover",
				backgroundPosition: "center",
				backgroundRepeat: "no-repeat",
				p: "2rem",
			}}
		/>
	);
};

export default OfferBanner;
