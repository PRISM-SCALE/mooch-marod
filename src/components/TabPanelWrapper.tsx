import {Box} from "@mui/material";

type Props = {
	children?: React.ReactNode;
	value: number;
	index: number;
	otherStyles?: object;
};

const TabPanelWrapper = ({children, value, index, otherStyles, ...others}: Props) => {
	return (
		<Box
			role="tabpanel"
			hidden={value !== index}
			aria-labelledby={`full-width-tab-${index}`}
			{...others}
		>
			{value === index && <Box sx={{...otherStyles}}>{children}</Box>}
		</Box>
	);
};

export default TabPanelWrapper;
