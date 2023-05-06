import {Box, Container, Typography, useTheme} from "@mui/material";

// COMPONENTS
// import TestimonialCard from "../../components/TestimonialCard";
import ReviewCarousel from "../../components/ReviewCarousel";

const GoogleReviews = () => {
	const theme = useTheme();
	return (
		<Box component="section" id="review_section" py={{xs: "2rem", md: "4rem"}}>
			<Container>
				<Box sx={{textAlign: "center", mb: 8}}>
					<Typography
						variant="caption"
						sx={{color: theme.palette.custom.achar, fontSize: {xs: "0.8rem", md: "1rem"}}}
					>
						Testimonials
					</Typography>
					<Typography
						variant="h1"
						sx={{textTransform: "uppercase", fontSize: {xs: 26, md: 42}}}
						gutterBottom
					>
						Client Reviews
					</Typography>
				</Box>

				<Box>
					{/* <TestimonialCard
						image="/images/dummy_testimonial.jpg"
						name="Nina Margaret"
						rating={4}
						reviewText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ea voluptas eius ab qui tempore molestias consequuntur nam accusantium corporis? Perferendis consequatur aliquam expedita."
					/> */}
					<ReviewCarousel />
				</Box>
			</Container>
		</Box>
	);
};

export default GoogleReviews;
