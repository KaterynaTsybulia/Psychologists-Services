import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";
import { ref, push, set } from "firebase/database";

// import TimeSelect from "../TimeSelect/TimeSelect.jsx";
import { db } from "../../firebaseConfig.js";
import { useModal } from "../../context/ModalContext.jsx";
import { DetailsFormSchema } from "../validation/FormSchema.js";

import css from "./ReviewsForm.module.css";

const ReviewsForm = ({ name, avatar }) => {
	const { closeModal } = useModal();

	const {
		register,
		handleSubmit,
		formState: { errors },
		setValue,
		reset,
	} = useForm({
		resolver: yupResolver(DetailsFormSchema),
	});

	// const handleTimeSelect = (time) => {
	// 	setValue("time", time);
	// };

	const onSubmit = async (data) => {
		try {
			const appointmentsRef = ref(db, "appointments");
			const newAppointmentRef = push(appointmentsRef);

			await set(newAppointmentRef, {
				name: data.name,
				tel: data.tel,
				time: data.time,
				email: data.email,
				comment: data.comment,
			});

			toast.success("Successfully created personal meeting appointment");
			reset();
			closeModal();
		} catch (error) {
			toast.error("Failed to create appointment. Please try again later.");
		}
	};

	return (
		<>
			<div className={css.modalTitleWrap}>
				<h2 className={css.modalTitle}>Make an appointment with a psychologists</h2>
				<p className={css.modalText}>
					You are on the verge of changing your life for the better. Fill out the
					short form below to book your personal appointment with a professional
					psychologist. We guarantee confidentiality and respect for your privacy.
				</p>

				<div className={css.psychologistContainer}>
					<img className={css.psychologistImg} src={avatar} alt="Avatar" />
					<div className={css.psychologistWrap}>
						<p className={css.psychologistText}>Your psychologists</p>
						<h3 className={css.psychologistName}>{name}</h3>
					</div>
				</div>
			</div>

			<form onSubmit={handleSubmit(onSubmit)}>
				<div className={css.formWrapper}>
					<label>
						<input
							className={css.input}
							{...register("name")}
							type="text"
							placeholder="Name"
						/>
						{errors.name && <p className={css.error}>{errors.name?.message}</p>}
					</label>
					<div className={css.telTimeWrap}>
						<label>
							<input
								className={css.input}
								{...register("tel")}
								type="tel"
								placeholder="+380"
							/>
							{errors.tel && <p className={css.error}>{errors.tel?.message}</p>}
						</label>
						<label>
							{/* <TimeSelect onTimeSelect={handleTimeSelect} /> */}
							{errors.time && <p className={css.error}>{errors.time?.message}</p>}
						</label>
					</div>
					<label>
						<input
							className={css.input}
							{...register("email")}
							type="email"
							placeholder="Email"
						/>
						{errors.email && <p className={css.error}>{errors.email?.message}</p>}
					</label>
					<textarea
						className={css.inputComment}
						{...register("comment")}
						type="text"
						placeholder="Comment"
					/>
				</div>
				<button className={css.formBtn} type="submit">
					Send
				</button>
			</form>
		</>
	);
};

export default ReviewsForm;
