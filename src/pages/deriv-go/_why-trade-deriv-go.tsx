import React from 'react'
import styled from 'styled-components'
import { ContentType } from './index'
import IconEasyAccess from 'images/svg/deriv-go/easy-access.svg'
import { SectionContainer, Container, Flex } from 'components/containers'
import { Localize, localize } from 'components/localization'
import { Header, Text } from 'components/elements/typography'
import device from 'themes/device'
import Icon24_7 from 'images/svg/deriv-go/24-7.svg'
import IconUserFriendly from 'images/svg/deriv-go/user-friendly.svg'

const StyledHeader = styled(Header)`
    @media ${device.mobileL} {
        font-size: 32px;
        padding: 0 35px;
    }
    @media ${device.mobileM} {
        padding: 0 20px;
    }
`
const Card = styled(Flex)`
    flex-direction: column;
    max-width: 384px;
    padding: 24px 7px;
    border: none;
    margin-right: 2.4rem;
    align-items: center;

    :last-child {
        margin-right: 8px;
    }
`
const StyledText = styled(Text)`
    font-size: 24px;

    @media ${device.tabletL} {
        font-size: 18px;
    }
`

const trade_data: ContentType[] = [
    {
        icon: Icon24_7,
        title: <Localize translate_text="_t_24/7 trading_t_" />,
        subtitle: (
            <Localize translate_text="_t_Trade synthetics and cryptocurrencies round the clock and forex during regular market hours._t_" />
        ),
    },
    {
        icon: IconUserFriendly,
        title: <Localize translate_text="_t_User-friendly features_t_" />,
        subtitle: (
            <Localize translate_text="_t_Enjoy a smooth trading experience with easy-to-use charts and a pleasant dark theme._t_" />
        ),
    },
    {
        icon: IconEasyAccess,
        title: <Localize translate_text="_t_Easy access_t_" />,
        subtitle: (
            <Localize translate_text="_t_Get instant access to your trades wherever you are whenever you want._t_" />
        ),
    },
]

const WhyTradeDerivGo = () => {
    return (
        <div>
            <SectionContainer>
                <Container fd="column">
                    <StyledHeader as="h2" type="heading-2" align="center">
                        {localize('_t_Why trade with Deriv GO_t_')}
                    </StyledHeader>
                    <Flex tablet_direction="column" tablet_ai="center" mt="40px" mr="8px">
                        {trade_data.map((item, index) => {
                            return (
                                <Card key={index}>
                                    <div>
                                        <img src={item.icon} width={72} height={72} alt="" />
                                    </div>
                                    <Header as="h3" type="heading-3" align="center" mt="24px">
                                        {item.title}
                                    </Header>
                                    <StyledText align="center" mt="8px">
                                        {item.subtitle}
                                    </StyledText>
                                </Card>
                            )
                        })}
                    </Flex>
                </Container>
            </SectionContainer>
        </div>
    )
}

export default WhyTradeDerivGo
