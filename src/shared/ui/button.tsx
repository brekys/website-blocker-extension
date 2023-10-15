import {ComponentPropsWithoutRef} from 'react'
import {clsx} from 'clsx'

type ButtonVariant = 'primary' | 'secondary' | 'outlined'

type ButtonProps = {
    variant: ButtonVariant
} & ComponentPropsWithoutRef<'button'>

export function Button({className, variant, ...props}: ButtonProps) {
    return (
        <button
            {...props}
            className={
                clsx(
                    {
                        'primary': 'text-white bg-teal-500 hover:bg-teal-600 disabled:opacity-50 shadow shadow-teal-500/30',
                        'secondary': 'text-white bg-rose-500 hover:bg-rose-600 disabled:opacity-50 shadow shadow-rose-500/30',
                        'outlined': 'border border-slate-300 hover:border-slate-500 disabled:opacity-50',
                    }[variant],
                    className, 'px-5 h-12 rounded cursor-pointer flex gap-2 items-center justify-center',
                )
            }
        />
    )
}
