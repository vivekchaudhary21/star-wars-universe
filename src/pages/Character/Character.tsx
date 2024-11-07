import { useParams } from 'react-router-dom'
import { Card, Flex, Heading, VStack } from '@chakra-ui/react'
import { Center } from '@chakra-ui/react'
import { Loader } from '../../customComponents'
import { useGetStarWarsUniverseCharacter } from '../../hooks'

export const Character = () => {
  const { id } = useParams()
  const { isPending, error, data, isFetching } =
    useGetStarWarsUniverseCharacter(id)
  if (isFetching || isPending) {
    return <Loader />
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
  } = data ?? {}

  return (
    <Center>
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
    </Center>
  )
}
