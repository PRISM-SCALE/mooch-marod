import {
	Box,
	Button,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	SelectChangeEvent,
	TextField,
	useTheme,
} from "@mui/material";
import {MobileTimePicker, TimePicker} from "@mui/x-date-pickers";
import {addHours, setHours, setMinutes, startOfDay} from "date-fns";
import {FormData} from "../types/ReservationForm.types";

type Props = {
	handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	handleLocationChange: (event: SelectChangeEvent<string>) => void;
	handleTimeSlotChange: (time: Date | null) => void;
	handleSubmit: (event: React.FormEvent<HTMLFormElement>) => Promise<void>;
	formData: FormData;
};

export default function ReservationForm({
	handleInputChange,
	handleTimeSlotChange,
	handleLocationChange,
	handleSubmit,
	formData,
}: Props) {
	const theme = useTheme();

	// const startTime = setHours(setMinutes(startOfDay(new Date()), 0), 11);
	// const endTime = setHours(setMinutes(startOfDay(new Date()), 0), 22);

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
			<FormControl fullWidth margin="normal">
				<InputLabel id="location-label">Location</InputLabel>
				<Select
					labelId="location-label"
					label="Location"
					name="location"
					value={formData.location}
					onChange={handleLocationChange}
					required
				>
					<MenuItem value="Location 1">Location 1</MenuItem>
					<MenuItem value="Location 2">Location 2</MenuItem>
					<MenuItem value="Location 3">Location 3</MenuItem>
				</Select>
			</FormControl>
			<MobileTimePicker
				label="Time Slot"
				value={formData.timeSlot}
				onChange={handleTimeSlotChange}
				// defaultValue={startTime}
				// renderInput={(props: JSX.IntrinsicAttributes & TextFieldProps) => <TextField {...props} fullWidth />}
				ampm={true}
				// minTime={startTime}
				// maxTime={endTime}
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
