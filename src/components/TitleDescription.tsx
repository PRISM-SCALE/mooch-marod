import {Box, Typography} from "@mui/material";
import {useTheme} from "@mui/material/styles";

type Props = {
	title: string;
	description: string;
};

const TitleDescription = ({title, description}: Props) => {
	const theme = useTheme();
	return (
		<Box sx={{mr: 2, mb: 4}}>
			<Typography
				variant="h3"
				sx={{textTransform: "uppercase", fontWeight: 700, color: theme.palette.custom.paratha}}
				gutterBottom
			>
				{title}
			</Typography>
			<Typography variant="body1" color="#858585" gutterBottom>
				{description}
			</Typography>
		</Box>
	);
};

export default TitleDescription;
