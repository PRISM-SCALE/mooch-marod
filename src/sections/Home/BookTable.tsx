import {Box, Container, Typography, useTheme} from "@mui/material";
import ReservationForm from "../../components/ReservationForm";

const BookTable = () => {
	const theme = useTheme();
	return (
		<Box component={"section"} id={"reservation_section"} py={{xs: "2rem", md: "4rem"}}>
			<Container>
				<Box sx={{textAlign: "center", mb: 4}}>
					<Typography
						variant="caption"
						sx={{color: theme.palette.custom.achar, fontSize: {xs: "0.8rem"}}}
					>
						Reserve now
					</Typography>
					<Typography
						variant="h1"
						sx={{textTransform: "uppercase", fontSize: {xs: 26, md: 42}}}
						gutterBottom
					>
						Book your table
					</Typography>
					<Typography variant="body1" sx={{width: {xs: "100%", md: "50%"}, marginX: "auto"}}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit arcu in pretium
						molestie. Interdum et malesuada fames ac.
					</Typography>
				</Box>

				<Box sx={{width: {xs: "100%", md: "50%"}, mx: "auto"}}>
					<Box sx={{textAlign: "center"}}>
						{/* <Typography
							variant="h3"
							sx={{mb: 2, color: theme.palette.custom.paratha, textTransform: "uppercase"}}
						>
							Book a table
						</Typography> */}
					</Box>
					<ReservationForm />
				</Box>
			</Container>
		</Box>
	);
};

export default BookTable;
