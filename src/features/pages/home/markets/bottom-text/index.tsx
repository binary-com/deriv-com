import React from 'react'
import Typography from 'features/components/atoms/typography'
import { Localize } from 'components/localization'
import Flex from 'features/components/atoms/flex-box'
import LinkButton from 'features/components/atoms/link-button'

const BottomText = () => {
    return (
        <Flex.Box
            direction="col"
            container="fluid"
            justify="center"
            align="center"
            pt="10x"
            md={{ pt: '20x' }}
        >
            <Typography.Paragraph size="medium" mb="10x" textcolor="black" align="center">
                <Localize translate_text="_t_Want to know more about CFD trading conditions for the instruments we offer?_t_" />
            </Typography.Paragraph>
            <LinkButton.Primary
                font_family="UBUNTU"
                size="medium"
                aria-label="check trading specs"
                url={{
                    type: 'internal',
                    to: '/trading-specification',
                }}
            >
                <Localize translate_text="_t_Check trading specs_t_" />
            </LinkButton.Primary>
        </Flex.Box>
    )
}

export default BottomText
