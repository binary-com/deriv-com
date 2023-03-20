import React from 'react'
import styled from 'styled-components'
import { ContentType } from './index'
import IconEasyAccess from 'images/svg/deriv-go/easy-access.svg'
import { SectionContainer, Container, Flex } from 'components/containers'
import { Localize, localize } from 'components/localization'
import { Header } from 'components/elements/typography'
import device from 'themes/device'
import Icon24_7 from 'images/svg/deriv-go/24-7.svg'
import IconUserFriendly from 'images/svg/deriv-go/user-friendly.svg'
import { Grid, HowItWorksItem } from 'pages/trade-types/components/_style'

const StyledHeader = styled(Header)`
    color: var(--color-black-9);
    margin: 0 0 80px;

    @media ${device.mobileL} {
        font-size: 32px;
        padding: 0 35px;
        margin: 0 0 40px;
    }
    @media ${device.mobileM} {
        padding: 0 20px;
        margin: 0 0 40px;
    }
`
const StyledText = styled(Header)`
    font-size: 24px;
    color: var(--color-black-9);

    @media ${device.tabletL} {
        font-size: 18px;
    }
`
const StyledSubText = styled(Header)`
    font-size: 1.6rem;
    color: var(--color-black-9);

    @media ${device.tabletL} {
        font-size: 14px;
    }
    @media ${device.mobileL} {
        margin-top: 0;
    }
`
const OptionGrid = styled(Grid)`
    grid-gap: 2.4rem;
    max-width: 890px;
`

const OptionItems = styled(Flex)`
    flex-direction: column;
    height: auto;
    align-items: flex-start;
    margin-bottom: 0.8rem;
`
const trade_data: ContentType[] = [
    {
        icon: Icon24_7,
        title: <Localize translate_text="24/7 trading" />,
        subtitle: (
            <Localize translate_text="Trade synthetics and cryptocurrencies round the clock and forex during regular market hours." />
        ),
        image_alt: 'Trade 24/7 with DerivGO',
    },
    {
        icon: IconUserFriendly,
        title: <Localize translate_text="User-friendly features" />,
        subtitle: (
            <Localize translate_text="Enjoy a smooth trading experience with easy-to-use charts and a pleasant dark theme." />
        ),
        image_alt: 'Easy to use trading features',
    },
    {
        icon: IconEasyAccess,
        title: <Localize translate_text="Easy access" />,
        subtitle: (
            <Localize translate_text="Get instant access to your trades wherever you are whenever you want." />
        ),
        image_alt: 'Instant and easy access for trading',
    },
]

const WhyTradeDerivGo = () => {
    return (
        <div>
            <SectionContainer>
                <Container fd="column">
                    <StyledHeader as="h2" type="heading-2" align="center">
                        {localize('Why trade with Deriv GO')}
                    </StyledHeader>
                    <OptionGrid>
                        {trade_data.map((item, index) => {
                            return (
                                <HowItWorksItem key={index}>
                                    <OptionItems>
                                        <div>
                                            <img src={item.icon} alt={item.image_alt} />
                                        </div>
                                        <StyledText>{item.title}</StyledText>
                                    </OptionItems>
                                    <StyledSubText weight="100">{item.subtitle}</StyledSubText>
                                </HowItWorksItem>
                            )
                        })}
                    </OptionGrid>
                </Container>
            </SectionContainer>
        </div>
    )
}

export default WhyTradeDerivGo
