// Search bar that call API after a certain amount of time using debounce to provide a list of movies based off of what user has input. If a user search doesn't
// match an exact title a list of movies that include the search will be displayed
import { Button } from './ui/button';
import { Input } from './ui/input';
import TopTen from './TopTen';

export default function Home() {
	// Need to create components that will replace the title, when chosen the current homepage choice will change.
	// All will be replaced when search is done by user.
	function DesktopMenu() {
		// This will be for the desktop PopOver component
	}

	function MobileMenu() {
		// This will be for the mobile Drawer component
	}

	return (
		<>
			<div className='flex flex-col w-full text-center'>
				<h1 className='text-2xl font-semibold mb-4 underline underline-offset-5'>
					Media Finder
				</h1>
				<Input className='mb-2' type='text' placeholder='Search...' />
				<div className='flex justify-center'>
					{/* Attach a handleSearch function that returns searched for show*/}
					<Button className='w-20 m-1'>Search</Button>
					{/* Attach a handleSurprise function that returns a random movie or show */}
					<Button className='w-30 m-1 bg-primary'>Surprise Me!</Button>
				</div>
			</div>
			<div className='mt-5'>
				{/* Going to replace this with a schadcn ComboBox component that will be responsive for mobile and desktop use. */}
				{/* Will have 3 options, IMDb top 10, Top Grossing, and Top Marvel. */}
				<div className='flex justify-center'>
					<h1 className='text-lg font-semibold mb-4'>IMDb Top 10</h1>
				</div>
				<TopTen />
			</div>
		</>
	);
}
