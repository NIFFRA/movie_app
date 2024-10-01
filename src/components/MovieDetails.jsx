import React, { useEffect, useState } from 'react';

const MovieDetails = ({ movie }) => {
    const [details, setDetails] = useState(null);

    useEffect(() => {
        const fetchMovieDetails = async () => {
            const response = await fetch(`http://www.omdbapi.com/?i=${movie.imdbID}&apikey=db73ea61`);
            const data = await response.json();
            setDetails(data);
        };

        fetchMovieDetails();
    }, [movie]);

    if (!details) return <div>Loading...</div>;

    return (
        <div className="p-4 border rounded">
            <h2 className="text-2xl font-bold">{details.Title}</h2>
            <img
                src={details.Poster !== 'N/A' ? details.Poster : 'https://via.placeholder.com/300'}
                alt={details.Title}
                className="w-full h-auto rounded"
            />
            <p><strong>Plot:</strong> {details.Plot}</p>
            <p><strong>Cast:</strong> {details.Actors}</p>
            <p><strong>Ratings:</strong> {details.Ratings.map(rating => (
                <span key={rating.Source}>{rating.Source}: {rating.Value} </span>
            ))}</p>
            <p><strong>Genre:</strong> {details.Genre}</p>
        </div>
    );
};

export default MovieDetails;
