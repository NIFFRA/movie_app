import React from 'react';

const MovieCard = ({ movie, setSelectedMovie }) => {
    const handleCardClick = () => {
        setSelectedMovie(movie);
    };

    return (
        <div 
            onClick={handleCardClick}
            className="border p-4 m-2 rounded cursor-pointer hover:shadow-lg"
        >
            <img 
                src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300'} 
                alt={movie.Title} 
                className="w-full h-auto rounded" 
            />
            <h3 className="text-lg font-bold">{movie.Title}</h3>
            <p>Year: {movie.Year}</p>
        </div>
    );
};

export default MovieCard;