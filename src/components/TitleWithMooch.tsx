import {Box, Divider, Typography, useTheme} from "@mui/material";
import {mooch_icon} from "../utils/common";

type Props = {
	title: string;
	color: string;
};

const TitleWithMooch = ({title, color}: Props) => {
	const theme = useTheme();
	return (
		<Box textAlign={"center"} mb={4}>
			<Typography variant="h3" color={color} sx={{fontSize: {xs: 24, sm: 26, md: 32}}}>
				{title}
			</Typography>
			<Divider
				sx={{
					width: {xs: "80%", sm: "30%"},
					mx: "auto",
					"&.MuiDivider-root::before, &.MuiDivider-root::after": {
						borderTop: `2px solid ${theme.palette.custom.achar}`,
					},
					display: "flex",
					alignItems: "center",
				}}
			>
				<img src={mooch_icon} alt="mooch_icon" style={{width: 60, height: 60}} />
			</Divider>
		</Box>
	);
};

export default TitleWithMooch;
