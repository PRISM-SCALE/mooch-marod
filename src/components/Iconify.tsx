import {FC} from "react";
import {Icon} from "@iconify/react";
import type {IconifyIcon} from "@iconify/iconify";

type IconProps = {
	icon: IconifyIcon | string;
	size?: string;
	color?: string;
};

const Iconify: FC<IconProps> = ({icon, size = "1rem", color = "currentColor"}) => {
	return <Icon icon={icon} width={size} height={size} color={color} />;
};

export default Iconify;
