import React from 'react'
import { Script } from 'gatsby'
import Layout from '../../components/layout/layout'
import { SEO } from '../../components/containers'
import { localize } from '../../components/localization'

const MyComponent = () => {
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
                    id="economicCalendar"
                    src={'https://prodstorage.azureedge.net/Widgets/lib/@1.0.0/widget-core.js'}
                    dangerouslySetInnerHTML={{
                        __html: `AcuityWidgets.globals({ apikey: '2713b8d0-43ed-4194-b5d7-b1ff60dbdae0', locale: 'en-GB' }); var widget = AcuityWidgets.CreateWidget( 'CalendarPage', document.getElementById('economicCalendar'), { settingId: 2619 } ); widget.mount();`,
                    }}
                />

                {/*<iframe*/}
                {/*    src={'https://prodstorage.azureedge.net/Widgets/lib/@1.0.0/widget-core.js'}*/}
                {/*    height={'100%'}*/}
                {/*    width={'100%'}*/}
                {/*/>*/}

                {/*<iframe*/}
                {/*    src={*/}
                {/*        'https://dashboard.acuitytrading.com/widget/researchterminal?lang=en-GB&apikey=2713b8d0-43ed-4194-b5d7-b1ff60dbdae0'*/}
                {/*    }*/}
                {/*    height={'100%'}*/}
                {/*    width={'100%'}*/}
                {/*/>*/}
            </div>
        </Layout>
    )
}

export default MyComponent
