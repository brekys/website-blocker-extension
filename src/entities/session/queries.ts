import {useQuery} from 'react-query'
import {authControllerGetSessionInfo} from '@/shared/api/generated'

const sessionKey = ['session']

export function useSessionQuery() {
    return useQuery({
        queryKey: sessionKey,
        queryFn: authControllerGetSessionInfo,
        retry: 0,
        staleTime: 5 * 60 * 1000,
    })
}
