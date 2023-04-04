import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { wrapper } from './styles.module.scss'
import GoTextBox from './go-text-box'
import QRCode from './qr-code'
import Container from 'features/components/atoms/container'
import FlexBox from 'features/components/atoms/flex-box'

const DerivGOBanner = () => {
    return (
        <Container.Fixed as="section" bgcolor="inverted">
            <Container.Fluid>
                <FlexBox
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
                    <FlexBox
                        className={wrapper}
                        padding_block="30x"
                        direction="col"
                        align="center"
                        md={{ direction: 'row', align: 'start' }}
                    >
                        <GoTextBox />
                        <QRCode />
                    </FlexBox>
                </FlexBox>
            </Container.Fluid>
        </Container.Fixed>
    )
}

export default DerivGOBanner
