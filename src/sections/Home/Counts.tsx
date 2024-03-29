import {Box, Container} from "@mui/material";

// COMPONENTS
import CountCard from "../../components/CountCard.tsx";

const _data = [
	{
		count: 100000,
		character: "+",
		text: "Parathas Served",
	},
	{
		count: 86,
		character: "%",
		text: "Customer Comeback",
	},
	{
		count: 300000,
		character: "+",
		text: "People Served",
	},
	{
		count: 5,
		character: "+",
		text: "Outlets in Bangalore",
	},
];

const Counts = () => {
	return (
		<Box component="section" id="count_section" py={{xs: "2rem", md: "4rem"}}>
			<Container maxWidth="xl">
				<Box
					sx={{
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between",
						flexDirection: {xs: "column", md: "row"},
					}}
				>
					{_data.map(({count, text, character}, index) => (
						<CountCard key={index} count={count} text={text} character={character} />
					))}
				</Box>
			</Container>
		</Box>
	);
};

export default Counts;
