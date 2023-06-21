import {styled} from "@mui/material/styles";
import {NavLink} from "react-router-dom";

type Props = {
	link: string;
	path: string;
	onClick: () => void;
};

const LinkWrapper = styled(NavLink)(({theme}) => ({
	textDecoration: "none",
	color: theme.palette.common.black,
	fontSize: ".8rem",
	position: "relative",
	display: "flex",
	alignItems: "center",
	gap: 4,
	flex: 1,
	paddingBottom: "15px",
	fontWeight: 600,

	transition: theme.transitions.create(["color", "backgroundColor"]),

	"&:hover, &.active": {
		color: theme.palette.custom.paratha,
		// borderBottom: `2px solid ${theme.palette.custom.paratha}`,
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

	// [theme.breakpoints.down("md")]: {
	// 	display: "none",
	// },
}));

const NavItem = ({link, path, onClick}: Props) => {
	return (
		<LinkWrapper
			to={link}
			className={({isActive, isPending}) => (isPending ? "pending" : isActive ? "active" : "")}
			onClick={onClick}
		>
			{path.toUpperCase()}
		</LinkWrapper>
	);
};

export default NavItem;
