import {Box, Button, useTheme} from "@mui/material";
import ERROR404 from "/images/404.png";
import {Link} from "react-router-dom";

const NotFound = () => {
	const theme = useTheme();

	return (
		<Box sx={{display: "grid", placeContent: "center", height: "100vh"}}>
			<Box component="img" src={ERROR404} alt="404" sx={{height: {xs: 100, md: 300}}} />
			<Button
				component={Link}
				to="/home"
				sx={{
					backgroundColor: theme.palette.custom.paratha,
					borderRadius: 30,
					px: {xs: 2, md: 4},
					py: 1,
					color: "white",
					mt: {xs: 2, md: 4},
					fontSize: {xs: ".6rem", sm: ".8rem", md: "1rem"},
					fontWeight: 400,
					"&:hover": {
						backgroundColor: theme.palette.custom.paratha,
					},
					mr: 2,
				}}
				disableElevation
				// disableRipple
			>
				GO HOME
			</Button>
		</Box>
	);
};

export default NotFound;
