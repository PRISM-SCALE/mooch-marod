import {Box, Container, Typography} from "@mui/material";
import {useTheme} from "@mui/material/styles";

// HOOKS
import {useResponsive} from "../../hooks/useResponsive";

// COMPONENTS
import ResponsiveImage from "../../components/ResponsiveImage";

const MoochStory = () => {
	const theme = useTheme();
	const {isMediumScreen, isSmallScreen, isLargeScreen, largeScreenAndUp} = useResponsive();

	return (
		<Box component="section" py={{xs: "2rem", md: "4rem"}}>
			<Container maxWidth="xl">
				<Box
					sx={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
						flexDirection: {xs: "column", md: "row"},
					}}
				>
					<Box sx={{width: {xs: "100%", md: "70%"}}}>
						<Typography
							variant="caption"
							sx={{
								color: theme.palette.custom.achar,
								fontSize: {xs: "0.8rem"},
								textTransform: "uppercase",
							}}
						>
							our story
						</Typography>
						<Typography
							variant="h2"
							sx={{textTransform: "uppercase", fontSize: {xs: 26, md: 42}, fontWeight: 500}}
							gutterBottom
						>
							THE STORY ABOUT mooch marod
						</Typography>

						<Typography variant="body1" sx={{fontSize: {xs: 14, md: 18}, my: 2}} gutterBottom>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
							incididunt ut labore et dolore.
						</Typography>

						{/* ---------------------------------------------------- */}

						<Box
							sx={{
								display: "grid",
								gridTemplateColumns: "1fr",

								// margin: "0 auto",
								// maxWidth: "1000px",
								[theme.breakpoints.up("sm")]: {gridTemplateColumns: "1fr 1fr"},
								[theme.breakpoints.up("md")]: {gridTemplateColumns: "repeat(2, 1fr)"},
							}}
						>
							<TitleDescription
								title="our family name"
								description="Lorem ipsum dolor sit amet, consectetur omni adipisicing elit, sed do eiusmod tempor sol incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
							/>
							<TitleDescription
								title="our journey"
								description="Lorem ipsum dolor sit amet, consectetur omni adipisicing elit, sed do eiusmod tempor sol incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
							/>
							<TitleDescription
								title="EXPERICENCE AND FOOD"
								description="Lorem ipsum dolor sit amet, consectetur omni adipisicing elit, sed do eiusmod tempor sol incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
							/>
						</Box>
					</Box>

					{/* Portrait Image */}
					<Box sx={{width: {xs: "100%", md: "25%"}}}>
						{(largeScreenAndUp || isLargeScreen) && (
							<ResponsiveImage src={"/images/portrait.jpg"} alt="portrait-image" width="380px" />
						)}

						{(isSmallScreen || isMediumScreen) && (
							<ResponsiveImage src={"/images/portrait2.jpg"} alt="portrait-image" width="100%" />
						)}
					</Box>
				</Box>
			</Container>
		</Box>
	);
};

type Props = {
	title: string;
	description: string;
};

const TitleDescription = ({title, description}: Props) => {
	const theme = useTheme();
	return (
		<Box sx={{mr: 2, mb: 4}}>
			<Typography
				variant="h3"
				sx={{textTransform: "uppercase", fontWeight: 700, color: theme.palette.custom.paratha}}
				gutterBottom
			>
				{title}
			</Typography>
			<Typography variant="body1" color="#858585" gutterBottom>
				{description}
			</Typography>
		</Box>
	);
};

export default MoochStory;
