import { ListStyled } from './List.styled';
import { Item } from 'components/Item/Item';

export const List = ({ pokemons, onPokemonCardClick }) => {
  return (
    <>
      <ListStyled>
        {pokemons.map(({ id, ...props }) => (
          <Item
            key={id}
            id={id}
            onPokemonCardClick={onPokemonCardClick}
            props={props}
          />
        ))}
      </ListStyled>
    </>
  );
};
