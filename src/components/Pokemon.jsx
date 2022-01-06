import SingleAttribute from "./SingleAttribute";
import ucfirst from "../ucfirst";
import MultiAttributes from "./MultiAttributes";

const Pokemon = (props) => {
  const {
    abilities,
    gameIndices,
    height,
    heldItems,
    moves,
    name,
    order,
    species,
    sprites,
    stats,
    types,
    weight
  } = props;
  const singleAttributes = {
    order,
    name,
    height,
    weight,
    species: species.name
  };

  return (
    <ul>
      {Object.entries(singleAttributes).map(([keyName, value]) => (
        <SingleAttribute key={keyName} keyName={ucfirst(keyName)}>
          {value}
        </SingleAttribute>
      ))}
      <li className="flex flex-wrap justify-between">
        {sprites.map(([name, url]) => (
          <img src={url} alt={name} />
        ))}
      </li>
      <MultiAttributes attrs={types} title="Types" />
      <MultiAttributes attrs={stats} title="Stats" />
      <MultiAttributes attrs={abilities} title="Abilities" />
      <MultiAttributes attrs={moves} title="Moves" />
      <MultiAttributes attrs={heldItems} title="Held items" />
      <MultiAttributes attrs={gameIndices} title="Game indices" />
    </ul>
  );
};

export default Pokemon;
