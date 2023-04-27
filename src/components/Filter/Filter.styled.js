import styled from '@emotion/styled';
import { media } from 'utils/mediaQueries';
import { theme } from 'utils/theme';

export const FilterList = styled.ul`
  max-width: 760px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto 20px;
  gap: 5px;
  ${media.mobileMax} {
    &.is-hidden {
      ${theme.hidden}
    }
  }
`;

export const ShowFilterButton = styled.button`
  width: 150px;
  height: 40px;
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: 700;
  border: 1px solid ${theme.color.black};
  border-radius: 15px;
  background-color: ${theme.color.red};
  box-shadow: ${theme.boxShadow};
  cursor: pointer;
  ${media.tablet} {
    &.is-hidden {
      ${theme.hidden}
    }
  }
`;

export const FilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 15px;
`;
