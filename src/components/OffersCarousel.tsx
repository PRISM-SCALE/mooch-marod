import {Box} from "@mui/material";
import {styled} from "@mui/material/styles";
import Slider, {Settings} from "react-slick";
import OfferBanner from "./Offers/OfferBanner";

interface SliderSettings extends Settings {
	// Define any additional properties you want to add to the settings object
	customSetting?: string;
}

// type Props = {};

const offerBanners = [
	{
		id: 1,
		image: "/images/offers_banner.webp",
	},
	{
		id: 2,
		image: "/images/offers_banner.webp",
	},
	{
		id: 3,
		image: "/images/offers_banner.webp",
	},
	{
		id: 4,
		image: "/images/offers_banner.webp",
	},
];

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

const OffersCarousel = () => {
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
			{offerBanners.map(({id, image}) => (
				<Slide key={id}>
					<OfferBanner image={image} />
				</Slide>
			))}
		</SlideWrapper>
	);
};

export default OffersCarousel;
