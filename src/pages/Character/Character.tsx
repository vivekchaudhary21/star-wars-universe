import { useParams } from 'react-router-dom'
import { Center, Card, Flex, Heading, VStack } from '@chakra-ui/react'
import {
  Loader,
  MoviesByCharacter,
  StarShipsByCharacter,
} from '../../customComponents'
import { useGetStarWarsUniverseCharacter } from '../../hooks'
import { CharacterDetail } from '@/types'

export const Character = () => {
  const { id } = useParams()
  const { isPending, error, data, isFetching } =
    useGetStarWarsUniverseCharacter(id)

  if (isFetching || isPending) {
    return <Loader />
  }

  console.log({ data })

  if (error || data.detail === 'Not found') {
    return (
      <Center mt={10}>
        <Heading>No star wars character found</Heading>
      </Center>
    )
  }

  const {
    name,
    height,
    mass,
    hair_color,
    skin_color,
    eye_color,
    birth_year,
    gender,
    films,
    starships,
  }: CharacterDetail = data ?? {}

  return (
    <>
      <Center>
        <Flex direction={'column'} m={'0 25%'}>
          <Card.Root>
            <Card.Body gap="2">
              <Center>
                <Card.Title>{name}</Card.Title>
              </Center>
              <Card.Description>
                <VStack>
                  <p>Gender: {gender}</p>
                  <p>Height: {height}</p>
                  <p>Mass: {mass}</p>
                  <p>Hair color: {hair_color}</p>
                  <p>Skin color: {skin_color}</p>
                  <p>Eye color: {eye_color}</p>
                  <p>Birth year: {birth_year}</p>
                </VStack>
              </Card.Description>
            </Card.Body>
          </Card.Root>
        </Flex>
      </Center>
      <MoviesByCharacter movies={films} />
      <StarShipsByCharacter starShips={starships} />
    </>
  )
}
