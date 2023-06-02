import React, {useState} from "react";
import {Box, Button, TextField, TextFieldProps, useTheme} from "@mui/material";
import {TimePicker} from "@mui/x-date-pickers";

interface FormData {
	name: string;
	phone: string;
	email: string;
	timeSlot: Date | null;
}

const initialFormData: FormData = {
	name: "",
	phone: "",
	email: "",
	timeSlot: null,
};

export default function ReservationForm() {
	const theme = useTheme();
	const [formData, setFormData] = useState<FormData>(initialFormData);

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		// Handle form submission here
		console.log(formData);
		// Reset form after submission
		setFormData(initialFormData);
	};

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const {name, value} = event.target;
		setFormData((prevFormData) => ({
			...prevFormData,
			[name]: value,
		}));
	};

	const handleTimeSlotChange = (time: Date | null) => {
		setFormData((prevFormData) => ({
			...prevFormData,
			timeSlot: time,
		}));
	};

	const marginStyle = {
		marginTop: 2,
	};

	return (
		<form onSubmit={handleSubmit}>
			<TextField
				name="name"
				label="Name"
				value={formData.name}
				onChange={handleInputChange}
				required
				fullWidth
				// sx={{...marginStyle}}
			/>
			<TextField
				name="phone"
				label="Phone"
				value={formData.phone}
				onChange={handleInputChange}
				required
				fullWidth
				sx={{...marginStyle}}
			/>
			<TextField
				name="email"
				label="Email"
				type="email"
				value={formData.email}
				onChange={handleInputChange}
				required
				fullWidth
				sx={{...marginStyle}}
			/>
			<TimePicker
				label="Time Slot"
				value={formData.timeSlot}
				onChange={handleTimeSlotChange}
				// renderInput={(props: JSX.IntrinsicAttributes & TextFieldProps) => <TextField {...props} fullWidth />}
				ampm={true}
				minutesStep={5}
				sx={{width: "100%", ...marginStyle}}
			/>
			<Box sx={{textAlign: "center", ...marginStyle}}>
				<Button
					sx={{
						backgroundColor: theme.palette.custom.achar,
						borderRadius: 30,
						px: 4,
						py: 1,
						color: "white",
						fontSize: ".8rem",
						fontWeight: 400,

						"&:hover": {
							backgroundColor: theme.palette.custom.achar,
						},
					}}
					disableElevation
					// disableRipple
				>
					Book a table
				</Button>
			</Box>
		</form>
	);
}
