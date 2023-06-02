import {Box, Button, TextField, useTheme} from "@mui/material";
import {TimePicker} from "@mui/x-date-pickers";
import { FormData } from "../types/ReservationForm";

type Props = {
	handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	handleTimeSlotChange: (time: Date | null) => void;
	handleSubmit: (event: React.FormEvent<HTMLFormElement>) => Promise<void>;
	formData: FormData;
};

export default function ReservationForm({
	handleInputChange,
	handleTimeSlotChange,
	handleSubmit,
	formData,
}: Props) {
	const theme = useTheme();

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
