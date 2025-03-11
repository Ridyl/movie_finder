// Search bar that call API after a certain amount of time using debounce to provide a list of movies based off of what user has input. If a user search doesn't
// match an exact title a list of movies that include the search will be displayed
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input.jsx';
import ComboBox from './ComboBox';

export default function Home() {
	return (
		<>
			<div className='flex flex-col w-full text-center'>
				<h1 className='text-2xl font-semibold mb-4 underline underline-offset-5'>
					Media Finder
				</h1>
				<Input
					className='mb-2 md:w-100 lg:w-160 ml-auto mr-auto'
					type='text'
					placeholder='Search...'
				/>
				<div className='flex justify-center'>
					{/* Attach a handleSearch function that returns searched for show*/}
					<Button className='w-20 m-1'>Search</Button>
					{/* Attach a handleSurprise function that returns a random movie or show */}
					<Button className='w-30 m-1 bg-primary'>Surprise Me!</Button>
				</div>
			</div>
			<ComboBox />
		</>
	);
}
