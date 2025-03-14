import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input.jsx';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
	const [media, setMedia] = useState('');

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
				<Link to={`/search/${media}`}>
					<Button className='w-20 m-1'>Search</Button>
				</Link>
				<Link to={`/`}>
					<Button className='w-20 m-1 bg-primary'>Home</Button>
				</Link>
			</div>
		</div>
	);
}
