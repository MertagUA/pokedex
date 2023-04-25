import { useSelector } from 'react-redux';
import { Title, HeaderStyled } from './Header.styled';

export const Header = () => {
  const { color } = useSelector(state => state);

  return (
    <HeaderStyled style={{ backgroundColor: color }}>
      <Title>Pokedex</Title>
    </HeaderStyled>
  );
};
