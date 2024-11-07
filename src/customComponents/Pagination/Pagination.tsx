import { Center, HStack, Stack } from '@chakra-ui/react'
import {
  PaginationItems,
  PaginationNextTrigger,
  PaginationPrevTrigger,
  PaginationRoot,
} from '../../components/ui/pagination'

export const Pagination = ({
  onPageChange,
  count,
}: {
  onPageChange: (e: any) => void
  count: number
}) => {
  return (
    <Center pt={'25px'}>
      <Stack gap="8">
        <PaginationRoot
          key={'lg'}
          count={count}
          pageSize={10}
          defaultPage={1}
          size={'lg'}
          onPageChange={onPageChange}
        >
          <HStack>
            <PaginationPrevTrigger />
            <PaginationItems />
            <PaginationNextTrigger />
          </HStack>
        </PaginationRoot>
      </Stack>
    </Center>
  )
}
