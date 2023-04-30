// eslint-disable-next-line
import {Palette, PaletteColor} from "@mui/material/styles/createPalette";

declare module "@mui/material/styles/createPalette" {
	interface PaletteColor {
		// [key: "achar" | "pani" | "paratha" | "conceot" | "butter"]: string;
		achar: string;
		pani: string;
		paratha: string;
		conceot: string;
		butter: string;
	}

	interface Palette {
		custom: PaletteColor;
	}
}
