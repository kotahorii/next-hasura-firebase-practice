import { Rocket } from '../types/types'
import { request } from 'graphql-request'
import { GET_ROCKETS } from '../queries/queries'
import { useQuery } from 'react-query'

type RocketRes = {
  rockets: Rocket[]
}

export const fetchRockets = async () => {
  const { rockets: data } = await request<RocketRes>(
    'https://api.spacex.land/graphql/',
    GET_ROCKETS
  )
  return data
}
export const useQueryRockets = () => {
  return useQuery<Rocket[] | Error>({
    queryKey: 'rockets',
    queryFn: fetchRockets,
    staleTime: Infinity,
    refetchOnWindowFocus: false,
  })
}
