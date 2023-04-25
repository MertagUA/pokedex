import { setIsLoading } from 'redux/Slices/isLoadingSlice';
import { useDispatch, useSelector } from 'react-redux';
import { pokemonTypesColors } from 'utils/pokemonTypes';
import { Spinner } from 'components/Spinner/Spinner';
import { setColor } from 'redux/Slices/headerColorSlice';
import { Button } from './FilterItem.styled';

export const FilterItem = ({ type, onTypeButtonClick, newType }) => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector(state => state);
  return (
    <li key={type}>
      <Button
        type="button"
        onClick={() => {
          dispatch(setIsLoading(true));
          dispatch(setColor(pokemonTypesColors[type]));
          onTypeButtonClick(type);
        }}
        style={{ backgroundColor: pokemonTypesColors[type] }}
      >
        {type}
        {isLoading && newType === type.toLowerCase() && <Spinner />}
      </Button>
    </li>
  );
};
