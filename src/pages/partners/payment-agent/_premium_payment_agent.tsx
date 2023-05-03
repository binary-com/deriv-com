import React from 'react'
import styled from 'styled-components'
import { TString } from 'types/generics'
import { Container, SectionContainer, Desktop, Mobile, Flex } from 'components/containers'
import { Localize } from 'components/localization'
import { Header, LocalizedLinkText } from 'components/elements'
import device from 'themes/device'
import useScreenSize from 'components/hooks/use-screen-size'
import Botswana from 'images/svg/flags/botswana.svg'
import Brazil from 'images/svg/flags/brazil.svg'
import India from 'images/svg/flags/india.svg'
import Kenya from 'images/svg/flags/kenya.svg'
import Nigeria from 'images/svg/flags/nigeria.svg'
import SouthAfrica from 'images/svg/flags/south-africa.svg'
import SriLanka from 'images/svg/flags/sri-lanka.svg'
import Tanzania from 'images/svg/flags/tanzania.svg'
import Zimbabwe from 'images/svg/flags/zimbabwe.svg'

interface CountryProps {
    name: TString
    flag: string
}

const countries: CountryProps[] = [
    { name: '_t_Brazil_t_', flag: Brazil },
    { name: '_t_Botswana_t_', flag: Botswana },
    { name: '_t_India_t_', flag: India },
    { name: '_t_Kenya_t_', flag: Kenya },
    { name: '_t_Nigeria_t_', flag: Nigeria },
    { name: '_t_Sri Lanka_t_', flag: SriLanka },
    { name: '_t_South Africa_t_', flag: SouthAfrica },
    { name: '_t_Tanzania_t_', flag: Tanzania },
    { name: '_t_Zimbabwe_t_', flag: Zimbabwe },
]

const WrapContainer = styled(Container)`
    flex-wrap: wrap;

    @media (min-width: 768px) {
        gap: 3rem;
    }
    @media (max-width: 1310px) {
        ${Flex} {
            margin-right: 0;
            margin-bottom: 2.4rem;
        }
    }
`

const Wrapper = styled.div`
    width: 100%;
    max-width: 48.6rem;
`

const PremiumContainer = styled(SectionContainer)`
    @media ${device.tabletL} {
        padding: 40px 0 36px;
    }
`

const ArrayWrapper = styled.div`
    display: grid;
    gap: 4rem;
    width: 54rem;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);

    .country {
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    @media ${device.tablet} {
        width: 296px;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(5, 1fr);
    }
`

const PremiumPaymentAgent = () => {
    const { is_mobile_or_tablet } = useScreenSize()

    return (
        <PremiumContainer>
            <WrapContainer justify="center">
                <Flex direction="column" mr="10rem" max_width="48.6rem">
                    <Header as="h3" type="heading-2" max_width="38rem" mb="1.6rem">
                        <Localize translate_text="_t_Premium payment agent_t_" />
                    </Header>
                    <Header as="h4" type="paragraph-1" weight="normal">
                        <Localize translate_text="_t_Payment agents with good transaction volumes are selected to join an exclusive network of partners who can transfer funds with each other via their Deriv accounts. If an agent needs help with cash flow, others may pitch in to help. Only a limited number of payment agents are selected per country._t_" />
                    </Header>
                    <Header as="h4" type="paragraph-1" weight="normal" mt="0.8rem">
                        <Localize
                            translate_text="_t_For more info, contact your country manager_t_"
                            components={[
                                <LocalizedLinkText
                                    key={0}
                                    size={is_mobile_or_tablet ? '14px' : '16px'}
                                    color="red"
                                    target="_blank"
                                    href="/tnc/business-partners-payment-agents.pdf"
                                    rel="noopener noreferrer"
                                />,
                            ]}
                        />
                    </Header>
                </Flex>
                <Wrapper>
                    <Header as="h4" type="paragraph-1" weight="bold" mb="2.5rem">
                        <Localize translate_text="_t_Only available in these countries:_t_" />
                    </Header>
                    <Flex direction="column">
                        <ArrayWrapper>
                            {countries.map(({ name, flag }) => (
                                <div key={name} className="country">
                                    <img src={flag} alt={`${name} flag`} />
                                    <Header as="h4" type="subtitle-2" weight="normal">
                                        <Localize translate_text={name} />
                                    </Header>
                                </div>
                            ))}
                        </ArrayWrapper>
                    </Flex>
                </Wrapper>
            </WrapContainer>
        </PremiumContainer>
    )
}

export default PremiumPaymentAgent
