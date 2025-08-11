import { useEffect, useMemo, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Flex, Box, Text, Icon } from '@chakra-ui/react'
import { BsFilter } from 'react-icons/bs'
import Property from '../components/Property.jsx'
import SearchFilters from '../components/SearchFilters.jsx'
import { baseUrl, fetchApi } from '../utils/fetchApi'

export default function Search() {
  const [searchFilters, setSearchFilters] = useState(false)
  const [properties, setProperties] = useState([])
  const location = useLocation()

  const params = useMemo(() => new URLSearchParams(location.search), [location.search])

  useEffect(() => {
    const purpose = params.get('purpose') || 'for-rent'
    const rentFrequency = params.get('rentFrequency') || 'yearly'
    const minPrice = params.get('minPrice') || '0'
    const maxPrice = params.get('maxPrice') || '1000000'
    const roomsMin = params.get('roomsMin') || '0'
    const bathsMin = params.get('bathsMin') || '0'
    const sort = params.get('sort') || 'price-desc'
    const areaMax = params.get('areaMax') || '35000'
    const locationExternalIDs = params.get('locationExternalIDs') || '5002'
    const categoryExternalID = params.get('categoryExternalID') || '4'

    const url = `${baseUrl}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`
    const load = async () => {
      try {
        const data = await fetchApi(url)
        setProperties(data?.hits || [])
      } catch (e) {
        setProperties([])
      }
    }
    load()
  }, [location.search])

  return (
    <Box>
      <Flex onClick={() => setSearchFilters(!searchFilters)} cursor='pointer' bg='gray.100' borderBottom='1px' borderColor='gray.200' p='2' fontWeight='black' fontSize='lg' justifyContent='center' alignItems='center'>
        <Text>Search Property By Filters</Text>
        <Icon paddingLeft='2' w='7' as={BsFilter} />
      </Flex>
      {searchFilters && <SearchFilters />}
      <Text fontSize='2xl' p='4' fontWeight='bold'>
        Properties {params.get('purpose')}
      </Text>
      <Flex flexWrap='wrap'>
        {properties.map((property) => (
          <Property property={property} key={property.id} />
        ))}
      </Flex>
      {properties.length === 0 && (
        <Flex justifyContent='center' alignItems='center' flexDir='column' marginTop='5' marginBottom='5'>
          <Text fontSize='xl' marginTop='3'>No Result Found.</Text>
        </Flex>
      )}
    </Box>
  )
}

