import React from "react";

const EpisodesList = ({ episodes, toggleFavAction, favourites }) => {
	return episodes.map(episode => {
		const { id, image, season, number, name } = episode;
		return (
			<section key={id} className="episode-box">
				<img src={image.medium} alt={`Rick and Morty ${name}`} />
				<div>{name}</div>
				<section style={{ display: "flex", justifyContent: "space-between" }}>
					<div>
						Season: {season} Number: {number}
					</div>
					<button type="button" onClick={() => toggleFavAction(episode)}>
						{favourites.find(fav => fav.id === episode.id) ? "Unfav" : "Fav"}
					</button>
				</section>
			</section>
		);
	});
};

export default EpisodesList;
