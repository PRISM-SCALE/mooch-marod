import {Box, Typography, useTheme} from "@mui/material";

type Props = {
	title: string;
	off: number;
	details: {
		line1: string;
		line2: string;
	};
	img: string;
	bgcolor?: string;
	size: number;
};

const OfferCard = ({title, off, details, img, size}: Props) => {
	const theme = useTheme();
	return (
		<Box
			sx={{
				display: "flex",
				alignItems: "center",
				justifyContent: "space-between",
				p: 4,
				background: theme.palette.custom.butter,
				mb: 2,
			}}
		>
			<Box>
				<Typography
					variant="h2"
					fontWeight={500}
					sx={{textTransform: "uppercase", fontSize: "1.5rem"}}
				>
					{title}
				</Typography>
				<Typography fontWeight={600} fontSize={"2rem"} color={theme.palette.custom.achar}>
					{off}%
				</Typography>
				<Typography variant="body1">{details.line1}</Typography>
				<Typography variant="body1">{details.line2}</Typography>
				<Typography variant="caption">*T&C</Typography>
			</Box>
			<Box>
				<img src={img} alt={title} width={size} height={size} />
			</Box>
		</Box>
	);
};

export default OfferCard;
