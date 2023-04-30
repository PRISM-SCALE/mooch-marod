import {Box, Container, Typography, useTheme} from "@mui/material";

const ParathaBanner = () => {
	const theme = useTheme();
	return (
		<Box
			component="section"
			id="banner_section"
			sx={{
				height: {xs: 340, md: 460},
				backgroundImage: `url(/images/preview_paratha_banner.jpeg)`,
				backgroundSize: "cover",
				backgroundRepeat: "no-repeat",
				display: "flex",
				alignItems: "flex-end",
			}}
		>
			<Container>
				<Box sx={{mb: 6}}>
					<Typography
						variant="h1"
						sx={{textTransform: "uppercase", fontSize: {xs: 26, md: 42}}}
						color={"white"}
						fontWeight={600}
						gutterBottom
					>
						paratha of the day
					</Typography>
					<Typography
						variant="body1"
						color={theme.palette.custom.butter}
						width={{xs: "100%", md: "40%"}}
					>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, asperiores.
					</Typography>
				</Box>
			</Container>
		</Box>
	);
};

export default ParathaBanner;
