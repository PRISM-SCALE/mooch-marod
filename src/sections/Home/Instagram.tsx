import {Box, styled} from "@mui/material";
import Slider, {Settings} from "react-slick";

// COMPONENTS
import InstaCard from "../../components/InstaCard";
import {images} from "../../utils/links";

interface SliderSettings extends Settings {
	// Define any additional properties you want to add to the settings object
	customSetting?: string;
}

const SlideWrapper = styled(Slider)(({theme}) => ({
	[theme.breakpoints.up("xs")]: {},

	// 	pt={{xs: "2rem", md: "4rem"}}
	// 	pb={2}
}));

// const SlideChildWrapper = styled(Box)(({theme}) => ({
// 	[theme.breakpoints.up("xs")]: {},
// }));

// const Slide = styled(Box)(({theme}) => ({
// 	[theme.breakpoints.up("xs")]: {},

// 	// marginLeft: "1rem",
// 	display: "flex",
// 	justifyContent: "center",
// }));

const Instagram = () => {
	const settings: SliderSettings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 7,
		slidesToScroll: 1,
		initialSlide: 0,
		draggable: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 4000,

		responsive: [
			{
				breakpoint: 1563,
				settings: {
					slidesToShow: 5,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 900,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 2,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					// centerMode: true,
				},
			},
			{
				breakpoint: 500,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					centerMode: true,
				},
			},
		],
	};

	return (
		<Box component={"section"} id="instagram_section" pt={{xs: "2rem", md: "4rem"}} pb={2}>
			<SlideWrapper {...settings}>
				{images.map(({imageUrl, title}, index) => (
					<InstaCard image={imageUrl} key={index} title={title} />
				))}
			</SlideWrapper>
		</Box>
	);
};

export default Instagram;
