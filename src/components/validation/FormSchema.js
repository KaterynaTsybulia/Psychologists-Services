import * as Yup from "yup";

export const DetailsFormSchema = Yup.object().shape({
	name: Yup.string()
		.min(3, "Too Short!")
		.max(50, "Too Long!")
		.required("Name is required!"),
	tel: Yup.string()
		.min(3, "Too Short!")
		.max(50, "Too Long!")
		.matches(/[0-9]/, "The number must consist of numbers!")
		.required("Phone number is required!"),
	time: Yup.string().required("Time is required!"),
	email: Yup.string()
		.email("Email must be a valid!")
		.required("Email is required!"),
	comment: Yup.string().required("Comment is required!"),
});
