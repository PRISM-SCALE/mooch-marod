// eslint-disable-next-line
import {Palette, PaletteColor, PaletteOptions} from "@mui/material/styles";

declare module "@mui/material/styles" {
	interface PaletteColor {
		// [key: "achar" | "pani" | "paratha" | "conceot" | "butter"]: string;
		achar: string;
		pani: string;
		paratha: string;
		conceot: string;
		butter: string;
	}

	interface PaletteOptions {
		custom?: {
			achar: string;
			pani: string;
			paratha: string;
			conceot: string;
			butter: string;
		};
	}

	interface Palette {
		custom: PaletteColor;
	}
}
