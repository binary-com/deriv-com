import React from 'react'
import styled from 'styled-components'
import { Flex, SectionContainer } from 'components/containers'
import { Header, Text } from 'components/elements'
import { Localize, localize } from 'components/localization'
import { LinkButton } from 'components/form'
import device from 'themes/device'

const content = [
    {
        header: <Localize translate_text="2000+" />,
        text: <Localize translate_text="active users" />,
    },
    {
        header: <Localize translate_text="USD500k+" />,
        text: <Localize translate_text="exchanged to date" />,
    },
]

const Section = styled(SectionContainer)`
    display: flex;
    padding: 8rem 12rem;
    margin-top: 20rem;
    justify-content: center;
    flex-direction: column;
    background-color: var(--color-grey-30);

    @media ${device.tabletL} {
        padding: 6.4rem 7.2rem;
    }
    @media ${device.tablet} {
        margin-top: 40px;
        padding: 40px 16px;
    }
`

const ClientCard = styled.article`
    margin-left: 2.4rem;
    margin-top: -20rem;
    background-color: var(--color-white);
    border-radius: 10px;
    box-shadow: 0 20px 30px 0 rgba(0, 0, 0, 0.2);
    width: 38.4rem;
    height: 21.6rem;
    padding: 5.2rem;
    position: relative;

    :first-child {
        margin: -20rem 0 0 0;
    }
    @media ${device.laptopM} {
        min-height: 22rem;
        height: 100%;
    }
    @media ${device.tablet} {
        margin: 0 0 24px 0;
        max-height: unset;
        width: 328px;
        height: 184px;
        padding: 46px 44px;

        :first-child {
            margin: 0 0 24px 0;
        }
        :last-child {
            margin-bottom: 0;
        }
    }
    @media ${device.mobileM} {
        max-width: 290px;
        height: unset;
    }
`
const StyledHeader = styled(Header)`
    text-align: center;
    font-size: 48px;

    @media ${device.tablet} {
        font-size: 40px;
        line-height: 50px;
        margin-bottom: 16px;
    }
`
const StyledText = styled(Text)`
    font-size: 24px;
    text-align: center;

    @media ${device.tablet} {
        font-size: 20px;
        line-height: 25px;
    }
`

const StyledLinkButton = styled(LinkButton)`
    padding: 14px 16px;
    font-size: 14px;
    border: unset;
    width: 125px;
    margin: 80px auto 0 auto;
    white-space: nowrap;

    @media ${device.tablet} {
        margin-top: 40px;
    }
`

const Numbers = () => {
    return (
        <Section>
            <Flex tablet_direction="column" tablet_ai="center" tablet={{ m: '0' }}>
                {content.map((item, idx) => {
                    return (
                        <ClientCard key={idx}>
                            <Flex height="unset" ai="center" mobileL={{ mb: '8px' }}>
                                <StyledHeader
                                    mobile_margin="unset"
                                    mobile_font_size="20px"
                                    mb="0.8rem"
                                    as="h4"
                                >
                                    {item.header}
                                </StyledHeader>
                            </Flex>
                            <StyledText>{item.text}</StyledText>
                        </ClientCard>
                    )
                })}
            </Flex>
            <StyledLinkButton
                secondary="true"
                to="/cashier/p2p"
                external="true"
                is_deriv_app_link
                target="_blank"
                rel="noopener noreferrer"
            >
                {localize('Try DP2P now')}
            </StyledLinkButton>
        </Section>
    )
}

export default Numbers
