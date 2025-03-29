import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
	apiKey: "AIzaSyDmitq5sWl8TeJT4TiOM4aBIWOZ68VVqQM",
	authDomain: "psychologists-services-94133.firebaseapp.com",
	projectId: "psychologists-services-94133",
	storageBucket: "psychologists-services-94133.firebasestorage.app",
	messagingSenderId: "134923602194",
	appId: "1:134923602194:web:92b8d897e3f51cc7414bcb",
	measurementId: "G-ST2BFM7YBV",
};

export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
