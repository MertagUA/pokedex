import { ListStyled } from './List.styled';
import { Item } from 'components/Item/Item';

export const List = ({ pokemons, typePokemons, onPokemonCardClick }) => {
  // console.log(pokemons);
  // console.log(typePokemons);
  const pokemonsToShow = typePokemons.length !== 0 ? typePokemons : pokemons;
  return (
    <ListStyled>
      {pokemonsToShow.map(({ id, ...props }) => (
        <Item
          key={id}
          id={id}
          onPokemonCardClick={onPokemonCardClick}
          props={props}
        />
      ))}
    </ListStyled>
  );
};
