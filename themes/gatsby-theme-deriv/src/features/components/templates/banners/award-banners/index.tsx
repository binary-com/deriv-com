import React from 'react'
import { awardImagesRow } from './data'
import { AwardProps } from './awardProps'
import * as styles from './award-banner.module.scss'
import Container from 'features/components/atoms/container'
import Flex from 'features/components/atoms/flex-box'
import Typography from 'features/components/atoms/typography'
import { Localize } from 'components/localization'
import useBuildVariant from 'features/hooks/use-build-variant'

const AwardBanner = ({ title }: AwardProps) => {
    const {region} = useBuildVariant()

    if(region === "eu") return null
    
    return (
        <Container.Fluid margin_block="36x">
            <Flex.Box
                align="center"
                justify="center"
                direction="col"
                className={styles.content}
                padding="8x"
                md={{ padding: '27x' }}
            >
                <Typography.Heading align="center" margin="12x" weight="bold">
                    <Localize translate_text={title} />
                </Typography.Heading>

                <Flex.Box direction="col" margin="12x" gap="8x" md={{ direction: 'row' }}>
                    {awardImagesRow.map((award, index) => (
                        <Flex.Box key={index}>{award.image}</Flex.Box>
                    ))}
                </Flex.Box>
            </Flex.Box>
        </Container.Fluid>
    )
}

export default AwardBanner
