import { useSelector } from 'react-redux';
import { Title, HeaderStyled, TitleWrapper } from './Header.styled';
import { Spinner } from 'components/Spinners/Spinner';

export const Header = () => {
  const { color, isLoading } = useSelector(state => state);

  return (
    <HeaderStyled style={{ backgroundColor: color }}>
      <TitleWrapper>
        <Title>Pokedex</Title>
        {isLoading && <Spinner top="10px" right="-5px" />}
      </TitleWrapper>
    </HeaderStyled>
  );
};
