import React, { useReducer, createContext } from "react";

export const Store = createContext();

const initialState = {
	episodes: [],
	favourites: []
};

function reducer(state, action) {
	const { type, payload } = action;
	switch (type) {
		case "FETCH_DATA":
			return { ...state, episodes: payload };
		case "ADD_FAV":
			return {
				...state,
				favourites: [...state.favourites, payload]
			};
		case "REMOVE_FAV":
			return {
				...state,
				favourites: payload
			};
		default:
			return state;
	}
}

export function StoreProivder(props) {
	const [state, dispatch] = useReducer(reducer, initialState);
	const value = { state, dispatch };
	return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
