import {Avatar, Stack} from "@mui/material";
import {useTheme} from "@mui/material/styles";
import Iconify from "./Iconify";

interface IconData {
	name: string;
	icon: string;
	url?: string;
}

interface SocialMedia {
	icons: IconData[];
}

type Props = {
	width: number;
	height: number;
	size: number;
	[key: string]: any;
};

const _social_icons: SocialMedia = {
	icons: [
		{
			name: "facebook",
			icon: "ei:sc-facebook",
			url: "https://www.facebook.com/",
		},
		{
			name: "instagram",
			icon: "ei:sc-instagram",
			url: "https://instagram.com/",
		},
		{
			name: "twitter",
			icon: "ei:sc-twitter",
			url: "https://twitter.com/",
		},
		{
			name: "youtube",
			icon: "ei:sc-youtube",
			url: "https://youtube.com/",
		},
	],
};

export default function SocialIcons({width, height, size, ...others}: Props) {
	const theme = useTheme();
	return (
		<Stack direction="row" spacing={2} {...others}>
			{_social_icons.icons.map(({name, icon, url}) => (
				<Avatar
					key={name}
					sx={{
						width: width,
						height: height,
						backgroundColor: theme.palette.custom.paratha,
						cursor: "pointer",
					}}
					onClick={() => window.open(url)}
				>
					<Iconify icon={icon} size={size} />
				</Avatar>
			))}
		</Stack>
	);
}
