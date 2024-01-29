import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { deriv_go_container } from './styles.module.scss'
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
                    gap={'10x'}
                    pt={'20x'}
                >
                    <StaticImage
                        src="../../../../images/common/home/deriv-go-banner.png"
                        alt="deriv go banner"
                        width={368}
                    />
                    <GoTextBox />
                    <QRCode />
                </Flex.Box>
            </Container.Fluid>
        </Container.Fixed>
    )
}

export default DerivGOBanner
