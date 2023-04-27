import styled from '@emotion/styled';
import { media } from 'utils/mediaQueries';
import { theme } from 'utils/theme';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
}`;

export const ModalStyled = styled.div`
  display: flex;
  justify-content: center;
  ${media.mobileMax} {
    width: 300px;
  }
  width: 400px;
  height: 400px;
  background-color: ${theme.color.teal};
  border-radius: 30px;
`;
