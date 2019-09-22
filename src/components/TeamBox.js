import React from "react";

const TeamBox = ({ team, toggleFavAction, favourites }) => {
  const {
    City,
    Name,
    TeamID,
    WikipediaLogoUrl,
    PrimaryColor,
    SecondaryColor,
  } = team;
  return (
    <section key={TeamID} className="team-box">
      <img alt={`${City} ${Name}`} src={WikipediaLogoUrl} />
      <h2 style={PrimaryColor && { color: `#${PrimaryColor}` }}>
        <span style={SecondaryColor && { color: `#${SecondaryColor}` }}>
          {City}
        </span>
        {` ${Name}`}
      </h2>
      <section style={{ display: "flex", justifyContent: "space-between" }}>
        <button onClick={() => toggleFavAction(team)} type="button">
          {favourites.find(fav => fav.TeamID === TeamID) ? "Unfav" : "Fav"}
        </button>
      </section>
    </section>
  );
};

export default TeamBox;
