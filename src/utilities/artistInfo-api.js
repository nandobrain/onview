import sendRequest from "./send-request";
const BASE_URL = '/api/artistInfo';

export function editArtistInfo(userId)
  return sendRequest(`${BASE_URL}/work${userId}`, 'POST');
