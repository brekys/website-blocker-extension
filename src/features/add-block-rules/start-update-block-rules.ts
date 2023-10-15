import {getBlockListNetRules} from './get-block-list-net-rules.ts';
import {setBrowserInterval, setNetRules} from '@/shared/lib/browser.ts'
import {accountControllerGetAccount, authControllerGetSessionInfo} from '@/shared/api/generated.ts'

export function startUpdateBlockRules() {
    setBrowserInterval('update-block-rules', async () => {
        const isAuth = await authControllerGetSessionInfo().then(() => true, () => false)

        if (!isAuth) {
            return await setNetRules([])
        }

        const isBlockingEnabled = await accountControllerGetAccount().then(response => response.isBlockingEnabled)

        if (!isBlockingEnabled) {
            return await setNetRules([])
        }

        setNetRules(await getBlockListNetRules())
    }, 5 * 1000)
}
