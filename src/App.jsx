import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

import { ThemeProvider } from "./context/ThemeContext";
import ThemeSwitcher from "./components/ThemeSwitcher/ThemeSwitcher";
import Loader from "./components/Loader/Loader";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

import Header from "./components/Header/Header";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const PsychologistsPage = lazy(() =>
	import("./pages/PsychologistsPage/PsychologistsPage")
);

export default function App() {
	return (
		<ThemeProvider>
			<ThemeSwitcher />
			<Suspense fallback={<Loader />}>
				<Header />
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/psychologists" element={<PsychologistsPage />} />
					<Route path="*" element={<NotFoundPage />} />
				</Routes>
			</Suspense>
		</ThemeProvider>
	);
}
