import { Center } from '@chakra-ui/react'
import {
  useGetStarWarsUniverseCharactersByIds,
  useLocalStorage,
} from '../../hooks'

export const Favourites = () => {
  const { lsValue, setLSValue } = useLocalStorage('people')
  if (!lsValue.length) {
    return <Center>No favourites added</Center>
  }

  return <FavouriteMoviesList moviesId={lsValue} />
}

const FavouriteMoviesList = ({ moviesId }: { moviesId: string[] }) => {
  const { data, pending } = useGetStarWarsUniverseCharactersByIds(moviesId)

  console.log({ data })

  return <></>
}
