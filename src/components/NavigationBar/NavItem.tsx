import {styled} from "@mui/material/styles";
import {NavLink} from "react-router-dom";

type Props = {
	link: string;
	path: string;
};

const LinkWrapper = styled(NavLink)(({theme}) => ({
	textDecoration: "none",
	color: theme.palette.common.white,
	fontSize: ".8rem",

	transition: theme.transitions.create("color"),
	"&:hover": {
		color: theme.palette.custom.butter,
	},

	[theme.breakpoints.down("md")]: {
		display: "none",
	},
}));

const NavItem = ({link, path}: Props) => {
	return (
		<LinkWrapper
			to={link}
			className={({isActive, isPending}) => (isPending ? "pending" : isActive ? "active" : "")}
		>
			{path.toUpperCase()}
		</LinkWrapper>
	);
};

export default NavItem;
