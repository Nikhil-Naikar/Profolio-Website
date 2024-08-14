import { motion } from 'framer-motion'
import { chakra, shouldForwardProp } from '@chakra-ui/react'

const StyledDiv = chakra(motion.div, {
  shouldForwardProp: prop => {
    return shouldForwardProp(prop) || prop === 'transition'
  }
})

interface Props{
    delay?:number,
    children: React.ReactNode
}

const Section = ({ delay = 0, children }: Props) => (

  <StyledDiv
    initial={{ y: 10, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8.toString(), delay: delay.toString() }}
    mb={6}
  >
    {children}
  </StyledDiv>
)

export default Section