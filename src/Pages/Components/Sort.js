import React from 'react';
import './Sort.css';

export default function Sort() {
	return (
		<div className="filter">
			<p>Sort</p>

			<select className="dropdown__select">
				<option value="publishingDate">Publishing Date</option>
				<option value="highestBid">Highest Bid</option>
			</select>
		</div>
	);
}
