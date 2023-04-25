import { getPokemonNumber } from 'utils/getPokemonNumber';
import unknownPokemon from '../../assets/images/unknownPokemon.jpg';
import { Img, Table, Title } from './PokemonCard.styled';
import { capitalizedFirstLetter } from 'utils/capitalizeFirstLetter';

export const PokemonCard = ({ pokemonInfo }) => {
  const { name, sprites, id, types, weight, stats, moves } = pokemonInfo;

  const pokemonName = capitalizedFirstLetter(name);

  const pokemonImage = sprites?.front_default;

  const pokemonNumber = getPokemonNumber(id);

  const firstType = capitalizedFirstLetter(types[0]?.type.name);
  const secondType = types[1]?.type.name;
  const hp = stats[0].base_stat;
  const attack = stats[1].base_stat;
  const defence = stats[2].base_stat;
  const specialAttack = stats[3].base_stat;
  const specialDefense = stats[4].base_stat;
  const speed = stats[5].base_stat;
  const totalMoves = moves.length;

  return (
    <div>
      <Img
        src={pokemonImage ? pokemonImage : unknownPokemon}
        alt={pokemonName}
      />
      <Title>
        {pokemonName} {pokemonNumber}
      </Title>
      <Table>
        <thead>
          <tr>
            <th>Type</th>
            <td>{secondType ? `${firstType}, ${secondType}` : firstType}</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Attack</td>
            <td>{attack}</td>
          </tr>
          <tr>
            <td>Defence</td>
            <td>{defence}</td>
          </tr>
          <tr>
            <td>HP</td>
            <td>{hp}</td>
          </tr>
          <tr>
            <td>SP Attack</td>
            <td>{specialAttack}</td>
          </tr>
          <tr>
            <td>SP Defence</td>
            <td>{specialDefense}</td>
          </tr>
          <tr>
            <td>Speed</td>
            <td>{speed}</td>
          </tr>
          <tr>
            <td>Weight</td>
            <td>{weight}</td>
          </tr>
          <tr>
            <td>Total moves</td>
            <td>{totalMoves}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};
