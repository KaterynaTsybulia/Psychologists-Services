import { useState, useEffect } from "react";
import { ref, get } from "firebase/database";

import { db } from "../../firebaseConfig";
import PsychologistCard from "../PsychologistCard/PsychologistCard";

import css from "./PsychologistsList.module.css";

const PsychologistsList = () => {
	const [psychologists, setPsychologists] = useState([]);
	const [loadedCount, setLoadedCount] = useState(3);
	const [allLoaded, setAllLoaded] = useState(false);

	useEffect(() => {
		const fetchPsychologists = async () => {
			const dbRef = ref(db, "psychologists");
			try {
				const snapshot = await get(dbRef);
				if (snapshot.exists()) {
					const data = snapshot.val();
					setPsychologists(data);
				} else {
					console.log("No data available");
				}
			} catch (error) {
				console.error("Error fetching data from Firebase:", error);
			}
		};

		fetchPsychologists();
	}, []);

	const handleLoadMore = () => {
		if (loadedCount + 3 >= psychologists.length) {
			setAllLoaded(true);
		}
		setLoadedCount(loadedCount + 3);
	};

	return (
		<ul className={css.list}>
			{psychologists.slice(0, loadedCount).map((psychologist, index) => (
				<PsychologistCard key={index} {...psychologist} />
			))}
			{!allLoaded && (
				<button type="submit" className={css.loadMore} onClick={handleLoadMore}>
					Load More
				</button>
			)}
		</ul>
	);
};

export default PsychologistsList;
