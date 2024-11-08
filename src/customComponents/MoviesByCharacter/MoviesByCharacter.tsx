import { useGetStarWarsUniverseMovies } from '../../hooks'
import { Center, Heading, Card, Flex, Spinner } from '@chakra-ui/react'

export const MoviesByCharacter = ({ movies }: { movies: string[] }) => {
  const { data, pending } = useGetStarWarsUniverseMovies(movies)

  if (pending) {
    return (
      <Center>
        <Spinner />
      </Center>
    )
  }

  return (
    <>
      <Center>
        <Heading m={'5px auto'}>Movies List</Heading>
      </Center>
      <Flex justifyContent={'center'} wrap={'wrap'}>
        {data.map((movie) => (
          <Card.Root m={2} key={movie.title}>
            <Card.Body gap="2">
              <Card.Description>
                <p>Title - {movie.title}</p>
                <p>Director - {movie.director}</p>
                Release - {movie.release_date}
              </Card.Description>
            </Card.Body>
          </Card.Root>
        ))}
      </Flex>
    </>
  )
}
