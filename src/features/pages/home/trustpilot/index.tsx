import React from 'react'
import { SocialProof } from '@deriv-com/blocks'
import { Analytics } from '@deriv-com/analytics'
import { StaticImage } from 'gatsby-plugin-image'
import { TPilotDataProps } from '@deriv-com/components'
import truspilotData from '../../../../data/trustpilot.json'
import { Localize } from 'components/localization'

const TrustpilotSection = () => {
    const { numberOfReviews, trustScore, stars }: TPilotDataProps = truspilotData

    return (
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
                background: 'bg-solid-slate-700',
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
                Analytics.trackEvent('ce_widget_usage_form', {
                    action: 'click',
                    widget_name: 'trustpilot',
                })
            }}
        />
    )
}

export default TrustpilotSection
