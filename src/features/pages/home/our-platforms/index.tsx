import React from 'react'
import PlatformSliders from './sliders'
import platformSliderItems from './data'
import Container from 'features/components/atoms/container'
import Typography from 'features/components/atoms/typography'
import { Localize } from 'components/localization'
import useRegion from 'components/hooks/use-region'
import useVisibleContent from 'components/hooks/use-visible-content'

const OurPlatforms = () => {
    const { is_eu } = useRegion()
    const items = useVisibleContent({
        content: platformSliderItems,
        config: {
            is_eu,
        },
    })

    return (
        <Container.Fixed as="section" bgcolor="secondary" padding_block="40x">
            <Typography.Heading as="h1" size="large" align="center">
                <Localize translate_text="_t_Our platforms_t_" />
            </Typography.Heading>
            <Typography.Paragraph size="medium" align="center">
                <Localize
                    translate_text="_t_Choose from {{platform_count}} powerful platforms — designed with you in mind_t_"
                    values={{ platform_count: items.length }}
                />
            </Typography.Paragraph>
            <PlatformSliders items={items} />
        </Container.Fixed>
    )
}

export default OurPlatforms
