/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

const ProductCarrousel = ({ prod }) => {
	const [imageId, setImageId] = useState(1);

	const handleImageClick = (i) => {
		setImageId(i + 1);
	};

	const handlePrev = () => {
		if (imageId > 1) {
			setImageId(imageId - 1);
		}
	};

	const handleNext = () => {
		if (imageId < (prod?.images.length || 0)) {
			setImageId(imageId + 1);
		}
	};

	useEffect(() => {
		const smallImages = document.querySelectorAll('.small');
		const bigImages = document.querySelectorAll('.big');

		smallImages.forEach((smImg, i) => {
			if (i === imageId - 1) {
				smImg.classList.add('active');
			} else {
				smImg.classList.remove('active');
			}
		});

		bigImages.forEach((bigImg, i) => {
			if (i === imageId - 1) {
				bigImg.classList.add('active');
			} else {
				bigImg.classList.remove('active');
			}
		});

	}, [imageId]);

	return (
		<header id="carrousel">
			<button className="carrousel__btn" onClick={handlePrev}>
				<i className="carrousel__icon fa-solid fa-angle-left"></i>
			</button>
			<div className="carrousel__box">
				<div
					className="carrousel__box-bigImages"
					style={{ transform: `translateX(-${(imageId - 1) * 100 / 3}%)` }}
				>
					{prod?.images.map((prodImg) => (
						<img
							className="carrousel__img big"
							src={prodImg.url}
							alt="prod-img"
							key={prodImg.id}
						// style={{opacity: `${imageId}`}}
						/>
					))}
				</div>
				<div className="carrousel__box-smallImages">
					{prod?.images.map((prodImg, i) => (
						<img
							className={`carrousel__img small ${i === imageId - 1 ? 'active' : ''}`}
							src={prodImg.url}
							alt="prod-img"
							key={prodImg.id}
							id={prodImg.id}
							onClick={() => handleImageClick(i)}
						/>
					))}
				</div>
			</div>
			<button className="carrousel__btn" onClick={handleNext}>
				<i className="carrousel__icon fa-solid fa-angle-right"></i>
			</button>
		</header>
	);
};

export default ProductCarrousel;
