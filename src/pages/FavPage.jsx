import React, { lazy, useContext, Suspense } from "react";
import { Store } from "../Store";

const TeamsList = lazy(() => import("../components/TeamsList"));

const FavPage = () => {
	const { state, dispatch } = useContext(Store);

	const toggleFavAction = team => {
		const { favourites } = state;
		const teamInFavourites = favourites.includes(team);

		let dispatchObj = {
			type: "ADD_FAV",
			payload: team
		};

		if (teamInFavourites) {
			const { favourites } = state;
			const favouritesWithoutTeam = favourites.filter(fav => {
				const { TeamID: FavTeamID } = fav;
				const { TeamID } = team;
				return FavTeamID !== TeamID;
			});

			dispatchObj = {
				type: "REMOVE_FAV",
				payload: favouritesWithoutTeam
			};
		}

		return dispatch(dispatchObj);
	};

	const { favourites } = state;

	const props = {
		teams: favourites,
		toggleFavAction,
		favourites
	};

	return (
		<Suspense fallback={<div>Loading...</div>}>
			<div className="team-layout">
				<TeamsList {...props} />
			</div>
		</Suspense>
	);
};

export default FavPage;
