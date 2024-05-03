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