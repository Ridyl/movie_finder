import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input.jsx';
import { useState } from 'react';
import useSearch from './hooks/findMovie';

export default function Header() {
	const [media, setMedia] = useState('');
	const { fetchMovie } = useSearch(media);

	const handleSearch = async (event) => {
		event.preventDefault();
		await fetchMovie(media);
	};

	return (
		<div className='flex flex-col w-full text-center'>
			<h1 className='text-2xl font-semibold mb-4 underline underline-offset-5'>
				Media Finder
			</h1>
			<Input
				className='mb-2 md:w-100 lg:w-160 ml-auto mr-auto'
				type='text'
				placeholder='Search for Your Movie or Show...'
				onChange={(e) => setMedia(e.target.value)}
			/>
			<div className='flex justify-center'>
				{/* Attach a handleSearch function that returns searched for show*/}
				<Button className='w-20 m-1' onClick={handleSearch}>
					Search
				</Button>
				{/* Attach a handleSurprise function that returns a random movie or show */}
				<Button className='w-30 m-1 bg-primary'>Surprise Me!</Button>
			</div>
		</div>
	);
}
