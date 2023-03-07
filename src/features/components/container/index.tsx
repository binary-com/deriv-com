import clsx from 'clsx'
import React, { forwardRef, HTMLAttributes } from 'react'
import './container.styles.scss'

const SContainer = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
    ({ className, children }, ref) => {
        return (
            <div ref={ref} className={clsx(className, 'container')}>
                {children}
            </div>
        )
    },
)
SContainer.displayName = 'Container'

export default SContainer
