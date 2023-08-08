import React from 'react'
import styled from 'styled-components'
import { Localize } from 'components/localization'
import { SectionContainer } from 'components/containers'
import { Header } from 'components/elements/typography'
import device from 'themes/device'
import flex from 'components/containers/flex'
import { TString } from 'types/generics'

type SellingPointsType = {
    title: string | TString
    subtitle: TString
}

const StyledSectionContainer = styled(SectionContainer)`
    padding-top: 40px;

    @media ${device.tabletL} {
        padding: 0 0 40px;
    }
`
const NumberStyledContainer = styled(flex)`
    direction: ltr;
    padding: 40px 0 0;
    width: 100%;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
    color: var(--color-black-9);

    @media ${device.tabletL} {
        padding: 15px 0 0;

        flex-direction: column;
    }
`
const NumberWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 32.8rem;
`
const StyledTitle = styled(Header)`
    font-size: 48px;
    color: var(--color-black-9);

    @media ${device.tabletL} {
        padding-top: 24px;
        font-size: 24px;
    }
`
const StyledSubTitle = styled(Header)`
    padding-top: 8px;
    font-weight: normal;
    color: var(--color-black-9);

    @media ${device.tabletL} {
        font-size: 18px;
    }
`

const selling_points: SellingPointsType[] = [
    {
        title: '100+',
        subtitle: '_t_tradable assets_t_',
    },
    {
        title: '_t_Zero_t_',
        subtitle: '_t_commission_t_',
    },
    {
        title: '24/7',
        subtitle: '_t_trading_t_',
    },
]

const SellingPoints = () => {
    return (
        <StyledSectionContainer>
            <NumberStyledContainer>
                {selling_points.map(({ subtitle, title }) => (
                    <NumberWrapper key={title}>
                        <StyledTitle as="h3" type="heading-3" align="center">
                            {title.includes('_t_') ? (
                                <Localize translate_text={title as TString} />
                            ) : (
                                title
                            )}
                        </StyledTitle>
                        <StyledSubTitle align="center" as="span" type="paragraph-1">
                            <Localize translate_text={subtitle} />
                        </StyledSubTitle>
                    </NumberWrapper>
                ))}
            </NumberStyledContainer>
        </StyledSectionContainer>
    )
}

export default SellingPoints
