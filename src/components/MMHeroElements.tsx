import {Box} from "@mui/material";

const MMHeroElements = () => {
	return (
		<>
			<Box
				component={"img"}
				src="/images/leaf_2.png"
				sx={{position: "absolute", height: 120, top: 15, left: 80, zIndex: -3}}
				loading="lazy"
			/>
			<Box
				component={"img"}
				src="/images/points.png"
				sx={{position: "absolute", height: 90, top: "50%", left: -150, zIndex: -3}}
				loading="lazy"
			/>
			<Box
				component={"img"}
				src="/images/leaf_3.png"
				sx={{position: "absolute", height: 40, bottom: 55, left: 40, zIndex: -3}}
				loading="lazy"
			/>

			<Box
				component={"img"}
				src="/images/leaf-1.png"
				sx={{position: "absolute", height: 70, top: 55, right: 140, zIndex: -3}}
				loading="lazy"
			/>

			<Box
				component={"img"}
				src="/images/pepper.png"
				sx={{position: "absolute", height: 70, bottom: "50%", right: 230, zIndex: -3}}
				loading="lazy"
			/>

			<Box
				component={"img"}
				src="/images/leaf_6.png"
				sx={{position: "absolute", height: 70, bottom: 55, right: 100, zIndex: -3}}
				loading="lazy"
			/>

			<Box
				component={"img"}
				src="/images/points_2.png"
				sx={{position: "absolute", height: 90, top: 80, right: "50%", zIndex: -3}}
				loading="lazy"
			/>
		</>
	);
};

export default MMHeroElements;
