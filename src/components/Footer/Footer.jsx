import { useSelector } from 'react-redux';
import { FooterStyled, Title } from './Footer.styled';

export const Footer = () => {
  const { color } = useSelector(state => state);

  return (
    <FooterStyled style={{ backgroundColor: color }}>
      <Title>Created by Viacheslav Kobets</Title>
    </FooterStyled>
  );
};
