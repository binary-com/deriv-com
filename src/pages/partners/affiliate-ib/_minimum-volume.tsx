import React from 'react'
import styled from 'styled-components'
import { ResultStrong } from './_style'
import CalculatedFormula from './_calculated-formula'
import { Header, Text } from 'components/elements/typography'
import { Container, SectionContainer, Flex } from 'components/containers'
import { localize, Localize } from 'components/localization'
import device from 'themes/device'

type FormulaType = {
    item: string
    description: React.ReactElement
    next_operator?: string
}[]

type ResultType = {
    total: React.ReactElement
    description?: React.ReactElement
}

type ListType = {
    totalItem: number
    formula: FormulaType
    result: ResultType
}[]

export type CalculatedFormulaType = {
    list?: ListType
    name?: string
    description?: string
    type?: string[]
}

export type CalculatedFormulaProps = { data: CalculatedFormulaType }

const StyledSection = styled(SectionContainer)`
    padding: 0 0 8rem;
    @media ${device.tabletL} {
        padding: 40px 0;
    }
`
const TitleWrapper = styled(Flex)`
    max-width: 120rem;
    margin: 0 auto 2.4rem;

    ${Text} {
        max-width: 792px;
        margin: 0 auto;
    }

    @media ${device.tabletL} {
        margin: 0 auto 16px;

        ${Header} {
            font-size: 20px;
            line-height: 25px;
        }
    }
`
const StyledHeader = styled(Header)`
    max-width: 1200px;
    margin: 0 auto 24px;
    text-align: left;

    @media ${device.mobileL} {
        max-width: unset;
        margin: 0 auto 16px;
    }
`
const ExampleWrapper = styled(Flex)`
    max-width: 120rem;
    margin: 0 auto;
    flex-direction: column;

    @media ${device.laptopM} {
        h1 {
            text-align: center;
        }
    }
`
const CalculationWrapper = styled(Flex)`
    @media ${device.laptopM} {
        flex-direction: column;
    }
`
const LeftWrapper = styled(Flex)`
    width: 588px;
    padding: 6.6rem 4rem 7.8rem;
    background-color: var(--color-grey-39);
    margin-right: 2.4rem;

    @media (max-width: 1360px) {
        width: 45%;
    }

    @media ${device.laptopM} {
        width: 100%;
        max-width: 58.8rem;
        margin-right: 0;
        margin-bottom: 0.8rem;
        padding: 1.6rem;
    }
    @media ${device.tabletL} {
        margin-bottom: 0;
    }

    ${Text} {
        @media ${device.tabletL} {
            max-width: 295px;
        }
    }
`
const RightWrapper = styled(Flex)`
    width: 588px;
    flex-direction: column;

    @media ${device.laptopM} {
        width: 100%;
        max-width: 58.8rem;
    }
`
const MinimumVolume = () => {
    return (
        <StyledSection>
            <Container direction="column">
                <TitleWrapper direction="column">
                    <Header as="h2" type="page-title" align="center" mb="0.8rem">
                        {localize('Minimum volume requirement')}
                    </Header>
                    <Text size="16px" align="center">
                        <Localize translate_text="To receive the minimum commission (0.01 in any currency) allowed by the system, the minimum volume requirement is calculated based on the following formulas:" />
                    </Text>
                </TitleWrapper>
                <ExampleWrapper>
                    <StyledHeader as="h4" type="main-paragraph" mb="2.4rem">
                        {localize('Example:')}
                    </StyledHeader>
                    <CalculationWrapper ai="center" mb="24px">
                        <LeftWrapper>
                            <Text size="16px">
                                <Localize translate_text="A deal for 1 lot of BTC/USD (with a BTC to USD exchange rate of USD 50,000) per USD 100,000 turnover will pay out a commission of USD 10. The minimum volume required to receive the minimum commission of USD 0.01 is determined using this formula:" />
                            </Text>
                        </LeftWrapper>
                        <RightWrapper>
                            <CalculatedFormula data={firstCalculatedFormula} />
                        </RightWrapper>
                    </CalculationWrapper>
                    <CalculationWrapper ai="center">
                        <LeftWrapper>
                            <Text size="16px">
                                <Localize translate_text="A deal for 1 lot of the Volatility Index 75 for a price of USD 500,000 per USD 100,000 turnover will pay out a commission of USD 5. The minimum volume required to receive the minimum commission of USD 0.01 is determined using this formula:" />
                            </Text>
                        </LeftWrapper>
                        <RightWrapper>
                            <CalculatedFormula data={secondCalculatedFormula} />
                        </RightWrapper>
                    </CalculationWrapper>
                </ExampleWrapper>
            </Container>
        </StyledSection>
    )
}

const firstCalculatedFormula: CalculatedFormulaType = {
    list: [
        {
            totalItem: 3,
            formula: [
                {
                    item: '(0.01',
                    description: <Localize translate_text="Min. commission" />,
                    next_operator: '✕',
                },
                {
                    item: 'USD 100,000)',
                    description: <Localize translate_text="Adjusted volume" />,
                    next_operator: '÷',
                },
                {
                    item: '10',
                    description: <Localize translate_text="Commission rate" />,
                },
            ],
            result: {
                total: (
                    <Localize
                        translate_text="<0>USD 100</0> Volume"
                        components={[<ResultStrong key={0} />]}
                    />
                ),
            },
        },
        {
            totalItem: 2,
            formula: [
                {
                    item: 'USD 100',
                    description: <Localize translate_text="Volume" />,
                    next_operator: '÷',
                },
                {
                    item: 'USD 50,000',
                    description: <Localize translate_text="Spot price" />,
                },
            ],
            result: {
                total: (
                    <Localize
                        translate_text="<0>0.002 lots</0>"
                        components={[<ResultStrong key={0} />]}
                    />
                ),
                description: <Localize translate_text="Volume in lots" />,
            },
        },
    ],
}

const secondCalculatedFormula: CalculatedFormulaType = {
    list: [
        {
            totalItem: 3,
            formula: [
                {
                    item: '(0.01',
                    description: <Localize translate_text="Min. commission" />,
                    next_operator: '✕',
                },
                {
                    item: 'USD 100,000)',
                    description: <Localize translate_text="Adjusted volume" />,
                    next_operator: '÷',
                },
                {
                    item: '5',
                    description: <Localize translate_text="Commission rate" />,
                },
            ],
            result: {
                total: (
                    <Localize
                        translate_text="<0>USD 200</0> Volume"
                        components={[<ResultStrong key={0} />]}
                    />
                ),
            },
        },
        {
            totalItem: 2,
            formula: [
                {
                    item: 'USD 200',
                    description: <Localize translate_text="Volume" />,
                    next_operator: '÷',
                },
                {
                    item: 'USD 500,000',
                    description: <Localize translate_text="Spot price" />,
                },
            ],
            result: {
                total: (
                    <Localize
                        translate_text="<0>0.0004 lots</0>"
                        components={[<ResultStrong key={0} />]}
                    />
                ),
                description: <Localize translate_text="Volume in lots" />,
            },
        },
    ],
}
export default MinimumVolume
