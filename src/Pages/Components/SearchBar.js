import React, { useState } from 'react';
import './SearchBar.css';

export default function SearchBar({ onSearch }) {
	const [ search, setSearch ] = useState('');

	return (
		<div className="search">
			<input
				className="search-input"
				type="text"
				onChange={(e) => {
					setSearch(e.target.value.trim());
				}}
				value={search}
			/>
			<button
				className="search-button"
				onClick={() => {
					onSearch(search);
				}}
			>
				Search
			</button>
		</div>
	);
}
