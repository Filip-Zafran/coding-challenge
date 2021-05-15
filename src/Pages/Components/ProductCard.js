import React from 'react';

export default function ProductCard({ product }) {
	return (
		<div className="product-card">
			<img className="product__image" src={product.vehicle_picture_front} />
			<h2 className="product__title">{product.title}</h2>
			<ul className="product__tags">{product.tags.map((tag) => <li className="product__tag">{tag}</li>)}</ul>
			<footer className="product__footer">
				<div className="product__id">
					<div className="product__code">{product.shortCode}</div>
					<div className="product__location">{product.location}</div>
				</div>
				<div className="product__prices">
					<div className="product__price">
						<div className="product__price-label"> Ask Price</div>
						<div className="product__ask-price">{product.askPrice} &euro;</div>
					</div>
					<div className="product__price">
						<div className="product__price-label">
							<b>Current Offer</b>
						</div>
						<div className="product__highest-bid">
							<b>{product.highestBid} &euro;</b>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}
