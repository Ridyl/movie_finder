import { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';

const MovieContext = createContext();

const initialState = {
	movie: null,
	image: null,
	loading: false,
	error: null,
};

const movieReducer = (state, action) => {
	switch (action.type) {
		case 'FETCH_START':
			return {
				...state,
				loading: true,
				error: null,
			};
		case 'FETCH_SUCCESS':
			return {
				...state,
				movie: action.data,
				image: action.data.image,
				loading: false,
			};
		case 'FETCH_ERROR':
			return {
				...state,
				error: action.error,
				loading: false,
			};
	}
};

export const MovieProvider = ({ children }) => {
	const [state, dispatch] = useReducer(movieReducer, initialState);

	return (
		<MovieContext.Provider value={{ state, dispatch }}>
			{children}
		</MovieContext.Provider>
	);
};

MovieProvider.propTypes = {
	children: PropTypes.any,
};

export default MovieContext;
