import React, { Fragment, Suspense, lazy, useEffect, useContext } from "react";
import { Store } from "../Store";

const TeamsList = lazy(() => import("../components/TeamsList"));

const HomePage = () => {
	const { state, dispatch } = useContext(Store);

	const toggleFavAction = team => {
		const teamInFavourites = state.favourites.includes(team);

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

	const fetchDataAction = async () => {
		const data = await fetch("/data/teams-with-stadiums.json");
		const dataJSON = await data.json();
		console.log(dataJSON);

		return dispatch({
			type: "FETCH_DATA",
			payload: dataJSON
		});
	};

	const { favourites, teams } = state;

	const props = {
		teams,
		toggleFavAction,
		favourites
	};

	useEffect(() => {
		teams.length === 0 && fetchDataAction();
	});

	return (
		<Fragment>
			<Suspense fallback={<div>Loading...</div>}>
				<section className="team-layout">
					<TeamsList {...props} />
				</section>
			</Suspense>
		</Fragment>
	);
};

export default HomePage;
