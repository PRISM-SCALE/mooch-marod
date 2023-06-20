import {Box, useTheme} from "@mui/material";
import {images} from "../utils/links";

const FooterGallery = () => {
	const theme = useTheme();
	return (
		<Box
			sx={{
				display: "grid",
				gridTemplateColumns: "repeat(3, 1fr)",
				// gridGap: "10px",

				// [theme.breakpoints.between("sm", "md")]: {
				// 	gridTemplateColumns: "repeat(2, 1fr)",
				// },

				[theme.breakpoints.down("md")]: {
					gridTemplateColumns: "repeat(4, 1fr)",
				},
			}}
		>
			{images.map(({imageUrl, title}, index) => (
				<Box
					sx={{
						width: 100,
						height: 100,
						position: "relative",
						overflow: "hidden",

						"& > img:hover": {
							transition: "all 5s ease-out",

							transform: "scale(1.2)",
						},
					}}
					key={index}
				>
					<img
						src={imageUrl}
						alt={title}
						style={{
							width: "100%",
							height: "100%",
							// maxWidth: "100%",
							// height: "auto",
							// borderRadius: 6,
							objectFit: "cover",
							cursor: "pointer",
						}}
						loading="lazy"
					/>
				</Box>
			))}
		</Box>
	);
};

export default FooterGallery;
