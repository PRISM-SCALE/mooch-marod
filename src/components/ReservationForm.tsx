import React, {useState} from "react";
import dayjs, {Dayjs} from "dayjs";
import {Button, TextField} from "@mui/material";
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
	const [formData, setFormData] = useState<FormData>(initialFormData);
	const [value, setValue] = React.useState<Dayjs | null>(dayjs(Date.now()));

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

	return (
		<form onSubmit={handleSubmit}>
			<TextField
				name="name"
				label="Name"
				value={formData.name}
				onChange={handleInputChange}
				required
				fullWidth
				margin="normal"
			/>
			<TextField
				name="phone"
				label="Phone"
				value={formData.phone}
				onChange={handleInputChange}
				required
				fullWidth
				margin="normal"
			/>
			<TextField
				name="email"
				label="Email"
				type="email"
				value={formData.email}
				onChange={handleInputChange}
				required
				fullWidth
				margin="normal"
			/>
			<TimePicker
				label="Time Slot"
				value={formData.timeSlot}
				onChange={handleTimeSlotChange}
				renderInput={(props) => <TextField {...props} fullWidth margin="normal" />}
				ampm={false}
				minutesStep={5}
			/>
			<Button type="submit" variant="contained" color="primary">
				Book a Table
			</Button>
		</form>
	);
}
