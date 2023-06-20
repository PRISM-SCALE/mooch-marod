import {Box} from "@mui/material";

const StoreLocator = () => {
	return (
		<Box sx={{height: "100%"}}>
			<iframe
				src="https://locatestore.com/uej6MM"
				style={{border: "none", width: "100%", height: "600px"}}
				allow="geolocation"
			></iframe>
		</Box>
	);
};

export default StoreLocator;
