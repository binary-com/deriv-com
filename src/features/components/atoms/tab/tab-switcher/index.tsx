import React from 'react'
import { StepperTabTypes } from '../types'
import Typography from '../../typography'
import TabButton from '../../button/tab'
import FlexBox from '../../flex-box'
import FlexBoxContainer from '../../flex-box/box'
import * as styles from './tab-switcher.module.scss'
import { Localize } from 'components/localization'

const TabSwitcher = ({ tab, onTabClick }: Omit<StepperTabTypes, 'items'>) => {
    return (
        <FlexBoxContainer direction={'col'} align={'center'} justify={'center'} pt={'20x'}>
            <Typography.Heading align={'center'} mb={'20x'}>
                <Localize translate_text={'_t_How to get started with a Deriv EZ account_t_'} />
            </Typography.Heading>
            <FlexBox.Box justify={'center'}>
                <TabButton
                    className={
                        tab === 'demo' ? styles.tab_switcher_active : styles.tab_switcher_unactive
                    }
                    onClick={() => onTabClick('demo')}
                >
                    <Typography.Paragraph size={'xlarge'} align={'center'}>
                        <Localize translate_text={'_t_Demo account _t_'} />
                    </Typography.Paragraph>
                </TabButton>
                <TabButton
                    className={
                        tab === 'real' ? styles.tab_switcher_active : styles.tab_switcher_unactive
                    }
                    style={{ background: 'transparent' }}
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
