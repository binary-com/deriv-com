import React from 'react'
import { qr_box } from './styles.module.scss'
import Image from 'features/components/atoms/image'
import Typography from 'features/components/atoms/typography'
import { Localize } from 'components/localization'
import Flex from 'features/components/atoms/flex-box'
import { TString } from 'types/generics'

export type QRScanBoxType = {
    img_src: string
    heading_one: TString
    heading_two: TString
}

interface QRScanBoxProps {
    item: QRScanBoxType
}

const QRScanbox = ({ item }: QRScanBoxProps) => {
    return (
        <Flex.Box
            align="center"
            gap="8x"
            padding="8x"
            className={qr_box}
            md={{ gap: '12x', padding: '12x' }}
        >
            <Image src={item.img_src} alt="p2p qr" width={64} height={64} />
            <div>
                <Typography.Paragraph textcolor="white" size="medium">
                    <Localize translate_text={item.heading_one} />
                </Typography.Paragraph>
                <Typography.Heading as="h5" size="xxs" textcolor="white">
                    <Localize translate_text={item.heading_two} />
                </Typography.Heading>
            </div>
        </Flex.Box>
    )
}

export default QRScanbox
