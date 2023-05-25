import React, { useEffect, useState } from 'react'
import { Script } from 'gatsby'
import * as styles from './acuity-widgets.module.scss'
import { isBrowser } from 'common/utility'
import FlexBox from 'features/components/atoms/flex-box'
import TabMenu from 'features/components/templates/tabs/menu'
import { TString } from 'types/generics'

const acuity_widgets = {
    '_t_Signal Centre Trade Ideas_t_': (
        <div id="signalcentre" className={styles.widget_box_centre} />
    ),
    '_t_Research Terminal_t_': (
        <iframe
            src={
                'https://dashboard.acuitytrading.com/widget/researchterminal?lang=en-GB&apikey=2713b8d0-43ed-4194-b5d7-b1ff60dbdae0'
            }
            className={styles.widget_box_small}
        />
    ),
    '_t_Market Alerts_t_': (
        <iframe
            src={
                'https://dashboard.acuitytrading.com/widget/marketalerts?lang=en-GB&apikey=2713b8d0-43ed-4194-b5d7-b1ff60dbdae0'
            }
            height={'100%'}
            className={styles.widget_box_small}
        />
    ),
    '_t_Economic Calendar_t_': <div id="economicCalendar" className={styles.widget_box_calendar} />,
}

const AcuityWidgets = () => {
    const [is_script_loaded, setIsScriptLoaded] = useState(false)
    const [current_widget, setCurrentWidget] = useState<TString>('_t_Signal Centre Trade Ideas_t_')

    useEffect(() => {
        let created_widget
        if (isBrowser() && is_script_loaded) {
            const widget = window.AcuityWidgets
            widget.globals({ apikey: '2713b8d0-43ed-4194-b5d7-b1ff60dbdae0', locale: 'en-GB' })

            if (current_widget == '_t_Economic Calendar_t_') {
                created_widget = widget.CreateWidget(
                    'CalendarPage',
                    document.getElementById('economicCalendar'),
                    { settingId: 2619 },
                )
                created_widget.mount()
            }
            if (current_widget == '_t_Signal Centre Trade Ideas_t_') {
                created_widget = widget.CreateWidget(
                    'SignalCentre',
                    document.getElementById('signalcentre'),
                    { settingId: 2617 },
                )
                created_widget.mount()
            }
        }
        return function cleanup() {
            created_widget?.unmount()
        }
    }, [is_script_loaded, current_widget])

    return (
        <FlexBox.Box direction={'col'} margin_block={'20x'} md={{ margin_block: '40x' }}>
            <Script
                src={'https://prodstorage.azureedge.net/Widgets/lib/@1.0.0/widget-core.js'}
                onLoad={() => setIsScriptLoaded(true)}
            />
            <TabMenu
                class_name={styles.widget_menu}
                tab_names={Object?.keys(acuity_widgets)}
                current_tab={current_widget}
                setCurrentTab={setCurrentWidget}
            />
            <FlexBox.Box direction={'col'} padding_inline={'8x'} md={{ padding_inline: '33x' }}>
                {acuity_widgets[current_widget]}
            </FlexBox.Box>
        </FlexBox.Box>
    )
}

export default AcuityWidgets
