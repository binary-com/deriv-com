import React from 'react'
import { SocialProof } from '@deriv-com/blocks'
import { StaticImage } from 'gatsby-plugin-image'
import { TPilotDataProps } from '@deriv-com/components'
import truspilotData from '../../../../data/trustpilot.json'
import { Localize } from 'components/localization'
import widgetEvent from 'common/tracking-functions/widget'
import Flex from 'features/components/atoms/flex-box'

const TrustpilotSection = () => {
    const { numberOfReviews, trustScore, stars }: TPilotDataProps = truspilotData

    return (
        <Flex.Box style={{ background: 'rgba(0,0,0,0.16)' }}>
            <SocialProof.Horizontal
                content={({ numberOfReviews, trustScore }) => [
                    <Localize key={0} translate_text="_t_Our customers say_t_" />,
                    <Localize key={1} translate_text="_t_Excellent_t_" />,
                    <Localize
                        key={2}
                        translate_text="_t_{{trustScore}} out of 5 based on {{numberOfReviews}} reviews_t_"
                        values={{ trustScore, numberOfReviews }}
                    />,
                ]}
                theme={{
                    color: '!text-[#ffffff]',
                    background: 'transparent'
                }}
                data={{
                    trustScore,
                    numberOfReviews,
                    stars,
                }}
                logo={
                    <StaticImage
                        src="../../../../images/common/home/trustpilot-logo.png"
                        loading="eager"
                        formats={['avif', 'webp', 'auto']}
                        alt={'Trustpilot'}
                        className="w-[98px] h-[24px]"
                    />
                }
                onClick={() => {
                    widgetEvent('trustpilot')
                }}
            />
        </Flex.Box>
    )
}

export default TrustpilotSection
