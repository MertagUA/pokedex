import styled from '@emotion/styled';
import { theme } from 'utils/theme';

export const ItemStyled = styled.li`
  width: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: ${theme.border};
  border-radius: 30px;
  background-color: ${theme.color.teal};
  padding-bottom: 10px;
  :hover {
    scale: 1.05;
  }
`;

export const TypesWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 10px;
`;
export const Types = styled.p`
  width: 80px;
  height: 40px;
  padding: 8px;
  font-size: 18px;
  font-weight: 500;
  border: 1px solid ${theme.color.black};
  border-radius: 10px;
  background-color: white;
  text-align: center;
`;

export const Title = styled.h2`
  margin-bottom: 10px;
`;
