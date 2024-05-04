import http from 'http';
import httpProxy from 'http-proxy';
import fetch from 'node-fetch';
import cors from 'cors';

const proxy = httpProxy.createProxyServer({});
const VITE_DEV_SERVER_HOST = 'localhost';
const VITE_DEV_SERVER_PORT = 3000;

const server = http.createServer(async (req, res) => {
    try {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5M2M0MTg0YWZiNTdiMTZiY2RkOWVhM2Y5MGJkZDViMCIsInN1YiI6IjY2MzBhYTFmYjViYzIxMDEyNzUzOTQ3NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Na3yzyp3EqNDBlG6vwIgp6FxGzg5BZ3CNbsOd2HtLLw'
            }
        };

        const tmdbResponse = await fetch(`https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1`, options);
        const tmdbData = await tmdbResponse.json();

        res.setHeader('Content-Type', 'application/json');

        // Use cors middleware
        cors({ origin: 'http://www.rapidflix.online:3000' })(req, res, () => {
            // Send TMDB data as response
            res.end(JSON.stringify(tmdbData));
        });
    } catch (error) {
        console.error('Error fetching TMDB data:', error);
        res.statusCode = 500;
        res.end('Internal Server Error');
    }
});

const PORT = 5000;
server.listen(PORT, () => {
    console.log(`Proxy server is running on http://localhost:${PORT}`);
});
