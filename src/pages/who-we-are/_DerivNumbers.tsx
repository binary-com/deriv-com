import React from 'react'
import styled from 'styled-components'
import { TDerivNumbers } from './_types'
import { Localize } from 'components/localization'
import { CssGrid, Flex, SectionContainer } from 'components/containers'
import { Header } from 'components/elements'
import device from 'themes/device'

const StyledSection = styled(SectionContainer)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 180px 16px 200px;
    background-color: var(--color-white);

    @media ${device.tablet} {
        padding: 30px 16px 40px;
    }
`
const StyledFlex = styled(Flex)`
    margin: 0 2rem;
    max-width: 1200px;
    justify-content: space-around;

    @media ${device.laptop} {
        flex-direction: column;
        align-items: center;
    }
`
const TitleSection = styled(Flex)`
    max-width: 46rem;

    @media ${device.laptop} {
        margin-bottom: 8rem;
        max-width: 90rem;
        grid-column-gap: 4rem;
    }
    @media ${device.laptop} {
        margin-bottom: 24px;
    }
`
const NumberSection = styled(CssGrid)`
    max-width: 588px;

    @media ${device.tabletL} {
        grid-column-gap: 4rem;
    }
    @media ${device.tabletS} {
        grid-template-columns: minmax(auto, 484px);
        grid-row-gap: 24px;
        grid-template-rows: 1fr 1fr 1fr 1fr;
        justify-content: start;
    }
`
const TitleHeader = styled(Header)`
    font-size: 48px;
    line-height: 60px;

    @media ${device.laptop} {
        text-align: center;
    }

    @media ${device.tabletS} {
        text-align: start;
    }
    @media ${device.mobileL} {
        width: auto;
        text-align: start;
    }
`
const StyledHeader = styled(Header)`
    @media ${device.laptop} {
        text-align: center;
    }

    @media ${device.tabletS} {
        text-align: start;
    }
`
const NumberHeader = styled(Header)`
    line-height: 6rem;
    text-align: start;

    @media ${device.mobileL} {
        margin-bottom: 8px;
    }
`
const NumberText = styled(Header)`
    font-weight: normal;
    text-align: start;
`

const DerivNumbers = ({ deriv_in_numbers }: TDerivNumbers) => {
    return (
        <StyledSection>
            <StyledFlex>
                <TitleSection fd="column">
                    <TitleHeader as="h6" color="black-2" align="start" type="unset">
                        <Localize translate_text={deriv_in_numbers?.header} />
                    </TitleHeader>
                    <StyledHeader as="h6" size="24px" align="start" weight="400" type="unset">
                        <Localize translate_text={deriv_in_numbers?.sub_header} />
                    </StyledHeader>
                </TitleSection>
                <NumberSection
                    columns="1fr 1fr"
                    rows="1fr 1fr"
                    column_gap="40px"
                    row_gap="4rem"
                    height="unset"
                >
                    {deriv_in_numbers?.numbers.map(({ number, description }) => {
                        return (
                            <Flex key={description} fd="column" height="unset">
                                <NumberHeader as="div" size="48px" type="unset">
                                    {number}
                                </NumberHeader>
                                <NumberText as="div" size="20px" align="start">
                                    <Localize translate_text={description} />
                                </NumberText>
                            </Flex>
                        )
                    })}
                </NumberSection>
            </StyledFlex>
        </StyledSection>
    )
}

export default DerivNumbers
