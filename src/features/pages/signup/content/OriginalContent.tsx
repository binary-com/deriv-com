import React from 'react'
import Typography from 'features/components/atoms/typography'
import { Localize } from 'components/localization'

const OriginalContent = () => {
    return (
        <>
            <Typography.Heading size="small" align="center">
                <Localize translate_text="_t_Unique trade types. Hundreds of instruments. Financial and derived markets._t_" />
            </Typography.Heading>
            <Typography.Heading size="xxs" align="center" weight="normal">
                <Localize translate_text="_t_Trade anywhere, anytime._t_" />
            </Typography.Heading>
            <Typography.Paragraph align="center">
                <Localize translate_text="_t_Ready to join over 2.5 million traders who have chosen Deriv as their trusted broker? Enter your email address to create a free demo account._t_" />
            </Typography.Paragraph>
        </>
    )
}

export default OriginalContent
