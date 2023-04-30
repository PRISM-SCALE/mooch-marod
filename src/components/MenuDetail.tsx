import {Box, Typography, useTheme} from "@mui/material";

type Props = {
	foodItem: string;
	price: number;
	description: string;
};

const MenuDetail = ({foodItem, price, description}: Props) => {
	const theme = useTheme();
	return (
		<Box sx={{width: {xs: "100%", md: "50%"}}}>
			<Box sx={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
				<Typography
					fontSize={{xs: "1.2rem", sm: "1.2rem"}}
					color={theme.palette.custom.paratha}
					fontWeight={600}
				>
					{foodItem}
				</Typography>
				<Typography
					fontSize={{xs: "1.2rem", sm: "1.2rem"}}
					color={theme.palette.custom.achar}
					fontWeight={600}
				>
					${price}
				</Typography>
			</Box>
			<Typography variant="caption" fontSize={"0.8rem"} width={"55%"} display={"block"}>
				{description}
			</Typography>
		</Box>
	);
};

export default MenuDetail;
