import React from 'react'
import styled from 'styled-components'
import Trading from './_trading.js'
import OtherPlatform from './_other-platform.js'
import DTraderVideo from './_dtrader-video.js'
import DExperience from 'components/elements/d-experience.js'
import DHero from 'components/elements/dhero.js'
import DNumbers from 'components/elements/dnumbers.js'
import DHowItWorks from 'components/elements/d-how-it-works.js'
import Show from 'components/containers/show'
import SEO from 'components/containers/seo'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'
import dtrader_logo from 'images/svg/d-trader.svg'
import { Header, Text } from 'components/elements/typography.js'

const NumberWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`
const DtraderNumbers = () => (
    <>
        <NumberWrapper>
            <Header as="h2" align="center">
                {localize('50+')}
            </Header>
            <Text align="center">
                {localize('tradable assets and growing')}
            </Text>
        </NumberWrapper>
        <NumberWrapper>
            <Header as="h2">{localize('$0.35')}</Header>
            <Text align="center">{localize('low minimum stake')}</Text>
        </NumberWrapper>
        <NumberWrapper>
            <Header as="h2">{localize('1s - 365d')}</Header>
            <Text align="center">{localize('flexible trade duration')}</Text>
        </NumberWrapper>
        <NumberWrapper>
            <Header as="h2">&gt;{localize('200%')}</Header>
            <Text align="center">{localize('potential payout')}</Text>
        </NumberWrapper>
    </>
)
const Dtrader = () => {
    return (
        <Layout>
            <SEO title={localize('Dtrader')} />
            <DHero
                Logo={dtrader_logo}
                title={localize('Dtrader')}
                message={localize('Everything you need and more')}
                img_name="platform.png"
                img_alt={localize('Platform')}
                button_text={localize('Try for free')}
                clickRedirect="signup modal"
            />
            <Show.Desktop>
                <DNumbers>
                    <DtraderNumbers />
                </DNumbers>
            </Show.Desktop>
        </Layout>
    )
}

export default WithIntl()(Dtrader)
