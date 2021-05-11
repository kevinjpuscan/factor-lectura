const axios = require('axios');

const base = process.env.BASE_AIRTABLE;
const token = process.env.API_KEY_AIRTABLE;
const basePath = `https://api.airtable.com/v0/${base}`
let config = {
  headers: {
    'Authorization': 'Bearer ' + token
  }
}

export default {
  save(url, body) {
    return axios.post(
      `${basePath}${url}`,
      body,
      config
    )
  }

}