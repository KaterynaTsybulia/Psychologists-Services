import PsychologistsList from "../../components/PsychologistsList/PsychologistsList";

import css from "./PsychologistsPage.module.css";

const PsychologistsPage = () => {
	return (
		<section className={css.psychologistsPage}>
			<PsychologistsList />
		</section>
	);
};

export default PsychologistsPage;
