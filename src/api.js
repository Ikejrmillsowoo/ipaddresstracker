import { apiKey } from "./sourceData"

export const ipAddress  = "8.8.8.8"
const url = `https://geo.ipify.org/api/v1?apiKey=${apiKey}=${ipAddress}`


async function fetchData() {
    const response = await fetch(url)
    const responseJSON = await response.json()
    console.log(responseJSON)
    return responseJSON
}

export default fetchData
