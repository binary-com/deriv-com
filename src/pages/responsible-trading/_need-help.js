import React from 'react'
import styled from 'styled-components'
import { Header, Text, LocalizedLinkText } from 'components/elements'
import { Container, SectionContainer, Flex } from 'components/containers'
import device from 'themes/device'
import { Localize, localize } from 'components/localization'
import GamStop from 'images/svg/gamstop.svg'
import BeGambleAware from 'images/svg/begambleaware.svg'
import Underage from 'images/svg/underage.svg'
import Filtering from 'images/svg/filtering-controls.svg'

const help_content = [
    {
        header: <Localize translate_text="GAMSTOP" />,
        text: (
            <Localize translate_text="If you are considering self-exclusion, you may wish to register with GAMSTOP." />
        ),
        text2: (
            <Localize translate_text="GAMSTOP is a free service that enables you to self-exclude from all online gambling companies licensed in Great Britain." />
        ),
        icon: <GamStop />,
        link: (
            <Text pt="4.5rem">
                <LocalizedLinkText mt="1rem" to="https://www.gamstop.co.uk/" color="red">
                    {localize('Click here to find out more')}
                </LocalizedLinkText>
            </Text>
        ),
    },
    {
        header: <Localize translate_text="BeGambleAware" />,
        text: (
            <Text mt="2.5rem">
                <Localize translate_text="Deriv.com supports BeGambleAware, the leading charity in Britain committed to minimising gambling-related harm. BeGambleAware offers a helpline for those seeking advice about their gambling. It also has resources to help assess potential gambling problems, and an online gambling calculator to see how much you can really spend." />
            </Text>
        ),
        icon: <BeGambleAware />,
        link: (
            <LocalizedLinkText mt="1rem" to="https://www.begambleaware.org/" color="red">
                {localize('Click here to find out more')}
            </LocalizedLinkText>
        ),
    },
    {
        header: <Localize translate_text="Underage gambling" />,
        text: (
            <Localize translate_text="Clients must be aware that underage gambling is an offence. Deriv.com does not support gambling by those who are underaged. If a client, upon age verification, is proven to be underaged, they will be deprived of any winnings and only deposits made shall be refunded." />
        ),
        icon: <Underage />,
    },

    {
        header: <Localize translate_text="Filtering controls" />,
        text: (
            <Localize translate_text="Our site can be filtered using a number of filtering systems available on the market which could be used to restrict one's access to our site." />
        ),
        icon: <Filtering />,
    },
]

const StyledSection = styled(SectionContainer)`
    position: relative;

    ${Container} {
        ${Header} {
            z-index: 1;
        }
    }
    @media ${device.tabletL} {
        padding: 0;
    }
`
const StyledFlex = styled(Flex)`
    margin: auto;
    max-width: 110rem;

    @media ${device.tabletL} {
        flex-direction: column;
        align-items: center;

        article {
            margin: 16px auto 0;
        }
        article:last-child {
            margin-bottom: 32px;
        }
    }
`
const ClientCard = styled.article`
    margin: 2rem;
    background-color: var(--color-white);
    border-radius: 4px;
    box-shadow: 0 4px 8px 0 rgba(14, 14, 14, 0.1);
    width: 49rem;
    padding: 3.2rem 2.4rem;
    height: 100%;
    min-height: 26.5rem;
    position: relative;

    @media ${device.tabletL} {
        width: 100%;
        max-width: 55rem;
        margin-top: 0;
        padding: 3rem;

        ${Text} {
            font-size: 2rem;
        }
        ${Header} {
            font-size: 3rem;
        }
        ${Flex} {
            padding-bottom: 2rem;
        }
    }
`

const StyledHeader = styled(Header)`
    @media ${device.tabletL} {
        font-size: 4rem;
    }
`

const NeedHelp = () => {
    return (
        <StyledSection background="white">
            <Container direction="column">
                <StyledHeader align="center" size="var(--text-size-header-1)" as="h2">
                    {localize('Need help?')}
                </StyledHeader>
            </Container>
            <StyledFlex wrap="wrap">
                {help_content.map((item, idx) => {
                    return (
                        <ClientCard key={idx}>
                            <Flex pb="0.8rem" ai="center">
                                <Header as="h4">{item.header}</Header>
                                {item.icon}
                            </Flex>
                            <Text pb="1rem">{item.text}</Text>
                            <Text>{item.text2}</Text>
                            <Text>{item.link}</Text>
                        </ClientCard>
                    )
                })}
            </StyledFlex>
        </StyledSection>
    )
}

export default NeedHelp
