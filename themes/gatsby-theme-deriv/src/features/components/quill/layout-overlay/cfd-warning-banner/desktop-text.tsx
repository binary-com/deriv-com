import React, { useEffect, useRef } from 'react'
import { Text } from '@deriv/quill-design'
import { useWindowSize } from 'usehooks-ts'
import clsx from 'clsx'
import Anchor from '../../anchor'
import { cfd_container, desktop_text, desktop_text_wrap } from './styles.module.scss'
import { Localize } from 'components/localization'
import { useFloatingCtaContext } from 'features/contexts/floating-cta/cta.provider'

type TextProps = {
    loss_percent: number
}

const DesktopText = ({ loss_percent }: TextProps) => {
    const { setCtaBottom } = useFloatingCtaContext()
    const ref = useRef<HTMLParagraphElement>(null)
    const { width } = useWindowSize()
    useEffect(() => {
        if (width >= 640) {
            setCtaBottom(ref.current?.clientHeight)
        }
    }, [setCtaBottom, width])
    return (
        <div
            className={clsx(
                'w-full hidden bg-background-primary-base shadow-[0px_-4px_10px_rgba(65,_70,_82,_0.1)] pointer-events-auto',
                desktop_text_wrap,
            )}
        >
            <div className={clsx('w-[95%] mx-auto py-1000', cfd_container)} ref={ref}>
                <Text className={clsx('text-75', desktop_text)}>
                    <Localize
                        translate_text="_t_CFDs and other products offered on this website are complex instruments with a high risk of losing money rapidly owing to leverage.<0> {{loss_percent}}% of retail investor accounts lose money when trading CFDs with Deriv, read our full Risk disclosure here.</0> You should consider whether you understand how CFDs work and whether you can afford to take the high risk of losing your money._t_"
                        values={{ loss_percent }}
                        components={[
                            <Anchor
                                key={0}
                                className={desktop_text}
                                target="_blank"
                                href="/tnc/eu/risk-disclosure.pdf"
                            />,
                        ]}
                    />
                </Text>
            </div>
        </div>
    )
}

export default DesktopText
