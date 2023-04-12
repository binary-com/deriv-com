import React from 'react'
import { bottom_text_wrapper } from './styles.module.scss'
import Typography from 'features/components/atoms/typography'
import { Localize } from 'components/localization'
import Container from 'features/components/atoms/container'
import Button from 'features/components/atoms/button'

const BottomText = () => {
    return (
        <Container.Fluid className={bottom_text_wrapper} pt="10x" md={{ pt: '19x' }}>
            <Typography.Paragraph size="large" mb="10x" textcolor="black">
                <Localize translate_text="_t_Want to know more about CFD trading conditions for the instruments we offer?_t_" />
            </Typography.Paragraph>
            <Button.Primary>
                <Localize translate_text="_t_Check trading specs_t_" />
            </Button.Primary>
        </Container.Fluid>
    )
}

export default BottomText
