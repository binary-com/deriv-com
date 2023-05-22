import React, { useState } from 'react'
import dclsx from 'features/utils/dclsx'
import './floating-button.scss'

type TProps = {
    children: (has_hover: boolean) => JSX.Element
    onClick?: React.MouseEventHandler<HTMLButtonElement>
    className?: string
}
const FloatingButton = ({ children, className, onClick }: TProps) => {
    const [has_hover, setHasHover] = useState(false)
    return (
        <button
            className={dclsx(className, 'floating-button')}
            onMouseEnter={() => setHasHover(true)}
            onMouseLeave={() => setHasHover(false)}
            onClick={onClick}
        >
            {children(has_hover)}
        </button>
    )
}

export default FloatingButton
