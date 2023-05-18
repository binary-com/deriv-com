import React, { ReactElement } from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import HeroCtaButton from './hero-cta.button'
import {
    hero_content_title,
    right_fixed,
    contentWrapper,
    contentBox,
    hero_image_wrapper,
    image_container,
    image_wrapper,
    image_size,
} from './trade-platforms-hero-content.module.scss'
import Flex from 'features/components/atoms/flex-box'
import Typography from 'features/components/atoms/typography'
import { get_lang_direction, Localize } from 'components/localization'
import Box from 'features/components/atoms/box'
import Image from 'features/components/atoms/image'

type TradingPlatformHeroContentProps = {
    productLogo?: string
    heading?: string
    imageWidth?: string
    rightImage?: boolean
}
const TradingPlatformHeroContent: React.FC<
    React.PropsWithChildren<TradingPlatformHeroContentProps>
> = ({ heading, imageWidth, rightImage, children }) => (
    <Flex.Box
        container="fluid"
        align="center"
        gap={'20x'}
        direction="col"
        md={{
            direction: 'row',
            justify: 'start',
        }}
    >
        <Flex.Box
            container="fixed"
            justify="start"
            direction="row"
            align="center"
            gap="4x"
            dir={get_lang_direction()}
        >
            <Flex.Item className={contentWrapper}>
                <Box className={contentBox}>
                    <Image src={item.icon_src} width={96} height={96} />
                    <Typography.Heading
                        as="h1"
                        size={'xlarge'}
                        weight="bold"
                        className={hero_content_title}
                    >
                        <Localize translate_text={`_t_${heading}_t_`} />
                    </Typography.Heading>
                    <HeroCtaButton />
                </Box>
            </Flex.Item>
            <Flex.Item className={hero_image_wrapper}>
                <Box className={image_container}>
                    <Box className={image_wrapper}>
                        <Box className={image_size}>{children}</Box>
                    </Box>
                </Box>
            </Flex.Item>
        </Flex.Box>
    </Flex.Box>
)

export default TradingPlatformHeroContent
