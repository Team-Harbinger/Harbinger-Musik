// asynchronously fetches track data
export async function asyncFetchTrackData(albumId, API_KEY) {
  const response = await fetch(`http://api.napster.com/v2.2/tracks/${albumId}?apikey=${API_KEY}`);
  return response.json();
}

// asynchronously fetches album results
export async function asyncFetchAlbumsData(trackShortcut, API_KEY) {
  const response = await fetch(`https://api.napster.com/v2.2/albums/${trackShortcut}?apikey=${API_KEY}`);
  return response.json();
}

// asynchronously fetches data from the given link
export async function asyncFetchDataFromLink(link) {
  const response = await fetch(`${link}`);
  return response.json();
}