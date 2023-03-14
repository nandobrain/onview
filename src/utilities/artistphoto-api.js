import sendRequest from "./send-request";
const BASE_URL = '/api/artistPhoto';

export function addPhoto(userId)
  return sendRequest(`${BASE_URL}/work${userId}`, 'POST');