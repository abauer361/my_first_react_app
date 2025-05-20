import { useEffect } from 'react';

const API_URL = `http://www.omdbapi.com?apikey=${process.env.REACT_APP_OMDB_API_KEY}`;
//REACT_APP_ must be the start of env variables to be recognized

const App = () => {

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        console.log(data.Search);
    }

    useEffect(() => {
      searchMovies('Shrek');
    }, []);
    

    return (
        <h1>App</h1>
    );
}

export default App;