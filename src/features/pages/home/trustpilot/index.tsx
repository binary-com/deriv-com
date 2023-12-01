import React from 'react'
import { SocialProof } from '@deriv-com/blocks'
import { StaticImage } from 'gatsby-plugin-image'
import { Text } from '@deriv/quill-design'

const TrustpilotSection = () => {
    return (
        <SocialProof.Horizontal
            content={({ numberOfReviews, trustScore }) => [
                <Text bold key={0}>
                    Excellent
                </Text>,
                <Text key={1}>
                    TrustScore ${trustScore} out of 5 based on ${numberOfReviews} reviews`
                </Text>,
            ]}
            theme={{
                color: '!text-[#ffffff]',
                background: 'bg-solid-slate-700',
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
