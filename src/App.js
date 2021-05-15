import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Dashboard from './Pages/Components/Dashboard';

function App() {
	return (
		<Router>
			<div className="app">
				<aside className="sidebar">
					<ul>
						<li>
							<Link className="sidebar__link" to="/dashboard">
								DASHBOARD
							</Link>
						</li>
						<li>
							<Link className="sidebar__link" to="/">
								LOG OUT
							</Link>
						</li>
					</ul>
				</aside>

				<main>
					<Switch>
						<Route path="/dashboard">
							<Dashboard />
						</Route>
					</Switch>
				</main>
			</div>
		</Router>
	);
}

export default App;
