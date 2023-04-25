import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalStyled } from './Modal.styled';
import { PokemonCard } from 'components/PokemonCard/PokemonCard';

const modalRoot = document.querySelector('#modal-root');

export function Modal({ onCloseModal, pokemonInfo }) {
  useEffect(() => {
    document.addEventListener('keydown', onEscapeClick);

    return () => document.removeEventListener('keydown', onEscapeClick);
  });

  const onEscapeClick = e => {
    if (e.code === 'Escape') {
      onCloseModal();
    }
  };

  const onOverlayClick = e => {
    if (e.target === e.currentTarget) {
      onCloseModal();
    }
  };

  return createPortal(
    <Overlay onClick={onOverlayClick}>
      <ModalStyled>
        <PokemonCard pokemonInfo={pokemonInfo} />
      </ModalStyled>
    </Overlay>,
    modalRoot
  );
}
