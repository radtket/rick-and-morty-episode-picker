import React, { Fragment, Suspense, lazy, useEffect, useContext } from "react";
import { Store } from "../Store";

const EpisodesList = lazy(() => import("../components/EpisodesList"));

const HomePage = () => {
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

	const fetchDataAction = async () => {
		const data = await fetch(
			"https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes"
		);
		const dataJSON = await data.json();
		return dispatch({
			type: "FETCH_DATA",
			payload: dataJSON._embedded.episodes
		});
	};

	const { favourites, episodes } = state;

	const props = {
		episodes,
		toggleFavAction,
		favourites
	};

	useEffect(() => {
		episodes.length === 0 && fetchDataAction();
	});

	return (
		<Fragment>
			<Suspense fallback={<div>Loading...</div>}>
				<section className="episode-layout">
					<EpisodesList {...props} />
				</section>
			</Suspense>
		</Fragment>
	);
};

export default HomePage;
