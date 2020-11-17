import React, { useState } from 'react'
import { Formik, Field } from 'formik'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import { optionItemDefault, syntheticItemLists, financialItemLists } from './_underlying-data'
import {
    SwapTabSelector,
    StyledText,
    StyledSection,
    SectionHeader,
    SectionSubtitle,
    ContentContainer,
    SwapFormWrapper,
    CalculatorForm,
    CalculatorHeader,
    CalculatorLabel,
    CalculatorOutputContainer,
    CalculatorOutputField,
    CalculatorOutputSymbol,
    CalculatorBody,
    CalculatorDropdown,
    InputGroup,
    ActionSection,
    CalculateButton,
    RightContent,
    RightContentHeader,
    TextWrapper,
    ImageWrapper,
    FormulaText,
    StyledOl,
    LinkWrapper,
    BottomContent,
    BottomText,
    StyledLinkButton,
} from './_style'
import validation from './_validation'
import { localize, Localize } from 'components/localization'
import { QueryImage } from 'components/elements'
import { Flex, Show } from 'components/containers'
import Input from 'components/form/input'

const StyledInputGroup = styled(InputGroup)`
    margin: 0;
`

const StyledActionSection = styled(ActionSection)`
    margin-top: 1.5rem;
`

const SwapCalculator = () => {
    const query = graphql`
        query {
            swap_synthetic_formula: file(
                relativePath: { eq: "trade-tools/swap-synthetic-formula.png" }
            ) {
                ...fadeIn
            }
            swap_forex_formula: file(relativePath: { eq: "trade-tools/swap-forex-formula.png" }) {
                ...fadeIn
            }
            swap_synthetic_formula_mobile: file(
                relativePath: { eq: "trade-tools/swap-synthetic-formula-mobile.png" }
            ) {
                ...fadeIn
            }
            swap_forex_formula_mobile: file(
                relativePath: { eq: "trade-tools/swap-forex-formula-mobile.png" }
            ) {
                ...fadeIn
            }
        }
    `
    const data = useStaticQuery(query)

    const [tab, setTab] = useState('Synthetic')

    const onTabClick = (tab) => {
        setTab(tab)
    }

    const getSwapChargeSynthetic = (values) => {
        const { volume, assetPrice, swapRate, contractSize, symbol } = values

        let swap_formula_synthetic
        const STEPINDEX_VALUE = 100
        const RANGEBREAK100VALUE = 400
        const RANGEBREAK200VALUE = 800

        if (symbol.name === 'Step Index') {
            swap_formula_synthetic = volume * STEPINDEX_VALUE
        } else if (symbol.name === 'Range Break 100 Index') {
            swap_formula_synthetic = volume * RANGEBREAK100VALUE
        } else if (symbol.name === 'Range Break 200 Index') {
            swap_formula_synthetic = volume * RANGEBREAK200VALUE
        } else {
            swap_formula_synthetic = (volume * contractSize * assetPrice * (swapRate / 100)) / 360
        }
        return toFixed(swap_formula_synthetic)
    }

    const getSwapChargeForex = (values) => {
        const { volume, pointValue, swapRate, contractSize } = values
        const swap_formula_forex = volume * contractSize * pointValue * swapRate
        return toFixed(swap_formula_forex)
    }

    const toFixed = (val) => {
        return parseFloat(val.toFixed(2)).toLocaleString()
    }

    const resetValidationSynthetic = (values) => {
        const errors = {}
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
        const errors = {}
        const symbol_error = validation.symbol(values.symbol.display_name)
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

    const getCurrencySwap = (symbol) => {
        let currency = 'USD'
        if (symbol.market === 'synthetic_indices' || symbol.market === 'commodities') {
            currency = 'USD'
        }

        if (symbol.name === 'DAX_30') {
            currency = 'EUR'
        }

        if (symbol.market === 'forex' && symbol.name !== 'default' && symbol.name !== 'CL_BRENT') {
            currency = symbol.display_name.slice(-3)
        }

        return currency
    }

    const getContractSize = (symbol) => {
        let contractSize = 1

        if (symbol.market === 'forex') {
            contractSize = 100000
        }

        if (symbol.market === 'commodities') {
            switch (symbol.name) {
                case 'XAGUSD':
                    contractSize = 5000
                    break
                case 'XAUUSD':
                case 'XPDUSD':
                case 'XPTUSD':
                    contractSize = 100
                    break
            }
        }

        if (symbol.name === 'Step Index') {
            contractSize = 10
        }

        return contractSize
    }

    const numberWithCommas = (input) => {
        return input.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    }

    const numberSubmitFormat = (input) => {
        return input.replace(/^0+(?!\.|$)/, '')
    }

    const numberSubmitFormatNegative = (input) => {
        return input.replace(/^(-?)0+/, '$1')
    }

    return (
        <StyledSection direction="column">
            <SectionHeader as="h2" align="center" mt="8rem" mb="1.2rem">
                {localize('Swap calculator')}
            </SectionHeader>

            <SectionSubtitle as="h5" align="center" mb="4rem" weight="normal">
                {localize(
                    'Our swap calculator helps you to estimate the swap charges required to keep your positions open overnight on Deriv MetaTrader 5 (DMT5).',
                )}
            </SectionSubtitle>

            <Flex mb="8rem" p="0 1.6rem" tablet={{ mb: '32px', height: 'unset' }}>
                <SwapTabSelector
                    active={tab === 'Synthetic'}
                    onClick={() => onTabClick('Synthetic')}
                >
                    <StyledText size="var(--text-size-m)" align="center">
                        {localize('Synthetic indices')}
                    </StyledText>
                </SwapTabSelector>
                <SwapTabSelector active={tab === 'Real'} onClick={() => onTabClick('Real')}>
                    <StyledText size="var(--text-size-m)" align="center">
                        {localize('Forex and commodities')}
                    </StyledText>
                </SwapTabSelector>
            </Flex>

            {tab === 'Synthetic' ? (
                <>
                    <ContentContainer mb="4.0rem">
                        <SwapFormWrapper>
                            <Formik
                                enableReinitialize
                                initialValues={{
                                    swapCharge: 0,
                                    swapChargeSymbol: 'USD',
                                    symbol: '',
                                    volume: '',
                                    optionList: syntheticItemLists,
                                    contractSize: '',
                                    swapRate: '',
                                    assetPrice: '',
                                }}
                                validate={resetValidationSynthetic}
                                onSubmit={(values, { setFieldValue }) => {
                                    setFieldValue('swapCharge', getSwapChargeSynthetic(values))
                                    setFieldValue('volume', numberSubmitFormat(values.volume))
                                    setFieldValue(
                                        'swapRate',
                                        numberSubmitFormatNegative(values.swapRate),
                                    )
                                    setFieldValue(
                                        'assetPrice',
                                        numberSubmitFormat(values.assetPrice),
                                    )
                                }}
                            >
                                {({
                                    values,
                                    setFieldValue,
                                    handleBlur,
                                    errors,
                                    touched,
                                    setFieldError,
                                    setFieldTouched,
                                    isValid,
                                    dirty,
                                }) => (
                                    <CalculatorForm>
                                        <CalculatorHeader>
                                            <CalculatorLabel htmlFor="message">
                                                {localize('Swap charge')}
                                            </CalculatorLabel>
                                            <CalculatorOutputContainer>
                                                <CalculatorOutputField>
                                                    {numberWithCommas(values.swapCharge)}
                                                </CalculatorOutputField>
                                                <CalculatorOutputSymbol>
                                                    {values.swapChargeSymbol}
                                                </CalculatorOutputSymbol>
                                            </CalculatorOutputContainer>
                                        </CalculatorHeader>

                                        <CalculatorBody>
                                            <CalculatorDropdown
                                                mb="2.4rem"
                                                option_list={values.optionList}
                                                label={localize('Symbol')}
                                                default_option={optionItemDefault}
                                                selected_option={values.symbol}
                                                id="symbol"
                                                onChange={(value) => {
                                                    setFieldValue(
                                                        'swapCurrency',
                                                        getCurrencySwap(value),
                                                    )

                                                    setFieldValue(
                                                        'contractSize',
                                                        getContractSize(value),
                                                    )
                                                    setFieldValue('symbol', value)
                                                }}
                                                contractSize={values.contractSize}
                                                error={touched.symbol && errors.symbol}
                                                onBlur={handleBlur}
                                            />

                                            <InputGroup>
                                                <Field
                                                    name="volume"
                                                    value={values.volume}
                                                    onChange={(value) => {
                                                        setFieldValue('volume', value)
                                                    }}
                                                >
                                                    {({ field }) => (
                                                        <Input
                                                            {...field}
                                                            id="volume"
                                                            type="text"
                                                            label={localize('Volume')}
                                                            autoComplete="off"
                                                            error={touched.volume && errors.volume}
                                                            onBlur={handleBlur}
                                                            data-lpignore="true"
                                                            handleError={(current_input) => {
                                                                setFieldValue('volume', '', false)
                                                                setFieldError('volume', '')
                                                                setFieldTouched(
                                                                    'volume',
                                                                    false,
                                                                    false,
                                                                )
                                                                current_input.focus()
                                                            }}
                                                            maxLength="8"
                                                            background="white"
                                                        />
                                                    )}
                                                </Field>
                                            </InputGroup>

                                            <InputGroup>
                                                <Field
                                                    name="assetPrice"
                                                    value={values.assetPrice}
                                                    onChange={(value) => {
                                                        setFieldValue('assetPrice', value)
                                                    }}
                                                >
                                                    {({ field }) => (
                                                        <Input
                                                            {...field}
                                                            id="asset"
                                                            type="text"
                                                            value={values.assetPrice}
                                                            label={localize('Asset price')}
                                                            autoComplete="off"
                                                            error={
                                                                touched.assetPrice &&
                                                                errors.assetPrice
                                                            }
                                                            onBlur={handleBlur}
                                                            data-lpignore="true"
                                                            handleError={(current_input) => {
                                                                setFieldValue(
                                                                    'assetPrice',
                                                                    '',
                                                                    false,
                                                                )
                                                                setFieldError('assetPrice', '')
                                                                setFieldTouched(
                                                                    'assetPrice',
                                                                    false,
                                                                    false,
                                                                )
                                                                current_input.focus()
                                                            }}
                                                            maxLength="15"
                                                            background="white"
                                                        />
                                                    )}
                                                </Field>
                                            </InputGroup>

                                            <StyledInputGroup>
                                                <Field
                                                    name="swapRate"
                                                    value={values.swapRate}
                                                    onChange={(value) => {
                                                        setFieldValue('swapRate', value)
                                                    }}
                                                >
                                                    {({ field }) => (
                                                        <Input
                                                            {...field}
                                                            id="swapRate"
                                                            type="text"
                                                            value={values.swapRate}
                                                            label={localize('Swap rate')}
                                                            autoComplete="off"
                                                            error={
                                                                touched.swapRate && errors.swapRate
                                                            }
                                                            onBlur={handleBlur}
                                                            data-lpignore="true"
                                                            handleError={(current_input) => {
                                                                setFieldValue('swapRate', '', false)
                                                                setFieldError('swapRate', '')
                                                                setFieldTouched(
                                                                    'swapRate',
                                                                    false,
                                                                    false,
                                                                )
                                                                current_input.focus()
                                                            }}
                                                            maxLength="15"
                                                            background="white"
                                                        />
                                                    )}
                                                </Field>
                                            </StyledInputGroup>
                                            <StyledActionSection>
                                                <CalculateButton
                                                    secondary
                                                    type="submit"
                                                    disabled={!isValid || !dirty}
                                                >
                                                    {localize('Calculate')}
                                                </CalculateButton>
                                            </StyledActionSection>
                                        </CalculatorBody>
                                    </CalculatorForm>
                                )}
                            </Formik>
                        </SwapFormWrapper>

                        <RightContent>
                            <TextWrapper>
                                <RightContentHeader as="h3" mb="8px">
                                    {localize('How swap charges are calculated')}
                                </RightContentHeader>

                                <StyledText size="1.6rem" mb="2rem">
                                    <Localize
                                        translate_text="For synthetic indices, the swap charge is calculated on an annual basis for long and short positions using the formula:<1></1><0>Swap charge = volume × contract size × asset price × (swap rate/100) /360</0>"
                                        components={[<strong key={0} />, <br key={1} />]}
                                    />
                                </StyledText>

                                <StyledText size="1.6rem" mb="2rem">
                                    <Localize translate_text="This gives you the swap charge in USD." />
                                </StyledText>

                                <RightContentHeader as="h3" mb="0.8rem">
                                    {localize('Example calculation')}
                                </RightContentHeader>

                                <StyledText size="1.6rem" mb="2rem">
                                    {localize(
                                        'Let’s say you want to keep 0.01 lots of Volatility 75 Index with an asset price of 400,000 USD and swap rate of -7.5 open for one night.',
                                    )}
                                </StyledText>
                            </TextWrapper>
                            <ImageWrapper>
                                <Show.Desktop>
                                    <QueryImage
                                        data={data.swap_synthetic_formula}
                                        alt={'swap synthetic formula'}
                                    />
                                </Show.Desktop>
                                <Show.Mobile>
                                    <QueryImage
                                        data={data.swap_synthetic_formula_mobile}
                                        alt={'swap synthetic formula mobile'}
                                    />
                                </Show.Mobile>
                                <FormulaText size="14px">
                                    <StyledOl>
                                        <li>
                                            <span>
                                                <Localize translate_text="If the swap rate is positive, your account will be credited with the swap amount. If it is negative, your account will be debited" />
                                            </span>
                                        </li>
                                    </StyledOl>
                                </FormulaText>
                            </ImageWrapper>
                            <TextWrapper>
                                <StyledText size="1.6rem" mb="2rem" mt="1.6rem">
                                    <Localize
                                        translate_text="So you will be required to pay a swap charge of <0>0.83 USD</0> to keep the position open for one night."
                                        components={[<strong key={0} />]}
                                    />
                                </StyledText>
                            </TextWrapper>
                        </RightContent>
                    </ContentContainer>

                    <BottomContent direction="column">
                        <BottomText size="1.6rem" mb="2.4rem">
                            <Localize
                                translate_text="To view the asset price and swap rate, go to Deriv MetaTrader 5 (DMT5), click on the <0>View </0> tab and select<0> Market Watch</0>, then right-click on the symbol you want to trade and select <0>Specification.</0>"
                                components={[<strong key={0} />]}
                            />
                        </BottomText>

                        <LinkWrapper>
                            {
                                <StyledLinkButton
                                    tertiary="true"
                                    to="https://app.deriv.com/mt5"
                                    external="true"
                                    target="_blank"
                                >
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
                    <ContentContainer mb="2.0rem">
                        <SwapFormWrapper>
                            <Formik
                                enableReinitialize
                                initialValues={{
                                    swapCharge: 0,
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
                                    setFieldValue('volume', numberSubmitFormat(values.volume))
                                    setFieldValue(
                                        'swapRate',
                                        numberSubmitFormatNegative(values.swapRate),
                                    )
                                    setFieldValue(
                                        'pointValue',
                                        numberSubmitFormat(values.pointValue),
                                    )
                                }}
                            >
                                {({
                                    values,
                                    setFieldValue,
                                    handleBlur,
                                    errors,
                                    touched,
                                    isValid,
                                    dirty,
                                    setFieldTouched,
                                    setFieldError,
                                }) => (
                                    <CalculatorForm>
                                        <CalculatorHeader>
                                            <CalculatorLabel htmlFor="message">
                                                {localize('Swap charge')}
                                            </CalculatorLabel>
                                            <CalculatorOutputContainer>
                                                <CalculatorOutputField>
                                                    {numberWithCommas(values.swapCharge)}
                                                </CalculatorOutputField>
                                                <CalculatorOutputSymbol>
                                                    {values.swapChargeSymbol}
                                                </CalculatorOutputSymbol>
                                            </CalculatorOutputContainer>
                                        </CalculatorHeader>

                                        <CalculatorBody>
                                            <CalculatorDropdown
                                                mb="2.4rem"
                                                default_option={optionItemDefault}
                                                option_list={values.optionList}
                                                label={localize('Symbol')}
                                                selected_option={values.symbol}
                                                id="symbol"
                                                onChange={(value) => {
                                                    setFieldValue(
                                                        'swapCurrency',
                                                        getCurrencySwap(value),
                                                    )
                                                    setFieldValue(
                                                        'contractSize',
                                                        getContractSize(value),
                                                    )
                                                    setFieldValue('symbol', value)
                                                }}
                                                contractSize={values.contractSize}
                                                error={touched.symbol && errors.symbol}
                                                onBlur={handleBlur}
                                            />
                                            <InputGroup>
                                                <Field
                                                    name="volume"
                                                    value={values.volume}
                                                    onChange={(value) => {
                                                        setFieldValue('volume', value)
                                                    }}
                                                >
                                                    {({ field }) => (
                                                        <Input
                                                            {...field}
                                                            id="volume"
                                                            type="text"
                                                            label={localize('Volume')}
                                                            autoComplete="off"
                                                            error={touched.volume && errors.volume}
                                                            onBlur={handleBlur}
                                                            data-lpignore="true"
                                                            handleError={(current_input) => {
                                                                setFieldValue('volume', '', false)
                                                                setFieldError('volume', '')
                                                                setFieldTouched(
                                                                    'volume',
                                                                    false,
                                                                    false,
                                                                )
                                                                current_input.focus()
                                                            }}
                                                            maxLength="8"
                                                            background="white"
                                                        />
                                                    )}
                                                </Field>
                                            </InputGroup>

                                            <InputGroup>
                                                <Field
                                                    name="pointValue"
                                                    value={values.pointValue}
                                                    onChange={(value) => {
                                                        setFieldValue('pointValue', value)
                                                    }}
                                                >
                                                    {({ field }) => (
                                                        <Input
                                                            {...field}
                                                            id="pointValue"
                                                            type="text"
                                                            value={values.pointValue}
                                                            label={localize('Point value')}
                                                            autoComplete="off"
                                                            error={
                                                                touched.pointValue &&
                                                                errors.pointValue
                                                            }
                                                            onBlur={handleBlur}
                                                            data-lpignore="true"
                                                            handleError={(current_input) => {
                                                                setFieldValue(
                                                                    'pointValue',
                                                                    '',
                                                                    false,
                                                                )
                                                                setFieldError('pointValue', '')
                                                                setFieldTouched(
                                                                    'pointValue',
                                                                    false,
                                                                    false,
                                                                )
                                                                current_input.focus()
                                                            }}
                                                            maxLength="15"
                                                            background="white"
                                                        />
                                                    )}
                                                </Field>
                                            </InputGroup>

                                            <StyledInputGroup>
                                                <Field
                                                    name="swapRate"
                                                    value={values.swapRate}
                                                    onChange={(value) => {
                                                        setFieldValue('swapRate', value)
                                                    }}
                                                >
                                                    {({ field }) => (
                                                        <Input
                                                            {...field}
                                                            id="swapRate"
                                                            type="text"
                                                            value={values.swapRate}
                                                            label={localize('Swap rate')}
                                                            autoComplete="off"
                                                            error={
                                                                touched.swapRate && errors.swapRate
                                                            }
                                                            onBlur={handleBlur}
                                                            data-lpignore="true"
                                                            handleError={(current_input) => {
                                                                setFieldValue('swapRate', '', false)
                                                                setFieldError('swapRate', '')
                                                                setFieldTouched(
                                                                    'swapRate',
                                                                    false,
                                                                    false,
                                                                )
                                                                current_input.focus()
                                                            }}
                                                            maxLength="15"
                                                            background="white"
                                                        />
                                                    )}
                                                </Field>
                                            </StyledInputGroup>
                                            <StyledActionSection>
                                                <CalculateButton
                                                    secondary
                                                    type="submit"
                                                    disabled={!isValid || !dirty}
                                                >
                                                    {localize('Calculate')}
                                                </CalculateButton>
                                            </StyledActionSection>
                                        </CalculatorBody>
                                    </CalculatorForm>
                                )}
                            </Formik>
                        </SwapFormWrapper>

                        <RightContent direction="column" max_width="69rem">
                            <TextWrapper>
                                <RightContentHeader as="h3" mb="8px">
                                    {localize('How swap charges are calculated')}
                                </RightContentHeader>

                                <StyledText size="1.6rem" mb="2rem">
                                    <Localize
                                        translate_text="For forex and commodities, the swap charge is calculated using the formula is:<1></1><0>Swap charge = volume × contract size × point value × swap rate</0>"
                                        components={[<strong key={0} />, <br key={1} />]}
                                    />
                                </StyledText>

                                <StyledText size="1.6rem" mb="2rem">
                                    <Localize translate_text="This gives you the swap charge in the quote currency for forex pairs, or in the denomination of the underlying asset for commodities." />
                                </StyledText>

                                <StyledText size="1.6rem" mb="2rem">
                                    <Localize translate_text="For instance, if you are trading the USD/JPY forex pair, the swap charge will be computed in Japanese Yen (JPY) which is the quote currency. On the other hand, if you are trading oil,  then the swap charge will be computed in US Dollar (USD), which is the denomination of the underlying asset – oil." />
                                </StyledText>

                                <RightContentHeader as="h3" mb="0.8rem">
                                    {localize('Example calculation')}
                                </RightContentHeader>

                                <StyledText size="1.6rem" mb="2rem">
                                    {localize(
                                        'Let’s say you want to keep two lots of EUR/USD with a point value of 0.00001 and swap rate of -0.12 open for one night.',
                                    )}
                                </StyledText>
                            </TextWrapper>
                            <ImageWrapper>
                                <Show.Desktop>
                                    <QueryImage
                                        data={data.swap_forex_formula}
                                        alt={'Swap forex formula'}
                                    />
                                </Show.Desktop>
                                <Show.Mobile>
                                    <QueryImage
                                        data={data.swap_forex_formula_mobile}
                                        alt={'Swap forex formula mobile'}
                                    />
                                </Show.Mobile>
                                <FormulaText size="14px">
                                    <StyledOl>
                                        <li>
                                            <span>
                                                <Localize translate_text="One standard lot for Forex = 100,000 units" />
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <Localize translate_text="Point value is based on the current digit of the asset" />
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <Localize translate_text="If the swap rate is positive, your account will be credited with the swap amount. If it is negative, your account will be debited" />
                                            </span>
                                        </li>
                                    </StyledOl>
                                </FormulaText>
                            </ImageWrapper>
                            <TextWrapper>
                                <StyledText size="1.6rem" mt="1.6rem">
                                    <Localize
                                        translate_text="So you will be required to pay a swap charge of <0>0.24 USD</0> to keep the position open for one night."
                                        components={[<strong key={0} />]}
                                    />
                                </StyledText>
                            </TextWrapper>
                        </RightContent>
                    </ContentContainer>

                    <BottomContent direction="column">
                        <BottomText mb="2.4rem" mt="2.4rem">
                            <Localize
                                translate_text="To view the swap rate and digits of the asset, go to Deriv MetaTrader 5 (DMT5), click on the <0>View </0> tab and select<0> Market Watch</0>, then right-click on the symbol you want to trade and select <0>Specification.</0>"
                                components={[<strong key={0} />]}
                            />
                        </BottomText>

                        <BottomText mb="2.4rem">
                            <Localize translate_text="You can derive the point value from the current digits of the asset. Typically, if the digit is 3, then the point value will be 0.001. If the digit is 5, then the point value will be 0.00001, and so on." />
                        </BottomText>

                        <LinkWrapper>
                            <StyledLinkButton
                                tertiary="true"
                                to="https://app.deriv.com/mt5"
                                external="true"
                                target="_blank"
                            >
                                {localize('Go to DMT5 dashboard')}
                            </StyledLinkButton>
                            <StyledLinkButton external secondary="true" to="/trade-types/margin">
                                {localize('Learn more about swaps')}
                            </StyledLinkButton>
                        </LinkWrapper>
                    </BottomContent>
                </>
            )}
        </StyledSection>
    )
}

export default SwapCalculator
