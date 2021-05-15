import React from 'react';
import SearchBar from './SearchBar';
import Sort from './Sort';
import ProductCard from './ProductCard';

export default function Dashboard() {
	return (
		<div>
			<header className="header">
				<SearchBar />
				<Sort />
			</header>

			<div className="result-area">
				<ProductCard />
			</div>
		</div>
	);
}
