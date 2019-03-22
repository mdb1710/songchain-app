import React from 'react';

const SearchContext = React.createContext({
    artist: "",
    mood: "",
    genre: "",
    playlist: [],
    updateArtist: () => {},
    updateMood: () => {},
    updateGenre: () => {},
    displaySearchResults: () => {}
});

export default SearchContext;