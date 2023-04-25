import styled from '@emotion/styled';
import { theme } from 'utils/theme';

export const FooterStyled = styled.footer`
  width: 1280px;
  margin: 0 auto;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-left: ${theme.border};
  border-top: ${theme.border};
  border-right: ${theme.border};
  box-shadow: ${theme.boxShadow};
  background-color: ${theme.color.red};
`;
export const Title = styled.h2`
  text-align: center;
  padding: 10px 0;
`;
