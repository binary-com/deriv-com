import React from 'react'
import styled from 'styled-components'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'
import Dmt5Logo from 'images/svg/dmt-5.svg'
import OtherPlatform from './_other-platform.js'
import { Header, Text } from 'components/elements/typography.js'
import DTraderVideo from './../dtrader/_dtrader-video.js'
import DHowItWorks from 'components/elements/d-how-it-works.js'
import DNumbers from 'components/elements/dnumbers.js'
import Trading from './_trading.js'
import TryMT5 from './_try-mt5.js'
import Show from 'components/containers/show'
import SEO from 'components/containers/seo'
import DHero from 'components/elements/dhero.js'

const NumberWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 328px;
`
const DtraderNumbers = () => (
    <>
        <NumberWrapper>
            <Header as="h2" align="center">
                {localize('70+')}
            </Header>
            <Text align="center">
                {localize('tradable assets and growing')}
            </Text>
        </NumberWrapper>
        <NumberWrapper>
            <Header as="h2" align="center">
                {localize('1:1,000')}
            </Header>
            <Text align="center">{localize('maximum leverage')}</Text>
        </NumberWrapper>
        <NumberWrapper>
            <Header as="h2" align="center">
                {localize('30')}
            </Header>
            <Text align="center">{localize('maximum lot siz')}</Text>
        </NumberWrapper>
    </>
)
const Dtrader = () => {
    return (
        <Layout>
            <SEO title={localize('DMT5')} />
            <DHero
                Logo={Dmt5Logo}
                title={localize('DMT5')}
                message={localize('The all-in-one FX and CFD trading platform')}
                img_name="mt5-platform.png"
                img_alt={localize('MT5 Platform')}
                button_text={localize('Try for free')}
                clickRedirect="signup modal"
            />
            <Show.Desktop>
                <DNumbers>
                    <DtraderNumbers />
                </DNumbers>
            </Show.Desktop>
            <DHowItWorks
                subtitle={localize('Get started with DMT5 in 3 easy steps')}
                Video={DTraderVideo}
            />
            <Trading />
            <TryMT5 />
            <OtherPlatform />
        </Layout>
    )
}

export default WithIntl()(Dtrader)
