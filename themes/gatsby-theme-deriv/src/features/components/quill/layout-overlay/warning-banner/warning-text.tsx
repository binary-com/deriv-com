import React, { useEffect, useRef, useState } from 'react'
import { FluidContainer, qtJoin, Text } from '@deriv/quill-design'
// eslint-disable-next-line import/no-unresolved
import { useWindowSize } from 'usehooks-ts'
// eslint-disable-next-line import/no-unresolved
import { LabelPairedChevronDownMdRegularIcon } from '@deriv/quill-icons/LabelPaired'
import DesktopText from './desktop-text'
import { Localize } from 'components/localization'

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
                    <div className="block sm:!hidden">
                        {isExpand ? (
                            <Text className="text-solid-slate-50 text-50 leading-100">
                                <Localize
                                    translate_text="_t_The products offered on our website are complex derivative products that carry a significant risk of potential loss. CFDs are complex instruments with a high risk of losing money rapidly due to leverage. {{loss_percent}}% of retail investor accounts lose money when trading CFDs with this provider. You should consider whether you understand how these products work and whether you can afford to take the high risk of losing your money._t_"
                                    values={{ loss_percent }}
                                />
                            </Text>
                        ) : (
                            <Text className="text-solid-slate-50 text-50 leading-100">
                                <Localize
                                    translate_text="_t_{{loss_percent}}% of retail investor accounts lose money when trading CFDs with Deriv. Ensure you understand the high risk of loss before trading._t_"
                                    values={{ loss_percent }}
                                />
                            </Text>
                        )}
                        <button
                            onClick={toggleExpansion}
                            className={qtJoin(
                                'block mx-auto will-change-transform',
                                isExpand && 'rotate-180',
                            )}
                            aria-label="Click here to expand banner text"
                        >
                            <LabelPairedChevronDownMdRegularIcon className="fill-solid-slate-50" />
                        </button>
                    </div>
                    <DesktopText loss_percent={loss_percent} />
                </FluidContainer>
            </div>
            <div className="w-full h-[var(--banner-height)]"></div>
        </>
    )
}

export default WarningText
