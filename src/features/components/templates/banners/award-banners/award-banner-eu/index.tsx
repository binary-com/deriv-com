import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { AwardProps } from '../awardProps'
import * as styles from '../award-banner.module.scss'
import Container from 'features/components/atoms/container'
import Flex from 'features/components/atoms/flex-box'
import Typography from 'features/components/atoms/typography'
import { Localize, localize } from 'components/localization'

const AwardBannerEu = ({ title }: AwardProps) => {
    return (
        <Container.Fluid margin_block="36x">
            <Typography.Heading align="center" margin="16x" weight="bold" md={{ margin: '24x' }}>
                <Localize translate_text={title} />
            </Typography.Heading>
            <Flex.Box
                align="center"
                direction="col"
                justify="center"
                gap="8x"
                md={{ direction: 'row' }}
            >
                <Flex.Box
                    align="center"
                    justify="center"
                    direction="col"
                    className={styles.content_eu}
                    padding="8x"
                    md={{ padding: '27x' }}
                >
                    <StaticImage
                        src="../../../../../../images/common/awards/gptw.png"
                        alt={localize('_t_GPTW award_t_')}
                        formats={['avif', 'webp', 'auto']}
                        quality={100}
                        placeholder="none"
                        width={89}
                    />
                </Flex.Box>
                <Flex.Box
                    align="center"
                    justify="center"
                    direction="col"
                    className={styles.content_eu}
                    padding="8x"
                    md={{ padding: '27x' }}
                >
                    <StaticImage
                        src="../../../../../../images/common/awards/investors.png"
                        alt={localize('_t_Investors in people award_t_')}
                        formats={['avif', 'webp', 'auto']}
                        quality={100}
                        placeholder="none"
                        width={157}
                    />
                </Flex.Box>
            </Flex.Box>
        </Container.Fluid>
    )
}

export default AwardBannerEu
