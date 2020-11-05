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
        text: <Localize translate_text="exchange to date" />,
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
        padding: 6.4rem 9.6rem;
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
        padding: 24px 24px 24px;
        max-width: 328px;

        :first-child {
            margin: 0 0 24px 0;
        }
    }
    @media ${device.mobileL} {
        width: 30.4rem;
        height: 18.4rem;
    }
`
const StyledHeader = styled(Header)`
    text-align: center;
    font-size: 48px;

    @media ${device.mobileL} {
        font-size: 36px;
        margin-top: 1.2rem;
    }
`
const StyledText = styled(Text)`
    font-size: 24px;
    text-align: center;

    @media ${device.mobileL} {
        font-size: 20px;
        line-height: 24px;
    }
`

const StyledLinkButton = styled(LinkButton)`
    padding: 1.4rem 1.6rem;
    font-size: 14px;
    border: unset;
    max-width: 125px;
    width: 100%;
    margin: 80px auto 0 auto;

    @media ${device.tablet} {
        margin-top: 40px;
    }
`

const Numbers = () => {
    return (
        <Section>
            <Flex mb="4rem" tablet_direction="column" tablet_ai="center" tablet={{ m: '0' }}>
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
