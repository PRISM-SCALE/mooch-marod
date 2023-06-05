export interface ContactFormState {
	name: string;
	email: string;
	phone: string;
	message: string;
}

export const initialFormData: ContactFormState = {
	name: "",
	email: "",
	phone: "",
	message: "",
};
