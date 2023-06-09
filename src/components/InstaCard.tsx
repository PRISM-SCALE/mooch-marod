import {Box, useTheme} from "@mui/material";
import Iconify from "./Iconify";

type Props = {
	image: string;
};

const InstaCard = ({image}: Props) => {
	const theme = useTheme();
	return (
		<Box
			sx={{
				backgroundImage: `url(${image})`,
				backgroundSize: "cover",
				backgroundPosition: "center",
				width: 200,
				height: 200,

				// margin: {xs: "1rem", md: "2rem"},
				// "& > *:not(:last-child)": {},
				cursor: "pointer",
			}}
		>
			<Box
				className="insta-icon"
				sx={{
					width: "100%",
					maxWidth: "100%",
					// backgroundColor: "red",
					height: "100%",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					backgroundColor: "transparent",
					transition: theme.transitions.create(["background-color", "opacity"], {
						duration: 700,
					}),
					overflow: "hidden",

					"&:hover": {
						backgroundColor: theme.palette.custom.butter,
						opacity: 1,
					},

					"&:hover svg": {
						opacity: 1,
					},

					"& svg": {
						transition: theme.transitions.create("opacity", {
							duration: 700,
						}),
						opacity: 0,
					},
				}}
			>
				<Iconify icon={"fe:instagram"} size={38} color="#000" />
			</Box>
		</Box>
	);
};

export default InstaCard;
