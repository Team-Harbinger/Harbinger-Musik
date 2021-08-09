// asynchronously fetches the list of tracks
async function asyncFetchListOfTracksData(link) {
  const response = await fetch(`${link}`);
  return response.json();
}

export default asyncFetchListOfTracksData;