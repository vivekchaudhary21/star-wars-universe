import { Flex } from '@chakra-ui/react'
import { useGetStarWarsUniverseCharacters } from '../../hooks'
import { CharacterDetails } from '@/types'
import { CharacterCard, Loader } from '../../customComponents'
import { useCallback, useEffect } from 'react'
import throttle from 'lodash/throttle'

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
  const { isPending, data, isFetching, refetch } =
    useGetStarWarsUniverseCharacters(searchTerm, page)

  const throttledRefetchFn = useCallback(
    throttle(() => refetch(), 1000),
    [refetch]
  )

  useEffect(() => {
    if (data) {
      setCharacterCount(data.count)
    }
  }, [setCharacterCount, data])

  useEffect(() => {
    throttledRefetchFn()
  }, [searchTerm, throttledRefetchFn])

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
