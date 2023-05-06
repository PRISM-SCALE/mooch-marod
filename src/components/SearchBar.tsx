import {Box, InputBase} from "@mui/material";
import {alpha, styled} from "@mui/material/styles";
import Iconify from "./Iconify";

const Search = styled(Box)(({theme}) => ({
	position: "relative",
	borderRadius: 30,
	backgroundColor: alpha(theme.palette.common.white, 0.15),
	transition: theme.transitions.create("background-color"),
	"&:hover": {
		backgroundColor: alpha(theme.palette.common.white, 0.5),
	},
	marginLeft: 0,
	width: "100%",
	[theme.breakpoints.up("sm")]: {
		marginLeft: theme.spacing(1),
		width: "auto",
	},
}));

const SearchIconWrapper = styled(Box)(({theme}) => ({
	padding: theme.spacing(0, 2),
	height: "100%",
	position: "absolute",
	pointerEvents: "none",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({theme}) => ({
	color: "inherit",
	"& .MuiInputBase-input": {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)})`,
		transition: theme.transitions.create("width"),
		width: "50%",
		[theme.breakpoints.up("sm")]: {
			width: 0,
			"&:focus": {
				width: "20ch",
			},
		},
	},
}));

const SearchBar = () => {
	return (
		<Search>
			<SearchIconWrapper>
				<Iconify icon={"tabler:search"} size={24} />
			</SearchIconWrapper>
			<StyledInputBase placeholder="Search…" inputProps={{"aria-label": "search"}} />
		</Search>
	);
};

export default SearchBar;
