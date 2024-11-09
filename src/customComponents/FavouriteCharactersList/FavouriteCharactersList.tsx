import { Flex, Spinner } from '@chakra-ui/react'
import { useGetStarWarsUniverseCharactersByIds } from '../../hooks'
import { CharacterDetails } from '..'
import { Link } from 'react-router-dom'
import { getPeopleIdFromURL } from '../../utils'

export const FavouriteCharactersList = ({
  moviesId,
}: {
  moviesId: string[]
}) => {
  const { data, pending } = useGetStarWarsUniverseCharactersByIds(moviesId)

  if (pending) {
    return <Spinner />
  }

  return (
    <Flex wrap={'wrap'} justifyContent={'center'}>
      {data.map((character) => {
        const id = getPeopleIdFromURL(character.url)
        return (
          <div key={character.name}>
            <Link to={`/character/${id}`}>
              <CharacterDetails character={character} />
            </Link>
          </div>
        )
      })}
    </Flex>
  )
}
