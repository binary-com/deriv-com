import React from 'react'
import Typography from 'features/components/atoms/typography'
import { Localize } from 'components/localization'
import Button from 'features/components/atoms/button'
import Flex from 'features/components/atoms/flex-box'

const BottomText = () => {
    const onClick = () => {
        if (typeof window !== undefined) {
            window.location.href = '/trading-specification'
        }
    }

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
            <Button.Primary textsize="medium" aria-label="check trading specs" onClick={onClick}>
                <Localize translate_text="_t_Check trading specs_t_" />
            </Button.Primary>
        </Flex.Box>
    )
}

export default BottomText
