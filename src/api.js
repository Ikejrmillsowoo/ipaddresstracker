const url = "https://geo.ipify.org/api/v1?apiKey=at_nHAchEA9FahlplVslwXKRlTJfZV5m&ipAddress=8.8.8.8"
const apiKey = "at_nHAchEA9FahlplVslwXKRlTJfZV5m"

async function fetchData() {
    const response = await fetch(url)
    const responseJSON = await response.json()
    console.log(responseJSON)
    return responseJSON
}

export default function Api() {
    fetchData() 
}
