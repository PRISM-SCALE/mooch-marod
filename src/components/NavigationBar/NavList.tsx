import {Menu} from "@mui/material";
import NavItem from "./NavItem";
import {menuLinks} from "../../utils/links";

type Props = {
	open: boolean;
	handleClose: () => void;
	anchorEl: HTMLElement | null;
};

const NavList = ({open, anchorEl, handleClose}: Props) => {
	return (
		<Menu
			id="basic-menu"
			anchorEl={anchorEl}
			open={open}
			onClose={handleClose}
			MenuListProps={{
				"aria-labelledby": "basic-button",
			}}
			PaperProps={{
				sx: {
					padding: 2,
					width: 200,
				},
			}}
		>
			{menuLinks.map(({link, path}, key) => (
				<NavItem link={link} path={path} key={key} onClick={handleClose} />
			))}
		</Menu>
	);
};

export default NavList;
