import css from "./PsychologistReviews.module.css";
import Button from "../Button/Button";
import IconNoTheme from "../Icon/IconNoTheme";
import { useModal } from "../../context/ModalContext";
import ReviewsForm from "../ReviewsForm/ReviewsForm";

const PsychologistReviews = ({ avatar, name, reviews }) => {
	const { openModal } = useModal(); // Доступ к функции для открытия модального окна

	const handleMakeAppointment = () => {
		// Открываем модальное окно с формой
		openModal(<ReviewsForm avatar={avatar} name={name} />);
	};

	return (
		<>
			<ul className={css.reviewsList}>
				{reviews.map((review, index) => {
					return (
						<li key={index} className={css.reviewsListItem}>
							<ul className={css.reviewsHeader}>
								<span>{review.reviewer.slice(0, 1)}</span>
								<ul className={css.reviewsHeaderWrap}>
									<p className={css.reviewsAuthor}>{review.reviewer}</p>
									<ul className={css.reviewsRatingWrap}>
										<IconNoTheme id="icon-star" width={14} height={14} />
										<p className={css.reviewsRating}>{review.rating}</p>
									</ul>
								</ul>
							</ul>
							<p className={css.reviewsText}>{review.comment}</p>
						</li>
					);
				})}
			</ul>
			<button
				className={css.reviewsBtn}
				type="button"
				onClick={handleMakeAppointment}
			>
				Make an appointment
			</button>
		</>
	);
};

export default PsychologistReviews;
