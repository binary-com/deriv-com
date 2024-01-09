import React, { useEffect, useRef } from 'react'
import { Text } from '@deriv/quill-design'
import { useWindowSize } from 'usehooks-ts'
import Anchor from '../../anchor'
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
            setCtaBottom(ref.current?.clientHeight + 40) // 40 is the padding of top and bottom of it's container
        }
    }, [setCtaBottom, width])
    return (
        <Text className="text-75 xl:text-100" ref={ref}>
            <Localize
                translate_text="_t_CFDs and other products offered on this website are complex instruments with a high risk of losing money rapidly owing to leverage.<0> {{loss_percent}}% of retail investor accounts lose money when trading CFDs with Deriv, read our full Risk disclosure here.</0> You should consider whether you understand how CFDs work and whether you can afford to take the high risk of losing your money._t_"
                values={{ loss_percent }}
                components={[
                    <Anchor
                        key={0}
                        className="lg:text-100"
                        target="_blank"
                        href="/tnc/eu/risk-disclosure.pdf"
                    />,
                ]}
            />
        </Text>
    )
}

export default DesktopText
