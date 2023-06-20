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
	position: "relative",
	display: "flex",
	alignItems: "center",
	gap: 4,
	// paddingLeft: "20px",

	transition: theme.transitions.create("color"),

	"&:hover": {
		color: theme.palette.custom.butter,
	},

	"&.active": {
		color: theme.palette.custom.butter,
	},

	"&::before, &.active::before": {
		content: '""',
		background: "url(/mooch.svg)",
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		transition: theme.transitions.create("opacity"),

		width: "30px",
		height: "30px",

		opacity: 0,
	},

	"&:hover::before, &.active::before": {
		opacity: 1,
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
