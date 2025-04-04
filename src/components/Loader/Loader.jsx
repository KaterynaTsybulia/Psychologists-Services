import { PropagateLoader } from "react-spinners";

import css from "./Loader.module.css";

const Loader = () => {
	return (
		<div className={css.spinner}>
			<PropagateLoader />
		</div>
	);
};

export default Loader;
