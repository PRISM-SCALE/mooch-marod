import {Box, Container, Typography, useTheme} from "@mui/material";
import { mm_background } from "../utils/common";

type Props = {
	tagline: string;
	title: string;
};

const PageHeader = ({tagline, title}: Props) => {
	const theme = useTheme();
	return (
		<Box
			component={"section"}
			id="menu_header"
			sx={{
				background: mm_background,
				// backgroundImage: `url(/images/head_banner.png)`,
				backgroundPosition: "center center",
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover",
				height: "40vh",
				width: "100%",
				display: "flex",
				justifyContent: "center",
				flexDirection: "column",
				// overflow: "hidden",
				// position: "relative",
				// zIndex: -10,
			}}
		>
			{/* <img
				src="/images/jabardast_desi.png"
				alt="jabardast_desi"
				style={{
					height: 360,
					position: "absolute",
					top: "50%",
					left: "50%",
					transform: "translate(-50%, -50%) ",
					zIndex: -5,
					opacity: 0.25,
				}}
				loading="lazy"
			/> */}
			<Container maxWidth="xl">
				<Box
					sx={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						flexDirection: "column",
					}}
				>
					<Typography
						color={theme.palette.custom.paratha}
						fontWeight={600}
						fontSize={".8rem"}
						sx={{textTransform: "uppercase"}}
					>
						{tagline}
					</Typography>
					<Typography
						variant="h2"
						fontSize={{xs: "1.8rem", sm: "2.8rem", md: "3rem"}}
						color="white"
						sx={{textTransform: "uppercase"}}
					>
						{title}
					</Typography>
				</Box>
			</Container>
		</Box>
	);
};

export default PageHeader;
