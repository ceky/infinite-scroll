import './Pokemon.css';

type OwnProps = {
  name: string;
  key: string;
};

function Pokemon({ name, key }: OwnProps) {
  return (
    <li className="pokemon-container" key={key}>
      {name}
    </li>
  );
}

export default Pokemon;
