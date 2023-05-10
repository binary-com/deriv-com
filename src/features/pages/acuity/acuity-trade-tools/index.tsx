import React from 'react'
import * as style from '../acuity.module.scss'
import { Localize } from 'components/localization'
import FlexBox from 'features/components/atoms/flex-box'
import Typography from 'features/components/atoms/typography'

const AcuityTradeTools = () => {
    return (
        <FlexBox.Box container="fixed" className={style.acuity_tools_wrapper}>
            <FlexBox.Box
                container="fluid"
                justify={'center'}
                margin_inline={'6x'}
                direction={'col'}
                mt={'10x'}
                pt={'40x'}
                md={{ mt: '40x', margin_inline: '25x', mb: '30x' }}
            >
                <FlexBox.Box direction={'col'}>
                    <Typography.Heading align={'center'} as="h1" size="large" textcolor="brand">
                        <Localize translate_text={'_t_Acuity Trading Tools_t_'} />
                    </Typography.Heading>
                    <Typography.Paragraph align={'center'} mt={'8x'} weight={'normal'} size="large">
                        <Localize
                            translate_text={
                                '_t_Experience the power of AI-driven tools to get an in-depth overview of market sentiment and level up your trading strategies. Acuity tools use machine learning algorithms to analyse and interpret market news and trends in real time, providing traders of all levels of experience with a competitive edge._t_'
                            }
                        />
                    </Typography.Paragraph>
                </FlexBox.Box>
            </FlexBox.Box>
        </FlexBox.Box>
    )
}

export default AcuityTradeTools
