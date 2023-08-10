import React from 'react'
import styled, { css } from 'styled-components'
import { Header, Text, CardStyle } from 'components/elements'
import { Localize, LocalizedLink } from 'components/localization'
import { Container, SectionContainer, Flex } from 'components/containers'
// Icons
import { ReactComponent as PartnerAffiliate } from 'images/svg/partners/partner-affiliate.svg'
import { ReactComponent as PartnerPaymentAgent } from 'images/svg/partners/partner-payment-agent.svg'
import { ReactComponent as DeveloperProgramme } from 'images/svg/partners/developer-programme.svg'
import { ReactComponent as PartnerDerivPrime } from 'images/svg/partners/deriv-prime.svg'
import useRegion from 'components/hooks/use-region'

type ClientCardProps = { first?: boolean; second?: boolean; third?: boolean; fourth?: boolean }

const StyledHeader = styled(Header)`
    font-family: 'IBM Plex Sans', sans-serif !important;
`
const ClientCard = styled(LocalizedLink)<ClientCardProps>`
    ${CardStyle}
    text-decoration: none;
    max-width: 28.2rem;
    padding: 3.2rem;
    min-height: 25.2rem;
    position: relative;
    overflow: hidden;
    transition: transform 0.3s;
    margin: 0 1.2rem;
    cursor: pointer;

    &:first-child {
        margin-left: 0;
    }
    &:last-child {
        margin-right: 0;
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
const PartnershipOpportunities = () => {
    const { is_row } = useRegion()
    return (
        <SectionContainer>
            <Container direction="column">
                <Header align="center" size="var(--text-size-header-1)" as="h2" mb="4rem">
                    <Localize translate_text="_t_Partnership opportunities_t_" />
                </Header>
            </Container>
            <Flex wrap="wrap">
                <ClientCard to="/partners/deriv-prime/" first>
                    <Flex ai="center" height="auto" mb="0.8rem">
                        <StyledHeader as="h4" size="var(--text-size-m)">
                            <Localize translate_text="_t_Deriv Prime_t_" />
                        </StyledHeader>
                        <PartnerDerivPrime />
                    </Flex>
                    <Text>
                        <Localize translate_text="_t_Specialised institutional and prime brokerage solution for the world's most popular financial assets, has zero set-up costs, and is easy to integrate._t_" />
                    </Text>
                </ClientCard>
                <ClientCard to="/partners/affiliate-ib/" fourth>
                    <Flex ai="center" height="auto" mb="0.8rem">
                        <StyledHeader as="h4" size="var(--text-size-m)">
                            <Localize translate_text="_t_Affiliate and IBs_t_" />
                        </StyledHeader>
                        <PartnerAffiliate />
                    </Flex>
                    <Text>
                        <Localize translate_text="_t_For marketers, influencers and introducing brokers to monetise their network. Earn competitive commissions and get access to high-quality promotional materials._t_" />
                    </Text>
                </ClientCard>
                {is_row && (
                    <ClientCard to="/partners/payment-agent/" second>
                        <Flex ai="center" height="auto" mb="0.8rem">
                            <StyledHeader as="h4" size="var(--text-size-m)">
                                <Localize translate_text="_t_Payment agents_t_" />
                            </StyledHeader>
                            <PartnerPaymentAgent />
                        </Flex>
                        <Text>
                            <Localize translate_text="_t_Expand your client base by helping traders fund their accounts through local bank wires and e-payments. Facilitate and earn from every transaction._t_" />
                        </Text>
                    </ClientCard>
                )}
                <ClientCard
                    to=""
                    type="api"
                    target="_blank"
                    external
                    rel="noopener noreferrer"
                    third
                >
                    <Flex ai="center" height="auto" mb="0.8rem">
                        <StyledHeader as="h4" size="var(--text-size-m)">
                            <Localize translate_text="_t_API_t_" />
                        </StyledHeader>
                        <DeveloperProgramme />
                    </Flex>
                    <Text>
                        <Localize translate_text="_t_Leverage Deriv’s technology to launch your own trading app. Deliver an enhanced trading experience to your clients and earn from every trade executed on your app._t_" />
                    </Text>
                </ClientCard>
            </Flex>
        </SectionContainer>
    )
}
export default PartnershipOpportunities
