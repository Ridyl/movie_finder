import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import MovieDetails from './components/MovieDetails';
import MovieList from './components/MovieList';

const App = () => {
	return (
		<>
			<div className='inline-grid w-full'>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/movie/:id' element={<MovieDetails />} />
					<Route path='/search/:movieTitle' element={<MovieList />} />
				</Routes>
			</div>
		</>
	);
};

export default App;
