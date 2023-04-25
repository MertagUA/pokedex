import { ItemStyled, Title, Types, TypesWrapper } from './Item.styled';
import unknownPokemon from '../../assets/images/unknownPokemon.jpg';
import { capitalizedFirstLetter } from 'utils/capitalizeFirstLetter';
import { pokemonTypesColors } from 'utils/pokemonTypes';

export const Item = ({ onPokemonCardClick, id, props }) => {
  const { name, sprites, types } = props;

  const pokemonImage = sprites?.front_default;

  const firstType = capitalizedFirstLetter(types[0]?.type.name);
  const secondType = types[1]?.type.name;

  const pokemonName = capitalizedFirstLetter(name);
  return (
    <ItemStyled
      onClick={() => {
        onPokemonCardClick({ ...props, id });
      }}
    >
      <img
        src={pokemonImage ? pokemonImage : unknownPokemon}
        alt={pokemonName}
        width={96}
        height={96}
      />
      <Title>{pokemonName}</Title>
      <TypesWrapper>
        <Types style={{ backgroundColor: pokemonTypesColors[firstType] }}>
          {firstType}
        </Types>
        {secondType && (
          <Types
            style={{
              backgroundColor:
                pokemonTypesColors[capitalizedFirstLetter(secondType)],
            }}
          >
            {secondType}
          </Types>
        )}
      </TypesWrapper>
    </ItemStyled>
  );
};
