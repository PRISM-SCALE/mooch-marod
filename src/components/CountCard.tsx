import {Box, Typography, useTheme} from "@mui/material";
import {useInView} from "react-intersection-observer";
import CountUp from "react-countup";

type Props = {
	count: number;
	text: string;
	character: string;
};

const CountCard = ({count, text, character}: Props) => {
	const theme = useTheme();
	const [ref, inView] = useInView({
		threshold: 0.3,
		triggerOnce: true,
	});

	return (
		<Box
			sx={{
				textAlign: "center",
				mt: {xs: "1rem", md: 0},
			}}
			ref={ref}
		>
			{/* Component for counts+ */}
			<Typography
				component="span"
				variant="h1"
				sx={{
					fontWeight: {
						xs: "1.2rem",
						md: "2.4rem",
						fontWeight: 500,
					},
				}}
			>
				<CountUp duration={5} end={inView ? count : 0} useEasing={true} />
				{character}
			</Typography>
			<br />
			<Typography
				component="span"
				sx={{
					color: theme.palette.custom.achar,
					fontWeight: 500,
					fontSize: {xs: ".8rem", md: "1rem"},
				}}
			>
				{text}
			</Typography>
		</Box>
	);
};

export default CountCard;
