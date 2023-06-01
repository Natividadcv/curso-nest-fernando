class NewPokemon {
  constructor(
    public readonly id: number, // Se coloca readlonly para que no se pueda modificar el valor
    public name: string
  ) {}
}

const Mydecorator = () => {
  return (target: Function) => {
    return NewPokemon;
  };
};

@Mydecorator()
export class Pokemon {
  constructor(
    public readonly id: number, // Se coloca readlonly para que no se pueda modificar el valor
    public name: string
  ) {}

  scream = () => {
    console.log(`NO QUIERO`);
  };

  speack = () => {
    console.log(`  NO QUIERO HABLAR  `);
  };
}

export const charmander = new Pokemon(1, "Charmander");
charmander.scream();
charmander.speack();
