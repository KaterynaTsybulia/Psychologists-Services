import toast from "react-hot-toast";
import { useState } from "react";

import PsychologistReviews from "../PsychologistReviews/PsychologistReviews";
import IconNoTheme from "../Icon/IconNoTheme";

import css from "./PsychologistCard.module.css";

const PsychologistCard = ({
	name,
	avatar_url,
	specialization,
	experience,
	price_per_hour,
	rating,
	about,
	license,
	initial_consultation,
	reviews,
}) => {
	const [openReadMore, setOpenReadMore] = useState(false);

	const onOpenReadMore = () => {
		setOpenReadMore(true);
	};

	return (
		<li className={css.cardItem}>
			<aside className={css.avatarWrap}>
				<img className={css.avatar} src={avatar_url} alt="Photo" />
				<IconNoTheme id="icon-online" width={14} height={14} />
			</aside>
			<article className={css.infoHead}>
				<ul className={css.infoHeadList}>
					<li className={css.infoHeadItem}>
						<p className={css.infoHeadTitle}>Psychologist</p>
						<h3 className={css.infoHeadName}>{name}</h3>
					</li>
					<li className={css.boxStar}>
						<aside className={css.ratingBox}>
							<IconNoTheme id="icon-star" width={14} height={14} />
							<p className={css.ratingText}>Rating: {rating}</p>
						</aside>
						<p className={css.priceText}>
							Price / 1 hour: <span>{price_per_hour}$</span>
						</p>
						{/* <button
							className={css.favoriteBtn}
							type="button"
							onClick={() => addFavorite(data)}
						>
							{isFavorite && isLoggedIn ? (
								<svg className={css.favoriteSvg} width={20} height={20}>
									<use href={icons + "#icon-heart-selected"}></use>
								</svg>
							) : (
								<svg width={20} height={20}>
									<use href={icons + "#icon-heart"}></use>
								</svg>
							)}
						</button> */}
					</li>
				</ul>
				<ul className={css.infoList}>
					<li className={css.infoListItem}>
						Experience: <span>{experience}</span>
					</li>
					<li className={css.infoListItem}>
						License: <span>{license}</span>
					</li>
					<li className={css.infoListItem}>
						Specialization: <span>{specialization}</span>
					</li>
					<li className={css.infoListItem}>
						Initial_consultation: <span>{initial_consultation}</span>
					</li>
				</ul>
				<p className={css.infoText}>{about}</p>

				{!openReadMore ? (
					<button
						className={css.buttonReadMore}
						type="button"
						onClick={onOpenReadMore}
					>
						Read more
					</button>
				) : (
					<aside className={css.details}>
						<PsychologistReviews avatar={avatar_url} name={name} reviews={reviews} />
					</aside>
				)}
			</article>
		</li>
	);
};

export default PsychologistCard;
