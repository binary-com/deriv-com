import React from 'react'
import { StepperTabTypes } from '../types'
import Typography from '../../typography'
import TabButton from '../../button/tab'
import FlexBox from '../../flex-box'
import FlexBoxContainer from '../../flex-box/box'
import * as styles from './tab-switcher.module.scss'
import { Localize } from 'components/localization'
import dclsx from 'features/utils/dclsx'

const TabSwitcher = ({ tab, onTabClick }: Omit<StepperTabTypes, 'items'>) => {
    return (
        <FlexBoxContainer
            direction={'col'}
            align={'center'}
            justify={'center'}
            pb={'20x'}
            md={{ padding: '10x' }}
        >
            <FlexBox.Box justify={'center'}>
                <TabButton
                    className={dclsx(
                        tab === 'demo' ? styles.tab_switcher_active : styles.tab_switcher_unactive,
                        styles.demo_tab_button,
                    )}
                    onClick={() => onTabClick('demo')}
                >
                    <Typography.Paragraph size={'xlarge'} align={'center'}>
                        <Localize translate_text={'_t_Demo account _t_'} />
                    </Typography.Paragraph>
                </TabButton>
                <TabButton
                    className={dclsx(
                        tab === 'real' ? styles.tab_switcher_active : styles.tab_switcher_unactive,
                        styles.real_tab_button,
                    )}
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
