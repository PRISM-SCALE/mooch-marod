import {useState} from "react";
import {
	BottomNavigation,
	BottomNavigationAction,
	Box,
	Paper,
	Slide,
	useScrollTrigger,
	useTheme,
} from "@mui/material";
import {menuLinks} from "../../../utils/links";
import Iconify from "../../Iconify";
import {Link} from "react-router-dom";

const MobileNavigation = () => {
	const theme = useTheme();
	const [value, setValue] = useState("home");

	const trigger = useScrollTrigger();

	const handleChange = (event: React.SyntheticEvent, newValue: string) => {
		setValue(newValue);
	};

	return (
		<Slide direction="up" in={trigger}>
			<Paper
				sx={{
					position: "fixed",
					bottom: 0,
					left: 0,
					right: 0,
					zIndex: theme.zIndex.drawer + 1,
				}}
				elevation={3}
			>
				<BottomNavigation
					showLabels
					value={value}
					onChange={handleChange}
					sx={{background: theme.palette.custom.achar}}
				>
					{menuLinks.map(({icon, link, path}) => (
						<Link to={link} key={icon}>
							<BottomNavigationAction
								// key={icon}
								label={path}
								icon={<Iconify icon={icon} size={20} sx={{color: "white"}} />}
								sx={{minWidth: "auto"}}
							/>
						</Link>
					))}
				</BottomNavigation>
			</Paper>
		</Slide>
	);
};

export default MobileNavigation;
