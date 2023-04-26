import { List } from 'components/List/List';
import { MainStyled, MainWrapper, Button } from './Main.styled';
import { fetchPokemonName, fetchPokemonsByType } from 'services/pokemon-api';
import { useEffect, useState } from 'react';
import { Filter } from 'components/Filter/Filter';
import { setColor } from 'redux/Slices/headerColorSlice';
import { useDispatch } from 'react-redux';
import { theme } from 'utils/theme';
import { Modal } from 'components/Modal/Modal';
import { setIsLoading } from 'redux/Slices/isLoadingSlice';
import { setIsActiveButton } from 'redux/Slices/isActiveButtonSlice';
import { Spinner } from 'components/Spinners/Spinner';

export const Main = () => {
  const [pokemons, setPokemons] = useState(null);
  const [pokemonInfo, setPokemonInfo] = useState({});
  const [pokemonQuantity, setPokemonQuantity] = useState(0);
  const [type, setType] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    const getPokemons = async () => {
      try {
        if (type) {
          const pokemonsByType = await fetchPokemonsByType(type);
          setPokemons(pokemonsByType);

          dispatch(setIsLoading(false));
          return;
        }
        if (pokemonQuantity === 0) {
          const pokemonsData = await fetchPokemonName(pokemonQuantity);
          setPokemons(pokemonsData);
          dispatch(setIsLoading(false));
          dispatch(setIsActiveButton(''));
          return;
        }
        setLoadingMore(true);
        const pokemonsData = await fetchPokemonName(pokemonQuantity);
        setPokemons(prevState => [...prevState, ...pokemonsData]);
        setLoadingMore(false);
      } catch (error) {
        console.log(error);
      }
    };
    getPokemons();
  }, [pokemonQuantity, type, dispatch]);

  const onTypeButtonClick = async newType => {
    const normalizedType = newType.toLowerCase();

    if (type === normalizedType) {
      dispatch(setColor(theme.color.red));
      setType('');
      return;
    }

    setType(normalizedType);
  };

  const onCloseModal = () => {
    setShowModal(false);
  };

  const onPokemonCardClick = newPokemonInfo => {
    setPokemonInfo(newPokemonInfo);
    setShowModal(true);
  };

  const onLoadMoreButtonClick = () => {
    if (pokemonQuantity >= 1010) {
      return alert('We dont have pokemons anymore');
    }
    setPokemonQuantity(prevState => prevState + 12);
  };

  return (
    <MainStyled>
      <Filter onTypeButtonClick={onTypeButtonClick} newType={type} />
      {!pokemons ? (
        <Spinner />
      ) : (
        <MainWrapper>
          <List pokemons={pokemons} onPokemonCardClick={onPokemonCardClick} />
          {!type && (
            <Button
              type="button"
              onClick={onLoadMoreButtonClick}
              disabled={loadingMore}
            >
              Load More
            </Button>
          )}
        </MainWrapper>
      )}
      {showModal && (
        <Modal onCloseModal={onCloseModal} pokemonInfo={pokemonInfo} />
      )}
    </MainStyled>
  );
};
