import {Box, Container, Typography} from "@mui/material";
import {useTheme} from "@mui/material/styles";


const Team = () => {
	const theme = useTheme();

	return (
		<Box component="section" py={{xs: "2rem", md: "4rem"}}>
			<Container>
				<Box sx={{textAlign: "center", mb: 8}}>
					<Typography
						variant="caption"
						sx={{
							color: theme.palette.custom.achar,
							fontSize: {xs: "0.8rem"},
							textTransform: "uppercase",
						}}
					>
						team members
					</Typography>
					<Typography
						variant="h1"
						sx={{textTransform: "uppercase", fontSize: {xs: 26, md: 42}}}
						gutterBottom
					>
						Behind the taste
					</Typography>
				</Box>
			</Container>
		</Box>
	);
};

export default Team;
