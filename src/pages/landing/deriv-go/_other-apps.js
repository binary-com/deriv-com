import React from 'react'
import styled from 'styled-components'
import { Container, Flex, SectionContainer } from 'components/containers'
import { Header, Text } from 'components/elements'
import { localize, Localize, LocalizedLink } from 'components/localization'
//TODO: svg
import Arrow from 'images/svg/deriv-go/arrow.svg'
import DMT5 from 'images/svg/deriv-go/dmt5.svg'
import DerivX from 'images/svg/deriv-go/dx.svg'
import device from 'themes/device'

const StyledHeader = styled(Header)`
    @media ${device.mobileL} {
        font-size: 32px;
        padding: 0 35px;
    }
    @media ${device.mobileM} {
        padding: 0 20px;
    }
`
const StyledText = styled(Text)`
    max-width: 333px;
    font-size: 20px;
    text-align: center;
`

const LearnMore = styled(LocalizedLink)`
    margin-right: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    color: rgba(255, 68, 79, 1);

    & > img {
        width: 7px;
        height: 12px;
        margin-left: 8px;
    }

    @media ${device.tabletL} {
        ${Text} {
            font-size: 16px;
        }
    }
`

const Card = styled(Flex)`
    flex-direction: column;
    max-width: 380px;
    max-height: 300px;
    padding: 32px 24px;
    border-radius: 12px;
    box-shadow: 0 16px 40px rgba(198, 198, 198, 0.3);
    margin-right: 2.4rem;
    margin-bottom: 2rem;
    align-items: center;

    :last-child {
        margin-right: 8px;
    }

    @media ${device.tablet} {
        margin-right: unset;
    }
`

const other_apps = [
    {
        icon: DMT5,
        title: <Localize translate_text="DMT5" />,
        content: (
            <Localize translate_text="Trade on Deriv MT5 (DMT5), the all-in-one CFD trading app." />
        ),
        url: (
            <LearnMore to="/dmt5/">
                <Localize translate_text="Learn more" />
                <img src={Arrow} alt="" />
            </LearnMore>
        ),
    },
    {
        icon: DerivX,
        title: <Localize translate_text="Deriv X" />,
        content: (
            <Localize translate_text="Customise your trading experience and trade CFDs on the Deriv X app." />
        ),
        url: (
            <LearnMore to="/derivx/">
                <Localize translate_text="Learn more" />
                <img src={Arrow} alt="" />
            </LearnMore>
        ),
    },
]

const OtherApps = () => {
    return (
        <div>
            <SectionContainer>
                <Container fd="column">
                    <StyledHeader type="page-title" align="center">
                        {localize('Check out our other apps')}
                    </StyledHeader>
                    <Flex tablet_direction="column" tablet_ai="center" mt="40px">
                        {other_apps.map((index) => {
                            return (
                                <Card key={index.title}>
                                    <div>
                                        <img src={index.icon} alt="" />
                                    </div>
                                    <Header width="110px" type="heading-3" mt="8px">
                                        {index.title}
                                    </Header>
                                    <StyledText>{index.content}</StyledText>
                                    <div>{index.url}</div>
                                </Card>
                            )
                        })}
                    </Flex>
                </Container>
            </SectionContainer>
        </div>
    )
}

export default OtherApps
