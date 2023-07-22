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
								fontSize: {xs: "1rem"},
								textTransform: "uppercase",
							}}
						>
							our story
						</Typography>
						<Typography
							variant="h2"
							sx={{
								textTransform: "uppercase",
								fontSize: {xs: "1.4rem", md: "2.4rem"},
								fontWeight: 500,
							}}
							gutterBottom
						>
							THE STORY ABOUT mooch marod
						</Typography>

						<Typography variant="body1" sx={{fontSize: "1rem", my: 2}} gutterBottom paragraph>
							We are famous for our authentic parathas, Lassi & their sizes along with tandoor
							kebabs & much more. To accompany these there is plenty of side dishes like raita,
							chutneys, Pickles, Butter etc. All of our dishes are enhanced with our secret spice
							recipe. We have always hand mixed the perfect spice combination in our kitchen. We
							make our Parathas as per order, ensuring our diners receive perfectly made Parathas
							every time. Having said that, when it comes to Indian Cuisine we prefer to keep it
							simple by only creating the best.
						</Typography>
						<Typography variant="body1" sx={{fontSize: "1rem", my: 2}} gutterBottom paragraph>
							<Box component="span" sx={{fontWeight: 500}}>
								Mooch Marod
							</Box>{" "}
							is as diverse as its culture, language and region. Aromatic spices are the essence of
							Indian cuisine. Use of particular spices such as coriander, cumin, fenugreek,
							asafoetida etc., gives Indian food its distinct flavour. The cooking skill lies in the
							subtle blending of a variety of spices to enhance the basic flavour of a particular
							dish. Visit us today and experience the taste worth travelling for.
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
								title="Quality over Quantity"
								description="Mooch Marod is truly class apart. All food items and beverages prepared at our restaurant kitchens are at par with the highest quality standards. We understand the likes and dislikes of our customers and aim to serve food that not only fills their stomach but also feeds their soul."
							/>
							<TitleDescription
								title="People are Everything"
								description="Mooch Marod has fully trained customer-service oriented employees with a strict emphasis on food and hygiene standards, so the next time you enjoy your meal at Mooch Marod, be rest assured that the food served on your plate is absolutely top grade."
							/>
							<TitleDescription
								title="Craftsmanship of Cooking and Tradition"
								description="We understand the likes and dislikes of our customers and aim to serve food that not only fills their stomach but also feeds their soul. Offering classic, authentic recipes, we make wholesome food with the freshest ingredients, which is what makes our food so delectable. Rest assured that the food served on your plate is absolutely top grade."
							/>
						</Box>
					</Box>

					{/* Portrait Image */}
					<Box sx={{width: {xs: "100%", md: "25%"}}}>
						{(largeScreenAndUp || isLargeScreen) && (
							<ResponsiveImage
								src={"https://placehold.co/370x600?text=MoochMarod Portrait"}
								alt="portrait-image"
								width="380px"
							/>
						)}

						{(isSmallScreen || isMediumScreen) && (
							<ResponsiveImage
								src={"https://placehold.co/600x400?text=MoochMarod Portrait"}
								alt="portrait-image"
								width="100%"
							/>
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
