import React, { lazy, useContext, Suspense } from "react";
import { Store } from "../Store";

const EpisodesList = lazy(() => import("../components/EpisodesList"));

const FavPage = () => {
	const { state, dispatch } = useContext(Store);

	const toggleFavAction = episode => {
		const episodeInFavourites = state.favourites.includes(episode);

		let dispatchObj = {
			type: "ADD_FAV",
			payload: episode
		};

		if (episodeInFavourites) {
			const favouritesWithoutEpisode = state.favourites.filter(
				fav => fav.id !== episode.id
			);

			dispatchObj = {
				type: "REMOVE_FAV",
				payload: favouritesWithoutEpisode
			};
		}

		return dispatch(dispatchObj);
	};

	const { favourites } = state;

	const props = {
		episodes: favourites,
		toggleFavAction,
		favourites
	};
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<div className="episode-layout">
				<EpisodesList {...props} />
			</div>
		</Suspense>
	);
};

export default FavPage;
