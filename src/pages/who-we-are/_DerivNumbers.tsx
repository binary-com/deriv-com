import React from 'react'
import styled from 'styled-components'
import { deriv_numbers } from './_data'
import { localize } from 'components/localization'
import { SectionContainer, Flex, CssGrid } from 'components/containers'
import { Header, Text } from 'components/elements'
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
        text-align: left;
    }

    @media ${device.mobileL} {
        width: auto;
        text-align: left;
    }
`

const StyledHeader = styled(Header)`
    @media ${device.laptop} {
        text-align: center;
    }

    @media ${device.tabletS} {
        text-align: left;
    }
`

const NumberHeader = styled(Text)`
    font-weight: bold;
    line-height: 6rem;
    text-align: left;

    @media ${device.mobileL} {
        margin-bottom: 8px;
    }
`

const NumberText = styled(Text)`
    font-weight: 400;
    text-align: left;
`

const DerivNumbers = () => {
    return (
        <StyledSection>
            <StyledFlex>
                <TitleSection fd="column">
                    <TitleHeader as="h6" color="black-2" align="left" type="unset">
                        {localize('Deriv in numbers')}
                    </TitleHeader>
                    <StyledHeader as="h6" size="24px" align="left" weight="400" type="unset">
                        {localize(
                            'We aim to deliver market-leading products that are trusted around the world.',
                        )}
                    </StyledHeader>
                </TitleSection>
                <NumberSection
                    columns="1fr 1fr"
                    rows="1fr 1fr"
                    column_gap="40px"
                    row_gap="4rem"
                    height="unset"
                >
                    {deriv_numbers.map((number) =>
                        number.map(({ count, title }) => (
                            <Flex key={count} fd="column" height="unset">
                                <NumberHeader size="48px" type="unset">
                                    {count}
                                </NumberHeader>
                                <NumberText size="20px" align="left">
                                    {title}
                                </NumberText>
                            </Flex>
                        )),
                    )}
                </NumberSection>
            </StyledFlex>
        </StyledSection>
    )
}

export default DerivNumbers
