import {
	getAuth,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	updateProfile,
} from "firebase/auth";
import { app } from "../firebaseConfig";

const auth = getAuth(app);

export const handleLogin = async (email, password, setError, closeModal) => {
	if (!email || !password) {
		setError("Email and Password are required!");
		return;
	}

	try {
		const userCredential = await signInWithEmailAndPassword(
			auth,
			email,
			password
		);
		console.log("User logged in:", userCredential.user);
		closeModal();
	} catch (err) {
		console.error(err);
		setError(err.message);
	}
};

export const handleRegister = async (
	email,
	password,
	name,
	setError,
	closeModal
) => {
	if (!email || !password || !name) {
		setError("All fields are required!");
		return;
	}

	try {
		const userCredential = await createUserWithEmailAndPassword(
			auth,
			email,
			password
		);
		console.log("User registered:", userCredential.user);

		const user = userCredential.user;

		await updateProfile(user, { displayName: name });
		console.log("Profile updated");
		closeModal();
	} catch (err) {
		console.error(err);
		setError(err.message);
	}
};
