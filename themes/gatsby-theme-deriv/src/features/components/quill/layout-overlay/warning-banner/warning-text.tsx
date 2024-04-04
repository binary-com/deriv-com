import React, { useEffect, useRef, useState } from 'react'
import { FluidContainer, qtJoin } from '@deriv/quill-design'
// eslint-disable-next-line import/no-unresolved
import { useWindowSize } from 'usehooks-ts'
import DesktopText from './desktop-text'
import MobileText from './mobile-text'

type TextProps = {
    loss_percent: number
}

const WarningText = ({ loss_percent }: TextProps) => {
    const { width } = useWindowSize()
    const [isExpand, setIsExpanded] = useState(false)
    const ref = useRef(null)

    const toggleExpansion = () => {
        setIsExpanded((prev) => !prev)
    }

    useEffect(() => {
        const { clientHeight } = ref?.current
        const rootElement = document.querySelector<HTMLElement>(':root')
        rootElement.style.setProperty('--banner-height', `${clientHeight}px`)
        if(!isExpand){
            rootElement.style.setProperty('--hero-offset', `${clientHeight + 80 + 56}px`) // 80 is header height and 56 is trustpilot height
        }
    }, [isExpand, width])

    return (
        <>
            <div
                className={qtJoin(
                    'bg-solid-slate-700 py-general-xs sm:!py-general-md fixed left-general-none top-general-none w-full z-[60]',
                )}
                ref={ref}
            >
                <FluidContainer>
                    <MobileText isExpand={isExpand} toggleExpansion={toggleExpansion} loss_percent={loss_percent} />
                    <DesktopText loss_percent={loss_percent} />
                </FluidContainer>
            </div>
            <div className="w-full h-[var(--banner-height)]"></div>
        </>
    )
}

export default WarningText
