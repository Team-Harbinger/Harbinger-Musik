// asynchronously fetches top track results based on what was searched in the searchbar
async function asyncFetchTrackData(link, API_KEY) {
  const response = await fetch(`${link}?apikey=${API_KEY}`);
  return response.json();
}

export default asyncFetchTrackData;