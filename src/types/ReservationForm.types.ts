export interface FormData {
	name: string;
	phone: string;
	location: string;
	timeSlot: Date | null;
}

export const initialFormData: FormData = {
	name: "",
	phone: "",
	location: "",
	timeSlot: null,
};
