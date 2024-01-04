import React from 'react'
import { Features } from '@deriv-com/blocks'
import { StaticImage } from 'gatsby-plugin-image'
import { Localize } from 'components/localization'

const DetailsCardRight = () => {
    return (
        <>
            <Features.ContentRight
                title={<Localize translate_text="_t_Be reliable_t_" />}
                description={
                    <Localize translate_text="_t_We provide secure and robust systems so you can trade with confidence. Whether settling contracts promptly, processing transactions efficiently, or offering responsive 24/7 customer support, we strive to be reliable at every step of your trading experience._t_" />
                }
                content={() => (
                    <StaticImage
                        src="../../../../images/migration/principle/reliable.png"
                        alt="hero bg image"
                        placeholder="none"
                        formats={['auto', 'webp']}
                        loading="eager"
                    />
                )}
            >
                <div></div>
            </Features.ContentRight>
        </>
    )
}

export default DetailsCardRight
