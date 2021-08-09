// asynchronously fetches album results
async function asyncFetchAlbumsData(trackShortcut, API_KEY) {
  const response = await fetch(`https://api.napster.com/v2.2/albums/${trackShortcut}?apikey=${API_KEY}`);
  return response.json();
}

export default asyncFetchAlbumsData;