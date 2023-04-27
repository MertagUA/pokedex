import { setIsLoading } from 'redux/Slices/isLoadingSlice';
import { useDispatch, useSelector } from 'react-redux';
import { pokemonTypesColors } from 'utils/pokemonTypes';
import { setColor } from 'redux/Slices/headerColorSlice';
import { Button } from './FilterItem.styled';
import { setIsActiveButton } from 'redux/Slices/isActiveButtonSlice';

export const FilterItem = ({ type, onTypeButtonClick, newType }) => {
  const dispatch = useDispatch();
  const { isLoading, isActiveButton } = useSelector(state => state);
  const clickedButton = newType === type.toLowerCase();

  return (
    <li key={type}>
      <Button
        type="button"
        onClick={() => {
          dispatch(setIsLoading(true));
          dispatch(setColor(pokemonTypesColors[type]));
          onTypeButtonClick(type);
          dispatch(setIsActiveButton('active'));
        }}
        style={{ backgroundColor: pokemonTypesColors[type] }}
        className={clickedButton && isActiveButton}
        disabled={isLoading}
      >
        {type}
      </Button>
    </li>
  );
};
