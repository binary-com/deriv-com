import React from 'react'
import { Localize } from 'components/localization'
import Button from 'features/components/atoms/button'
import Container from 'features/components/atoms/container'
import LinkButton from 'features/components/atoms/link-button'
import Typography from 'features/components/atoms/typography'

const Hero = () => {
    return (
        <Container.Fixed>
            <Container.Fluid>
                <Typography.Heading>
                    <Localize translate_text="_t_Global liquidity for all_t_" />
                </Typography.Heading>
                <Typography.Paragraph>
                    <Localize translate_text="_t_Deep, reliable liquidity with fast execution for professionals, seasoned institutions, start-ups, and more_t_" />
                </Typography.Paragraph>
                <LinkButton.Primary url={{ href: '#contact', type: 'non-company' }}>
                    <Localize translate_text="_t_Contact us_t_" />
                </LinkButton.Primary>
            </Container.Fluid>
        </Container.Fixed>
    )
}

export default Hero
