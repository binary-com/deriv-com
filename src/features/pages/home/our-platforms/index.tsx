import React, { useMemo } from 'react'
import PlatformSliders from './sliders'
import platformSliderItems from './data'
import Container from 'features/components/atoms/container'
import Typography from 'features/components/atoms/typography'
import { Localize } from 'components/localization'
import useRegion from 'components/hooks/use-region'
import useVisibleContent from 'components/hooks/use-visible-content'
import { TString } from 'types/generics'

const OurPlatforms = () => {
    const { is_eu } = useRegion()
    const items = useVisibleContent({
        content: platformSliderItems,
        config: {
            is_eu,
        },
    })

    const title_text: TString = useMemo(() => {
        return is_eu
            ? '_t_Trade the way you want with {{platform_count}} flexible trade types._t_'
            : '_t_Choose from {{platform_count}} powerful platforms — designed with you in mind_t_'
    }, [is_eu])

    return (
        <Container.Fixed as="section" pt="16x" md={{ padding_block: '40x' }}>
            <Typography.Heading as="h1" size="medium" align="center">
                <Localize translate_text="_t_Our platforms_t_" />
            </Typography.Heading>
            <Typography.Paragraph size="xlarge" align="center" padding_inline="20x">
                <Localize translate_text={title_text} values={{ platform_count: items.length }} />
            </Typography.Paragraph>
            <PlatformSliders items={items} />
        </Container.Fixed>
    )
}

export default OurPlatforms
