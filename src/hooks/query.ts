import { API_STAR_WARS_PEOPLE } from '../constants'
import { useQuery } from '@tanstack/react-query'

export const useGetStarWarsUniverseCharacters = (
  searchTerm: string,
  page: number
) => {
  const API_URL = `${API_STAR_WARS_PEOPLE}?page=${page}&search=${searchTerm}`

  return useQuery({
    queryKey: ['star-wars-universe-characters', searchTerm, page],
    queryFn: async () => {
      const response = await fetch(API_URL)
      return await response.json()
    },
  })
}

export const useGetStarWarsUniverseCharacterHomePlanet = ({
  API_URL,
}: {
  API_URL: string
}) => {
  return useQuery({
    queryKey: [API_URL],
    queryFn: async () => {
      const response = await fetch(API_URL)
      return await response.json()
    },
    staleTime: Infinity,
  })
}

export const useGetStarWarsUniverseCharacter = (id: string | undefined) => {
  const API_URL = `${API_STAR_WARS_PEOPLE}${id}`
  return useQuery({
    queryKey: ['star-wars-universe-characters', id],
    queryFn: async () => {
      const response = await fetch(API_URL)
      return await response.json()
    },
  })
}
