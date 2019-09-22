import React, { Suspense, lazy, useContext } from "react";
import { Store } from "../Store";

const TeamsList = lazy(() => import("../components/TeamsList"));

const FavPage = () => {
  const { state: { favourites }, dispatch } = useContext(Store);


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

    else {
      return dispatch({
        type: "ADD_FAV",
        payload: team,
      });
    }

  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="team-layout">
        <TeamsList
          {...{
            teams: favourites,
            toggleFavAction,
            favourites,
          }}
        />
      </div>
    </Suspense>
  );
};

export default FavPage;
