// Search bar that call API after a certain amount of time using debounce to provide a list of movies based off of what user has input. If a user search doesn't
// match an exact title a list of movies that include the search will be displayed
import ComboBox from './ComboBox';
import Header from './Header';

export default function Home() {
	return (
		<>
			<Header />
			<ComboBox />
		</>
	);
}
