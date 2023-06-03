export interface FormData {
	name: string;
	phone: string;
	email: string;
	timeSlot: Date | null;
}

export const initialFormData: FormData = {
	name: "",
	phone: "",
	email: "",
	timeSlot: null,
};
