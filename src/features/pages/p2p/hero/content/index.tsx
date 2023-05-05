import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Flex from 'features/components/atoms/flex-box'
import Typography from 'features/components/atoms/typography'
import { get_lang_direction, Localize } from 'components/localization'

const DP2HeroContent = () => {
    return (
        <Flex.Box
            justify="start"
            direction="col"
            align="start"
            gap="4x"
            basis="6-12"
            dir={get_lang_direction()}
        >
            <StaticImage
                src="../../../../../images/common/p2p/p2p_logo.png"
                alt="p2p logo"
                width={250}
                height={64}
            />
            <Typography.Heading as="h1" size="xxl">
                <Localize translate_text="_t_Hassle-free deposits and withdrawals_t_" />
            </Typography.Heading>
            <Typography.Paragraph size="xlarge">
                <Localize translate_text="_t_Use your local currency to make deposits into and withdrawals from your Deriv account._t_" />
            </Typography.Paragraph>
        </Flex.Box>
    )
}

export default DP2HeroContent
