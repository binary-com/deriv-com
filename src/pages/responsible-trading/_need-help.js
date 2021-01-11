import React from 'react'
import styled from 'styled-components'
import { Header, Text, LocalizedLinkText } from 'components/elements'
import { Container, SectionContainer, Flex, Show } from 'components/containers'
import device from 'themes/device'
import { Localize, localize } from 'components/localization'
import GamStop from 'images/svg/gamstop.svg'
import BeGambleAware from 'images/svg/begambleaware.svg'
import Underage from 'images/svg/underage.svg'
import UnderageMobile from 'images/svg/underage-mobile.svg'
import Filtering from 'images/svg/filtering-controls.svg'
import FilteringMobile from 'images/svg/filtering-controls-mobile.svg'

const help_content = [
    {
        header: <Localize translate_text="GAMSTOP" />,
        text: (
            <Text width="99%" pb="1rem">
                <Localize translate_text="If you are considering self-exclusion, you may wish to register with GAMSTOP." />
            </Text>
        ),
        text2: (
            <Localize translate_text="GAMSTOP is a free service that enables you to self-exclude from all online gambling companies licensed in Great Britain." />
        ),
        icon: <img src={GamStop} alt="gamstop" width="160" height="64" />,
        icon_mobile: <img src={GamStop} alt="gamstop" width="113" height="34" />,
        link: (
            <LocalizedLinkText
                mt="1rem"
                to="https://www.gamstop.co.uk/"
                color="red"
                external="true"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Localize translate_text="Click here to find out more" />
            </LocalizedLinkText>
        ),
    },
    {
        header: <Localize translate_text="BeGambleAware" />,
        text: (
            <Text pb="1rem">
                <Localize translate_text="Deriv.com supports BeGambleAware, the leading charity in Britain committed to minimising gambling-related harm. BeGambleAware offers a helpline for those seeking advice about their gambling. It also has resources to help assess potential gambling problems, and an online gambling calculator to see how much you can really spend." />
            </Text>
        ),
        icon: <img src={BeGambleAware} alt="begambleaware" width="160" height="64" />,
        icon_mobile: <img src={BeGambleAware} alt="begambleaware" width="80" height="21" />,
        link: (
            <LocalizedLinkText
                mt="1rem"
                to="https://www.begambleaware.org/"
                color="red"
                external="true"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Localize translate_text="Click here to find out more" />
            </LocalizedLinkText>
        ),
    },
    {
        header: <Localize translate_text="Underage gambling" />,
        text: (
            <Text pb="1rem">
                <Localize translate_text="Clients must be aware that underage gambling is an offence. Deriv.com does not support gambling by those who are underaged. If a client, upon age verification, is proven to be underaged, they will be deprived of any winnings and only deposits made shall be refunded." />
            </Text>
        ),
        icon: <img src={Underage} alt="underage" width="160" height="64" />,
        icon_mobile: <img src={UnderageMobile} alt="underage" width="32" height="32" />,
    },

    {
        header: <Localize translate_text="Filtering controls" />,
        text: (
            <Text pb="1rem">
                <Localize translate_text="Our site can be filtered using a number of filtering systems available on the market which could be used to restrict one's access to our site." />
            </Text>
        ),
        icon: <img src={Filtering} alt="filtering controls" width="160" height="64" />,
        icon_mobile: <img src={FilteringMobile} alt="filtering controls" width="32" height="32" />,
    },
]

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
    padding: 2rem 2.4rem;
    position: relative;

    ${Flex} {
        height: unset;
    }

    @media ${device.tabletL} {
        width: 85%;
        max-width: 55rem;
        margin-top: 0;
        padding: 3rem;

        ${Flex} {
            padding-bottom: 2rem;
            align-items: center;
        }
    }
    @media ${device.mobileL} {
        ${Header} {
            font-size: 18px;
        }
    }
`

const LinkText = styled(Text)`
    @media ${device.tabletL} {
        display: flex;
        justify-content: center;
    }
`

const LogoWrapper = styled.div`
    width: auto;
`

const NeedHelp = () => {
    return (
        <SectionContainer>
            <Container direction="column">
                <Header mb="2rem" align="center" as="h2" type="page-title">
                    {localize('Need more help?')}
                </Header>
            </Container>
            <StyledFlex wrap="wrap">
                {help_content.map((item, idx) => {
                    return (
                        <ClientCard key={idx}>
                            <Flex pb="0.8rem" ai="flex-end">
                                <Header
                                    as="h4"
                                    type="sub-section-title"
                                    style={{ lineHeight: 1.5 }}
                                >
                                    {item.header}
                                </Header>
                                <LogoWrapper>
                                    <Show.Desktop>{item.icon}</Show.Desktop>
                                    <Show.Mobile>{item.icon_mobile}</Show.Mobile>
                                </LogoWrapper>
                            </Flex>
                            {item.text}
                            <Text>{item.text2}</Text>
                            <LinkText
                                tabletL={{ ml: 'auto', mr: 'auto' }}
                                pt={idx == 0 ? '4.5rem' : ''}
                            >
                                {item.link}
                            </LinkText>
                        </ClientCard>
                    )
                })}
            </StyledFlex>
        </SectionContainer>
    )
}

export default NeedHelp
