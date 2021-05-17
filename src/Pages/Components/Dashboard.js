import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import Sort from './Sort';
import ProductCard from './ProductCard';
import './Dashboard.css';

export default function Dashboard() {
	const [ products, setProducts ] = useState([]);
	const [ filteredProducts, setFilteredProducts ] = useState([]);

	useEffect(() => {
		fetch('https://truckoo-backend-aqkoiog6bq-ew.a.run.app/rest/v1/offers/active-offers')
			.then((res) => res.json())
			.then((res) => setProducts(res));
	}, []);

	useEffect(
		() => {
			setFilteredProducts(products);
		},
		[ products ]
	);

	const handleSearch = (search) => {
		const foundProducts = products.filter((product) => {
			return product.title.toLowerCase().includes(search.toLowerCase());
		});

		setFilteredProducts(foundProducts);

		// search by [tags] to be implemented
	};

	return (
		<div>
			<header className="header">
				<SearchBar onSearch={handleSearch} />
				<Sort />
			</header>

			<div className="result-area">
				{!filteredProducts.length && 'loading...'}
				{filteredProducts.map((product) => <ProductCard product={product} />)}
			</div>
		</div>
	);
}
