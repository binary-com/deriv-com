import React from 'react'
import styled, { css } from 'styled-components'
import { Header, Text, CardStyle } from 'components/elements'
import { localize, LocalizedLink } from 'components/localization'
import { Container, SectionContainer, Flex } from 'components/containers'
// Icons
import { ReactComponent as PartnerAffiliate } from 'images/svg/partners/partner-affiliate.svg'
import { ReactComponent as PartnerPaymentAgent } from 'images/svg/partners/partner-payment-agent.svg'
import { ReactComponent as DeveloperProgramme } from 'images/svg/partners/developer-programme.svg'
import { useCountryRule } from 'components/hooks/use-country-rule'

type ClientCardProps = { first?: boolean; second?: boolean; third?: boolean }

const ClientCard = styled(LocalizedLink)<ClientCardProps>`
    ${CardStyle}
    text-decoration: none;
    max-width: 38.4rem;
    padding: 3.2rem;
    min-height: 23.7rem;
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
                    svg > g > path:first-child {
                        fill: var(--color-red);
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
        }}
    }
    @media (max-width: 633px) {
        margin: 1.2rem 0;
    }
`
const PartnershipOpportunities = () => {
    const { is_row } = useCountryRule()
    return (
        <SectionContainer>
            <Container direction="column">
                <Header align="center" size="var(--text-size-header-1)" as="h2" mb="4rem">
                    {localize('Partnership opportunities')}
                </Header>
            </Container>
            <Flex wrap="wrap">
                <ClientCard to="/partners/affiliate-ib/" first>
                    <Flex ai="center" height="auto" mb="0.8rem">
                        <Header as="h4" size="var(--text-size-sm)">
                            {localize('Affiliate and IB programmes')}
                        </Header>
                        <PartnerAffiliate />
                    </Flex>
                    <Text>
                        {localize(
                            'Enjoy the flexibility to choose from a variety of affiliate and introducing broker programmes. Earn 45% commission from promoting our trading platforms or enjoy turnover-based commissions.',
                        )}
                    </Text>
                </ClientCard>
                {is_row && (
                    <ClientCard to="/partners/payment-agent/" second>
                        <Flex ai="center" height="auto" mb="0.8rem">
                            <Header as="h4" size="var(--text-size-sm)">
                                {localize('Payment agent programme')}
                            </Header>
                            <PartnerPaymentAgent />
                        </Flex>
                        <Text>
                            {localize(
                                'Expand your client base by helping the traders who are looking for ways to fund their accounts through local bank wires and e-payment methods.',
                            )}
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
                        <Header as="h4" size="var(--text-size-sm)">
                            {localize('API')}
                        </Header>
                        <DeveloperProgramme />
                    </Flex>
                    <Text>
                        {localize(
                            'Launch your trading app powered by our APIs. Get up to 5% in markup earnings from every trade your clients make on your app.',
                        )}
                    </Text>
                </ClientCard>
            </Flex>
        </SectionContainer>
    )
}
export default PartnershipOpportunities
