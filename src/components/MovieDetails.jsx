import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Imdb from './svg/imdb.svg';
import Rotten from './svg/rotten.svg';
import Meta from './svg/meta.svg';
import BackArrow from './svg/arrow-back.svg';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';
import { hourglass } from 'ldrs';

hourglass.register();

export default function MovieDetails() {
	const { id } = useParams();
	const [movie, setMovie] = useState(null);
	const navigate = useNavigate();
	const back = () => {
		navigate(-1);
	};

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
		return (
			<div className='flex w-screen h-screen justify-around align-middle'>
				<p>
					<l-hourglass
						size='40'
						bg-opacity='0.1'
						speed='1.75'
						color='black'
					></l-hourglass>
				</p>
			</div>
		);
	}

	return (
		<>
			<div className='inline-flex justify-between bg-primary drop-shadow-2xl'>
				<span className='mt-auto mb-auto align-baseline'>
					<Button className='shadow-none' onClick={back}>
						<img src={BackArrow} className='w-8' />
					</Button>
				</span>
				<h1 className='font-bold text-2xl p-3 text-white'>{movie.Title}</h1>
			</div>
			<div
				className='border-b-3 border-border drop-shadow-xl'
				style={{
					backgroundImage: `url(${movie.Poster})`,
					backgroundSize: 'cover',
					height: '10rem',
				}}
			></div>
			<div className='p-4'>
				<div className='flex justify-center pt-3'>
					<Badge className='ml-3 mr-3'>{movie.Released}</Badge>
					<Badge className='ml-3 mr-3'>{movie.Rated}</Badge>
					<Badge className='ml-3 mr-3'>{movie.Runtime}</Badge>
					<Badge>{movie.Genre.split(', ')[0]}</Badge>
				</div>
				<div className='flex mt-2 justify-center pt-2'>
					{movie.Ratings.map((rate, idx) => (
						<div key={idx} className='flex max-h-7 mr-3'>
							{idx === 0 ? (
								<img src={Imdb} className='w-15 mb-1' />
							) : idx === 1 ? (
								<img src={Rotten} className='w-8 mb-1' />
							) : (
								<img src={Meta} className='w-8 mb-1' />
							)}
							<p className='text-muted-foreground text-sm mt-0.5'>
								{rate.Value}
							</p>
						</div>
					))}
				</div>
				<Separator className='mt-4' />
				<div className='lg:flex'>
					<div className='lg:max-w-1/2'>
						<p className='pt-4'>{movie.Plot}</p>
					</div>
					<Separator className='mt-4 lg:hidden' />
					<div className='flex flex-col mt-2 lg:ml-auto'>
						<div className='mt-2'>
							<p>
								<span className='font-bold text-primary'>Awards:</span>{' '}
								{movie.Awards}
							</p>
						</div>
						<div className='flex flex-col'>
							<p className='mt-2'>
								<span className='font-bold text-primary'>Actors: </span>
								{movie.Actors}
							</p>
							<p className='mt-2'>
								<span className='font-bold text-primary'>Director: </span>
								{movie.Director}
							</p>
							<p className='mt-2'>
								<span className='font-bold text-primary'>Writer: </span>
								{movie.Writer}
							</p>
						</div>
						<div>
							<p className='mt-2'>
								<span className='font-bold text-primary'>Box-Office: </span>
								{movie.BoxOffice}
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
