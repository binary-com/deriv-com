import React, { useState } from 'react'
import { Formik } from 'formik'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import { optionItemDefault, syntheticItemLists, financialItemLists } from './_underlying-data'
import {
    StyledText,
    HeaderTabItem,
    StyledHeaderP,
    WrapContainer,
    ImageWrapper,
    StyledHeader,
    StyledHeaderTitle,
    LinkWrapper,
    BottomContent,
    InputGroup,
    StyledLinkButton,
    FormulaText,
    StyledOl,
    StyledFormWrapper,
    StyledForm,
    StyledTextArea,
    StyledButton,
    StyledLabel,
    CalculatorHeader,
    CalculatorBody,
    SwapActionSection,
    StyledCurrencyLabel,
    StyledTextAreaContainer,
    StyledFormikSymbolDropdown,
} from './_style'
import { localize, Localize } from 'components/localization'
import device from 'themes/device'
import { Text, QueryImage } from 'components/elements'
import { Container, Flex } from 'components/containers'
import FormikInput from 'components/formikComponents/input'
import validation from 'common/validation'

const SwapFormWrapper = styled(StyledFormWrapper)`
    max-height: 580px;

    /* height: 620px;
    @media ${device.laptopM} {
        margin-bottom: 40px;
        margin-right: 0;
    }

    @media ${device.laptop} {
        height: 535px;
        margin-bottom: 20px;
    }

    @media ${device.tabletL} {
        height: 580px;
        margin-bottom: 20px;
    }

    @media ${device.mobileL} {
        margin-top: 20px;
        height: 640px;
    } */
`

const SwapForm = styled(StyledForm)``

const StyledInputGroup = styled(InputGroup)`
    margin: 0;
`

