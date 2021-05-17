import React from 'react';
import './Sort.css';

export default function Sort() {
	return (
		<div className="filter">
			<p>Sort</p>
			<div className="dropdown">
				<input className="sort-input" placeholder="Select sorting filter" />
				<div className="dropdown-content">
					<p>Publishing Date</p>
					<p>Highest Bid</p>
				</div>
			</div>
		</div>
	);
}
