import React from 'react'
import styled from 'styled-components'
import { ContentType } from './index'
import { Container, Flex, SectionContainer } from 'components/containers'
import { Header, Text } from 'components/elements'
import { localize, Localize, LocalizedLink } from 'components/localization'
import { useCountryRule } from 'components/hooks/use-country-rule'
// svg
import Arrow from 'images/svg/deriv-go/arrow.svg'
import DMT5 from 'images/svg/deriv-go/dmt5.svg'
import DerivX from 'images/svg/deriv-go/dx.svg'
import device from 'themes/device'

const StyledSectionContainer = styled(SectionContainer)`
    border-top: solid 1px var(--color-grey-2);
`
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
    padding-top: 13px;
    color: rgba(255, 68, 79, 1);
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
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
    padding: 80px 24px;
    border-radius: 12px;
    box-shadow: 0 16px 40px rgba(198, 198, 198, 0.3);
    margin-right: 25px;
    margin-bottom: 20px;
    align-items: center;

    :last-child {
        margin-right: 8px;
    }

    @media ${device.tabletL} {
        margin-right: unset;
        padding-top: 40px;
    }
`

const other_apps: ContentType[] = [
    {
        id: 0,
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
        id: 1,
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
    const { is_uk_eu } = useCountryRule()

    return (
        <div>
            <StyledSectionContainer tablet={{ padding: '4rem 0' }}>
                <Container fd="column">
                    {is_uk_eu ? (
                        <StyledHeader as="h2" type="heading-2" align="center">
                            {localize('Check out our other app')}
                        </StyledHeader>
                    ) : (
                        <StyledHeader as="h2" type="heading-2" align="center">
                            {localize('Check out our other apps')}
                        </StyledHeader>
                    )}
                    <Flex tablet_direction="column" tablet_ai="center" mt="40px">
                        {other_apps.map((item, index) => {
                            if (is_uk_eu && index == 1) return
                            return (
                                <Card key={item.id}>
                                    <div>
                                        <img src={item.icon} alt="" />
                                    </div>
                                    <Header align="center" as="h3" type="heading-3" mt="8px">
                                        {item.title}
                                    </Header>
                                    <StyledText>{item.content}</StyledText>
                                    <div>{item.url}</div>
                                </Card>
                            )
                        })}
                    </Flex>
                </Container>
            </StyledSectionContainer>
        </div>
    )
}

export default OtherApps
