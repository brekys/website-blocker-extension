import {ToggleBlockingButton} from '@/features/toggle-blocking'
import {Logo} from '@/shared/icons/components/logo.tsx'
import {Button} from '@/shared/ui/button.tsx'
import {createTab} from '@/shared/lib/browser.ts'
import {ADMIN_URL} from '@/shared/constants/URL.ts'

export function HomePage() {
    const onClickHandler = () => createTab(ADMIN_URL)

    return (
        <div className='p-6 flex flex-col gap-3'>
            <Logo className='self-center'/>
            <ToggleBlockingButton/>
            <Button onClick={onClickHandler} variant='outlined'>Manage extension</Button>
        </div>
    )
}
