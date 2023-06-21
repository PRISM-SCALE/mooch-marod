import React, {useState} from "react";
// import {decode} from "html-entities";
import {Box, Button, TextField, Typography, useTheme} from "@mui/material";

type Props = {
	status: "error" | "success" | "sending" | null;
	message: string | Error | null;
	onSubmitted: (data: any) => void;
};

const EmailSubscriptionForm = ({status, message, onSubmitted}: Props) => {
	const theme = useTheme();
	const [email, setEmail] = useState("");
	const [emailError, setEmailError] = useState<string | null>(null);

	console.log(message);

	const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(event.target.value);
	};

	const handleBlur = () => {
		const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

		if (!emailRegex.test(email)) {
			setEmailError("Invalid email address");
		} else {
			setEmailError("");
		}
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setEmailError(null);

		// Here you can add the logic to submit the email

		email && email.indexOf("@") > -1 && onSubmitted({EMAIL: email});
		setEmail("");
	};

	/**
	 * Extract message from string.
	 *
	 * @param {String} message
	 * @return {null|*}
	 */
	// const getMessage = (message: any) => {
	// 	if (!message) {
	// 		return null;
	// 	}
	// 	const result = message?.split("-") ?? null;
	// 	if ("0" !== result?.[0]?.trim()) {
	// 		return decode(message);
	// 	}
	// 	const formattedMessage = result?.[1]?.trim() ?? null;
	// 	return formattedMessage ? decode(formattedMessage) : null;
	// };

	let buttonText: string;

	if (status === "sending") {
		buttonText = "Loading...";
	} else if (status === "success") {
		buttonText = "Subscribed";
	} else {
		buttonText = "Subscribe";
	}

	return (
		<Box
			component="form"
			onSubmit={handleSubmit}
			sx={{
				"& > :not(style)": {m: 1, width: "100%"},

				display: "flex",
				alignItems: "center",
				flexDirection: {xs: "column", md: "row"},

				[theme.breakpoints.up("sm")]: {
					pt: "1rem",
					px: "1rem",
				},
			}}
			autoComplete="off"
		>
			<Box>
				<TextField
					placeholder="Email"
					variant="outlined"
					type="email"
					value={email}
					onChange={handleEmailChange}
					onBlur={handleBlur}
					// InputProps={{
					// 	endAdornment: <InputAdornment position="end"></InputAdornment>,
					// }}
					// error={status === "error" || !!emailError}
					// helperText={}
					sx={{
						display: "block",
						borderRadius: "4px",
						backgroundColor: "white",
						outline: "none",
						"& fieldset": {border: "none"},
					}}
					required
					fullWidth
				/>
				{(status === "error" && `Something went wrong!!`) || emailError ? (
					<Typography
						variant="caption"
						sx={{display: "block", color: theme.palette.custom.paratha}}
					>
						{emailError}
					</Typography>
				) : null}
			</Box>

			<Button
				type="submit"
				variant="contained"
				sx={{
					py: "0.7rem",
					backgroundColor: theme.palette.custom.paratha,
					"&:hover": {
						backgroundColor: theme.palette.custom.paratha,
					},
					width: {xs: "80%!important", sm: "30%!important"},
					borderRadius: 30,
				}}
				disableRipple
				disableElevation
			>
				{buttonText}
			</Button>
		</Box>
	);
};

export default EmailSubscriptionForm;
