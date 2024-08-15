"use client"

import { forwardRef } from 'react'
import { Box, Spinner } from '@chakra-ui/react'

export const DogSpinner = () => (
  <Spinner
    size="xl"
    position="absolute"
    left="50%"
    top="50%"
    ml="calc(0px - var(--spinner-size) / 2)"
    mt="calc(0px - var(--spinner-size))"
  />
)

export const DogContainer = forwardRef(({ children }, ref) => (
  <Box
    ref={ref}
    className="voxel-dog"
    m="auto"
    mt={{ base: '-20px', md: '-20px', lg: '-20px' }}
    mb={{ base: '-40px', md: '-40px', lg: '-40px' }}
    w={{ base: '280px', md: '480px', lg: '480px' }}
    h={{ base: '280px', md: '480px', lg: '480px' }}
    position="relative"
  >
    {children}
  </Box>
))

const Loader = () => {
  return (
    <DogContainer>
      <DogSpinner />
    </DogContainer>
  )
}

export default Loader
