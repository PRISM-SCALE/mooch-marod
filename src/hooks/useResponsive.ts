import {useTheme} from "@mui/material/styles";
import {useMediaQuery, Theme} from "@mui/material";

// type Props = {
// 	customBreakpoint: string | null;
// };

export const useResponsive = () => {
	const theme = useTheme<Theme>();

	const isXSmallScreen = useMediaQuery(theme.breakpoints.up("xs"));

	const isSmallScreen = useMediaQuery(theme.breakpoints.between("xs", "sm"));

	const isMediumScreen = useMediaQuery(theme.breakpoints.between("sm", "md"));

	const isLargeScreen = useMediaQuery(theme.breakpoints.between("md", "lg"));

	const isXlargeScreen = useMediaQuery(theme.breakpoints.up("lg"));

	// * IMPORTANT => customBreakpoint='(min-width:600px)' always pass string
	// const matchScreenTo = useMediaQuery(customBreakpoint);

	return {
		isXSmallScreen,
		isSmallScreen,
		isMediumScreen,
		isLargeScreen,
		isXlargeScreen,
		// matchScreenTo,
	};
};
