export const getDataMovie = async (url: string) => {
    const API_KEY = import.meta.env.API_KEY

    const response = await fetch(url + "?api_key=" + API_KEY + "&language=es-US")
    const data = await response.json()
    return data
}

export const getDataMovieDetail = async (search: string) => {
    const API_KEY = import.meta.env.API_KEY

    const response = await fetch(
        "https://api.themoviedb.org/3/search/movie?api_key=" + API_KEY +
        "&language=es-US&query=" + search + "&page=1&include_adult=false"
    )
    const data = await response.json()
    return data
}