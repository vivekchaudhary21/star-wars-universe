import { Flex } from '@chakra-ui/react'
import { useGetStarWarsUniverseCharacters } from '../../hooks'
import { CharacterDetails } from '@/types'
import { CharacterCard, Loader } from '../../customComponents'
import { useEffect } from 'react'

export const CharactersList = ({
  searchTerm,
  page,
  setCharacterCount,
}: {
  searchTerm: string
  page: number
  setCharacterCount: (value: number) => void
}) => {
  // custom hooks
  const { isPending, error, data, isFetching } =
    useGetStarWarsUniverseCharacters(searchTerm, page)

  useEffect(() => {
    if (data) {
      setCharacterCount(data.count)
    }
  }, [setCharacterCount, data])

  if (isFetching || isPending) {
    return <Loader />
  }

  return (
    <>
      <Flex
        gap="4"
        wrap={'wrap'}
        alignItems={'center'}
        justifyContent={'center'}
      >
        {data.results.map((rec: CharacterDetails) => (
          <CharacterCard key={rec.name} rec={rec} />
        ))}
      </Flex>
    </>
  )
}
