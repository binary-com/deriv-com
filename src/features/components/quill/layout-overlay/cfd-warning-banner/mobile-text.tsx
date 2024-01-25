import React, { useEffect, useRef, useState } from 'react'
import { Text } from '@deriv/quill-design'
import { useWindowSize } from 'usehooks-ts'
import clsx from 'clsx'
import Anchor from '../../anchor'
import { mobile_text_wrap, mobile_text_container } from './styles.module.scss'
import { Localize } from 'components/localization'
import { useFloatingCtaContext } from 'features/contexts/floating-cta/cta.provider'
import Arrow from 'images/svg/arrow_expandable.svg'

type TextProps = {
    loss_percent: number
}

const MobileText = ({ loss_percent }: TextProps) => {
    const [expanded, setExpanded] = useState(false)
    const { setCtaBottom } = useFloatingCtaContext()
    const { width } = useWindowSize()
    const ref = useRef<HTMLDivElement>(null)
    useEffect(() => {
        if (width < 640) {
            setCtaBottom(ref.current?.clientHeight)
        }
    }, [setCtaBottom, expanded, width])

    const onImageLoad = () => {
        if (width < 640) {
            setCtaBottom(ref.current?.clientHeight)
        }
    }

    const toggleExpansion = () => {
        setExpanded((prev) => !prev)
    }

    return (
        <div
            className={clsx(
                'flex bg-background-primary-base items-end shadow-[0px_-4px_10px_rgba(65,_70,_82,_0.1)] pointer-events-auto',
                mobile_text_wrap,
            )}
        >
            <div className={clsx('w-[95%] mx-auto p-1000', mobile_text_container)} ref={ref}>
                {expanded ? (
                    <Text>
                        <Localize
                            translate_text="_t_CFDs and other products offered on this website are complex instruments with a high risk of losing money rapidly owing to leverage.<0> {{loss_percent}}% of retail investor accounts lose money when trading CFDs with Deriv, read our full Risk disclosure here.</0> You should consider whether you understand how CFDs work and whether you can afford to take the high risk of losing your money._t_"
                            values={{ loss_percent }}
                            components={[
                                <Anchor
                                    key={0}
                                    target="_blank"
                                    href="/tnc/eu/risk-disclosure.pdf"
                                />,
                            ]}
                        />
                    </Text>
                ) : (
                    <Text className="w-[95%] mx-auto">
                        <Localize
                            translate_text="_t_<0> {{loss_percent}}% of retail investor accounts lose money when trading CFDs with Deriv, read our full Risk disclosure here.</0>_t_"
                            values={{ loss_percent }}
                            components={[
                                <Anchor
                                    key={0}
                                    target="_blank"
                                    href="/tnc/eu/risk-disclosure.pdf"
                                    className="text-100"
                                />,
                            ]}
                        />
                    </Text>
                )}
            </div>
            <img
                onClick={toggleExpansion}
                src={Arrow}
                alt="Expand"
                className={clsx(
                    'transition-transform px-800',
                    expanded ? 'rotate-180 animate-fade-in' : 'rotate-0 animate-fade-out',
                )}
                onLoad={onImageLoad}
            />
        </div>
    )
}

export default MobileText
