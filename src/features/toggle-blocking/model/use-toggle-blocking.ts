import {useAccountQuery, useUpdateAccountMutation} from '@/entities/account'

export function useToggleBlocking() {
    const {data, isSuccess} = useAccountQuery()

    const {mutate, isLoading} = useUpdateAccountMutation()

    const toggleBlocking = () => {
        if (data) {
            mutate({isBlockingEnabled: !data?.isBlockingEnabled})
        }
    }

    return {
        isLoading,
        toggleBlocking,
        isBlockingEnabled: data?.isBlockingEnabled,
        isReady: isSuccess,
    }
}
