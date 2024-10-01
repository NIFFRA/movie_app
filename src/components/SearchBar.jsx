import React from 'react';

const SearchBar = ({ setSearchTerm }) => {
    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleKeyPress = (e) => {
        // Trigger search on Enter key press
        if (e.key === 'Enter') {
            setSearchTerm(e.target.value);
        }
    };

    return (
        <div className="p-4">
            <input 
                type="text" 
                placeholder="Search for a movie..." 
                className="border p-2 rounded w-full"
                onChange={handleSearch}
                onKeyPress={handleKeyPress} 
            />
        </div>
    );
};

export default SearchBar;