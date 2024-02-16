import React from 'react'
import Flex from 'features/components/atoms/flex-box'
import Typography from 'features/components/atoms/typography'
import { Localize } from 'components/localization'

const SignUpContent = () => {
    return (
        <Flex.Box
            basis="6-12"
            visible="larger-than-tablet"
            direction="col"
            justify="center"
            align="center"
            gap="8x"
        >
            <Typography.Heading size="small" align="center">
                <Localize translate_text="_t_Your go-to platform for exclusive trading courses_t_" />
            </Typography.Heading>
            <Typography.Paragraph align="center">
                <Localize translate_text="_t_Gain access to comprehensive modules on forex, Deriv MT5, and more._t_" />
            </Typography.Paragraph>
        </Flex.Box>
    )
}

export default SignUpContent
