import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

import {fk_background} from "../utils/common";

export default function Loader() {
	// const [open, setOpen] = React.useState(false);
	// const handleClose = () => {
	// 	setOpen(false);
	// };
	// const handleOpen = () => {
	// 	setOpen(true);
	// };

	return (
		<div>
			<Backdrop
				sx={{
					color: "#fff",
					zIndex: (theme) => theme.zIndex.drawer + 1,
					background: fk_background,
				}}
				open={true}
				// onClick={handleClose}
			>
				<CircularProgress color="inherit" />
			</Backdrop>
		</div>
	);
}
