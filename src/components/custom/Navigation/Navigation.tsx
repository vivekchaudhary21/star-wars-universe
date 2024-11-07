import { Box, Container, Flex, HStack } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'

const Links = [
  { label: 'Characters', link: '/' },
  { label: 'Favourites', link: '/favourites' },
]

export const Navigation = () => {
  return (
    <>
      <Container px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'center'}>
          <HStack as={'nav'} display={{ base: 'none', md: 'flex' }}>
            {Links.map(({ label, link }) => (
              <Box px={2} py={1} rounded={'md'}>
                <NavLink to={link}>{label}</NavLink>
              </Box>
            ))}
          </HStack>
        </Flex>
      </Container>
    </>
  )
}
