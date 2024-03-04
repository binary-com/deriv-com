import React from 'react'
import { content_new } from './signup-academy.module.scss'
import Flex from 'features/components/atoms/flex-box'
import Typography from 'features/components/atoms/typography'
import { Localize } from 'components/localization'

const SignUpContent = () => {
    return (
        <Flex.Box
            visible="larger-than-tablet"
            direction="col"
            justify="center"
            align="center"
            gap="8x"
        >
            <Typography.Heading size="small" align="center" className={content_new}>
                <Localize translate_text="_t_Your go-to platform for exclusive trading courses_t_" />
            </Typography.Heading>
            <Typography.Paragraph align="center" className={content_new}>
                <Localize translate_text="_t_Gain access to comprehensive modules on forex, Deriv MT5, and more._t_" />
            </Typography.Paragraph>
        </Flex.Box>
    )
}

export default SignUpContent
