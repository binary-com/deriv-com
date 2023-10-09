import React, { useState } from 'react'
import { demo, real } from './data'
import FlexBoxContainer from 'features/components/atoms/flex-box/box'
import Typography from 'features/components/atoms/typography'
import { Localize } from 'components/localization'
import TabStepper from 'features/components/molecules/tab-stepper'

const StartDerivEZ = () => {
    const [tab, setTab] = useState('demo')

    const onTabClick = (chosenTab: 'demo' | 'real') => {
        setTab(chosenTab)
    }

    return (
        <FlexBoxContainer direction={'col'} align={'center'} justify={'center'}>
            <Typography.Heading align={'center'} mb={'20x'}>
                <Localize translate_text={'_t_How to get started with a Deriv EZ account_t_'} />
            </Typography.Heading>
            <TabStepper tab={tab} onTabClick={onTabClick} items={tab == 'demo' ? demo : real} />
        </FlexBoxContainer>
    )
}

export default StartDerivEZ
