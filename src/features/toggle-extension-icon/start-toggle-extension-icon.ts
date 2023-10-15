import {setBrowserInterval, setIcon} from '@/shared/lib/browser.ts'
import {accountControllerGetAccount, authControllerGetSessionInfo} from '@/shared/api/generated.ts'

export function startToggleExtensionIcon() {
    setBrowserInterval('update-block-rules', async () => {
        const isAuth = await authControllerGetSessionInfo().then(() => true, () => false)

        if (!isAuth) {
            return setIcon('/unauthorized.png')
        }

        const isBlockingEnabled = await accountControllerGetAccount().then(response => response.isBlockingEnabled)

        if (!isBlockingEnabled) {
            return setIcon('/off.png')
        }

        setIcon('/on.png')
    }, 5 * 1000)
}
