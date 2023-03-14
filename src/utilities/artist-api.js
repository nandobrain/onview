import sendRequest from "./send-request";
const BASE_URL = '/api/artists';

export async function addArtist(artist) {
  return sendRequest(`${BASE_URL}`, 'POST', {artist});
}

