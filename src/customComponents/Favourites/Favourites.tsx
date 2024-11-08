import { Icon } from '@chakra-ui/react'
import { HiHeart } from 'react-icons/hi'

export const Favourites = ({
  liked,
  setLiked,
}: {
  setLiked: () => void
  liked: boolean
}) => {
  const color = liked ? 'red' : 'darkgrey'
  return (
    <Icon fontSize="2xl" color={color} ml={'5'} onClick={setLiked}>
      <HiHeart />
    </Icon>
  )
}
