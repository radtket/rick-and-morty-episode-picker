import React, { Fragment, Suspense, useContext } from "react";
import { Store } from "./Store";
import { Link } from "@reach/router";

const App = props => {
	const { state } = useContext(Store);
	return (
		<Fragment>
			<Suspense fallback={<div>Loading...</div>}>
				<header className="header">
					<div>
						<h1>Rick and Morty</h1>
						<p>Pick your favourite episodes</p>
					</div>

					<nav>
						<Link to="rick-and-morty-episode-picker/">Home</Link>
						<Link to="rick-and-morty-episode-picker/faves">
							Favourite(s) {state.favourites.length}
						</Link>
					</nav>
				</header>
				{props.children}
			</Suspense>
		</Fragment>
	);
};

export default App;
