import React from "react";
import TeamBox from "./TeamBox";

const TeamsList = ({ teams, toggleFavAction, favourites }) => {
  return teams.map(team => {
    return <TeamBox {...{ team, toggleFavAction, favourites }} />;
  });
};

export default TeamsList;
