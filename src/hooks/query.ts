import { API_STAR_WARS_PEOPLE } from '../constants'
import { useQueries, useQuery } from '@tanstack/react-query'

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

export const useGetStarWarsUniverseMovies = (movie_urls: string[]) => {
  return useQueries({
    queries: movie_urls.map((url: string) => ({
      queryKey: [url],
      queryFn: async () => {
        const response = await fetch(url)
        return response.json()
      },
    })),
    combine: (results) => {
      return {
        data: results.map((result) => result.data),
        pending: results.some((result) => result.isPending),
      }
    },
  })
}

export const useGetStarWarsUniverseStarships = (starShipsUrls: string[]) => {
  return useQueries({
    queries: starShipsUrls.map((url: string) => ({
      queryKey: [url],
      queryFn: async () => {
        const response = await fetch(url)
        return response.json()
      },
    })),
    combine: (results) => {
      return {
        data: results.map((result) => result.data),
        pending: results.some((result) => result.isPending),
      }
    },
  })
}

export const useGetStarWarsUniverseCharactersByIds = (ids: string[]) => {
  return useQueries({
    queries: ids.map((id: string) => ({
      queryKey: ['star-wars-universe-characters', id],
      queryFn: async () => {
        const response = await fetch(`${API_STAR_WARS_PEOPLE}${id}`)
        return response.json()
      },
    })),
    combine: (results) => {
      return {
        data: results.map((result) => result.data),
        pending: results.some((result) => result.isPending),
      }
    },
  })
}
