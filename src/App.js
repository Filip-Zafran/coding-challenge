import React from 'react';
import './App.css';

function App() {
	return (
		<div className="app">
			<aside className="sidebar">
				<a>DASHBOARD</a>
				<a>LOG OUT</a>
			</aside>

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

				<div className="result-area">INPUT CARD</div>
			</div>
		</div>
	);
}

export default App;
