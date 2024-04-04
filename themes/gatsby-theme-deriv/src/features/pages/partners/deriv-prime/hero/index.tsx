import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { hero_wrapper, container, hero_img } from './styles.module.scss'
import { Localize, localize } from 'components/localization'
import Typography from 'features/components/atoms/typography'
import Flex from 'features/components/atoms/flex-box'
import dclsx from 'features/utils/dclsx'
import Button from 'features/components/atoms/button'
import useScrollToElement from 'features/hooks/use-scroll-to-element'

const Hero = () => {
    const clickToScrollHandler = useScrollToElement('getintouch')
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
                    src="../../../../../images/common/affiliate/partners-banner.png"
                    alt={localize(
                        '_t_A professional trader searching for a liquidity solutions provider_t_',
                    )}
                    layout="fullWidth"
                    loading="eager"
                    placeholder="blurred"
                    formats={['avif', 'webp', 'auto']}
                    style={{ height: '100%' }}
                    objectPosition="center"
                    className={dclsx('at-visible-larger-than-tablet')}
                />
                <StaticImage
                    src="../../../../../images/common/deriv-prime/hero-mobile.png"
                    alt={localize(
                        '_t_A professional trader searching for a liquidity solutions provider_t_',
                    )}
                    layout="fullWidth"
                    loading="eager"
                    placeholder="blurred"
                    formats={['avif', 'webp', 'auto']}
                    style={{ height: '100%' }}
                    className={dclsx('at-visible-phone-and-tablet')}
                />
            </div>
            <Flex.Box
                direction="col"
                align="center"
                padding_inline="5x"
                className={container}
                md={{ padding_inline: '0x' }}
            >
                <Typography.Heading align="center" size="xlarge" textcolor="white">
                    <Localize translate_text="_t_Global liquidity for all_t_" />
                </Typography.Heading>
                <Typography.Paragraph align="center" textcolor="white" size="large" pb="12x">
                    <Localize translate_text="_t_Deep, reliable liquidity with fast execution for professionals, seasoned institutions, start-ups, and more_t_" />
                </Typography.Paragraph>

                <Button.Primary textsize="large" hero onClick={clickToScrollHandler}>
                    <Localize translate_text="_t_Contact us_t_" />
                </Button.Primary>
            </Flex.Box>
        </Flex.Box>
    )
}

export default Hero
