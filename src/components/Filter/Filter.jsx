import { pokemonTypes } from 'utils/pokemonTypes';
import { FilterList } from './Filter.styled';
import { FilterItem } from './FilterItem/FilterItem';

export const Filter = ({ onTypeButtonClick, newType }) => {
  return (
    <FilterList>
      {pokemonTypes.map(type => (
        <FilterItem
          key={type}
          type={type}
          onTypeButtonClick={onTypeButtonClick}
          newType={newType}
        ></FilterItem>
      ))}
    </FilterList>
  );
};
