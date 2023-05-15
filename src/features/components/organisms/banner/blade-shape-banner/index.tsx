import React from 'react'
import BannerInfo from './information'
import BannerDownload from './download'
import { banner_section, banner_wrap } from './styles.module.scss'
import { BannerType } from './types'
import Container from 'features/components/atoms/container'
import Flex from 'features/components/atoms/flex-box'
import QRScanbox from 'features/components/molecules/qr-scan-box'
import OsAppButton from 'features/components/molecules/os-app-button'

interface BannerProps {
    data: BannerType
}

const BladeShapeBanner = ({ data }: BannerProps) => {
    return (
        <Container.Fixed
            as="section"
            bgcolor="black"
            className={banner_section}
            pt="32x"
            pb="35x"
            md={{ padding_block: '40x' }}
        >
            <Flex.Box
                container="fluid"
                direction="col"
                justify="between"
                md={{ direction: 'row' }}
                className={banner_wrap}
            >
                <BannerInfo item={data.information} />
                <BannerDownload>
                    <QRScanbox item={data.scanbox} />
                    <Flex.Box
                        wrap="wrap"
                        pl="5x"
                        pt="20x"
                        gap="20x"
                        justify="between"
                        md={{ pl: '9x' }}
                    >
                        {data.os_apps.map((app) => (
                            <OsAppButton key={app.id} item={app.data} basis="5-12" />
                        ))}
                    </Flex.Box>
                </BannerDownload>
            </Flex.Box>
        </Container.Fixed>
    )
}

export default BladeShapeBanner
