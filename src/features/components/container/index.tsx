import clsx from 'clsx'
import React, { forwardRef, HTMLAttributes } from 'react'
import './container.styles.scss'

const SContainer = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
    ({ className }, ref) => {
        return <div ref={ref} className={clsx(className, 'container')}></div>
    },
)
SContainer.displayName = 'Container'

export default SContainer
