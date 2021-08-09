// asynchronously fetches the album image
async function asyncFetchAlbumImageData(link, API_KEY) {
  const response = await fetch(`${link}?apikey=${API_KEY}`);
  return response.json();
}

export default asyncFetchAlbumImageData;