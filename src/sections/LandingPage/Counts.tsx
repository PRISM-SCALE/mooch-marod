import { Box, Container } from "@mui/material";

// COMPONENTS
import CountCard from "../../components/CountCard.tsx";

const _data = [
	{
		count: 2000,
		text: "Parathas Served",
	},
	{
		count: 10,
		text: "Years of Experience",
	},
	{
		count: 200,
		text: "Happy Customers",
	},
	{
		count: 4,
		text: "Outlets in Bangalore",
	},
];

const Counts = () => {
	return (
		<Box component="section" id="count_section" py={{xs: "2rem", md: "4rem"}}>
			<Container>
				<Box
					sx={{
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between",
						flexDirection: {xs: "column", md: "row"},
					}}
				>
					{_data.map(({count, text}, index) => (
						<CountCard key={index} count={count} text={text} />
					))}
				</Box>
			</Container>
		</Box>
	);
};

export default Counts;
