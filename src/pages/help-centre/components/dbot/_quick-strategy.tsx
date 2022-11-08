import React from 'react'
import styled from 'styled-components'
import { Header, Text } from 'components/elements'
import { localize, Localize } from 'components/localization'
import device from 'themes/device'
// Images
import GetStartedImage from 'images/common/help-centre/dbot-button-get-started.png'
import QuickStrategyImage from 'images/common/help-centre/dbot-quick-strategy.png'
import StrategiesImage from 'images/common/help-centre/dbot-strategies.png'
import AssetTradeTypeImage from 'images/common/help-centre/dbot-asset-trade-type.png'
import ParametersImage from 'images/common/help-centre/dbot-parameters.png'
import RunBotImage from 'images/common/help-centre/dbot-run-bot.png'

const ImageWrapper = styled.div`
    padding: 2.4rem 10.2rem;
    max-width: 60rem;
    width: 100%;
    margin: 0 10rem;

    @media ${device.laptopL} {
        padding: 2.4rem 0;
        width: auto;
    }
    @media ${device.mobileL} {
        & > img {
            width: 110% !important;
        }
    }
`

// const data = [
//     {
//         translate_text:
//     }
// ]

const QuickStrategy = () => (
    <>
        <Header size="16px" weight="normal" width="65%">
            <Localize translate_text="_t_A quick strategy is a ready-made strategy that you can use in DBot. There are 3 quick strategies you can choose from: Martingale, D'Alembert, and Oscar's Grind._t_" />
        </Header>

        <Header mt="4rem" size="16px" weight="normal">
            <Localize
                translate_text="_t_<0>Using a quick strategy</0>_t_"
                components={[<strong key={0} />]}
            />
        </Header>

        {/* <StyledText>{localize("1. Click 'Get started' on the toolbar at the top.")}</StyledText> */}
        <ImageWrapper>
            <img
                src={GetStartedImage}
                alt={localize('Get Started')}
                width="14.2rem"
                style={{ width: '14.2rem' }}
                loading="lazy"
            />
        </ImageWrapper>
        <Text>
            <Localize
                translate_text="2. Click 'Quick Strategy'."
                components={[<strong key={0} />]}
            />
        </Text>
        <ImageWrapper>
            <img
                src={QuickStrategyImage}
                alt={localize('Quick strategy')}
                width="16.6rem"
                style={{ width: '16.6rem' }}
                loading="lazy"
            />
        </ImageWrapper>
        <Text>{localize('3. Choose the strategy that you want.')}</Text>
        <ImageWrapper>
            <img
                src={StrategiesImage}
                alt={localize('Strategies')}
                style={{ width: '42.1rem' }}
                width="42.1rem"
                loading="lazy"
            />
        </ImageWrapper>
        <Text>{localize('4. Select the asset and trade type.')}</Text>
        <ImageWrapper>
            <img
                src={AssetTradeTypeImage}
                alt={localize('Asset and trade type')}
                style={{ width: '44rem' }}
                loading="lazy"
                width="44rem"
            />
        </ImageWrapper>
        <Text>{localize("5. Enter your preferred trade parameters and click 'Create'.")}</Text>
        <ImageWrapper>
            <img
                src={ParametersImage}
                alt={localize('Parameters')}
                width="44rem"
                style={{ width: '44rem' }}
                loading="lazy"
            />
        </ImageWrapper>
        <Text>
            {localize(
                "6. The strategy is loaded onto the workspace. You may adjust your strategy however you want and when you’re ready to run your bot, click 'Run bot'.",
            )}
        </Text>
        <ImageWrapper>
            <img
                src={RunBotImage}
                alt={localize('Run bot')}
                width="11.8rem"
                loading="lazy"
                style={{ width: '11.8rem' }}
            />
        </ImageWrapper>
        <Text>
            {localize(
                '7. You may save your bot by either downloading it into your computer or by saving it on your Google Drive.',
            )}
        </Text>
    </>
)

export default QuickStrategy
