import React, { useEffect, useState } from 'react'
import { Script } from 'gatsby'
import * as styles from './acuity-widgets.module.scss'
import { isBrowser } from 'common/utility'
import FlexBox from 'features/components/atoms/flex-box'
import TabMenu from 'features/components/templates/tabs/menu'
import { TString } from 'types/generics'
import InitialLoader from 'components/elements/dot-loader'

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
            className={styles.widget_box_small}
        />
    ),
    '_t_Economic Calendar_t_': <div id="economicCalendar" className={styles.widget_box_calendar} />,
}

const AcuityWidgets = () => {
    const [is_script_loaded, setIsScriptLoaded] = useState(false)
    const [is_loading, setIsLoading] = useState(true)
    const [current_widget, setCurrentWidget] = useState<TString>('_t_Signal Centre Trade Ideas_t_')

    useEffect(() => {
        if (
            current_widget == '_t_Economic Calendar_t_' ||
            current_widget == '_t_Signal Centre Trade Ideas_t_'
        ) {
            setTimeout(() => {
                setIsLoading(false)
            }, 5000)
        } else setIsLoading(false)

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
            if (
                current_widget == '_t_Economic Calendar_t_' ||
                current_widget == '_t_Signal Centre Trade Ideas_t_'
            ) {
                setIsLoading(true)
            }
        }
    }, [is_script_loaded, current_widget])

    return (
        <>
            <Script
                src={'https://prodstorage.azureedge.net/Widgets/lib/@1.0.0/widget-core.js'}
                onLoad={() => setIsScriptLoaded(true)}
                async
            />
            <FlexBox.Box direction={'col'} pt={'20x'} pb={'27x'} md={{ pt: '40x', pb: '11x' }}>
                <TabMenu
                    class_name={styles.widget_menu}
                    tab_names={Object?.keys(acuity_widgets)}
                    current_tab={current_widget}
                    setCurrentTab={setCurrentWidget}
                />
                <FlexBox.Box direction={'col'} padding_inline={'8x'} md={{ padding_inline: '40x' }}>
                    {is_loading && <InitialLoader style={{ position: 'absolute', right: '0' }} />}
                    {acuity_widgets[current_widget]}
                </FlexBox.Box>
            </FlexBox.Box>
        </>
    )
}

export default AcuityWidgets
