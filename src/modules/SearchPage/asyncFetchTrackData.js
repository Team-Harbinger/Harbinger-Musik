// asynchronously fetches top track results based on what was searched in the searchbar
async function asyncFetchTrackData(queryParameters, API_KEY) {
  const response = await fetch(`https://api.napster.com/v2.2/search?apikey=${API_KEY}&${queryParameters}`);
  const trackData = await response.json();
  return trackData;
}

export default asyncFetchTrackData;