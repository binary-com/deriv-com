import React, { useState } from 'react'
import clsx from 'clsx'
import { floating_button } from './styles.module.scss'

type TProps = {
    children: (has_hover: boolean) => JSX.Element
    onClick?: React.MouseEventHandler<HTMLButtonElement>
    className?: string
}
const FloatingButton = ({ children, className, onClick }: TProps) => {
    const [has_hover, setHasHover] = useState(false)
    return (
        <button
            className={clsx(
                className,
                'tap-highlight-transparent shadow-[0_16px_20px_0_rgba(0,0,0,0.05),0_0_20px_0_rgba(0,0,0,0.05)] bg-background-primary-container flex cursor-pointer border-[transparent] rounded-[50%] m-800 mt-50 pointer-events-auto transition-all select-none hover:scale-100',
                floating_button,
            )}
            onMouseEnter={() => setHasHover(true)}
            onMouseLeave={() => setHasHover(false)}
            onClick={onClick}
        >
            {children(has_hover)}
        </button>
    )
}

export default FloatingButton
