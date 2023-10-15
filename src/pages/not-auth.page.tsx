import {Logo} from '@/shared/icons/components/logo.tsx'
import {Button} from '@/shared/ui/button.tsx'
import {createTab} from '@/shared/lib/browser.ts'
import {ADMIN_SIGN_IN} from '@/shared/constants/URL.ts'

export function NotAuthPage() {
    const onClickHandler = () => createTab(ADMIN_SIGN_IN)

    return (
        <div className='p-8 flex flex-col gap-3 items-center'>
            <Logo/>
            <h2 className='text-2xl'>You not authorized</h2>
            <Button variant='primary'onClick={onClickHandler}>Sign In</Button>
        </div>
    )
}
