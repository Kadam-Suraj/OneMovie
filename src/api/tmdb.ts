// Example code to make a request to your proxy server
fetch('https://www.rapidflix.online:5000/proxy/tmdb')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('Data received from proxy server:', data);
    })
    .catch(error => {
        console.error('There was a problem with your fetch operation:', error);
    });

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5M2M0MTg0YWZiNTdiMTZiY2RkOWVhM2Y5MGJkZDViMCIsInN1YiI6IjY2MzBhYTFmYjViYzIxMDEyNzUzOTQ3NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Na3yzyp3EqNDBlG6vwIgp6FxGzg5BZ3CNbsOd2HtLLw'
    }
};

export const Upcoming = async (page) => {
    return await fetch(`https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=${page}`, options)
        .then(response => response.json())
        .then(response => response.results)
        .catch(err => {
            console.error(err)
            return [];
        });
}

export const WatchProviders = async () => {
    return await fetch('https://api.themoviedb.org/3/movie/1072790/watch/providers', options)
        .then(response => response.json())
        .then(response => response.results)
        .catch(err => {
            console.error(err)
            return [];
        });
}

export const GetMovie = async (id) => {
    return await fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
        .then(response => response.json())
        .then(response => response)
        .catch(err => {
            console.error(err)
            return [];
        });
}

export const Trailer = async (id) => {
    return await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
        .then(response => response.json())
        .then(response => response.results)
        .catch(err => {
            console.error(err)
            return [];
        });
}

export const Search = async (query) => {
    return await fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`, options)
        .then(response => response.json())
        .then(response => response.results)
        .catch(err => {
            console.error(err)
            return [];
        });
}

export const Recommendations = async (id) => {
    return await fetch(`https://api.themoviedb.org/3/movie/${id}/recommendations`, options)
        .then(response => response.json())
        .then(response => response.results)
        .catch(err => {
            console.error(err)
            return [];
        });
}