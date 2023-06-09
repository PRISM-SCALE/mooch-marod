import {Box, Container, Typography} from "@mui/material";
import {useTheme} from "@mui/material/styles";
import ChefCard from "../../components/About/ChefCard";

const Team = () => {
	const theme = useTheme();

	return (
		<Box component="section" py={{xs: "2rem", md: "4rem"}}>
			<Container maxWidth="xl">
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

				<Box
					sx={{
						display: "grid",
						gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
						gridGap: "20px",
					}}
				>
					<ChefCard chefName="Sofia Richie" chefTitle="Chef" src="/images/chef1.png" />
					<ChefCard chefName="Emilia Clarke" chefTitle="Assistant Chef" src="/images/chef2.png" />
					<ChefCard chefName="Harvey Dent" chefTitle="Chef" src="/images/chef3.png" />
					<ChefCard chefName="Sam Claflin" chefTitle="Assistant Chef" src="/images/chef4.png" />
				</Box>
			</Container>
		</Box>
	);
};

export default Team;
