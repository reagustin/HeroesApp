import { heroes } from "../data/heroes";


export const getHeroesByName = (name = '') => {
    console.log('se llamo getHeroesByName');
    if (name === ''){
        return [];
    }
    name = name.toLowerCase();

    return heroes.filter(hero => hero.superhero.toLowerCase().includes(name));

}