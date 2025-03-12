import { useContext } from 'react';
import MovieContext from '../../context/MovieContext';

const get_movie_url = '/api/search';

const useSearch = () => {
	const { state, dispatch } = useContext(MovieContext);

	const fetchMovie = async (movie) => {
		if (!movie) return;
		dispatch({
			type: 'FETCH_START',
			loading: true,
		});

		try {
			const initial = await fetch(`${get_movie_url}/${movie}`);
			if (!initial.ok) {
				throw new Error('Failed to fetch movie.');
			}

			const movieData = await initial.json();
			dispatch({
				type: 'FETCH_SUCCESS',
				movie: movieData,
			});
		} catch (error) {
			dispatch({
				type: 'FETCH_ERROR',
				error: error.message,
			});
		}
	};

	return {
		movie: state.movie,
		loading: state.loading,
		error: state.error,
		fetchMovie,
	};
};

export default useSearch;
