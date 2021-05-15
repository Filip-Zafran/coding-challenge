import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Dashboard from './Pages/Components/Dashboard';

function App() {
	return (
		<Router>
			<div className="app">
				<aside className="sidebar">
					<Link to="/dashboard">DASHBOARD</Link>
					<Link to="/">LOG OUT</Link>
				</aside>

				<Switch>
					<Route path="/dashboard">
						<Dashboard />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
