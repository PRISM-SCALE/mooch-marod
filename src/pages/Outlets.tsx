import {Box} from "@mui/material";

//HOOKS
import {useResponsive} from "../hooks/useResponsive";

// SECTIONS
import PageHeader from "../sections/PageHeader";
import DesktopAddress from "../sections/Outlets/DesktopAddress";
import MobileAddress from "../sections/Outlets/MobileAddress";

const Outlets = () => {
	const {largeScreenAndUp, isSmallScreen, isMediumScreen, isLargeScreen} = useResponsive();
	return (
		<Box>
			<PageHeader tagline="Find Us" title="Outlets" />
			{largeScreenAndUp ? <DesktopAddress /> : null}

			{isSmallScreen || isMediumScreen || isLargeScreen ? <MobileAddress /> : null}
		</Box>
	);
};

export default Outlets;
