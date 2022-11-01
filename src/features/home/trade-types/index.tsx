import React from 'react'
import styled from 'styled-components'
import { trade_types } from './data'
import { TTradeTypeSmartContent } from './types'
import TradeTypeCard from './components/trade-type.card'
import { SectionContainer } from 'components/containers'
import device from 'themes/device'
import { Header } from 'components/elements'
import { Localize } from 'components/localization'
import { useCountryRule } from 'components/hooks/use-country-rule'
import useVisibleContent from 'components/hooks/use-visible-content'

const StyledSection = styled(SectionContainer)`
    max-width: 100%;
    min-height: 700px;
    padding: unset;
    @media ${device.tablet} {
        padding: 40px 20px 80px;
    }
`

const CardsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 28px;
    @media ${device.laptop} {
        gap: 48px;
    }

    justify-content: center;
    align-items: flex-start;
`

const TradeTypes = () => {
    const rules = useCountryRule()

    const visible_data = useVisibleContent<TTradeTypeSmartContent>({
        config: rules,
        content: trade_types,
    })

    return (
        <StyledSection>
            <Header as="h2" type="heading-2" align="center">
                <Localize translate_text={'_t_Trade types_t_'} />
            </Header>
            <Header
                type="subtitle-1"
                weight="normal"
                mt="8px"
                align="center"
                mb="40px"
                tablet={{ mb: '16px' }}
            >
                <Localize
                    translate_text={
                        '_t_Trade the way you want with {{trade_no}} flexible trade types._t_'
                    }
                    values={{ trade_no: rules.is_row ? '3' : '2' }}
                />
            </Header>
            <CardsContainer>
                {visible_data?.map((item) => (
                    <TradeTypeCard key={item.id} item={item.data} />
                ))}
            </CardsContainer>
        </StyledSection>
    )
}

export default TradeTypes
