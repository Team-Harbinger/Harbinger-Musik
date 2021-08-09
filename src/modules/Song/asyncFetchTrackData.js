// asynchronously fetches track data
async function asyncFetchTrackData(albumId, API_KEY) {
  const response = await fetch(`http://api.napster.com/v2.2/tracks/${albumId}?apikey=${API_KEY}`);
  return response.json();
}

export default asyncFetchTrackData;