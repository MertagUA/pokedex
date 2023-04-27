import styled from '@emotion/styled';
import { theme } from 'utils/theme';

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  max-width: 1280px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left: ${theme.border};
  border-bottom: ${theme.border};
  border-right: ${theme.border};
  box-shadow: ${theme.boxShadow};
  background-color: ${theme.color.red};
`;
export const Title = styled.h1`
  text-align: center;
  padding: 10px 0;
`;

export const TitleWrapper = styled.div`
  position: relative;
  width: 200px;
`;
