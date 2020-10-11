import React from 'react'
import styled, { css } from 'styled-components'
import { Header, Text, CardStyle } from 'components/elements'
import { localize, LocalizedLink } from 'components/localization'
import { Container, SectionContainer, Flex } from 'components/containers'
// import device from 'themes/device'
// Icons
import PartnerAffiliate from 'images/svg/partner-affiliate.svg'
import PartnerPaymentAgent from 'images/svg/partner-payment-agent.svg'

const ClientCard = styled(LocalizedLink)`
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
        ${(props) =>
            props.first
                ? css`
                      svg > g > path:first-child {
                          fill: var(--color-red);
                      }
                  `
                : css`
                      svg > g > g > path {
                          fill: var(--color-red);
                      }
                      svg > g > g > g > path:last-child {
                          fill: var(--color-red);
                      }
                  `}
    }
    @media (max-width: 633px) {
        margin: 1.2rem 0;
    }
`

const PartnershipOpportunities = () => (
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
            <ClientCard to="/partners/payment-agent/">
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
            {/* TODO: add this when developer page is ready */}
            {/* <ClientCard>
                <Flex ai="center" height="auto" mb="0.8rem">
                    <Header as="h4" size="var(--text-size-sm)">
                        {localize('Developer programme')}
                    </Header>
                    <WithdrawIcon />
                </Flex>
                <Text>
                    {localize(
                        'Develop your own app or interface on top of our trading infrastructure. Earn affiliate commission from new signups, or mark up the price of the contracts traded in your app.',
                    )}
                </Text>
            </ClientCard> */}
        </Flex>
    </SectionContainer>
)

export default PartnershipOpportunities
