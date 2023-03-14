import sendRequest from "./send-request";
const BASE_URL = '/api/artistName';

export function editArtistName(userId)
  return sendRequest(`${BASE_URL}/work${userId}`, 'POST');