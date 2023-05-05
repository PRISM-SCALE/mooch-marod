import {useTheme} from "@mui/material/styles";
import {useMediaQuery, Theme} from "@mui/material";

export const useResponsive = () => {
	const theme = useTheme<Theme>();
	const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
	const isMediumScreen = useMediaQuery(theme.breakpoints.between("sm", "md"));
	const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));

	return {
		isSmallScreen,
		isMediumScreen,
		isLargeScreen,
	};
};
