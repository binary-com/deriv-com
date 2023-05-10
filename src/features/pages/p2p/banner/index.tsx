import React from 'react'
import DP2BannerInfo from './information'
import DP2BannerDownload from './download-col'
import { banner_section } from './styles.module.scss'
import Container from 'features/components/atoms/container'
import Flex from 'features/components/atoms/flex-box'

const DP2Banner = () => {
    return (
        <Container.Fixed
            as="section"
            bgcolor="black"
            className={banner_section}
            padding_block="40x"
        >
            <Flex.Box container="fluid" gap="12x" justify="between">
                <DP2BannerInfo />
                <DP2BannerDownload />
            </Flex.Box>
        </Container.Fixed>
    )
}

export default DP2Banner
