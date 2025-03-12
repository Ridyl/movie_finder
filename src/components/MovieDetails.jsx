import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function MovieDetails() {
	const { id } = useParams();
	const [movie, setMovie] = useState(null);

	useEffect(() => {
		const fetchMovie = async () => {
			try {
				const response = await axios.get(`/api/movie/${id}`);
				setMovie(response.data);
			} catch (e) {
				console.log(e);
			}
		};

		fetchMovie();
	}, [id]);

	if (!movie) {
		return <div>Loading...</div>;
	}

	return (
		<div>
			<div>{movie.Title}</div>
			<div>{movie.Released}</div>
			<div>{movie.Rated}</div>
			<div>{movie.Runtime}</div>
			<div>{movie.Genre}</div>
			<div>{movie.Title}</div>
			<div>{movie.Plot}</div>
			{/* <div>{movie.Ratings}</div> */}
			<div>{movie.imdbVotes}</div>
			<div>{movie.Actors}</div>
			<div>{movie.Director}</div>
			<div>{movie.Writer}</div>
			<div>{movie.Awards}</div>
			<div>{movie.BoxOffice}</div>
			<div>{movie.Type}</div>
		</div>
	);
}
