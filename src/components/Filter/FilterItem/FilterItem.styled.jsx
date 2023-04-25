import styled from '@emotion/styled';
import { theme } from 'utils/theme';

export const Button = styled.button`
  width: 80px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid ${theme.color.black};
  box-shadow: ${theme.boxShadow};
  font-size: 16px;
  font-weight: 700;
  :active {
    scale: 1.07;
  }
  cursor: pointer;
`;
