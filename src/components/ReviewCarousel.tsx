import {Box} from "@mui/material";
import {styled} from "@mui/material/styles";
import Slider, {Settings} from "react-slick";

// JSON DATA
import {testimonials} from "../_mock/testimonial.json";

// COMPONENTS
import TestimonialCard from "./TestimonialCard";

interface SliderSettings extends Settings {
	// Define any additional properties you want to add to the settings object
	customSetting?: string;
}

const SlideWrapper = styled(Slider)(({theme}) => ({
	[theme.breakpoints.up("xs")]: {},
}));

// const SlideChildWrapper = styled(Box)(({theme}) => ({
// 	[theme.breakpoints.up("xs")]: {},
// }));

const Slide = styled(Box)(({theme}) => ({
	[theme.breakpoints.up("xs")]: {},

	// marginRight: "1rem",
}));

const ReviewCarousel = () => {
	const settings: SliderSettings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		initialSlide: 0,
		draggable: true,
		arrows: false,
		autoplay: true,
		// centerMode: true,
	};

	return (
		<SlideWrapper {...settings}>
			{testimonials.map(({id, name, comment, image, location, rating}) => (
				<Slide key={id}>
					<TestimonialCard
						key={id}
						name={name}
						image={image}
						location={location}
						rating={rating}
						reviewText={comment}
					/>
				</Slide>
			))}
		</SlideWrapper>
	);
};

export default ReviewCarousel;
