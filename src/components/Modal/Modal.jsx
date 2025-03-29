import {
	getAuth,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
} from "firebase/auth";
import { useState } from "react";

import { app } from "../../firebaseConfig";
import { useModal } from "../../context/ModalContext";
import IconNoTheme from "../Icon/IconNoTheme";

import css from "./Modal.module.css";

const Modal = () => {
	const { isOpen, closeModal, type } = useModal();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [name, setName] = useState("");
	const [error, setError] = useState("");
	const [showPassword, setShowPassword] = useState(false);

	const togglePasswordVisibility = () => {
		setShowPassword(!showPassword);
	};

	const auth = getAuth(app);

	const handleLogin = (e) => {
		e.preventDefault();

		if (!email || !password) {
			setError("Email and Password are required!");
			return;
		}

		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				console.log("User logged in:", userCredential.user);
				closeModal();
			})
			.catch((err) => {
				console.error(err);
				setError(err.message);
			});
	};

	const handleRegister = (e) => {
		e.preventDefault();

		if (!email || !password || !name) {
			setError("All fields are required!");
			return;
		}

		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				console.log("User registered:", userCredential.user);
				closeModal();
			})
			.catch((err) => {
				console.error(err);
				setError(err.message);
			});
	};

	if (!isOpen) return null;

	return (
		<div className={css.overlay}>
			<div className={css.modal}>
				<button onClick={closeModal} className={css.closeBtn}>
					<IconNoTheme id="icon-x" width="32" height="32" />
				</button>
				<h2 className={css.title}>
					{type === "login" ? "Log In" : "Registration"}
				</h2>
				<p className={css.text}>
					{type === "login"
						? "Welcome back! Please enter your credentials to access your account and continue your search for a psychologist."
						: "Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information."}
				</p>
				{error && <p className={css.error}>{error}</p>}

				<form onSubmit={type === "login" ? handleLogin : handleRegister}>
					{type === "register" && (
						<div style={{ marginBottom: "18px" }}>
							<label htmlFor="name" />
							<input
								type="text"
								id="name"
								value={name}
								onChange={(e) => setName(e.target.value)}
								placeholder="Name"
								required
								className={css.input}
							/>
						</div>
					)}
					<div style={{ marginBottom: "18px" }}>
						<label htmlFor="email" />
						<input
							type="email"
							id="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							placeholder="Email"
							required
							className={css.input}
						/>
					</div>
					<div style={{ position: "relative" }}>
						<label htmlFor="password" />
						<input
							type={showPassword ? "text" : "password"}
							id="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							placeholder="Password"
							required
							className={css.input}
						/>
						<button
							type="button"
							onClick={togglePasswordVisibility}
							style={{
								position: "absolute",
								right: "10px",
								top: "50%",
								transform: "translateY(-50%)",
								background: "none",
								border: "none",
								cursor: "pointer",
								zIndex: 1,
							}}
						>
							<IconNoTheme
								id={showPassword ? "icon-eye" : "icon-eye-off"}
								useThemeColor={false}
							/>
						</button>
					</div>

					<button type="submit" className={css.button}>
						{type === "login" ? "Log In" : "Register"}{" "}
					</button>
				</form>
			</div>
		</div>
	);
};

export default Modal;
