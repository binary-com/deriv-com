import React, { useEffect, useRef } from 'react'
import { Text } from '@deriv/quill-design'
import Anchor from '../../anchor'
import { Localize } from 'components/localization'
import { useFloatingCtaContext } from 'features/contexts/floating-cta/cta.provider'

type TextProps = {
    loss_percent: number
}

const UnexpandedText = ({ loss_percent }: TextProps) => {
    const { setCtaBottom } = useFloatingCtaContext()
    const ref = useRef<HTMLParagraphElement>(null)
    useEffect(() => {
        setCtaBottom(ref.current.clientHeight + 38) // 38 is the padding of top and bottom of it's container
    }, [setCtaBottom])

    return (
        <Text ref={ref} className="w-[95%] mx-auto">
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
    )
}

export default UnexpandedText
