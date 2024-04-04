import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { AwardProps } from '../awardProps'
import * as styles from '../award-banner.module.scss'
import Container from 'features/components/atoms/container'
import Flex from 'features/components/atoms/flex-box'
import Typography from 'features/components/atoms/typography'
import { Localize, localize } from 'components/localization'

const AwardBannerEu = ({ title, subtitle }: AwardProps) => {
    return (
        <Container.Fluid margin_block="36x">
            <Typography.Heading align="center" margin="8x" weight="bold" md={{ margin: '12x' }}>
                <Localize translate_text={title} />
            </Typography.Heading>
            <Typography.Paragraph
                size="xlarge"
                align="center"
                mt="8x"
                mb="16x"
                md={{ mb: '24x', mt: '12x' }}
            >
                <Localize translate_text={subtitle} />
            </Typography.Paragraph>
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
                    padding="12x"
                    md={{ padding: '10x' }}
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
                    padding="12x"
                    md={{ padding: '10x' }}
                >
                    <StaticImage
                        src="../../../../../../images/common/awards/investors.png"
                        alt={localize('_t_IIP Platinum Companies_t_')}
                        formats={['avif', 'webp', 'auto']}
                        quality={100}
                        placeholder="none"
                        width={336}
                        height={67}
                    />
                </Flex.Box>
            </Flex.Box>
        </Container.Fluid>
    )
}

export default AwardBannerEu
