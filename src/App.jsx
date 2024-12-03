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
						<h1>Wilfred</h1>
						<p>Pick your favourite episodes</p>
					</div>

					<nav>
						<Link to="/">Home</Link>
						<Link to="/faves">Favourite(s) {state.favourites.length}</Link>
					</nav>
				</header>
				{props.children}
			</Suspense>
		</Fragment>
	);
};

export default App;
