import { useState } from 'react'
import { Button, Input } from '@chakra-ui/react'

export const Editable = ({
  value,
  editable,
}: {
  value: string
  editable: boolean
}) => {
  const [changeType, setChangeType] = useState(true)
  const [input, setInput] = useState(value)
  return (
    <>
      {changeType ? (
        input
      ) : (
        <Input
          w={'100px'}
          size="xs"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      )}
      {editable && (
        <Button
          variant="plain"
          size="xs"
          p={0}
          m={0}
          pl={'5px'}
          onClick={() => setChangeType(!changeType)}
        >
          {changeType ? 'Edit' : 'Done'}
        </Button>
      )}
    </>
  )
}
