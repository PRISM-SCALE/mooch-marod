// eslint-disable-next-line
// @ts-ignore
import {} from "@mui/material/styles";

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
