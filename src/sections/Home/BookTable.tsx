import {useState} from "react";
import {parseISO} from "date-fns";
import {Box, Container, SelectChangeEvent, Typography, useTheme} from "@mui/material";
import ReservationForm from "../../components/ReservationForm";

// TYPES
import {FormData, initialFormData} from "../../types/ReservationForm.types";

const BookTable = () => {
	const theme = useTheme();
	const [formData, setFormData] = useState<FormData>(initialFormData);

	// ---------------------------------------------------------------------------------------------
	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		// Handle form submission here
		try {
			const response = await fetch("<YOUR_AZURE_FUNCTION_URL>", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});

			if (response.ok) {
				console.log("Form data sent successfully");
				// Reset the form
				setFormData(initialFormData);
			} else {
				console.error("Error occurred while sending form data");
			}
		} catch (error) {
			console.error("An error occurred:", error);
		}
		console.log(formData);

		// Reset form after submission
		setFormData(initialFormData);
	};
	// ---------------------------------------------------------------------------------------------

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const {name, value} = event.target;
		setFormData((prevFormData) => ({
			...prevFormData,
			[name]: value,
		}));
	};

	const handleLocationChange = (event: SelectChangeEvent<string>) => {
		setFormData((prevFormData) => ({
			...prevFormData,
			location: event.target.value as string,
		}));
	};

	const handleTimeSlotChange = (time: Date | null | string) => {
		if (typeof time === "string") {
			const parsedTime = parseISO(time);
			setFormData((prevFormData) => ({
				...prevFormData,
				timeSlot: parsedTime,
			}));
		} else {
			setFormData((prevFormData) => ({
				...prevFormData,
				timeSlot: time,
			}));
		}
	};
	return (
		<Box component={"section"} id={"reservation_section"} py={{xs: "2rem", md: "4rem"}}>
			<Container maxWidth="xl">
				<Box sx={{textAlign: "center", mb: 4}}>
					<Typography
						variant="caption"
						sx={{color: theme.palette.custom.achar, fontSize: {xs: "0.8rem"}}}
					>
						Reserve now
					</Typography>
					<Typography
						variant="h1"
						sx={{textTransform: "uppercase", fontSize: {xs: 26, md: 42}}}
						gutterBottom
					>
						Book your table
					</Typography>
					<Typography variant="body1" sx={{width: {xs: "100%", md: "50%"}, marginX: "auto"}}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit arcu in pretium
						molestie. Interdum et malesuada fames ac.
					</Typography>
				</Box>

				<Box sx={{width: {xs: "100%", md: "50%"}, mx: "auto"}}>
					<ReservationForm
						formData={formData}
						handleSubmit={handleSubmit}
						handleInputChange={handleInputChange}
						handleTimeSlotChange={handleTimeSlotChange}
						handleLocationChange={handleLocationChange}
					/>
				</Box>
			</Container>
		</Box>
	);
};

export default BookTable;
