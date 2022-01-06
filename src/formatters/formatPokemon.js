import ucfirst from "../ucfirst";

const formatPokemon = ({
  abilities,
  game_indices,
  height,
  held_items,
  moves,
  name,
  order,
  species,
  sprites,
  stats,
  types,
  weight
}) => ({
  abilities: abilities.map(
    ({ ability: { name }, is_hidden }) =>
      `${name} ${is_hidden ? " (hidden)" : ""}`
  ),
  gameIndices: game_indices.map(({ version: { name } }) => name),
  height: height,
  heldItems: held_items.map(({ item: { name } }) => name),
  moves: moves.map(({ move: { name } }) => name),
  name: name,
  order: order,
  species: species.name,
  sprites: Object.entries(sprites)
    .filter(([key, value]) => value && !["versions", "other"].includes(key))
    .map(([spriteName, url]) => [spriteName.split("_").map(ucfirst), url]),
  stats: stats.map(({ base_stat, stat: { name } }) => `${name} (${base_stat})`),
  types: types.map(({ type: { name } }) => name),
  weight: weight
});

export default formatPokemon;
