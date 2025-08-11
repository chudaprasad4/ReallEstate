import { Link } from 'react-router-dom'
import { Flex, Box, Spacer, Button, HStack } from '@chakra-ui/react'

export default function Navbar() {
  return (
    <Flex p='2' borderBottom='1px' borderColor='gray.100' alignItems='center'>
      <Box fontSize='3xl' color='blue.400' fontWeight='bold'>
        <Link to='/' style={{ paddingLeft: 8, textDecoration: 'none' }}>Realtor</Link>
      </Box>
      <Spacer />
      <HStack spacing={2}>
        <Button as={Link} to='/' variant='ghost'>Home</Button>
        <Button as={Link} to='/search' variant='ghost'>Search</Button>
        <Button as={Link} to='/search?purpose=for-sale' variant='ghost'>Buy Property</Button>
        <Button as={Link} to='/search?purpose=for-rent' variant='ghost'>Rent Property</Button>
      </HStack>
    </Flex>
  )
}

