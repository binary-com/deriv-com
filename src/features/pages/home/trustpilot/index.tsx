import React from 'react'
import { SocialProof } from '@deriv-com/blocks'
import { StaticImage } from 'gatsby-plugin-image'
import { truspilotData } from '../../../../data/trustpilot'
import { Localize } from 'components/localization'

const TrustpilotSection = () => {
    const { numberOfReviews, trustScore, stars } = truspilotData
    return (
        <SocialProof.Horizontal
            content={({ numberOfReviews, trustScore }) => [
                <Localize key={0} translate_text="_t_Our customers say_t_" />,
                <Localize key={1} translate_text="_t_Excellent_t_" />,
                <Localize
                    key={2}
                    translate_text="_t_TrustScore {{trustScore}} out of 5 based on {{numberOfReviews}} reviews_t_"
                    values={{ trustScore, numberOfReviews }}
                />,
            ]}
            theme={{
                color: '!text-[#ffffff]',
                background: 'bg-solid-slate-700',
            }}
            //TODO: We will remove this static data once the data fetching is finalized.
            staticData={{
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
        />
    )
}

export default TrustpilotSection
