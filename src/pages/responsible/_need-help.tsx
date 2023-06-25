import React from 'react'
import styled from 'styled-components'
import { Header, Text } from 'components/elements'
import { Container, SectionContainer, Flex, Desktop, Mobile } from 'components/containers'
import device from 'themes/device'
import { Localize, localize } from 'components/localization'
import Underage from 'images/svg/responsible/underage.svg'
import UnderageMobile from 'images/svg/responsible/underage-mobile.svg'
import Filtering from 'images/svg/responsible/filtering-controls.svg'
import FilteringMobile from 'images/svg/responsible/filtering-controls-mobile.svg'
import { TString } from 'types/generics'

type HelpContentType = {
    header: TString
    text: TString
    icon: React.ReactElement
    icon_mobile: React.ReactElement
}

const help_content: HelpContentType[] = [
    {
        header: '_t_Underage gambling_t_',
        text: '_t_Clients must be aware that underage gambling is an offence. Deriv.com does not support gambling by those who are underaged. If a client, upon age verification, is proven to be underaged, they will be deprived of any winnings and only deposits made shall be refunded._t_',
        icon: <img src={Underage} alt={localize('_t_underage_t_')} width="160" height="64" />,
        icon_mobile: (
            <img src={UnderageMobile} alt={localize('_t_underage_t_')} width="32" height="32" />
        ),
    },
    {
        header: '_t_Filtering controls_t_',
        text: "_t_Our site can be filtered using a number of filtering systems available on the market which could be used to restrict one's access to our site._t_",
        icon: (
            <img
                src={Filtering}
                alt={localize('_t_filtering controls_t_')}
                width="160"
                height="64"
            />
        ),
        icon_mobile: (
            <img
                src={FilteringMobile}
                alt={localize('_t_filtering controls_t_')}
                width="32"
                height="32"
            />
        ),
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
const LogoWrapper = styled.div`
    width: auto;
`

const NeedHelp = () => {
    return (
        <SectionContainer>
            <Container direction="column">
                <Header mb="2rem" align="center" as="h2" type="page-title">
                    <Localize translate_text="_t_Need more help?_t_" />
                </Header>
            </Container>
            <StyledFlex wrap="wrap">
                {help_content.map(({ header, icon, icon_mobile, text }) => {
                    return (
                        <ClientCard key={text}>
                            <Flex pb="0.8rem" ai="flex-end">
                                <Header
                                    as="h4"
                                    type="sub-section-title"
                                    style={{ lineHeight: 1.5 }}
                                >
                                    <Localize translate_text={header} />
                                </Header>
                                <LogoWrapper>
                                    <Desktop>{icon}</Desktop>
                                    <Mobile>{icon_mobile}</Mobile>
                                </LogoWrapper>
                            </Flex>

                            <Text pb="1rem">
                                <Localize translate_text={text} />
                            </Text>
                        </ClientCard>
                    )
                })}
            </StyledFlex>
        </SectionContainer>
    )
}

export default NeedHelp
