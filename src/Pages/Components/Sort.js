import React from 'react';
import './Sort.css';

export default function Sort() {
	return (
		<div className="filter">
			<p>Sort</p>
			<div class="dropdown">
				<input className="sort-input" placeholder="Select filter" />
				<div class="dropdown-content">
					<p>Publishing Date</p>
					<p>Highest Bid</p>
				</div>
			</div>
		</div>
	);
}
