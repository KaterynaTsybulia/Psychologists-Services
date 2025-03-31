// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database"; // Импортируем нужную функцию

const firebaseConfig = {
	apiKey: "AIzaSyDmitq5sWl8TeJT4TiOM4aBIWOZ68VVqQM",
	authDomain: "psychologists-services-94133.firebaseapp.com",
	projectId: "psychologists-services-94133",
	storageBucket: "psychologists-services-94133.firebasestorage.app",
	messagingSenderId: "134923602194",
	appId: "1:134923602194:web:92b8d897e3f51cc7414bcb",
	measurementId: "G-ST2BFM7YBV",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getDatabase(app); // Получаем объект базы данных

export { app, analytics, auth, db }; // Экспортируем объект базы данных
