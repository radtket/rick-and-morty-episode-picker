import React, { Suspense, lazy, useContext, useEffect } from "react";
import { Store } from "../Store";

const TeamsList = lazy(() => import("../components/TeamsList"));

const HomePage = () => {
  const {
    state: { favourites, teams },
    dispatch,
  } = useContext(Store);

  const toggleFavAction = team => {
    const teamInFavourites = favourites.includes(team);

    if (teamInFavourites) {
      const favouritesWithoutTeam = favourites.filter(fav => {
        const { TeamID: FavTeamID } = fav;
        const { TeamID } = team;
        return FavTeamID !== TeamID;
      });

      return dispatch({
        type: "REMOVE_FAV",
        payload: favouritesWithoutTeam,
      });
    }

    return dispatch({
      type: "ADD_FAV",
      payload: team,
    });
  };

  const fetchDataAction = async () => {
    const data = await fetch("/data/teams-with-stadiums.json");
    const dataJSON = await data.json();
    console.log(dataJSON);

    return dispatch({
      type: "FETCH_DATA",
      payload: dataJSON,
    });
  };

  useEffect(() => {
    teams.length === 0 && fetchDataAction();
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
