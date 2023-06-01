import axios from "axios";
import { Move, PokeapiResponse } from "../interface/pokeapi-response.interface";

export class Pokemon {
  // public id: number;
  // public name: string;

  // constructor(id: number, name: string) {
  //     this.id = id;
  //     this.name = name;
  //     console.log("Constructor llamado");

  // }

  // ! Forma corta

  get imageUrl(): string {
    return `https://pokemon.com/${this.id}.jpg`;
  }

  constructor(
    public readonly id: number, // readonly sirve para que no se pueda modificar el valor de la variable una vez se haya creado el objeto
    public name: string
  ) {}

  scream() {
    console.log(`${this.name.toLocaleLowerCase()!!!}`);
  }

  speack() {
    console.log(`${this.name} ${this.name}`);
  }

  async getMove(): Promise<Move[]> {
    // const move = 10;
    const { data } = await axios.get<PokeapiResponse>(
      "https://pokeapi.co/api/v2/pokemon/4"
    );
    return data.moves;
  }
}

export const charmandey = new Pokemon(1, "Charmandey");
// console.log(charmandey.imageUrl);
// charmandey.scream();
// charmandey.speack();
// console.log(charmandey.getMove());

charmandey.getMove();
