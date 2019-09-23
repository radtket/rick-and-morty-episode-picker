import React, { Suspense, useContext } from "react";
import { Link } from "@reach/router";
import { Store } from "./Store";

const App = ({ children }) => {
  const {
    state: { favourites },
  } = useContext(Store);

  return (
    <>
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
    </>
  );
};

export default App;
