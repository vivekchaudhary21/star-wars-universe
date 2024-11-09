import { useParams } from 'react-router-dom'
import { Center, Flex, Heading } from '@chakra-ui/react'
import {
  Loader,
  MoviesByCharacter,
  StarShipsByCharacter,
  CharacterDetails,
  Favourites,
} from '../../customComponents'
import { useGetStarWarsUniverseCharacter, useLocalStorage } from '../../hooks'
import { CharacterDetail } from '@/types'

export const Character = () => {
  // custom hooks
  const { id = '' } = useParams()
  const { lsValue, setLSValue } = useLocalStorage('people')
  const { isPending, error, data, isFetching } =
    useGetStarWarsUniverseCharacter(id)

  if (isFetching || isPending) {
    return <Loader />
  }
  if (error || data.detail === 'Not found') {
    return (
      <Center mt={10}>
        <Heading>No star wars character found</Heading>
      </Center>
    )
  }

  const { films, starships }: CharacterDetail = data
  const liked = lsValue.find((rec: string) => rec === id)
  return (
    <>
      <Flex justifyContent={'center'}>
        <CharacterDetails character={data} editable />
        <Favourites liked={liked} setLiked={() => setLSValue(id)} />
      </Flex>
      <MoviesByCharacter movies={films} />
      <StarShipsByCharacter starShips={starships} />
    </>
  )
}
