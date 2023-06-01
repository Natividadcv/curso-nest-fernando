export const pokemonIds = [1,20,30,34,66];


// Objetos e interfaces
interface Pokemon {
    id: number,
    name: string,
    age: number,
    location?: string
}

export const Bulbasaur:Pokemon = {
    id: 1,
    name: 'Bulbasaur',
    age: 23,
}

export const charmander:Pokemon = {
    id: 2,
    name: 'Charmander',
    age: 22,
    location: 'Pueblo paleta'
}

export const pokemons:Pokemon[] = [];

pokemons.push(charmander, Bulbasaur)

console.log(pokemons);
