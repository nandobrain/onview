import sendRequest from "./send-request";
const BASE_URL = '/api/artistInfo';

export function editArtistInfo(userId)
return sendRequest(`${BASE_URL}`, 'POST', {artistInfo});

  export async function getArtistsInfo() {
    return sendRequest(`${BASE_URL}`)
  }