type Movie = [
    title: string,
    year: number
]

const movies = [
    {title:'Cinderela Bahiana', year: 1998},
    {title:'Rubber', year: 2010},
    {title:'Tainá', year: 2010}
]

export const Movie = {
    getAll: () =>{
        return movies
    }
}