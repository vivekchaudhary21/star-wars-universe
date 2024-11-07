import { Card, Stack, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { CharacterDetails } from '@/types'
import { HomePlanet } from '..'
import { getPeopleIdFromURL } from '../../utils'

export const CharacterCard = ({ rec }: { rec: CharacterDetails }) => {
  const { name, gender, homeworld, url } = rec
  const id = getPeopleIdFromURL(url)

  return (
    <Stack gap="4" direction="row" wrap="wrap" alignItems={'center'}>
      <Card.Root width="320px">
        <Card.Body gap="2">
          <Card.Title mb="2">
            {name} {gender !== 'n/a' && `(${gender.charAt(0).toUpperCase()})`}
          </Card.Title>
          <Card.Description>
            <HomePlanet url={homeworld} />
          </Card.Description>
        </Card.Body>
        <Card.Footer justifyContent="flex-end">
          <Button variant="outline">
            <Link to={`/character/${id}`}>View</Link>
          </Button>
        </Card.Footer>
      </Card.Root>
    </Stack>
  )
}
