import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import FlexBox from 'features/components/atoms/flex-box'
import Typography from 'features/components/atoms/typography'
import { TFlexDirection } from 'features/types'
import { TString } from 'types/generics'
import { Localize } from 'components/localization'

type TFeatures = {
    title: TString
    subtitle: TString
    image: React.ReactElement
    direction?: TFlexDirection
}

const features: TFeatures[] = [
    {
        title: '_t_On-the-go trading_t_',
        subtitle:
            '_t_Access your Deriv EZ trades effortlessly on the Deriv GO mobile app. No extra apps to download, no extra passwords to remember._t_',
        image: (
            <StaticImage
                src="../../images/common/deriv-ez/on-go-trading.png"
                alt="Deriv GO trading app"
                loading="eager"
                formats={['avif', 'webp', 'auto']}
                quality={30}
                objectFit="contain"
                placeholder="none"
            />
        ),
    },
    {
        title: '_t_50+ indicators and tools_t_',
        subtitle:
            '_t_Take advantage of more than 50 trading indicators and tools to make informed decisions._t_',
        image: (
            <StaticImage
                src="../../images/common/deriv-ez/indicator.png"
                alt="Trading indicators and tools"
                loading="eager"
                formats={['avif', 'webp', 'auto']}
                quality={30}
                objectFit="contain"
                placeholder="none"
            />
        ),
        direction: 'row-reverse',
    },
    {
        title: '_t_Instant platform access_t_',
        subtitle:
            '_t_Start trading immediately, with no additional login ID or password to fill in. Don’t miss out on market opportunities._t_',
        image: (
            <StaticImage
                src="../../images/common/deriv-ez/instant-platform.png"
                alt="Deriv EZ account creation"
                loading="eager"
                formats={['avif', 'webp', 'auto']}
                quality={30}
                objectFit="contain"
                placeholder="none"
            />
        ),
    },
]

const WhatIsDerivEZ = () => {
    return (
        <FlexBox.Box justify={'center'}>
            <FlexBox.Box direction={'col'}>
                {features.map((feature) => {
                    return (
                        <FlexBox.Box
                            key={feature.title}
                            direction={'col'}
                            md={{
                                direction: feature?.direction || 'row',
                                justify: 'evenly',
                                align: 'center',
                            }}
                        >
                            <FlexBox.Box direction={'col'} md={{ basis: '5-12' }}>
                                <Typography.Heading>
                                    <Localize translate_text={feature.title} />
                                </Typography.Heading>
                                <Typography.Paragraph pt={'6x'}>
                                    <Localize translate_text={feature.subtitle} />
                                </Typography.Paragraph>
                            </FlexBox.Box>
                            <FlexBox.Box md={{ basis: '4-12' }}>{feature.image}</FlexBox.Box>
                        </FlexBox.Box>
                    )
                })}
            </FlexBox.Box>
        </FlexBox.Box>
    )
}
export default WhatIsDerivEZ
