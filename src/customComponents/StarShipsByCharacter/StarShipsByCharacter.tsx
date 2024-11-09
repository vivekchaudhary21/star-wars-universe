import { useGetStarWarsUniverseStarships } from '../../hooks'
import { Heading, Center, Card, Flex, Spinner } from '@chakra-ui/react'

export const StarShipsByCharacter = ({
  starShips,
}: {
  starShips: string[]
}) => {
  const { data, pending } = useGetStarWarsUniverseStarships(starShips)

  if (pending) {
    return (
      <Center>
        <Spinner />
      </Center>
    )
  }

  return (
    <>
      {data.length ? (
        <>
          <Center>
            <Heading>Star Ships</Heading>
          </Center>
          <Flex justifyContent={'center'} wrap={'wrap'}>
            {data.map((starShip) => (
              <Card.Root m={2} key={starShip.name}>
                <Card.Body gap="2">
                  <Card.Description>
                    <p>Name - {starShip.name}</p>
                    <p>Model - {starShip.model}</p>
                    <p> Manufacturer - {starShip.manufacturer}</p>
                  </Card.Description>
                </Card.Body>
              </Card.Root>
            ))}
          </Flex>
        </>
      ) : (
        <></>
      )}
    </>
  )
}
