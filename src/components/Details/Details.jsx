import IconNoTheme from "../Icon/IconNoTheme";

import DetailsForm from "../DetailsForm/DetailsForm.jsx";
import { useModal } from "../../context/ModalContext";

import css from "./Details.module.css";
import Button from "../Button/Button.jsx";
import { useState } from "react";

const Details = ({ psychologist }) => {
	const { avatar_url, name, reviews } = psychologist;
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [modalContent, setModalContent] = useState(null);
	const openModal = () => {
		setModalContent(<DetailsForm avatar={avatar_url} name={name} />);
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
		setModalContent(null);
	};

	// const { avatar_url, name, reviews } = psychologist;
	// const { openModal } = useModal();

	return (
		<>
			<ul className={css.reviewsList}>
				{reviews.map((review, index) => (
					<li key={index} className={css.reviewsListItem}>
						<div className={css.reviewsHeader}>
							<span>{review.reviewer.slice(0, 1)}</span>
							<div className={css.reviewsHeaderWrap}>
								<p className={css.reviewsAuthor}>{review.reviewer}</p>
								<div className={css.reviewsRatingWrap}>
									<IconNoTheme id="icon-star" className={css.svg} />
									<p className={css.reviewsRating}>{review.rating}</p>
								</div>
							</div>
						</div>
						<p className={css.reviewsText}>{review.comment}</p>
					</li>
				))}
			</ul>

			<Button
				className={css.reviewsBtn}
				type="button"
				text="Make an appointment"
				onClick={openModal}
			/>

			{isModalOpen && (
				<div className={css.modal}>
					<div className={css.modalContent}>
						<button onClick={closeModal} className={css.closeBtn}>
							X
						</button>
						{modalContent}
					</div>
				</div>
			)}
		</>
	);
};

export default Details;
