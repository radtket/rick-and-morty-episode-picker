import React from "react";
import TeamBox from "./TeamBox";

const TeamsList = ({ teams, toggleFavAction, favourites }) => {
  return teams.map(team => {
    const { TeamID: key } = team;
    return <TeamBox {...{ key, team, toggleFavAction, favourites }} />;
  });
};

export default TeamsList;
