import { pokemonTypes } from 'utils/pokemonTypes';
import { FilterList, FilterWrapper, ShowFilterButton } from './Filter.styled';
import { FilterItem } from './FilterItem/FilterItem';

export const Filter = ({
  onTypeButtonClick,
  newType,
  onShowFilterButtonClick,
  showFilter,
}) => {
  return (
    <FilterWrapper>
      <ShowFilterButton
        type="button"
        onClick={onShowFilterButtonClick}
        className="is-hidden"
      >
        {showFilter ? 'Filter' : 'Close'}
      </ShowFilterButton>
      <FilterList className={showFilter ? 'is-hidden' : ''}>
        {pokemonTypes.map(type => (
          <FilterItem
            key={type}
            type={type}
            onTypeButtonClick={onTypeButtonClick}
            newType={newType}
          ></FilterItem>
        ))}
      </FilterList>
    </FilterWrapper>
  );
};
