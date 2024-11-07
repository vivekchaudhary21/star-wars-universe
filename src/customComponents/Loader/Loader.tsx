import { Spinner, Text, VStack } from '@chakra-ui/react'

export const Loader = ({ label = 'Loading...' }) => (
  <VStack colorPalette="teal">
    <Spinner size={'xl'} color="colorPalette.600" />
    <Text>{label}</Text>
  </VStack>
)
