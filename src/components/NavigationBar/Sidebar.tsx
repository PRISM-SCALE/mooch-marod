import {Box, Drawer, List, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import {Link} from "react-router-dom";

// Navigation Links
import {ROOT_LINK, menuLinks} from "../../utils/links";
import {logo_black} from "../../utils/common";

// TYPES
import {Anchor} from "../../types/anchor";

// COMPONENTS
import Iconify from "../Iconify";
import Logo from "../Logo";

type Props = {
	anchor: Anchor;
	open: boolean;
	onClose: () => void;
};

const Sidebar = ({anchor, open, onClose}: Props) => {
	return (
		<Drawer
			variant="temporary"
			ModalProps={{
				keepMounted: false,
			}}
			anchor={anchor}
			open={open}
			onClose={onClose}
		>
			<Box sx={{width: anchor === "top" || anchor === "bottom" ? "auto" : 250}} role="presentation">
				<Box textAlign={"center"}>
					<Link to={ROOT_LINK}>
						<Logo width={{xs: 100, md: 100}} height={{xs: 100, md: 100}} logo={logo_black} />
					</Link>
				</Box>
				<List>
					{menuLinks.map(({icon, link, path}) => (
						<ListItemButton component={Link} to={link} onClick={onClose} key={icon}>
							<ListItemIcon>
								<Iconify icon={icon} size={20} />
							</ListItemIcon>
							<ListItemText primary={path} />
						</ListItemButton>
					))}
				</List>
			</Box>
		</Drawer>
	);
};

export default Sidebar;
