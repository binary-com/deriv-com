import React, { ReactElement } from 'react'
import styled from 'styled-components'
import { Localize } from 'components/localization'
import { SectionContainer } from 'components/containers'
import { Header } from 'components/elements/typography'
import device from 'themes/device'
import flex from 'components/containers/flex'

type SellingPointsType = {
    id: number
    title: string | ReactElement
    subtitle: ReactElement
}

const StyledSectionContainer = styled(SectionContainer)`
    padding-top: 40px;

    @media ${device.tabletL} {
        padding-top: 0;
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
        flex-direction: column;
        padding: 16px 0 40px;
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
    font-size: 16px;
    color: var(--color-black-9);
    font-family: Ubuntu, sans-serif;

    @media ${device.tabletL} {
        font-size: 18px;
    }
`

const selling_points: SellingPointsType[] = [
    {
        id: 1,
        title: '100+',
        subtitle: <Localize translate_text="tradable assets" />,
    },
    {
        id: 2,
        title: '24/7',
        subtitle: <Localize translate_text="trading" />,
    },
    {
        id: 3,
        title: <Localize translate_text="Zero" />,
        subtitle: <Localize translate_text="commission" />,
    },
]

const SellingPoints = () => {
    return (
        <StyledSectionContainer>
            <NumberStyledContainer>
                {selling_points.map((item) => (
                    <NumberWrapper key={item.id}>
                        <StyledTitle as="h3" type="heading-3" align="center">
                            {item.title}
                        </StyledTitle>
                        <StyledSubTitle align="center" weight="100">
                            {item.subtitle}
                        </StyledSubTitle>
                    </NumberWrapper>
                ))}
            </NumberStyledContainer>
        </StyledSectionContainer>
    )
}

export default SellingPoints
