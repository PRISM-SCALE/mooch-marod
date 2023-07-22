import {Box} from "@mui/material";

// SECTIONS
import Hero from "../sections/Home/Hero.tsx";
import Counts from "../sections/Home/Counts.tsx";
import Offers from "../sections/Home/Offers.tsx";
import MenuSection from "../sections/Home/MenuSection.tsx";
import ParathaBanner from "../sections/Home/ParathaBanner.tsx";
import GoogleReviews from "../sections/Home/GoogleReviews.tsx";
// import Instagram from "../sections/Home/Instagram.tsx";
// import BookTable from "../sections/Home/BookTable.tsx";

const Home = () => {
	return (
		<Box>
			<Hero />
			<Counts />
			<Offers />
			<MenuSection />
			<ParathaBanner />
			{/* <BookTable /> */}
			<GoogleReviews />
			{/* <Instagram /> */}
		</Box>
	);
};

export default Home;
