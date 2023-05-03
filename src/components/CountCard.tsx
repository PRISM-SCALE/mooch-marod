import {Box, Typography} from "@mui/material";
import CountUp from "react-countup";

type Props = {
	count: number;
	text: string;
};

const CountCard = ({count, text}: Props) => {
	return (
		<Box
			sx={{
				textAlign: "center",
				mt: {xs: "1rem", md: 0},
			}}
		>
			{/* Component for counts+ */}
			<Typography component="span" variant="h1" fontWeight={600}>
				<CountUp duration={5} end={count} />+
			</Typography>
			<br />
			<Typography component="span" sx={{fontSize: "1.2rem"}}>
				{text}
			</Typography>
		</Box>
	);
};

export default CountCard;
