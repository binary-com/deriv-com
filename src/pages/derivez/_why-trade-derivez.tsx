import React from 'react'
import styled from 'styled-components'
import { SectionContainer, Container, Flex } from 'components/containers'
import { Localize } from 'components/localization'
import { Header, Text } from 'components/elements/typography'
import device from 'themes/device'
import EasyToStart from 'images/svg/deriv-ez/easy-to-start.svg'
import FavouriteAssets from 'images/svg/deriv-ez/favourite-assets.svg'
import TwentyFourSeven from 'images/svg/dmt5/twenty-four-seven.svg'
import { TString } from 'types/generics'

type CardType = {
    icon?: string
    title?: JSX.Element
    subtitle?: JSX.Element
    image_alt: string | JSX.Element
}

const StyledHeader = styled(Header)`
    @media ${device.mobileL} {
        font-size: 24px;
        padding: 0 35px;
    }
    @media ${device.mobileM} {
        padding: 0 20px;
    }
`

const Card = styled(Flex)`
    flex-direction: column;
    min-width: 200px;
    max-width: 384px;
    height: auto;
    padding: 24px;
    border-radius: 8px;
    border: solid 1px var(--color-grey-21);
    margin-right: 2.4rem;
    margin-bottom: 2rem;
    justify-content: flex-start;

    :last-child {
        margin-right: 0;
    }

    @media ${device.tablet} {
        margin-right: unset;
    }
`
const easy_to_start_title: TString = '_t_Easy to start_t_'
const easy_to_start_description: TString =
    '_t_Start trading CFDs in two easy steps — click to get an account, start trading. No need to remember another login ID and password._t_'
const easy_to_start_alt: TString = '_t_easy to start deriv ez_t_'
const twenty_four_seven_titles: TString = '_t_All your favourite assets, one platform_t_'
const twenty_four_four_description: TString =
    '_t_Trade anytime you want, including weekends and holidays, on cryptocurrencies and our proprietary derived indices._t_'
const twenty_four_seven_alt: TString = '_t_24/7 trading_t_'
const favourite_assets_titles: TString = '_t_All your favourite assets, one platform_t_'
const favourite_assets_description: TString =
    '_t_Access over 150 assets in multiple markets simultaneously on one platform._t_'
const favourite_assets_alt: TString = '_t_favourite assets_t_'
const why_trade_with_derivez_title: TString = '_t_Why trade with Deriv EZ_t_'

const card_data: CardType[] = [
    {
        title: <Localize translate_text={easy_to_start_title} />,
        subtitle: <Localize translate_text={easy_to_start_description} />,
        icon: EasyToStart,
        image_alt: <Localize translate_text={easy_to_start_alt} />,
    },
    {
        title: <Localize translate_text={twenty_four_seven_titles} />,
        subtitle: <Localize translate_text={twenty_four_four_description} />,
        icon: TwentyFourSeven,
        image_alt: <Localize translate_text={twenty_four_seven_alt} />,
    },
    {
        title: <Localize translate_text={favourite_assets_titles} />,
        subtitle: <Localize translate_text={favourite_assets_description} />,
        icon: FavouriteAssets,
        image_alt: <Localize translate_text={favourite_assets_alt} />,
    },
]

const WhyTradeDerivEZ = () => {
    return (
        <div>
            <SectionContainer>
                <Container fd="column">
                    <StyledHeader type="page-title" align="center" as="h2">
                        <Localize translate_text={why_trade_with_derivez_title} />
                    </StyledHeader>
                    <Flex tablet_direction="column" tablet_ai="center" mt="40px">
                        {card_data.map((card, index) => {
                            return (
                                <Card key={index}>
                                    <div>
                                        <img src={card.icon} alt={card.image_alt} />
                                    </div>
                                    <Header
                                        width="240px"
                                        type="sub-section-title"
                                        mt="7px"
                                        mb="8px"
                                        as="h3"
                                    >
                                        {card.title}
                                    </Header>
                                    <Text>{card.subtitle}</Text>
                                </Card>
                            )
                        })}
                    </Flex>
                </Container>
            </SectionContainer>
        </div>
    )
}

export default WhyTradeDerivEZ
