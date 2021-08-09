// asynchronously fetches top track results based on what was searched in the searchbar
async function asyncFetchTrackData(trackShortcut, API_KEY) {
  const response = await fetch(`https://api.napster.com/v2.2/albums/${trackShortcut}?apikey=${API_KEY}`);
  return response.json();
}

export default asyncFetchTrackData;