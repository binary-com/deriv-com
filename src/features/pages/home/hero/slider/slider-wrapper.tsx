import React, { ReactNode } from 'react'
import { wrapper } from './slider.module.scss'

const SliderWrapper = ({ children }: { children: ReactNode }) => {
    return <div className={wrapper}>{children}</div>
}

export default SliderWrapper
