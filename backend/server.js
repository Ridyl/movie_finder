import express from 'express';
import axios from 'axios';
const app = express();

import dotenv from 'dotenv';
dotenv.config();

// eslint-disable-next-line no-undef
const apiKey = process.env.OMDB_API_KEY;

app.get('/api/movie/:id', async (req, res) => {
	const { id } = req.params;

	try {
		const response = await axios.get(
			`https://www.omdbapi.com/?apikey=${apiKey}&i=${id}&plot=full`
		);
		res.json(response.data);
	} catch (error) {
		res.status(500).json({ error: `Failed to fetch movie data, ${error}` });
	}
});

app.get('/api/search/:movieTitle', async (req, res) => {
	const { movieTitle } = req.params;
	try {
		const response = await axios.get(
			`https://www.omdbapi.com/?apikey=${apiKey}&s=${movieTitle}`
		);
		res.json(response.data);
	} catch (error) {
		res.status(500).json({ error: `Failed to fetch movies, ${error}` });
	}
});

export default app;
