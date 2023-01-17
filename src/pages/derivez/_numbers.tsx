import React, { ReactElement } from 'react'
import styled from 'styled-components'
import { Localize } from 'components/localization'
import { Header, Text } from 'components/elements/typography'
import { SectionContainer, Container } from 'components/containers'
import device from 'themes/device'
import { TString } from 'types/generics'

type SellingPointsType = {
    title: string | ReactElement
    subtitle: ReactElement
}

const NumberWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 32.8rem;
`

const NumberStyledContainer = styled(Container)`
    direction: ltr;
    width: 100%;
    justify-content: space-around;

    @media ${device.tabletL} {
        flex-direction: column;
        padding: 16px 0 40px;
    }
`

const StyledTitle = styled(Header)`
    @media ${device.tabletL} {
        padding-top: 24px;
    }
`
const StyledSubTitle = styled(Text)`
    padding-top: 8px;
    font-size: 24px;

    @media ${device.tabletL} {
        font-size: 18px;
    }
`

const StyledSectionContainer = styled(SectionContainer)`
    border-bottom: solid 1px var(--color-grey-2);

    @media ${device.tabletL} {
        padding-top: 0;
    }
`

const tradable_assets_subtitle: TString = '_t_tradable assets_t_'
const financial_derived_assets_subtitle: TString = '_t_Financial and derived assets_t_'
const trading_subtitle: TString = '_t_trading_t_'
const tradable_assets_title: TString = '_t_100+_t_'
const financial_derived_assets_title: TString = '_t_All-in-one_t_'
const trading_title: TString = '_t_24/7_t_'

const selling_points: SellingPointsType[] = [
    {
        title: <Localize translate_text={tradable_assets_title} />,
        subtitle: <Localize translate_text={tradable_assets_subtitle} />,
    },
    {
        title: <Localize translate_text={financial_derived_assets_title} />,
        subtitle: <Localize translate_text={financial_derived_assets_subtitle} />,
    },
    {
        title: <Localize translate_text={trading_title} />,
        subtitle: <Localize translate_text={trading_subtitle} />,
    },
]

const Numbers = () => {
    return (
        <StyledSectionContainer>
            <NumberStyledContainer>
                {selling_points.map((item, index) => (
                    <NumberWrapper key={`${item.title}-${index}`}>
                        <StyledTitle as="h3" type="heading-3" align="center">
                            {item.title}
                        </StyledTitle>
                        <StyledSubTitle align="center">{item.subtitle}</StyledSubTitle>
                    </NumberWrapper>
                ))}
            </NumberStyledContainer>
        </StyledSectionContainer>
    )
}

export default Numbers