const SwapCalculator = () => {
    const query = graphql`
        query {
            margin_calc: file(relativePath: { eq: "trade-tools/margin-calc.png" }) {
                childImageSharp {
                    fluid(maxWidth: 486, srcSetBreakpoints: [340, 400, 600, 1280]) {
                        ...GatsbyImageSharpFluid_withWebp_noBase64
                        originalName
                    }
                }
            }
            margin_formula: file(relativePath: { eq: "trade-tools/margin-formula.png" }) {
                childImageSharp {
                    fluid(maxWidth: 486, srcSetBreakpoints: [340, 400, 600, 1280]) {
                        ...GatsbyImageSharpFluid_withWebp_noBase64
                        originalName
                    }
                }
            }
            margin_info: file(relativePath: { eq: "trade-tools/margin-info.png" }) {
                childImageSharp {
                    fluid(maxWidth: 486, srcSetBreakpoints: [340, 400, 600, 1280]) {
                        ...GatsbyImageSharpFluid_withWebp_noBase64
                        originalName
                    }
                }
            }
            swap_calc: file(relativePath: { eq: "trade-tools/synthetic-calc.png" }) {
                childImageSharp {
                    fluid(maxWidth: 486, srcSetBreakpoints: [340, 400, 600, 1280]) {
                        ...GatsbyImageSharpFluid_withWebp_noBase64
                        originalName
                    }
                }
            }
            swap_formula: file(relativePath: { eq: "trade-tools/synthetic-formula.png" }) {
                childImageSharp {
                    fluid(maxWidth: 486, srcSetBreakpoints: [340, 400, 600, 1280]) {
                        ...GatsbyImageSharpFluid_withWebp_noBase64
                        originalName
                    }
                }
            }
            swap_forex_formula: file(relativePath: { eq: "trade-tools/forex-formula.png" }) {
                childImageSharp {
                    fluid(maxWidth: 486, srcSetBreakpoints: [340, 400, 600, 1280]) {
                        ...GatsbyImageSharpFluid_withWebp_noBase64
                        originalName
                    }
                }
            }
        }
    `
    const data = useStaticQuery(query)

    const [tab, setTab] = useState('Synthetic')

    const onTabClick = (tab) => {
        setTab(tab)
    }

    const getSwapChargeSynthetic = (values) => {
        const { volume, assetPrice, swapRate, contractSize } = values
        const swap = (volume * contractSize * assetPrice * (swapRate / 100)) / 360
        return swap.toFixed(4)
    }

    const getSwapChargeForex = (values) => {
        const { volume, pointValue, swapRate, contractSize } = values
        const swap = volume * contractSize * pointValue * swapRate
        return swap.toFixed(4)
    }

    const resetValidationSynthetic = (values) => {
        let errors = {}
        const symbol_error = validation.symbol(values.symbol)
        const volume_error = validation.volume(values.volume)
        const assetPrice_error = validation.assetPrice(values.assetPrice)
        const swapRate_error = validation.swapRate(values.swapRate)

        if (symbol_error) {
            errors.symbol = symbol_error
        }
        if (volume_error) {
            errors.volume = volume_error
        }
        if (assetPrice_error) {
            errors.assetPrice = assetPrice_error
        }

        if (swapRate_error) {
            errors.swapRate = swapRate_error
        }

        return errors
    }

    const resetValidationForex = (values) => {
        let errors = {}
        const symbol_error = validation.symbol(values.symbol.displayName)
        const volume_error = validation.volume(values.volume)
        const pointValue_error = validation.pointValue(values.pointValue)
        const swapRate_error = validation.swapRate(values.swapRate)

        if (symbol_error) {
            errors.symbol = symbol_error
        }
        if (volume_error) {
            errors.volume = volume_error
        }
        if (pointValue_error) {
            errors.pointValue = pointValue_error
        }

        if (swapRate_error) {
            errors.swapRate = swapRate_error
        }

        return errors
    }

    const getCurrencySwapSynthetic = (symbol) => {
        let currency = 'USD'
        if (symbol.market === 'synthetic_indices') {
            currency = 'USD'
        } else {
            if (symbol.market === 'commodities') {
                currency = 'USD'
            } else {
                if (symbol.name === 'DAX_30') {
                    currency = 'EUR'
                } else {
                    if (symbol.displayName !== 'Please select a value')
                        currency = symbol.displayName.slice(-3)
                }
            }
        }
        return currency
    }

    const getCurrencySwapForex = (symbol) => {
        let currency = 'USD'
        if (symbol.market === 'synthetic_indices') {
            currency = 'USD'
        } else {
            if (symbol.market === 'commodities') {
                currency = 'USD'
            } else {
                if (symbol.name === 'DAX_30') {
                    currency = 'EUR'
                } else {
                    if (symbol.displayName !== 'Please select a value')
                        currency = symbol.displayName.slice(-3)
                }
            }
        }
        return currency
    }

    const getContractSizeSynthetic = (symbol) => {
        let contractSize = 1

        if (symbol.market === 'forex') {
            contractSize = 1000
        } else if (symbol.displayName === 'Silver/USD') {
            contractSize = 500
        } else if (
            symbol.displayName === 'Gold/USD' ||
            symbol.displayName === 'Palladium/USD' ||
            symbol.displayName === 'Platinum/USD'
        ) {
            contractSize = 100
        } else if (symbol.displayName === 'Step Index') {
            contractSize = 10
        }

        return contractSize
    }

    const getContractSizeForex = (symbol) => {
        let contractSize = 1

        if (symbol.market === 'forex') {
            contractSize = 1000
        } else if (symbol.displayName === 'Silver/USD') {
            contractSize = 500
        } else if (
            symbol.displayName === 'Gold/USD' ||
            symbol.displayName === 'Palladium/USD' ||
            symbol.displayName === 'Platinum/USD'
        ) {
            contractSize = 100
        } else if (symbol.displayName === 'Step Index') {
            contractSize = 10
        }

        return contractSize
    }

    return (
        <Container direction="column">
            <StyledHeaderTitle align="center" as="h2">
                {localize('Swap calculator')}
            </StyledHeaderTitle>
            <StyledHeaderP>
                {localize(
                    'Our swap calculator helps you to estimate the swap charges required to keep your positions open overnight on Deriv MetaTrader 5 (DMT5).',
                )}
            </StyledHeaderP>

            <Flex mb="8rem" p="0 16px" tablet={{ mb: '32px', height: 'unset' }}>
                <HeaderTabItem active={tab === 'Synthetic'} onClick={() => onTabClick('Synthetic')}>
                    <StyledText size="var(--text-size-m)" align="center">
                        {localize('Synthetic indices')}
                    </StyledText>
                </HeaderTabItem>
                <HeaderTabItem active={tab === 'Real'} onClick={() => onTabClick('Real')}>
                    <StyledText size="var(--text-size-m)" align="center">
                        {localize('Forex and commodities')}
                    </StyledText>
                </HeaderTabItem>
            </Flex>

            {tab === 'Synthetic' ? (
                <>
                    <WrapContainer mb="4.0rem">
                        <SwapFormWrapper>
                            <Formik
                                enableReinitialize
                                initialValues={{
                                    swapCharge: '',
                                    swapChargeSymbol: 'USD',
                                    symbol: '',
                                    volume: '',
                                    pointValue: '',
                                    optionList: syntheticItemLists,
                                    contractSize: '',
                                    swapRate: '',
                                    assetPrice: '',
                                }}
                                validate={resetValidationSynthetic}
                                onSubmit={(values, { setFieldValue }) => {
                                    setFieldValue('swapCharge', getSwapChargeSynthetic(values))
                                }}
                            >
                                {({ values, setFieldValue, handleBlur, errors, touched }) => (
                                    <SwapForm>
                                        <CalculatorHeader>
                                            <StyledLabel htmlFor="message">
                                                {localize('Swap charge')}
                                            </StyledLabel>
                                            <StyledTextAreaContainer>
                                                <StyledTextArea
                                                    as="textarea"
                                                    id="message"
                                                    value={values.swapCharge}
                                                    disabled
                                                />
                                                <StyledCurrencyLabel>
                                                    {values.swapChargeSymbol}
                                                </StyledCurrencyLabel>
                                            </StyledTextAreaContainer>
                                        </CalculatorHeader>
                                        <CalculatorBody>
                                            <StyledFormikSymbolDropdown
                                                mb="2.4rem"
                                                option_list={values.optionList}
                                                label={localize('Symbol')}
                                                default_option={optionItemDefault}
                                                selected_option={values.symbol}
                                                id="symbol"
                                                onChange={(x) => {
                                                    setFieldValue(
                                                        'swapCurrency',
                                                        getCurrencySwapSynthetic(x),
                                                    )

                                                    setFieldValue(
                                                        'contractSize',
                                                        getContractSizeSynthetic(x),
                                                    )
                                                    setFieldValue('symbol', x)
                                                }}
                                                contractSize={values.contractSize}
                                                error={touched.symbol && errors.symbol}
                                                onBlur={handleBlur}
                                            />

                                            <InputGroup>
                                                <FormikInput
                                                    name="volume"
                                                    id="volume"
                                                    type="text"
                                                    value={values.volume}
                                                    label={localize('Volume')}
                                                    onChange={(x) => {
                                                        setFieldValue('volume', x)
                                                    }}
                                                    autoComplete="off"
                                                    error={touched.volume && errors.volume}
                                                    onBlur={handleBlur}
                                                />
                                            </InputGroup>

                                            <InputGroup>
                                                <FormikInput
                                                    name="asset"
                                                    id="asset"
                                                    type="text"
                                                    value={values.assetPrice}
                                                    label={localize('Asset price')}
                                                    onChange={(x) => {
                                                        setFieldValue('assetPrice', x)
                                                    }}
                                                    autoComplete="off"
                                                    error={touched.assetPrice && errors.assetPrice}
                                                    // handleError={resetForm}
                                                    onBlur={handleBlur}
                                                    data-lpignore="true"
                                                />
                                            </InputGroup>

                                            <StyledInputGroup>
                                                <FormikInput
                                                    name="swapRate"
                                                    id="swapRate"
                                                    type="text"
                                                    value={values.swapRate}
                                                    label={localize('Swap rate')}
                                                    onChange={(x) => {
                                                        setFieldValue('swapRate', x)
                                                    }}
                                                    autoComplete="off"
                                                    error={touched.swapRate && errors.swapRate}
                                                    // handleError={resetForm}
                                                    onBlur={handleBlur}
                                                    data-lpignore="true"
                                                />
                                            </StyledInputGroup>
                                        </CalculatorBody>
                                        <SwapActionSection>
                                            <StyledButton secondary type="submit">
                                                {localize('Calculate')}
                                            </StyledButton>
                                        </SwapActionSection>
                                    </SwapForm>
                                )}
                            </Formik>
                        </SwapFormWrapper>

                        <Flex direction="column" ml="2.4rem" max_width="69rem">
                            <StyledHeader align="center" as="h3" mt="1.6rem">
                                {localize('How swap charges are calculated')}
                            </StyledHeader>

                            <Text size="16px" mb="2rem">
                                <Localize
                                    translate_text="For synthetic indices, the swap charge is calculated on an annual basis for long and short positions using the formula:
                            <1></1><0>Swap charge = volume × contract size × asset price × (swap rate/100) /360</0>"
                                    components={[<strong key={0} />, <br key={1} />]}
                                />
                            </Text>

                            <Text size="16px" mb="2rem">
                                <Localize
                                    translate_text="This gives you the swap charge in USD."
                                    components={[<strong key={0} />]}
                                />
                            </Text>

                            <StyledHeader align="center" as="h3">
                                {localize('Example Calculation')}
                            </StyledHeader>

                            <Text size="16px" mb="2rem">
                                {localize(
                                    'Let’s say you want to keep 0.01 lots of Volatility 75 Index with an asset price of 400,000 USD and swap rate of -7.5 open for one night.',
                                )}
                            </Text>
                            <ImageWrapper>
                                <QueryImage data={data.swap_formula} alt={'Swap formula'} />
                                <FormulaText size="14px">
                                    <StyledOl>
                                        <li>
                                            <span>
                                                <Localize
                                                    translate_text="If the swap rate is positive, your account will be credited with the swap amount. If it is negative, your account will be debited"
                                                    components={[<strong key={0} />]}
                                                />
                                            </span>
                                        </li>
                                    </StyledOl>
                                </FormulaText>
                            </ImageWrapper>
                            <Text size="16px" mb="2rem" mt="1.6rem">
                                <Localize
                                    translate_text="So you will be required to pay a swap charge of <0>0.83 USD</0> to keep the position open
                            for one night."
                                    components={[<strong key={0} />]}
                                />
                            </Text>
                        </Flex>
                    </WrapContainer>

                    <BottomContent direction="column">
                        <Text size="16px" mb="2.4rem">
                            <Localize
                                translate_text="To view the asset price and swap rate, go to Deriv MetaTrader 5 (DMT5), click on the <0>View </0> tab and select<0> Market Watch</0>, then right-click on the symbol you want to trade
                            and select <0>Specification.</0>"
                                components={[<strong key={0} />]}
                            />
                        </Text>

                        <LinkWrapper>
                            {
                                <StyledLinkButton tertiary="true" to="/dmt5/">
                                    {localize('Go to DMT5 dashboard')}
                                </StyledLinkButton>
                            }
                            {
                                <StyledLinkButton
                                    external
                                    secondary="true"
                                    to="/trade-types/margin"
                                >
                                    {localize('Learn more about swaps')}
                                </StyledLinkButton>
                            }
                        </LinkWrapper>
                    </BottomContent>
                </>
            ) : (
                <>
                    <WrapContainer mb="4.0rem">
                        <SwapFormWrapper>
                            <Formik
                                enableReinitialize
                                initialValues={{
                                    swapCharge: '',
                                    swapChargeSymbol: 'USD',
                                    symbol: '',
                                    volume: '',
                                    optionList: financialItemLists,
                                    contractSize: '',
                                    swapRate: '',
                                    pointValue: '',
                                }}
                                validate={resetValidationForex}
                                onSubmit={(values, { setFieldValue }) => {
                                    setFieldValue('swapCharge', getSwapChargeForex(values))
                                }}
                            >
                                {({ values, setFieldValue, handleBlur, errors, touched }) => (
                                    <SwapForm>
                                        <CalculatorHeader>
                                            <StyledLabel htmlFor="message">
                                                {localize('Swap charge')}
                                            </StyledLabel>
                                            <StyledTextAreaContainer>
                                                <StyledTextArea
                                                    as="textarea"
                                                    id="message"
                                                    value={values.swapCharge}
                                                    disabled
                                                />
                                                <StyledCurrencyLabel>
                                                    {values.swapChargeSymbol}
                                                </StyledCurrencyLabel>
                                            </StyledTextAreaContainer>
                                        </CalculatorHeader>
                                        <CalculatorBody>
                                            <StyledFormikSymbolDropdown
                                                mb="2.4rem"
                                                default_option={optionItemDefault}
                                                option_list={values.optionList}
                                                label={localize('Symbol')}
                                                selected_option={values.symbol}
                                                id="symbol"
                                                onChange={(x) => {
                                                    setFieldValue(
                                                        'swapCurrency',
                                                        getCurrencySwapForex(x),
                                                    )
                                                    setFieldValue(
                                                        'contractSize',
                                                        getContractSizeForex(x),
                                                    )
                                                    setFieldValue('symbol', x)
                                                }}
                                                contractSize={values.contractSize}
                                                error={touched.symbol && errors.symbol}
                                                onBlur={handleBlur}
                                            />

                                            <InputGroup>
                                                <FormikInput
                                                    name="volume"
                                                    id="volume"
                                                    type="text"
                                                    value={values.volume}
                                                    label={localize('Volume')}
                                                    onChange={(x) => {
                                                        setFieldValue('volume', x)
                                                    }}
                                                    autoComplete="off"
                                                    error={touched.volume && errors.volume}
                                                    // handleError={resetForm}
                                                    onBlur={handleBlur}
                                                />
                                            </InputGroup>

                                            <InputGroup>
                                                <FormikInput
                                                    name="pointValue"
                                                    id="pointValue"
                                                    type="text"
                                                    value={values.pointValue}
                                                    label={localize('Point value')}
                                                    onChange={(x) => {
                                                        setFieldValue('pointValue', x)
                                                    }}
                                                    autoComplete="off"
                                                    error={touched.pointValue && errors.pointValue}
                                                    onBlur={handleBlur}
                                                    data-lpignore="true"
                                                />
                                            </InputGroup>

                                            <StyledInputGroup>
                                                <FormikInput
                                                    name="swapRate"
                                                    id="swapRate"
                                                    type="text"
                                                    value={values.swapRate}
                                                    label={localize('Swap rate')}
                                                    onChange={(x) => {
                                                        setFieldValue('swapRate', x)
                                                    }}
                                                    autoComplete="off"
                                                    error={touched.swapRate && errors.swapRate}
                                                    // handleError={resetForm}
                                                    onBlur={handleBlur}
                                                    data-lpignore="true"
                                                />
                                            </StyledInputGroup>
                                        </CalculatorBody>
                                        <SwapActionSection>
                                            <StyledButton secondary type="submit">
                                                {localize('Calculate')}
                                            </StyledButton>
                                        </SwapActionSection>
                                    </SwapForm>
                                )}
                            </Formik>
                        </SwapFormWrapper>

                        <Flex direction="column" ml="2.4rem" max_width="69rem">
                            <StyledHeader align="center" as="h3" mt="1.6rem">
                                {localize('How swap charges are calculated')}
                            </StyledHeader>

                            <Text size="16px" mb="2rem">
                                <Localize
                                    translate_text="For forex and commodities, the swap charge is calculated using the formula is:
                            <1></1><0>Swap charge = volume × contract size × point value × swap rate</0>"
                                    components={[<strong key={0} />, <br key={1} />]}
                                />
                            </Text>

                            <Text size="16px" mb="2rem">
                                <Localize
                                    translate_text="This gives you the swap charge in the quote currency for forex pairs, or in the denomination of the underlying asset for commodities."
                                    components={[<strong key={0} />]}
                                />
                            </Text>

                            <Text size="16px" mb="2rem">
                                <Localize
                                    translate_text="This gives you the swap charge in the quote currency for forex pairs, or in the denomination of the underlying asset for commodities.
                            For instance, if you are trading the USD/JPY forex pair, the swap charge will be computed in Japanese Yen (JPY) which is the quote currency. On the other hand, if you are trading oil,  then the swap charge will be computed in US Dollar (USD), which is the denomination of the underlying asset – oil."
                                    components={[<strong key={0} />]}
                                />
                            </Text>

                            <StyledHeader align="center" as="h3">
                                {localize('Example Calculation')}
                            </StyledHeader>

                            <Text size="16px" mb="2rem">
                                {localize(
                                    'Let’s say you want to keep two lots of EUR/USD with a point value of 0.00001 and swap rate of -0.12 open for one night.',
                                )}
                            </Text>
                            <ImageWrapper>
                                <QueryImage
                                    data={data.swap_forex_formula}
                                    alt={'Swap forex formula'}
                                />
                                <FormulaText size="14px">
                                    <StyledOl>
                                        <li>
                                            <span>
                                                <Localize
                                                    translate_text="One standard lot for Forex = 100,000 units"
                                                    components={[
                                                        <strong key={0} />,
                                                        <br key={1} />,
                                                    ]}
                                                />
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <Localize
                                                    translate_text="Point value is based on the current digit of the asset"
                                                    components={[
                                                        <strong key={0} />,
                                                        <br key={1} />,
                                                    ]}
                                                />
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <Localize
                                                    translate_text="If the swap rate is positive, your account will be credited with the swap amount. If it is negative, your account will be deducted"
                                                    components={[
                                                        <strong key={0} />,
                                                        <br key={1} />,
                                                    ]}
                                                />
                                            </span>
                                        </li>
                                    </StyledOl>
                                </FormulaText>
                            </ImageWrapper>
                            <Text size="16px" mt="1.6rem">
                                <Localize
                                    translate_text="So you will be required to pay a swap charge of <0>0.24 USD</0> to keep the position open
                            for one night."
                                    components={[<strong key={0} />]}
                                />
                            </Text>
                        </Flex>
                    </WrapContainer>

                    <BottomContent direction="column">
                        <Text size="16px" mb="2.4rem" mt="2.4rem">
                            <Localize
                                translate_text="To view the asset price and swap rate, go to Deriv MetaTrader 5 (DMT5), click on the <0>View </0> tab and select<0> Market Watch</0>, then right-click on the symbol you want to trade
                            and select <0>Specification.</0>"
                                components={[<strong key={0} />]}
                            />
                        </Text>

                        <Text size="16px" mb="2.4rem">
                            <Localize
                                translate_text="You can derive the point value from the current digits of the asset. Typically, if the digit is 3, then the point value will be 0.001. If the digit is 5, then the point value will be 0.00001, and so on."
                                components={[<strong key={0} />]}
                            />
                        </Text>

                        <LinkWrapper>
                            {
                                <StyledLinkButton tertiary="true" to="/dmt5/">
                                    {localize('Go to DMT5 dashboard')}
                                </StyledLinkButton>
                            }
                            {
                                <StyledLinkButton
                                    external
                                    secondary="true"
                                    to="/trade-types/margin"
                                >
                                    {localize('Learn more about swaps')}
                                </StyledLinkButton>
                            }
                        </LinkWrapper>
                    </BottomContent>
                </>
            )}
        </Container>
    )
}

export default SwapCalculator
