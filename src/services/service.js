const URL_BASE = `https://pokeapi.co/api/v2`;

//GET
export const get = async (url) => {
    try {
        const result = await fetch(`${URL_BASE}/${url}`)
        return result.json()
    } catch (error) {
        console.log(error)
    }
}