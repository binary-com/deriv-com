import React from 'react'
import { Features } from '@deriv-com/blocks'
import { StaticImage } from 'gatsby-plugin-image'

const Reliable = () => {
    return (
        <>
            <Features.ContentRight
                title="Be reliable"
                description="We provide secure and robust systems so you can trade with confidence. Whether settling contracts promptly, processing transactions efficiently, or offering responsive 24/7 customer support, we strive to be reliable at every step of your trading experience."
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

export default Reliable
