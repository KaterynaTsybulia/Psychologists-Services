import toast from "react-hot-toast";
import { ref, push, set } from "firebase/database";
import { db } from "../../firebaseConfig.js";
import { useState } from "react";
import css from "./DetailsForm.module.css";
import { handleDetail } from "../../utils/authHandlers.js";
import IconNoTheme from "../Icon/IconNoTheme.jsx";

const DetailsForm = ({ avatar, name }) => {
	const [isOpen, closeModal] = useState(false);
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [comment, setComment] = useState("");
	const [time, setTime] = useState("");
	const [error, setError] = useState("");

	const handleFormSubmit = (e) => {
		e.preventDefault();
		handleDetail(email, name, setError, closeModal, phone, comment, time);
	};

	return (
		<div className={css.overlay}>
			<div className={css.modal}>
				<button onClick={closeModal} className={css.closeBtn}>
					<IconNoTheme id="icon-x" width="32" height="32" />
				</button>
				<h2 className={css.title}>Make an appointment with a psychologist</h2>
				<p className={css.text}>
					You are on the verge of changing your life for the better. Fill out the
					short form below to book your personal appointment with a professional
					psychologist. We guarantee confidentiality and respect for your privacy.
				</p>
				<div className={css.wrap}>
					<img className={css.img} src={avatar} alt={name} />
					<div className={css.wrapName}>
						<p className={css.textName}>Your psychologists</p>
						<h3 className={css.name}>{name}</h3>
					</div>
				</div>

				<form onSubmit={handleFormSubmit} className={css.form}>
					<label>
						<input id="name" className={css.input} type="text" placeholder="Name" />
					</label>

					<div className={css.wrapTelTime}>
						<label className={css.inputWrap}>
							<input
								id="phone"
								className={css.input}
								type="tel"
								placeholder="+380"
								value={phone}
								onChange={(e) => setPhone(e.target.value)}
								required
							/>
						</label>

						<label className={css.inputWrap}>
							<input
								id="time"
								className={css.input}
								type="text"
								placeholder="00:00"
								value={time}
								onChange={(e) => setTime(e.target.value)}
								required
							/>
						</label>
					</div>

					<label>
						<input
							id="email"
							className={css.input}
							type="email"
							placeholder="Email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
						/>
					</label>

					<label>
						<textarea
							id="comment"
							className={`${css.input} ${css.inputComment}`}
							placeholder="Comment"
							value={comment}
							onChange={(e) => setComment(e.target.value)}
						/>
					</label>

					<button className={css.button} type="submit">
						Send
					</button>

					{error && <p className={css.error}>{error}</p>}
				</form>
			</div>
		</div>
	);
};

export default DetailsForm;
