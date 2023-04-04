import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { p2p_box_container } from './styles.module.scss'
import Typography from 'features/components/atoms/typography'
import Link from 'features/components/atoms/link'
import { Localize } from 'components/localization'
import Flex from 'features/components/atoms/flex-box'

const P2PTextBox = () => {
    return (
        <Flex.Box className={p2p_box_container} gap="8x" direction="col">
            <StaticImage
                src="../../../../images/common/home/deriv_p2p.png"
                alt="deriv p2p"
                width={147}
                height={64}
                layout="fixed"
                placeholder="none"
                formats={['avif', 'webp', 'auto']}
            />
            <Typography.Heading as="h3" size="small" mt="15x" md={{ mt: '0x' }}>
                <Localize translate_text="_t_Hassle-free deposits and withdrawals_t_" />
            </Typography.Heading>
            <Typography.Paragraph size="large">
                <Localize translate_text="_t_Connect with fellow traders and transfer money in minutes._t_" />
            </Typography.Paragraph>
            <Link url={{ type: 'internal', to: '/' }} size="large" textcolor="brand">
                <Localize translate_text="_t_Learn more >_t_" />
            </Link>
        </Flex.Box>
    )
}

export default P2PTextBox
