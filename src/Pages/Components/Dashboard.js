import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import Sort from './Sort';
import ProductCard from './ProductCard';

export default function Dashboard() {
	const [ products, setProducts ] = useState([]);
	useEffect(() => {
		fetch('https://truckoo-backend-aqkoiog6bq-ew.a.run.app/rest/v1/offers/active-offers')
			.then((res) => res.json())
			.then((res) => setProducts(res));
	}, []);

	return (
		<div>
			<header className="header">
				<SearchBar />
				<Sort />
			</header>

			<div className="result-area">{products.map((product) => <ProductCard product={product} />)}</div>
		</div>
	);
}
