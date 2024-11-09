import { Center } from '@chakra-ui/react'
import { useLocalStorage } from '../../hooks'
import { FavouriteCharactersList } from '../../customComponents'

export const Favourites = () => {
  const { lsValue } = useLocalStorage('people')
  if (!lsValue.length) {
    return <Center>No favourites added</Center>
  }

  return <FavouriteCharactersList moviesId={lsValue} />
}
