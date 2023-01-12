export const fetchCharacters = async () => {
    const url = 'https://hp-api.onrender.com/api/characters'
    const response = await fetch(url)
    const data = await response.json()

    return await data
}

export const fetchHouse = async (house) => {
    const url = `https://hp-api.onrender.com/api/characters/house/${house}`
    const response = await fetch(url)
    const data = await response.json()

    return await data
}