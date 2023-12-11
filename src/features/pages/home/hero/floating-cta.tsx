import React, { ComponentProps } from 'react'
import TradersHubCtaButton from 'features/components/molecules/traders-hub-cta-button'

type FloatingCtaProps = ComponentProps<'div'>

const FloatingCta = (props: FloatingCtaProps) => {
    return (
        <div
            className="fixed left-50 -bottom-3000 w-full z-50 h-[60px] backdrop-blur-xl flex justify-center items-center md:hidden"
            {...props}
        >
            <TradersHubCtaButton variant="primary" colorStyle="coral" />
        </div>
    )
}

export default FloatingCta
