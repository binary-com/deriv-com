import React from 'react'
import PlatformSliders from './sliders'
import Container from 'features/components/atoms/container'
import Typography from 'features/components/atoms/typography'
import { Localize } from 'components/localization'

const OurPlatforms = () => {
    return (
        <Container.Fixed as="section" bgcolor="secondary" padding_block="40x">
            <Typography.Heading as="h1" size="large" align="center">
                <Localize translate_text="_t_Our platforms_t_" />
            </Typography.Heading>
            <Typography.Paragraph size="medium" align="center">
                <Localize translate_text="_t_Choose from 9 powerful platforms — designed with you in mind_t_" />
            </Typography.Paragraph>
            <PlatformSliders />
        </Container.Fixed>
    )
}

export default OurPlatforms
