// asynchronously fetches top track results based on what was searched in the searchbar
async function asyncFetchTrackData(link) {
  const response = await fetch(`${link}`);
  return response.json();
}

export default asyncFetchTrackData;