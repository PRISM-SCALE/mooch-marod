import {Box} from "@mui/material";

// import {Splide as Slider, SplideSlide} from "@splidejs/react-splide";
// import {AutoScroll} from "@splidejs/splide-extension-auto-scroll";

// new Splide(".splide").mount({AutoScroll});

const MarqueePatterns = () => {
	return (
		<Box
			sx={{
				position: "absolute",
				bottom: 0,
			}}
		>
			{/* <Slider
				options={{
					arrows: false,
					pagination: false,
					drag: "free",
					type: "loop",
					focus: "center",
					perPage: 1,
					autoScroll: {
						autoStart: true,
						speed: 2,
					},
				}}
			>
				<SplideSlide> */}
			<Box
				sx={{
					background: "url(/images/slide.webp)",
					width: "100vw",
					height: {xs: "40px", md: "50px"},
					backgroundSize: {xs: "cover", md: "contain"},
					backgroundRepeat: "repeat-x",
				}}
			/>
			{/* </SplideSlide>
			</Slider> */}
		</Box>
	);
};

export default MarqueePatterns;
