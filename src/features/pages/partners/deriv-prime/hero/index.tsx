import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { hero_wrapper, container, hero_img } from './styles.module.scss'
import { Localize } from 'components/localization'
import LinkButton from 'features/components/atoms/link-button'
import Typography from 'features/components/atoms/typography'
import Flex from 'features/components/atoms/flex-box'

const Hero = () => {
    return (
        <Flex.Box
            bgcolor="black"
            container="fixed"
            as="section"
            align="center"
            className={hero_wrapper}
        >
            <div className={hero_img}>
                <StaticImage
                    src="../../../../../images/common/deriv-prime/hero.png"
                    alt="hero"
                    layout="fullWidth"
                    style={{ height: '100%' }}
                />
            </div>
            <Flex.Box direction="col" align="center" className={container}>
                <Typography.Heading align="center" size="xlarge" textcolor="white">
                    <Localize translate_text="_t_Global liquidity for all_t_" />
                </Typography.Heading>
                <Typography.Paragraph align="center" textcolor="white" size="large">
                    <Localize translate_text="_t_Deep, reliable liquidity with fast execution for professionals, seasoned institutions, start-ups, and more_t_" />
                </Typography.Paragraph>
                <LinkButton.Primary url={{ href: '#contact', type: 'non-company' }} hero mt="12x">
                    <Localize translate_text="_t_Contact us_t_" />
                </LinkButton.Primary>
            </Flex.Box>
        </Flex.Box>
    )
}

export default Hero
