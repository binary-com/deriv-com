import React from 'react'
import { Localize } from 'components/localization'
import FlexBox from 'features/components/atoms/flex-box'
import Typography from 'features/components/atoms/typography'
import useBreakpoints from 'components/hooks/use-breakpoints'

const AcuityDisclaimer = () => {
    const { is_mobile } = useBreakpoints()
    return (
        <FlexBox.Box container="fixed" bgcolor="light">
            <FlexBox.Box container="fluid" padding_block="15x">
                <Typography.Paragraph size={is_mobile ? 'small' : 'medium'}>
                    <Localize
                        translate_text={
                            '_t_The information presented on this page is solely for educational purposes and has been provided by Acuity and Signal Centre. Since this information falls outside the scope of our responsibility, we cannot be held liable for any outcomes or consequences that may arise from using Acuity and Signal Centre. Please note that we do not offer financial, investment, or trading advice._t_'
                        }
                    />
                </Typography.Paragraph>
            </FlexBox.Box>
        </FlexBox.Box>
    )
}

export default AcuityDisclaimer
