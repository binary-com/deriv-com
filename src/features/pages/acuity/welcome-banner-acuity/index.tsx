import React from 'react'
import { Localize } from 'components/localization'
import FlexBox from 'features/components/atoms/flex-box'
import Typography from 'features/components/atoms/typography'
import Container from 'features/components/atoms/container'
import LinkButton from 'features/components/atoms/link-button'

const WelcomeBannerAcuity = () => {
    return (
        <Container.Fixed
            as="section"
            bgcolor="inverted"
            padding_block="16x"
            padding_inline="8x"
            md={{ padding_block: '40x', mt: '40x' }}
        >
            <Typography.Heading as="h3" size="small" align="center" mb="8x" textcolor="inverted">
                <Localize translate_text="_t_Come start your trading journey with Deriv_t_" />
            </Typography.Heading>
            <Typography.Paragraph
                size="medium"
                align="center"
                textcolor="inverted"
                padding_inline="20x"
                mb="15x"
            >
                <Localize translate_text="_t_Take advantage of our latest tools and resources and trade with confidence. Join us now!_t_" />
            </Typography.Paragraph>

            <Typography.Paragraph
                size="medium"
                align="center"
                weight="bold"
                textcolor="inverted"
                mb="10x"
            >
                <Localize translate_text="_t_Sign up for a free demo account_t_" />
            </Typography.Paragraph>
            <FlexBox.Box basis="2-12" justify="center">
                <LinkButton.Primary
                    size="medium"
                    url={{ type: 'internal', to: '/signup/' }}
                    font_family="UBUNTU"
                >
                    <Localize translate_text="_t_Sign up_t_" />
                </LinkButton.Primary>
            </FlexBox.Box>
        </Container.Fixed>
    )
}

export default WelcomeBannerAcuity
