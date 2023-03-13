import sendRequest from "./send-request";


const BASE_URL = '/artist-api/items';


export async function getAll() {
    return sendRequest(BASE_URL);
  }