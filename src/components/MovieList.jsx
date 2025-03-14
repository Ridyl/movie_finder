import { useEffect } from 'react';
import useSearch from './hooks/findMovie';
import { useParams } from 'react-router-dom';
import Header from './Header';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from './ui/card';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import { hourglass } from 'ldrs';

hourglass.register();

export default function MovieList() {
	const { movieTitle } = useParams();

	const { movie, loading, error, search, fetchMovie } = useSearch();

	useEffect(() => {
		if ((!movie && movieTitle !== search) || (movie && movieTitle !== search)) {
			fetchMovie(movieTitle);
		}
	}, [movieTitle]);

	if (loading)
		return (
			<div className='flex w-screen h-screen justify-center mt-auto mb-auto'>
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
	if (error) return <p>Error...</p>;
	if (!movie) return <div>No Movie</div>;

	return (
		<div className='p-4'>
			<Header />
			<div className='flex flex-col content-center'>
				{movie.map((item, index) => {
					return (
						<Card
							key={index}
							className='drop-shadow-lg m-2 pt-0 border-border lg:flex-row lg:pb-0 lg:max-w-200'
						>
							<div className='flex justify-around rounded-t-xl border-b border-border bg-accent lg:rounded-r-xl lg:border-r-2 lg:rounded-b-xl lg:border-b-0 lg:w-80'>
								<img
									src={item.Poster}
									className='object-scale-down max-h-60 lg:object-fit lg:rounded-xl lg:object-fill lg:max-h-100 lg:max-w-100'
								/>
							</div>
							<div className='lg:flex-col lg:pt-4'>
								<CardHeader className='lg:mb-2'>
									<CardTitle>
										<span className='text-primary'>{item.Title}</span>
									</CardTitle>
									<CardDescription>{item.Actors}</CardDescription>
								</CardHeader>
								<CardContent className=''>
									<div className='transition-all duration-1000 lg:max-h-full'>
										Released {item.Year}
									</div>
								</CardContent>
								<CardFooter className='mt-3'>
									<div className='flex justify-center mb-2 lg:justify-start'>
										<Link to={`/movie/${item.imdbID}`}>
											<Button variant='outline'>More Info...</Button>
										</Link>
									</div>
								</CardFooter>
							</div>
						</Card>
					);
				})}
			</div>
		</div>
	);
}
