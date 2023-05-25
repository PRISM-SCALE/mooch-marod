import {Box, Typography} from "@mui/material";
import {useTheme} from "@mui/material/styles";
import SocialIcons from "../SocialIcons";

type Props = {
	src: string;
	chefName: string;
	chefTitle: string;
	social?: {
		facebook: string;
		twitter: string;
		linkedin: string;
		youtube: string;
	};
};

const ChefCard = ({src, chefName, chefTitle}: Props) => {
	const theme = useTheme();
	return (
		<Box sx={{padding: "40px", borderRadius: "8px", background: theme.palette.custom.butter}}>
			{/* CHEF IMAGE */}
			<Box
				sx={{
					position: "relative",
					overflow: "hidden",
					width: "150px",
					borderRadius: "50%",
					webkitBorderRadius: "50%",
					msBorderRadius: "50%",
					margin: "auto auto 35px",
					height: "150px",

					"svg:not(:root)": {
						overflow: "hidden",
						overflowClipMargin: "content-box",
					},

					"&:hover": {
						fill: theme.palette.custom.achar,
					},
				}}
			>
				<svg
					viewBox="0 0 200 200"
					xmlns="http://www.w3.org/2000/svg"
					style={{
						position: "absolute",
						left: "0",
						top: "0",
						width: "100%",
						height: "100%",
						transition: "fill 120ms ease-in-out",
						fill: "currentColor",
					}}
				>
					<path
						fill={theme.palette.custom.paratha}
						d="M42.2,-73.6C54.9,-65.7,65.5,-54.9,74,-42.1C82.6,-29.3,89,-14.7,89.3,0.2C89.6,15,83.7,30,75.5,43.2C67.2,56.4,56.4,67.7,43.4,75.4C30.4,83,15.2,86.9,-0.2,87.2C-15.6,87.5,-31.1,84.2,-45.1,77.1C-59,70,-71.4,59.2,-79.3,45.7C-87.3,32.2,-91,16.1,-90,0.6C-89,-14.9,-83.3,-29.9,-75.4,-43.5C-67.5,-57.1,-57.3,-69.4,-44.4,-77.2C-31.5,-85,-15.7,-88.2,-0.5,-87.4C14.7,-86.5,29.5,-81.5,42.2,-73.6Z"
						transform="translate(100 100)"
					/>
				</svg>
				<img
					src={src}
					alt={chefName}
					style={{
						transition: "all 0.4s ease",
						width: "100%",
						height: "100%",
						position: "relative",
						maxWidth: "100%",
						border: "none",
						borderRadius: "0",
						boxShadow: "none",
					}}
				/>
			</Box>
			<Box textAlign={"center"}>
				{/* CHEF NAME */}
				{/* CHEF TITLE */}
				<Typography fontSize={{xs: 18, md: 24}} fontWeight={500}>
					{chefName}
				</Typography>
				<Typography>{chefTitle}</Typography>

				{/* SOCIAL ICONS */}

				<SocialIcons width={30} height={30} size={20} justifyContent={"center"} sx={{marginY: 2}} />
			</Box>
		</Box>
	);
};

export default ChefCard;
