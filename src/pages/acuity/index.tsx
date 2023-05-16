import React, { useEffect, useState } from 'react'
import { Script } from 'gatsby'
import Layout from '../../components/layout/layout'
import { SEO } from '../../components/containers'
import { localize } from '../../components/localization'
import { isBrowser } from 'common/utility'

const MyComponent = () => {
    const [is_script_loaded, setIsScriptLoaded] = useState(false)

    useEffect(() => {
        if (isBrowser() && is_script_loaded) {
            const widget = window.AcuityWidgets
            widget.globals({ apikey: '2713b8d0-43ed-4194-b5d7-b1ff60dbdae0', locale: 'en-GB' })
            const economicCalendar = widget.CreateWidget(
                'CalendarPage',
                document.getElementById('economicCalendar'),
                {
                    settingId: 2619,
                },
            )
            const signalCentre = widget.CreateWidget(
                'SignalCentre',
                document.getElementById('signalcentre'),
                { settingId: 2617 },
            )
            economicCalendar.mount()
            signalCentre.mount()
        }
    }, [is_script_loaded])

    return (
        <Layout>
            <SEO
                title={localize('_t_Acuity | An Online Trading Platform | Deriv.com_t_')}
                description={localize(
                    '_t_Deriv is a pioneering and award-winning online trading platform that offers a wide selection of derivatives for anyone, anywhere to trade._t_',
                )}
            />
            <div
                style={{
                    inlineSize: '100%',
                    blockSize: '80rem',
                    backgroundColor: 'gray',
                }}
            >
                <Script
                    src={'https://prodstorage.azureedge.net/Widgets/lib/@1.0.0/widget-core.js'}
                    onLoad={() => setIsScriptLoaded(true)}
                />
                <div id="economicCalendar"></div>
                <iframe
                    src={
                        'https://dashboard.acuitytrading.com/widget/marketalerts?lang=en-GB&apikey=2713b8d0-43ed-4194-b5d7-b1ff60dbdae0'
                    }
                    height={'100%'}
                    width={'100%'}
                />
                <iframe
                    src={
                        'https://dashboard.acuitytrading.com/widget/researchterminal?lang=en-GB&apikey=2713b8d0-43ed-4194-b5d7-b1ff60dbdae0'
                    }
                    height={'100%'}
                    width={'100%'}
                />
                <div id="signalcentre"></div>
            </div>
        </Layout>
    )
}

export default MyComponent
