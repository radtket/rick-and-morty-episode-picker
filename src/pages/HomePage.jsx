import React, { Suspense, lazy, useContext, useEffect } from "react";
import { Store } from "../Store";
import { isArrayEmpty } from "../helpers";

const TeamsList = lazy(() => import("../components/TeamsList"));

const HomePage = () => {
  const {
    state: { favourites, teams },
    dispatch,
  } = useContext(Store);

  const toggleFavAction = team => {
    const teamInFavourites = favourites.includes(team);

    if (teamInFavourites) {
      const payload = favourites.filter(fav => {
        const { TeamID: FavTeamID } = fav;
        const { TeamID } = team;
        return FavTeamID !== TeamID;
      });

      return dispatch({
        type: "REMOVE_FAV",
        payload,
      });
    }

    return dispatch({
      type: "ADD_FAV",
      payload: team,
    });
  };

  const fetchDataAction = async () => {
    const data = await fetch("/data/teams-with-stadiums.json");
    const payload = await data.json();

    return dispatch({
      type: "FETCH_DATA",
      payload,
    });
  };

  useEffect(() => {
    if (isArrayEmpty(teams)) {
      fetchDataAction();
    }
  });

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <section className="team-layout">
          <TeamsList
            {...{
              teams,
              toggleFavAction,
              favourites,
            }}
          />
        </section>
      </Suspense>
    </>
  );
};

export default HomePage;
