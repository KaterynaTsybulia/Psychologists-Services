import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

import { ThemeProvider } from "./context/ThemeContext";
import { ModalProvider } from "./context/ModalContext";

import ThemeSwitcher from "./components/ThemeSwitcher/ThemeSwitcher";
import Loader from "./components/Loader/Loader";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

import { AuthProvider } from "./context/AuthContext";
import { Header } from "./components/Header/Header";
import Modal from "./components/Modal/Modal";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const PsychologistsPage = lazy(() =>
	import("./pages/PsychologistsPage/PsychologistsPage")
);

export default function App() {
	return (
		<AuthProvider>
			<ModalProvider>
				<ThemeProvider>
					<ThemeSwitcher />
					<Modal />
					<Suspense fallback={<Loader />}>
						<Header />
						<Routes>
							<Route path="/" element={<HomePage />} />
							<Route path="/psychologists" element={<PsychologistsPage />} />
							<Route path="*" element={<NotFoundPage />} />
						</Routes>
					</Suspense>
				</ThemeProvider>
			</ModalProvider>
		</AuthProvider>
	);
}
