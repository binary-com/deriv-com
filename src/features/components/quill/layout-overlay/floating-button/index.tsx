import React, { useState } from 'react'
import clsx from 'clsx'

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
                'tap-highlight-transparent shadow-[0_16px_20px_0_rgba(0,0,0,0.05),0_0_20px_0_rgba(0,0,0,0.05)] bg-background-primary-container p-400 flex cursor-pointer border-[transparent] rounded-[50%] m-800 mt-50 pointer-events-auto transition-all select-none sm:p-700 hover:scale-100',
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
