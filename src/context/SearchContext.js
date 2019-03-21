import React from 'react';

const SearchContext = React.createContext({
    artist: "",
    mood: "",
    genre: "",
    displaySearchResults: () => {}
});

export default SearchContext;