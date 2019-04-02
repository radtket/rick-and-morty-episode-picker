import React from "react";

const TeamsList = ({ teams, toggleFavAction, favourites }) => {
	return teams.map(team => {
		const {
			City,
			Name,
			TeamID,
			WikipediaLogoUrl,
			PrimaryColor,
			SecondaryColor
		} = team;

		return (
			<section className="team-box" key={TeamID}>
				<img src={WikipediaLogoUrl} alt={`${City} ${Name}`} />
				<h2 style={PrimaryColor && { color: `#${PrimaryColor}` }}>
					<span style={SecondaryColor && { color: `#${SecondaryColor}` }}>
						{City}
					</span>
					{` ${Name}`}
				</h2>
				<section style={{ display: "flex", justifyContent: "space-between" }}>
					<button type="button" onClick={() => toggleFavAction(team)}>
						{favourites.find(fav => fav.TeamID === TeamID) ? "Unfav" : "Fav"}
					</button>
				</section>
			</section>
		);
	});
};

export default TeamsList;
