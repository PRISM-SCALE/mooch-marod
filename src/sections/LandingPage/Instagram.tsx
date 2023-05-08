import {Box, styled, useTheme} from "@mui/material";
import Slider, {Settings} from "react-slick";

// JSON
import {insta} from "../../_mock/instagarm.json";

// COMPONENTS
import InstaCard from "../../components/InstaCard";

interface SliderSettings extends Settings {
	// Define any additional properties you want to add to the settings object
	customSetting?: string;
}

const SlideWrapper = styled(Slider)(({theme}) => ({
	// 	pt={{xs: "2rem", md: "4rem"}}
	// 	pb={2}
}));

const SlideChildWrapper = styled(Box)(({theme}) => ({}));

const Slide = styled(Box)(({theme}) => ({
	marginLeft: "1rem",
	display: "flex",
	justifyContent: "center",
}));

const Instagram = () => {
	const theme = useTheme();

	const settings: SliderSettings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 7,
		slidesToScroll: 1,
		initialSlide: 0,
		draggable: true,
		lazyLoad: "ondemand",
		arrows: false,
		autoplay: true,

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
					centerMode: true,
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
		<Box component={"section"} id="instagarm_section" pt={{xs: "2rem", md: "4rem"}} pb={2}>
			<SlideWrapper {...settings}>
				{insta.map(({id, src}) => (
					<SlideChildWrapper key={id}>
						<Slide>
							<InstaCard image={src} />
						</Slide>
					</SlideChildWrapper>
				))}
			</SlideWrapper>
		</Box>
	);
};

export default Instagram;
