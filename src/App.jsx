import React, { Fragment, Suspense, useContext } from "react";
import { Store } from "./Store";
import { Link } from "@reach/router";

const App = ({ children }) => {
	const { state } = useContext(Store);
	const { favourites } = state;
	return (
		<Fragment>
			<Suspense fallback={<div>Loading...</div>}>
				<header className="header">
					<div>
						<h1>Rick and Morty</h1>
						<p>Pick your favourite teams</p>
					</div>

					<nav>
						<Link to="/">Home</Link>
						<Link to="/faves">Favourite(s) {favourites.length}</Link>
					</nav>
				</header>
				{children}
			</Suspense>
		</Fragment>
	);
};

export default App;
