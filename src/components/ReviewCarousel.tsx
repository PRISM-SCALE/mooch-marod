import Slider, {Settings} from "react-slick";
import {styled} from "@mui/material/styles";
import {Box} from "@mui/material";

// JSON DATA
import {testimonials} from "../_mock/testimonial.json";
import TestimonialCard from "./TestimonialCard";

interface SliderSettings extends Settings {
	// Define any additional properties you want to add to the settings object
	customSetting?: string;
}

const SlideWrapper = styled(Slider)(({theme}) => ({}));

const SlideChildWrapper = styled(Box)(({theme}) => ({}));

const Slide = styled(Box)(({theme}) => ({
	margin: "0 1rem",
}));

const ReviewCarousel = () => {
	const settings: SliderSettings = {
		dots: true,
		infinite: false,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		initialSlide: 0,
		draggable: true,
		lazyLoad: "ondemand",
		// autoplay: true,

		// responsive: [
		// 	{
		// 		breakpoint: 1024,
		// 		settings: {
		// 			slidesToShow: 1,
		// 			slidesToScroll: 3,
		// 			infinite: true,
		// 			dots: true,
		// 		},
		// 	},
		// 	{
		// 		breakpoint: 600,
		// 		settings: {
		// 			slidesToShow: 2,
		// 			slidesToScroll: 2,
		// 			initialSlide: 2,
		// 		},
		// 	},
		// 	{
		// 		breakpoint: 480,
		// 		settings: {
		// 			slidesToShow: 1,
		// 			slidesToScroll: 1,
		// 		},
		// 	},
		// ],
	};
	return (
		<SlideWrapper {...settings}>
			{testimonials.map(({id, name, comment, image, location, rating}, index) => (
				<SlideChildWrapper key={index}>
					<Slide>
						<TestimonialCard
							key={id}
							name={name}
							image={image}
							location={location}
							rating={rating}
							reviewText={comment}
						/>
					</Slide>
				</SlideChildWrapper>
			))}
		</SlideWrapper>
	);
};

export default ReviewCarousel;
