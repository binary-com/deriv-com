import React, { useMemo } from 'react'
import styled from 'styled-components'
import { TOtherMarketName, TOtherMarketsContent } from './types'
import { other_markets_data } from './data'
import OtherMarketsMobile from './components/other-markets-mobile'
import OtherMarketsCarousel from './components/other-markets-carousel'
import { useCountryRule } from 'components/hooks/use-country-rule'
import useVisibleContent from 'components/hooks/use-visible-content'
import useMediaQuery from 'components/hooks/use-media-query'
import device from 'themes/device'
import { Header } from 'components/elements'
import { SectionContainer } from 'components/containers'
import { Localize } from 'components/localization'

const StyledHeader = styled(Header)`
    padding-left: 120px;
    margin-bottom: 4rem;
    @media (min-width: 1440px) {
        padding: auto;
        text-align: center;
    }
    @media ${device.laptopM} {
        padding-left: 0;
        margin: auto;
        text-align: center;
        margin-bottom: 2rem;
    }
`

export type TOtherMarketsCarouselProps = {
    except: TOtherMarketName
}

const NewOtherMarkets = ({ except }: TOtherMarketsCarouselProps) => {
    const rules = useCountryRule()
    const is_large_tablet = useMediaQuery(device.tabletL)

    const visible_data = useVisibleContent<TOtherMarketsContent>({
        config: rules,
        content: other_markets_data,
    })

    const filtered_data = useMemo(() => {
        return visible_data?.filter((item) => item.data.name !== except)
    }, [except, visible_data])

    return (
        <SectionContainer padding="100px 0" background="#f9fbff">
            <StyledHeader as="h3" type="section-title" align="left">
                <Localize translate_text={'_t_Other markets you might be interested in_t_'} />
            </StyledHeader>
            {is_large_tablet ? (
                <OtherMarketsMobile items={filtered_data} />
            ) : (
                <OtherMarketsCarousel items={filtered_data} />
            )}
        </SectionContainer>
    )
}

export default NewOtherMarkets
