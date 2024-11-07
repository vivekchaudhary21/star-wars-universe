import { useEffect, useState } from 'react'
import { Container, Input } from '@chakra-ui/react'
import { CharactersList, Pagination } from '../../customComponents'

export const Characters = () => {
  // local state
  const [input, setInput] = useState<string>('')
  const [page, setPage] = useState(1)
  const [characterCount, setCharacterCount] = useState(1)

  useEffect(() => {
    setPage(1)
  }, [input])

  // callbacks
  const onInputHandler = (e: React.FormEvent<HTMLInputElement>) => {
    const { value } = e.target as HTMLInputElement
    setInput(value)
  }

  return (
    <Container p={2} fluid textAlign={'center'}>
      <Input
        placeholder="Search for a star wars character"
        value={input}
        onChange={onInputHandler}
        width={'50%'}
        mb={10}
      />
      <CharactersList
        searchTerm={input}
        page={page}
        setCharacterCount={setCharacterCount}
      />
      <Pagination
        count={characterCount}
        onPageChange={(e) => setPage(e.page)}
      />
    </Container>
  )
}
