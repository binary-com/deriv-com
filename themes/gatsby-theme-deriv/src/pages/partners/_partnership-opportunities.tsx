import React from 'react'
import styled, { css } from 'styled-components'
import { Header, Text, CardStyle } from 'components/elements'
import { Localize, LocalizedLink } from 'components/localization'
import { Container, SectionContainer, Flex } from 'components/containers'
import { TString } from 'types/generics'
// Icons
import { ReactComponent as PartnerAffiliate } from 'images/svg/partners/partner-affiliate.svg'
import { ReactComponent as PartnerPaymentAgent } from 'images/svg/partners/partner-payment-agent.svg'
import { ReactComponent as DeveloperProgramme } from 'images/svg/partners/developer-programme.svg'
import { ReactComponent as PartnerDerivPrime } from 'images/svg/partners/deriv-prime.svg'
import device from 'themes/device'
import useBuildVariant from 'features/hooks/use-build-variant'

type ClientCardProps = {
    first?: boolean
    second?: boolean
    third?: boolean
    fourth?: boolean
    is_row?: boolean
}

const StyledHeader = styled(Header)`
    font-family: 'IBM Plex Sans', sans-serif !important;
    font-size: var(--text-size-m);
    @media ${device.mobileM} {
        font-size: var(--text-size-sm);
    }
`
const ClientCardWrapper = styled(Flex)`
    flex-wrap: wrap;
    gap: 3rem;
    @media ${device.tabletS} {
        gap: 0.8rem;
    }
`
const StyledMainHeader = styled(Header)`
    font-family: 'IBM Plex Sans', sans-serif !important;
    font-size: var(--text-size-header-1);
    @media ${device.tabletS} {
        font-size: var(--text-size-header-2);
    }
`
const StyledText = styled(Text)`
    font-size: 16px;
    @media ${device.tabletS} {
        font-size: 14px;
    }
`
const ClientCard = styled(LocalizedLink)<ClientCardProps>`
    ${CardStyle}
    text-decoration: none;
    max-width: ${(props) => (props.is_row ? '28.2rem' : '38.4rem')};
    padding: 3.2rem;
    min-height: 22rem;
    position: relative;
    overflow: hidden;
    transition: transform 0.3s;
    cursor: pointer;
    border-radius:0.8rem;
}
@media ${device.tabletS} {
    max-width:90%;
    min-height: 20rem;
}
    & svg {
        width: 24px;
        height: 24px;
    }
    &:hover {
        transform: translateY(-1.5rem);
        ${(props) => {
            if (props.first) {
                return css`
                    path {
                        stroke: var(--color-red);
                    }
                `
            }
            if (props.second) {
                return css`
                    svg > g > path:nth-child(2) {
                        fill: var(--color-red);
                    }
                    svg > g > path:nth-child(3) {
                        fill: var(--color-red);
                    }
                    svg > g > g > path:last-child {
                        fill: var(--color-red);
                    }
                `
            }
            if (props.third) {
                return css`
                    svg > g > g {
                        fill: var(--color-red);
                    }
                `
            }
            if (props.fourth) {
                return css`
                    svg > g > path:first-child {
                        fill: var(--color-red);
                    }
                `
            }
        }}
    }
    @media (max-width: 633px) {
        margin: 1.2rem 0;
    }
`
type contentType = {
    [T: string]: TString
}

const PartnershipOpportunities = () => {
    const { region } = useBuildVariant()
    const content_data: contentType = region === "eu"
        ? {
              partnership_title: '_t_Partnership opportunity_t_',
              affiliate_title: '_t_Affiliate programme_t_',
              affiliate_text:
                  "_t_Earn 100 USD when a referred client deposits 100 USD in their Deriv account, whether it's a one-time deposit or accumulated over time. It's simple, transparent, and rewarding!_t_",
          }
        : {
              partnership_title: '_t_Partnership opportunities_t_',
              affiliate_title: '_t_Affiliate and IBs_t_',
              affiliate_text:
                  '_t_For marketers, influencers and introducing brokers to monetise their network. Earn competitive commissions and get access to high-quality promotional materials._t_',
          }

    return (
        <SectionContainer padding="5rem 0">
            <Container direction="column">
                <StyledMainHeader align="center" as="h2" mb="4rem">
                    <Localize translate_text={content_data.partnership_title} />
                </StyledMainHeader>
            </Container>
            <ClientCardWrapper>
                <ClientCard to="/partners/deriv-prime/" first is_row={region === "row"}>
                    <Flex ai="center" height="auto" mb="0.8rem">
                        <StyledHeader as="h4">
                            <Localize translate_text="_t_Deriv Prime_t_" />
                        </StyledHeader>
                        <PartnerDerivPrime />
                    </Flex>
                    <StyledText>
                        <Localize translate_text="_t_Specialised institutional and prime brokerage solution for the world's most popular financial assets, has zero set-up costs, and is easy to integrate._t_" />
                    </StyledText>
                </ClientCard>
                <ClientCard to="/partners/affiliate-ib/" fourth is_row={region === "row"}>
                    <Flex ai="center" height="auto" mb="0.8rem">
                        <StyledHeader as="h4">
                            <Localize translate_text={content_data.affiliate_title} />
                        </StyledHeader>
                        <PartnerAffiliate />
                    </Flex>
                    <StyledText>
                        <Localize translate_text={content_data.affiliate_text} />
                    </StyledText>
                </ClientCard>
                {region === "row" && (
                    <ClientCard to="/partners/payment-agent/" second is_row={region === "row"}>
                        <Flex ai="center" height="auto" mb="0.8rem">
                            <StyledHeader as="h4">
                                <Localize translate_text="_t_Payment agents_t_" />
                            </StyledHeader>
                            <PartnerPaymentAgent />
                        </Flex>
                        <StyledText>
                            <Localize translate_text="_t_Expand your client base by helping traders fund their accounts through local bank wires and e-payments. Facilitate and earn from every transaction._t_" />
                        </StyledText>
                    </ClientCard>
                )}
                <ClientCard
                    to=""
                    type="api"
                    target="_blank"
                    external
                    rel="noopener noreferrer"
                    third
                    is_row={region === "row"}
                >
                    <Flex ai="center" height="auto" mb="0.8rem">
                        <StyledHeader as="h4">
                            <Localize translate_text="_t_API_t_" />
                        </StyledHeader>
                        <DeveloperProgramme />
                    </Flex>
                    <StyledText>
                        <Localize translate_text="_t_Leverage Deriv’s technology to launch your own trading app. Deliver an enhanced trading experience to your clients and earn from every trade executed on your app._t_" />
                    </StyledText>
                </ClientCard>
            </ClientCardWrapper>
        </SectionContainer>
    )
}
export default PartnershipOpportunities
