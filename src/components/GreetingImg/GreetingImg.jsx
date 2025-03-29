import css from "./GreetingImg.module.css";
import GreetingExperience from "../GreetingExperience/GreetingExperience";
import homeImage1x from "../../assets/image/home@1x.jpg";
import homeImage2x from "../../assets/image/home@2x.jpg";

const GreetingImg = () => {
	return (
		<li className={css.liImg}>
			<img
				className={css.img}
				src={homeImage1x}
				srcSet={`${homeImage1x} 1x, ${homeImage2x} 2x`}
				alt="Girl with glasses"
			/>
			<div className={css.greetingExperienceContainer}>
				<GreetingExperience />
			</div>
		</li>
	);
};

export default GreetingImg;
