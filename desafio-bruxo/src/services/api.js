export const fetchCharacters = async () => {
    const url = 'https://hp-api.onrender.com/api/characters'
    const response = await fetch(url)
    const data = await response.json()

    return await data.slice(0, 10)
}