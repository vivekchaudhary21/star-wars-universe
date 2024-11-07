import { Spinner } from '@chakra-ui/react'
import { useGetStarWarsUniverseCharacterHomePlanet } from '../../hooks'

export const HomePlanet = ({ url }: { url: string }) => {
  const {
    data: homePlanet,
    isPending,
    error,
    isFetching,
  } = useGetStarWarsUniverseCharacterHomePlanet({ API_URL: url })

  if (isFetching || isPending) {
    return <Spinner size="sm" />
  }

  return <>Home Planet - {homePlanet.name}</>
}
