import { useContext } from 'react'
import { Box, Icon, Flex } from '@chakra-ui/react'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa'

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext)
  return (
    <Flex justifyContent='center' alignItems='center' marginRight='1'>
      <Icon as={FaArrowAltCircleLeft} onClick={() => scrollPrev()} fontSize='2xl' cursor='pointer' display={['none','none','none','block']} />
    </Flex>
  )
}

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext)
  return (
    <Flex justifyContent='center' alignItems='center' marginLeft='1'>
      <Icon as={FaArrowAltCircleRight} onClick={() => scrollNext()} fontSize='2xl' cursor='pointer' display={['none','none','none','block']} />
    </Flex>
  )
}

export default function ImageScrollbar({ data }) {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} style={{ overflow: 'hidden' }}>
      {data.map((item) => (
        <Box key={item.id} width='910px' overflow='hidden' p='1'>
          <img src={item.url} width={1000} height={500} style={{ objectFit: 'cover', width: '100%' }} />
        </Box>
      ))}
    </ScrollMenu>
  )
}

