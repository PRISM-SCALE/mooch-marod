import React from "react";
import {Box, Button, useTheme} from "@mui/material";

type Props = {
	email: string;
	handleEmailChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	handleSubmit: (event: React.FormEvent<HTMLFormElement>) => Promise<void>;
};

const EmailSubscriptionForm = ({email, handleEmailChange, handleSubmit}: Props) => {
	const theme = useTheme();

	return (
		<Box
			component="form"
			onSubmit={handleSubmit}
			sx={{
				"& > :not(style)": {m: 1, width: "25ch"},
				pt: "1rem",
				px: "1rem",
				display: "flex",
				alignItems: "center",
				flexDirection: {xs: "column", md: "row"},
			}}
			autoComplete="off"
		>
			{/* <TextField
				label="Email"
				variant="outlined"
				type="email"
				value={email}
				onChange={handleEmailChange}
				required
				fullWidth
			/> */}
			<Box
				component="input"
				type="email"
				name="email"
				id="email"
				value={email}
				onChange={handleEmailChange}
				placeholder="Email"
				sx={{
					padding: "1rem 0.5rem",
					outline: "none",
					border: "2px solid #000",
					borderRadius: 1,
					width: {xs: "100%!important", md: "50%!important"},
					margin: "0!important",
				}}
			/>
			<Button
				type="submit"
				variant="contained"
				sx={{
					py: "0.7rem",
					backgroundColor: theme.palette.custom.paratha,
					"&:hover": {
						backgroundColor: theme.palette.custom.paratha,
					},
					width: {xs: "40%!important", md: "30%!important"},
				}}
				disableRipple
				disableElevation
			>
				Subscribe
			</Button>
		</Box>
	);
};

export default EmailSubscriptionForm;
