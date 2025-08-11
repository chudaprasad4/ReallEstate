export const baseUrl = 'https://bayut.p.rapidapi.com'

export async function fetchApi(url) {
  const rapidApiKey = import.meta.env.VITE_RAPID_API_KEY || process.env.NEXT_PUBLIC_RAPID_API_KEY
  if (!rapidApiKey) {
    return { hits: [] }
  }
  const response = await fetch(url, {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': rapidApiKey,
    },
  })
  if (!response.ok) throw new Error(`HTTP ${response.status}`)
  return response.json()
}

