import React from 'react';

export default function dashboard() {
	return (
		<div>
			<header className="header">
				<div className="search">
					<input type="text" />
					<button> Search </button>
				</div>
				<div className="filter">
					<p>Sort</p>
					{/* <div className="dropdown">
							<input class="dropdown-content" />
						</div> */}
				</div>
			</header>

			<div className="result-area">CARDS EXAMPLE</div>
		</div>
	);
}
