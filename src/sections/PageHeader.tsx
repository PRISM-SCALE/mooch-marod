import {Box, Container, Typography, useTheme} from "@mui/material";

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
				background: theme.palette.custom.achar,
				height: "40vh",
				width: "100%",
				display: "flex",
				justifyContent: "center",
				flexDirection: "column",
				overflow: "hidden",
			}}
		>
			<Container>
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
