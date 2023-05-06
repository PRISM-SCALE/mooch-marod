import {FC} from "react";
import {Box} from "@mui/material";
import {Icon} from "@iconify/react";
import type {IconifyIcon} from "@iconify/iconify";

type IconProps = {
	icon: IconifyIcon | string;
	size?: number;
	color?: string;
	sx?: object;
};

const Iconify: FC<IconProps> = ({icon, size = "1rem", color = "currentColor", sx}) => {
	return <Box component={Icon} icon={icon} width={size} height={size} color={color} sx={{...sx}} />;
};

export default Iconify;
