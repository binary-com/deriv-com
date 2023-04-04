import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { wrapper, deriv_go_container } from './styles.module.scss'
import GoTextBox from './go-text-box'
import QRCode from './qr-code'
import Container from 'features/components/atoms/container'
import Flex from 'features/components/atoms/flex-box'

const DerivGOBanner = () => {
    return (
        <Container.Fixed as="section" bgcolor="inverted" className={deriv_go_container}>
            <Container.Fluid>
                <Flex.Box
                    direction="col-reverse"
                    justify="between"
                    align="center"
                    md={{ direction: 'row', align: 'end' }}
                >
                    <StaticImage
                        src="../../../../images/common/home/deriv-go-banner.png"
                        alt="deriv go banner"
                        width={368}
                    />
                    <Flex.Box
                        className={wrapper}
                        padding_block="30x"
                        direction="col"
                        align="center"
                        md={{ direction: 'row', align: 'start' }}
                    >
                        <GoTextBox />
                        <QRCode />
                    </Flex.Box>
                </Flex.Box>
            </Container.Fluid>
        </Container.Fixed>
    )
}

export default DerivGOBanner
