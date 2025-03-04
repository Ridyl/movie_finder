// Search bar that call API after a certain amount of time using debounce to provide a list of movies based off of what user has input. If a user search doesn't
// match an exact title a list of movies that include the search will be displayed
import { Button } from './ui/button';
import { Input } from './ui/input';

export default function Home() {
	return (
		<>
			<div className='flex flex-col w-full justify-center'>
				<h1 className='text-2xl font-semibold mb-4'>Movie Finder</h1>
				<div className='flex flex-col'>
					<Input type='text' placeholder='Search...' />
					<Button className='w-20'>Search</Button>
				</div>
			</div>
		</>
	);
}
