import { Box, Center, Container, Flex, Heading, HStack } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'

const Links = [
  { label: 'Characters', link: '/' },
  { label: 'Favourites', link: '/favourites' },
]

export const Navigation = () => {
  return (
    <>
      <Container px={4}>
        <Center pt="20px">
          <Heading size={{ base: '2xl', md: '4xl', lg: '5xl' }}>
            STAR WARS UNIVERSE
          </Heading>
        </Center>
        <Flex
          h={16}
          alignItems={'center'}
          justifyContent={'center'}
          alignContent={'center'}
        >
          <HStack as={'nav'} display={'flex'}>
            {Links.map(({ label, link }) => (
              <Box key={label} px={2} py={1} rounded={'md'}>
                <NavLink to={link}>{label}</NavLink>
              </Box>
            ))}
          </HStack>
        </Flex>
      </Container>
    </>
  )
}
