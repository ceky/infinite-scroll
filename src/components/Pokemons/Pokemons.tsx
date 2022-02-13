import './Pokemons.css';

type OwnProps = {
  name: string;
};

function Pokemons({ name }: OwnProps) {
  return <div className="pokemons-container">{name}</div>;
}

export default Pokemons;
