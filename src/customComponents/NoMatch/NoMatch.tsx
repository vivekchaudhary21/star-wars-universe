import { Center, Heading } from '@chakra-ui/react'

export const NoMatch = () => {
  return (
    <Center h={'80vh'}>
      <Heading size={'6xl'} color={'red'}>
        Page not found
      </Heading>
    </Center>
  )
}
