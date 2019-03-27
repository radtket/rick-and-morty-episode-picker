import React from "react";
import ReactDOM from "react-dom";
import { Router } from "@reach/router";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { StoreProivder } from "./Store";

import App from "./App";
import HomePage from "./pages/HomePage";
import FavPage from "./pages/FavPage";

ReactDOM.render(
	<StoreProivder>
		<Router>
			<App path="/">
				<HomePage path="/" />
				<FavPage path="/faves" />
			</App>
		</Router>
	</StoreProivder>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
