import styled from '@emotion/styled';
import { theme } from 'utils/theme';

export const MainStyled = styled.main`
  position: relative;
  margin: 0 auto;
  padding: 20px 0;
`;

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 15px;
`;

export const Button = styled.button`
  width: 150px;
  height: 40px;
  font-size: 18px;
  font-weight: 700;
  border: 1px solid ${theme.color.black};
  border-radius: 15px;
  background-color: ${theme.color.red};
  box-shadow: ${theme.boxShadow};
  cursor: pointer;
`;
