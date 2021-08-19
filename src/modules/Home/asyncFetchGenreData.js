// asynchronously fetches top track results based on what was searched in the searchbar
async function asyncFetchGenreData(API_KEY) {
    const response = await fetch("https://api.napster.com/v2.2/genres?apikey=" + API_KEY);
    const genreData = await response.json();
    return genreData;
}

export default asyncFetchGenreData;