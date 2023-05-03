import {Box, Typography} from "@mui/material";
import {useInView} from "react-intersection-observer";
import CountUp from "react-countup";

type Props = {
	count: number;
	text: string;
};

const CountCard = ({count, text}: Props) => {
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
			<Typography component="span" variant="h1" fontWeight={600}>
				<CountUp duration={5} end={inView ? count : 0} useEasing={true} />+
			</Typography>
			<br />
			<Typography component="span" sx={{fontSize: "1.2rem"}}>
				{text}
			</Typography>
		</Box>
	);
};

export default CountCard;
