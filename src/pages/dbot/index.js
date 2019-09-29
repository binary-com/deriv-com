import React from 'react'
import styled from 'styled-components'
import DHero from 'components/elements/dhero.js'
import DNumbers from 'components/elements/dnumbers.js'
import Show from 'components/containers/show'
import SEO from 'components/containers/seo'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'
import dbot from 'images/svg/d-bot.svg'
import { Header, Text } from 'components/elements/typography.js'
import DbotPlatform from 'images/svg/dbot-platform.svg'

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
                Logo={dbot}
                title={localize('DBot')}
                message={localize('Automate your trading ideas without writing code')}
                PlatformImage={DbotPlatform}
                button_text={localize('Start automating')}
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
