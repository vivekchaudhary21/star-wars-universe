import { CharacterDetail } from '../../types'
import { Center, Card, VStack } from '@chakra-ui/react'

export const CharacterDetails = ({
  character,
}: {
  character: CharacterDetail
}) => {
  const {
    name,
    height,
    mass,
    hair_color,
    skin_color,
    eye_color,
    birth_year,
    gender,
  } = character
  return (
    <Center>
      <Card.Root minW={'200px'} m={'10px'}>
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
