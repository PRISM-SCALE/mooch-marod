import {useEffect, useRef, useState} from "react";
import {Box} from "@mui/material";

const MarqueePatterns = () => {
	const containerRef = useRef<HTMLDivElement>(null);
	const [scrollPosition, setScrollPosition] = useState(0);

	console.log(scrollPosition);

	useEffect(() => {
		const container = containerRef.current;
		if (container) {
			const handleScroll = () => {
				setScrollPosition(container.scrollLeft);
			};
			container.addEventListener("scroll", handleScroll);
			return () => {
				container.removeEventListener("scroll", handleScroll);
			};
		}
	}, []);

	return (
		<Box className="infinite-scroll-container" ref={containerRef}>
			<Box className="infinite-scroll-content">
				{[1, 2, 3, 4, 5].map((item) => (
					<Box
						key={item}
						className="infinite-scroll-item"
						sx={{
							// position: "absolute",
							// bottom: 0,
							background: "url(/images/slide.webp)",
							width: "100vw",
							height: {xs: "40px", md: "50px"},
							backgroundSize: {xs: "cover", md: "contain"},
							backgroundRepeat: "repeat-x",
						}}
					/>
				))}
			</Box>
		</Box>
	);
};

export default MarqueePatterns;
