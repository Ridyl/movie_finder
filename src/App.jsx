import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import MovieDetails from './components/MovieDetails';

const App = () => {
	return (
		<div className='inline-grid p-2 w-full'>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/movie/:id' element={<MovieDetails />} />
			</Routes>
		</div>
	);
};

export default App;
