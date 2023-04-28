import React from 'react'
import { TStepperTab } from '../types'
import Typography from '../../typography'
import TabButton from '../../button/tab'
import FlexBox from '../../flex-box'
import FlexBoxContainer from '../../flex-box/box'
import { Localize } from 'components/localization'

const TabSwitcher = ({ tab, onTabClick }: Omit<TStepperTab, 'items'>) => {
    const button_style = {
        active: {
            fontWeight: 'bold',
            boxShadow: '0px 24px 48px rgba(14, 14, 14, 0.18)',
            'border-radius': '4px 0px 0px 4px',
        },
        inactive: {
            fontWeight: 'normal',
            'border-radius': '0px 4px 4px 0px',
            background: 'transparent',
        },
    }
    return (
        <FlexBoxContainer
            direction={'col'}
            align={'center'}
            justify={'center'}
            pt={'20x'}
            md={{ padding_block: '40x' }}
        >
            <Typography.Heading align={'center'} mb={'20x'}>
                <Localize translate_text={'_t_How to get started with a Deriv EZ account_t_'} />
            </Typography.Heading>
            <FlexBox.Box justify={'center'}>
                <TabButton
                    style={tab === 'demo' ? button_style['active'] : button_style['inactive']}
                    onClick={() => onTabClick('demo')}
                >
                    <Typography.Paragraph size={'xlarge'} align={'center'}>
                        <Localize translate_text={'_t_Demo account _t_'} />
                    </Typography.Paragraph>
                </TabButton>
                <TabButton
                    style={tab === 'real' ? button_style['active'] : button_style['inactive']}
                    onClick={() => onTabClick('real')}
                >
                    <Typography.Paragraph size={'xlarge'} align={'center'}>
                        <Localize translate_text={'_t_Real account _t_'} />
                    </Typography.Paragraph>
                </TabButton>
            </FlexBox.Box>
        </FlexBoxContainer>
    )
}

export default TabSwitcher
