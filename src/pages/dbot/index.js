import React from 'react'
import styled from 'styled-components'
import DTraderVideo from "../dtrader/_dtrader-video.js"
import OtherPlatform from './_other-platform.js'
import Trading from './_trading.js'
import DHero from 'components/elements/dhero.js'
import DNumbers from 'components/elements/dnumbers.js'
import DExperience from 'components/elements/d-experience.js'
import Show from 'components/containers/show'
import SEO from 'components/containers/seo'
import DHowItWorks from 'components/elements/d-how-it-works.js'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'
import dbot from 'images/svg/d-bot.svg'
import { Header, Text } from 'components/elements/typography.js'
import DbotPlatform from 'images/svg/dbot-platform.svg'

const NumberWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 32.8rem;
`
const DtraderNumbers = () => (
    <>
        <NumberWrapper>
            <Header as="h2" align="center">
                {localize('5')}
            </Header>
            <Text align="center">
                {localize('Pre-built strategies included')}
            </Text>
        </NumberWrapper>
        <NumberWrapper>
            <Header as="h2" align="center">
                {localize('$FREE')}
            </Header>
            <Text align="center">{localize('zero cost to build')}</Text>
        </NumberWrapper>
        <NumberWrapper>
            <Header as="h2" align="center">
                {localize('+50')}
            </Header>
            <Text align="center">
                {localize('markets to unleash your bot')}
            </Text>
        </NumberWrapper>
    </>
)
const DBot = () => {
    return (
        <Layout>
            <SEO title={localize('Dtrader')} />
            <DHero
                Logo={dbot}
                title={localize('DBot')}
                message={localize(
                    'Automate your trading ideas without writing code',
                )}
                PlatformImage={DbotPlatform}
                button_text={localize('Start automating')}
                clickRedirect="signup modal"
            />
            <Show.Desktop>
                <DNumbers>
                    <DtraderNumbers />
                </DNumbers>
            </Show.Desktop>
            <DHowItWorks
                subtitle={localize('Make a trade in 3 easy steps')}
                Video={DTraderVideo}
            />
            <Trading />
            <DExperience
                title={localize('Trade more efficiently with DBot')}
                redirect="bot"
            />
            <OtherPlatform />
        </Layout>
    )
}

export default WithIntl()(DBot)
