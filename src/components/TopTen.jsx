import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import Imdb from './svg/imdb.svg';
import Rotten from './svg/rotten.svg';
import Meta from './svg/meta.svg';
import { useState } from 'react';

export default function TopTen() {
	const [expandIndex, setExpandIndex] = useState(null);

	const top = [
		{
			Title: 'The Shawshank Redemption',
			Year: '1994',
			Rated: 'R',
			Released: '14 Oct 1994',
			Runtime: '142 min',
			Genre: 'Drama',
			Director: 'Frank Darabont',
			Writer: 'Stephen King, Frank Darabont',
			Actors: 'Tim Robbins, Morgan Freeman, Bob Gunton',
			Plot: 'A banker convicted of uxoricide forms a friendship over a quarter century with a hardened convict, while maintaining his innocence and trying to remain hopeful through simple compassion.',
			Language: 'English',
			Country: 'United States',
			Awards: 'Nominated for 7 Oscars. 21 wins & 42 nominations total',
			Poster:
				'https://m.media-amazon.com/images/M/MV5BMDAyY2FhYjctNDc5OS00MDNlLThiMGUtY2UxYWVkNGY2ZjljXkEyXkFqcGc@._V1_SX300.jpg',
			Ratings: [
				{ Source: 'Internet Movie Database', Value: '9.3/10' },
				{ Source: 'Rotten Tomatoes', Value: '89%' },
				{ Source: 'Metacritic', Value: '82/100' },
			],
			Metascore: '82',
			imdbRating: '9.3',
			imdbVotes: '2,995,055',
			imdbID: 'tt0111161',
			Type: 'movie',
			DVD: 'N/A',
			BoxOffice: '$28,767,189',
			Production: 'N/A',
			Website: 'N/A',
			Response: 'True',
		},
		{
			Title: 'The Godfather',
			Year: '1972',
			Rated: 'R',
			Released: '24 Mar 1972',
			Runtime: '175 min',
			Genre: 'Crime, Drama',
			Director: 'Francis Ford Coppola',
			Writer: 'Mario Puzo, Francis Ford Coppola',
			Actors: 'Marlon Brando, Al Pacino, James Caan',
			Plot: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
			Language: 'English, Italian, Latin',
			Country: 'United States',
			Awards: 'Won 3 Oscars. 31 wins & 31 nominations total',
			Poster:
				'https://m.media-amazon.com/images/M/MV5BNGEwYjgwOGQtYjg5ZS00Njc1LTk2ZGEtM2QwZWQ2NjdhZTE5XkEyXkFqcGc@._V1_SX300.jpg',
			Ratings: [
				{ Source: 'Internet Movie Database', Value: '9.2/10' },
				{ Source: 'Rotten Tomatoes', Value: '97%' },
				{ Source: 'Metacritic', Value: '100/100' },
			],
			Metascore: '100',
			imdbRating: '9.2',
			imdbVotes: '2,090,520',
			imdbID: 'tt0068646',
			Type: 'movie',
			DVD: 'N/A',
			BoxOffice: '$136,381,073',
			Production: 'N/A',
			Website: 'N/A',
			Response: 'True',
		},
		{
			Title: "Schindler's List",
			Year: '1993',
			Rated: 'R',
			Released: '04 Feb 1994',
			Runtime: '195 min',
			Genre: 'Biography, Drama, History',
			Director: 'Steven Spielberg',
			Writer: 'Thomas Keneally, Steven Zaillian',
			Actors: 'Liam Neeson, Ralph Fiennes, Ben Kingsley',
			Plot: 'In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.',
			Language: 'English, Hebrew, German, Polish, Latin',
			Country: 'United States',
			Awards: 'Won 7 Oscars. 91 wins & 49 nominations total',
			Poster:
				'https://m.media-amazon.com/images/M/MV5BNjM1ZDQxYWUtMzQyZS00MTE1LWJmZGYtNGUyNTdlYjM3ZmVmXkEyXkFqcGc@._V1_SX300.jpg',
			Ratings: [
				{ Source: 'Internet Movie Database', Value: '9.0/10' },
				{ Source: 'Rotten Tomatoes', Value: '98%' },
				{ Source: 'Metacritic', Value: '95/100' },
			],
			Metascore: '95',
			imdbRating: '9.0',
			imdbVotes: '1,501,081',
			imdbID: 'tt0108052',
			Type: 'movie',
			DVD: 'N/A',
			BoxOffice: '$96,898,818',
			Production: 'N/A',
			Website: 'N/A',
			Response: 'True',
		},
		{
			Title: 'Pulp Fiction',
			Year: '1994',
			Rated: 'R',
			Released: '14 Oct 1994',
			Runtime: '154 min',
			Genre: 'Crime, Drama',
			Director: 'Quentin Tarantino',
			Writer: 'Quentin Tarantino, Roger Avary',
			Actors: 'John Travolta, Uma Thurman, Samuel L. Jackson',
			Plot: 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
			Language: 'English, Spanish, French',
			Country: 'United States',
			Awards: 'Won 1 Oscar. 69 wins & 72 nominations total',
			Poster:
				'https://m.media-amazon.com/images/M/MV5BYTViYTE3ZGQtNDBlMC00ZTAyLTkyODMtZGRiZDg0MjA2YThkXkEyXkFqcGc@._V1_SX300.jpg',
			Ratings: [
				{ Source: 'Internet Movie Database', Value: '8.9/10' },
				{ Source: 'Rotten Tomatoes', Value: '92%' },
				{ Source: 'Metacritic', Value: '95/100' },
			],
			Metascore: '95',
			imdbRating: '8.9',
			imdbVotes: '2,289,917',
			imdbID: 'tt0110912',
			Type: 'movie',
			DVD: 'N/A',
			BoxOffice: '$107,928,762',
			Production: 'N/A',
			Website: 'N/A',
			Response: 'True',
		},
		{
			Title: 'The Lord of the Rings: The Fellowship of the Ring',
			Year: '2001',
			Rated: 'PG-13',
			Released: '19 Dec 2001',
			Runtime: '178 min',
			Genre: 'Adventure, Drama, Fantasy',
			Director: 'Peter Jackson',
			Writer: 'J.R.R. Tolkien, Fran Walsh, Philippa Boyens',
			Actors: 'Elijah Wood, Ian McKellen, Orlando Bloom',
			Plot: 'A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.',
			Language: 'English, Sindarin',
			Country: 'New Zealand, United States, United Kingdom',
			Awards: 'Won 4 Oscars. 125 wins & 126 nominations total',
			Poster:
				'https://m.media-amazon.com/images/M/MV5BNzIxMDQ2YTctNDY4MC00ZTRhLTk4ODQtMTVlOWY4NTdiYmMwXkEyXkFqcGc@._V1_SX300.jpg',
			Ratings: [
				{ Source: 'Internet Movie Database', Value: '8.9/10' },
				{ Source: 'Rotten Tomatoes', Value: '92%' },
				{ Source: 'Metacritic', Value: '92/100' },
			],
			Metascore: '92',
			imdbRating: '8.9',
			imdbVotes: '2,082,432',
			imdbID: 'tt0120737',
			Type: 'movie',
			DVD: 'N/A',
			BoxOffice: '$319,372,078',
			Production: 'N/A',
			Website: 'N/A',
			Response: 'True',
		},
		{
			Title: 'The Good, the Bad and the Ugly',
			Year: '1966',
			Rated: 'R',
			Released: '29 Dec 1967',
			Runtime: '178 min',
			Genre: 'Adventure, Drama, Western',
			Director: 'Sergio Leone',
			Writer: 'Luciano Vincenzoni, Sergio Leone, Agenore Incrocci',
			Actors: 'Clint Eastwood, Eli Wallach, Lee Van Cleef',
			Plot: 'A bounty-hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery.',
			Language: 'Italian',
			Country: 'Italy, Spain, West Germany, United States',
			Awards: '2 wins & 5 nominations total',
			Poster:
				'https://m.media-amazon.com/images/M/MV5BMWM5ZjQxM2YtNDlmYi00ZDNhLWI4MWUtN2VkYjBlMTY1ZTkwXkEyXkFqcGc@._V1_SX300.jpg',
			Ratings: [
				{ Source: 'Internet Movie Database', Value: '8.8/10' },
				{ Source: 'Rotten Tomatoes', Value: '97%' },
				{ Source: 'Metacritic', Value: '90/100' },
			],
			Metascore: '90',
			imdbRating: '8.8',
			imdbVotes: '843,180',
			imdbID: 'tt0060196',
			Type: 'movie',
			DVD: 'N/A',
			BoxOffice: '$25,100,000',
			Production: 'N/A',
			Website: 'N/A',
			Response: 'True',
		},
		{
			Title: 'The Dark Knight',
			Year: '2008',
			Rated: 'PG-13',
			Released: '18 Jul 2008',
			Runtime: '152 min',
			Genre: 'Action, Crime, Drama',
			Director: 'Christopher Nolan',
			Writer: 'Jonathan Nolan, Christopher Nolan, David S. Goyer',
			Actors: 'Christian Bale, Heath Ledger, Aaron Eckhart',
			Plot: 'When a menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman, James Gordon and Harvey Dent must work together to put an end to the madness.',
			Language: 'English, Mandarin',
			Country: 'United States, United Kingdom',
			Awards: 'Won 2 Oscars. 164 wins & 165 nominations total',
			Poster:
				'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg',
			Ratings: [
				{ Source: 'Internet Movie Database', Value: '9.0/10' },
				{ Source: 'Rotten Tomatoes', Value: '94%' },
				{ Source: 'Metacritic', Value: '84/100' },
			],
			Metascore: '84',
			imdbRating: '9.0',
			imdbVotes: '2,974,670',
			imdbID: 'tt0468569',
			Type: 'movie',
			DVD: 'N/A',
			BoxOffice: '$534,987,076',
			Production: 'N/A',
			Website: 'N/A',
			Response: 'True',
		},
		{
			Title: 'The Godfather Part II',
			Year: '1974',
			Rated: 'R',
			Released: '18 Dec 1974',
			Runtime: '202 min',
			Genre: 'Crime, Drama',
			Director: 'Francis Ford Coppola',
			Writer: 'Francis Ford Coppola, Mario Puzo',
			Actors: 'Al Pacino, Robert De Niro, Robert Duvall',
			Plot: 'The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.',
			Language: 'English, Italian, Spanish, Latin, Sicilian',
			Country: 'United States',
			Awards: 'Won 6 Oscars. 17 wins & 21 nominations total',
			Poster:
				'https://m.media-amazon.com/images/M/MV5BNzc1OWY5MjktZDllMi00ZDEzLWEwMGItYjk1YmRhYjBjNTVlXkEyXkFqcGc@._V1_SX300.jpg',
			Ratings: [
				{ Source: 'Internet Movie Database', Value: '9.0/10' },
				{ Source: 'Rotten Tomatoes', Value: '96%' },
				{ Source: 'Metacritic', Value: '90/100' },
			],
			Metascore: '90',
			imdbRating: '9.0',
			imdbVotes: '1,405,378',
			imdbID: 'tt0071562',
			Type: 'movie',
			DVD: 'N/A',
			BoxOffice: '$47,834,595',
			Production: 'N/A',
			Website: 'N/A',
			Response: 'True',
		},
		{
			Title: '12 Angry Men',
			Year: '1957',
			Rated: 'Approved',
			Released: '10 Apr 1957',
			Runtime: '96 min',
			Genre: 'Crime, Drama',
			Director: 'Sidney Lumet',
			Writer: 'Reginald Rose',
			Actors: 'Henry Fonda, Lee J. Cobb, Martin Balsam',
			Plot: 'The jury in a New York City murder trial is frustrated by a single member whose skeptical caution forces them to more carefully consider the evidence before jumping to a hasty verdict.',
			Language: 'English',
			Country: 'United States',
			Awards: 'Nominated for 3 Oscars. 16 wins & 12 nominations total',
			Poster:
				'https://m.media-amazon.com/images/M/MV5BYjE4NzdmOTYtYjc5Yi00YzBiLWEzNDEtNTgxZGQ2MWVkN2NiXkEyXkFqcGc@._V1_SX300.jpg',
			Ratings: [
				{ Source: 'Internet Movie Database', Value: '9.0/10' },
				{ Source: 'Rotten Tomatoes', Value: '100%' },
				{ Source: 'Metacritic', Value: '97/100' },
			],
			Metascore: '97',
			imdbRating: '9.0',
			imdbVotes: '911,567',
			imdbID: 'tt0050083',
			Type: 'movie',
			DVD: 'N/A',
			BoxOffice: 'N/A',
			Production: 'N/A',
			Website: 'N/A',
			Response: 'True',
		},
		{
			Title: 'The Lord of the Rings: The Return of the King',
			Year: '2003',
			Rated: 'PG-13',
			Released: '17 Dec 2003',
			Runtime: '201 min',
			Genre: 'Adventure, Drama, Fantasy',
			Director: 'Peter Jackson',
			Writer: 'J.R.R. Tolkien, Fran Walsh, Philippa Boyens',
			Actors: 'Elijah Wood, Viggo Mortensen, Ian McKellen',
			Plot: "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
			Language: 'English, Quenya, Old English, Sindarin',
			Country: 'New Zealand, United States',
			Awards: 'Won 11 Oscars. 215 wins & 124 nominations total',
			Poster:
				'https://m.media-amazon.com/images/M/MV5BMTZkMjBjNWMtZGI5OC00MGU0LTk4ZTItODg2NWM3NTVmNWQ4XkEyXkFqcGc@._V1_SX300.jpg',
			Ratings: [
				{ Source: 'Internet Movie Database', Value: '9.0/10' },
				{ Source: 'Rotten Tomatoes', Value: '94%' },
				{ Source: 'Metacritic', Value: '94/100' },
			],
			Metascore: '94',
			imdbRating: '9.0',
			imdbVotes: '2,044,929',
			imdbID: 'tt0167260',
			Type: 'movie',
			DVD: 'N/A',
			BoxOffice: '$381,878,219',
			Production: 'N/A',
			Website: 'N/A',
			Response: 'True',
		},
	];

	const handleExpand = (index) => {
		setExpandIndex((prevIndex) => (prevIndex === index ? null : index));
	};

	return (
		<>
			{top.map((movie, index) => (
				<Card key={index} className='drop-shadow-lg mb-4 pt-0 border-border'>
					<div className='flex justify-around rounded-t-xl border-b border-border bg-accent'>
						<img src={movie.Poster} className='object-scale-down max-h-60' />
					</div>
					<CardHeader>
						<CardTitle>
							{index + 1}: <span className='text-primary'>{movie.Title}</span>
						</CardTitle>
						<CardDescription>{movie.Actors}</CardDescription>
					</CardHeader>
					<CardContent>
						<div
							className={`${
								expandIndex === index
									? 'max-h-100 overflow-hidden'
									: 'max-h-12 overflow-hidden'
							} transition-all duration-1000`}
						>
							<p className='mb-3'>{movie.Plot}</p>
							<p className='mb-3'>{movie.Awards}</p>
							<p>
								Directed by <span className='font-'>{movie.Director}</span>
							</p>
							<p>
								Box Office:{' '}
								<span className='font-semibold'>{movie.BoxOffice}</span>
							</p>
							<div className='mt-3 flex justify-center'>
								<Badge className='m-2'>Rated: {movie.Rated}</Badge>
								<Badge className='m-2'>{movie.Genre.split(', ')[0]}</Badge>
								<Badge className='m-2'>{movie.Runtime}</Badge>
							</div>
						</div>
					</CardContent>
					<CardFooter className='flex pl-2 pr-2'>
						<div className='flex mt-2'>
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
						<div>
							<Button
								className='ml-auto drop-shadow-sm'
								variant='outline'
								onClick={() => handleExpand(index)}
							>
								{expandIndex === index ? 'Less ▲' : 'More ▼'}
							</Button>
						</div>
					</CardFooter>
				</Card>
			))}
		</>
	);
}
