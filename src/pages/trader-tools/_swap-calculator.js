import React, { useState } from 'react'
import { Formik, Field } from 'formik'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import { optionItemDefault, syntheticItemLists, financialItemLists } from './_underlying-data'
import {
    StyledText,
    HeaderTabItem,
    WrapContainer,
    ImageWrapper,
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
    StyledFormikDropdown,
} from './_style'
import validation from './_validation'
import { localize, Localize } from 'components/localization'
import { Header, Text, QueryImage } from 'components/elements'
import { Container, Flex } from 'components/containers'
import Input from 'components/form/input'

const SwapFormWrapper = styled(StyledFormWrapper)`
    max-height: 580px;
`

const StyledInputGroup = styled(InputGroup)`
    margin: 0;
`

const SwapCalculator = () => {
    const query = graphql`
        query {
            margin_calc: file(relativePath: { eq: "trade-tools/margin-calc.png" }) {
                ...fadeIn
            }
            margin_formula: file(relativePath: { eq: "trade-tools/margin-formula.png" }) {
                ...fadeIn
            }
            margin_info: file(relativePath: { eq: "trade-tools/margin-info.png" }) {
                ...fadeIn
            }
            swap_calc: file(relativePath: { eq: "trade-tools/synthetic-calc.png" }) {
                ...fadeIn
            }
            swap_formula: file(relativePath: { eq: "trade-tools/synthetic-formula.png" }) {
                ...fadeIn
            }
            swap_forex_formula: file(relativePath: { eq: "trade-tools/forex-formula.png" }) {
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
        const { volume, assetPrice, swapRate, contractSize } = values
        const swap_formula_synthetic = (volume * contractSize * assetPrice * (swapRate / 100)) / 360
        return swap_formula_synthetic.toFixed(4)
    }

    const getSwapChargeForex = (values) => {
        const { volume, pointValue, swapRate, contractSize } = values
        const swap_formula_forex = volume * contractSize * pointValue * swapRate
        return swap_formula_forex.toFixed(4)
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
        if (symbol.market === 'synthetic_indices') {
            currency = 'USD'
        } else {
            if (symbol.market === 'commodities') {
                currency = 'USD'
            } else {
                if (symbol.name === 'DAX_30') {
                    currency = 'EUR'
                } else {
                    if (symbol.name !== 'default') currency = symbol.display_name.slice(-3)
                }
            }
        }
        return currency
    }

    const getContractSize = (symbol) => {
        let contractSize = 1

        if (symbol.market === 'forex') {
            contractSize = 1000
        } else if (symbol.name === 'XAGUSD') {
            contractSize = 500
        } else if (
            symbol.name === 'XAUUSD' ||
            symbol.name === 'XPDUSD' ||
            symbol.name === 'XPTUSD'
        ) {
            contractSize = 100
        } else if (symbol.name === 'Step Index') {
            contractSize = 10
        }

        return contractSize
    }

    return (
        <Container direction="column">
            <Header as="h2" align="center" mt="8rem" mb="1.2rem">
                {localize('Swap Calculator')}
            </Header>

            <Header as="h5" align="center" mb="4rem" weight="normal">
                {localize(
                    'Our swap calculator helps you to estimate the swap charges required to keep your positions open overnight on Deriv MetaTrader 5 (DMT5).',
                )}
            </Header>

            <Flex mb="8rem" p="0 1.6rem" tablet={{ mb: '32px', height: 'unset' }}>
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
                                {({
                                    values,
                                    setFieldValue,
                                    handleBlur,
                                    errors,
                                    touched,
                                    resetForm,
                                }) => (
                                    <StyledForm>
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
                                            <StyledFormikDropdown
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
                                                            handleError={() => resetForm()}
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
                                                            handleError={() => resetForm()}
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
                                                            handleError={() => resetForm()}
                                                        />
                                                    )}
                                                </Field>
                                            </StyledInputGroup>
                                        </CalculatorBody>
                                        <SwapActionSection>
                                            <StyledButton secondary type="submit">
                                                {localize('Calculate')}
                                            </StyledButton>
                                        </SwapActionSection>
                                    </StyledForm>
                                )}
                            </Formik>
                        </SwapFormWrapper>

                        <Flex direction="column" ml="2.4rem" max_width="69rem">
                            <Header as="h3">{localize('How swap charges are calculated')}</Header>

                            <Text size="1.6rem" mb="2rem">
                                <Localize
                                    translate_text="For synthetic indices, the swap charge is calculated on an annual basis for long and short positions using the formula:<1></1><0>Swap charge = volume × contract size × asset price × (swap rate/100) /360</0>"
                                    components={[<strong key={0} />, <br key={1} />]}
                                />
                            </Text>

                            <Text size="1.6rem" mb="2rem">
                                <Localize translate_text="This gives you the swap charge in USD." />
                            </Text>

                            <Header as="h3">{localize('Example Calculation')}</Header>

                            <Text size="1.6rem" mb="2rem">
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
                                                <Localize translate_text="If the swap rate is positive, your account will be credited with the swap amount. If it is negative, your account will be debited" />
                                            </span>
                                        </li>
                                    </StyledOl>
                                </FormulaText>
                            </ImageWrapper>
                            <Text size="1.6rem" mb="2rem" mt="1.6rem">
                                <Localize
                                    translate_text="So you will be required to pay a swap charge of <0>0.83 USD</0> to keep the position open for one night."
                                    components={[<strong key={0} />]}
                                />
                            </Text>
                        </Flex>
                    </WrapContainer>

                    <BottomContent direction="column">
                        <Text size="1.6rem" mb="2.4rem">
                            <Localize
                                translate_text="To view the asset price and swap rate, go to Deriv MetaTrader 5 (DMT5), click on the <0>View </0> tab and select<0> Market Watch</0>, then right-click on the symbol you want to trade and select <0>Specification.</0>"
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
                                {({
                                    values,
                                    setFieldValue,
                                    handleBlur,
                                    errors,
                                    touched,
                                    resetForm,
                                }) => (
                                    <StyledForm>
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
                                            <StyledFormikDropdown
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
                                                            handleError={() => resetForm()}
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
                                                            handleError={() => resetForm()}
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
                                                            handleError={() => resetForm()}
                                                        />
                                                    )}
                                                </Field>
                                            </StyledInputGroup>
                                        </CalculatorBody>
                                        <SwapActionSection>
                                            <StyledButton secondary type="submit">
                                                {localize('Calculate')}
                                            </StyledButton>
                                        </SwapActionSection>
                                    </StyledForm>
                                )}
                            </Formik>
                        </SwapFormWrapper>

                        <Flex direction="column" ml="2.4rem" max_width="69rem">
                            <Header as="h3">{localize('How swap charges are calculated')}</Header>

                            <Text size="1.6rem" mb="2rem">
                                <Localize
                                    translate_text="For forex and commodities, the swap charge is calculated using the formula is:<1></1><0>Swap charge = volume × contract size × point value × swap rate</0>"
                                    components={[<strong key={0} />, <br key={1} />]}
                                />
                            </Text>

                            <Text size="1.6rem" mb="2rem">
                                <Localize translate_text="This gives you the swap charge in the quote currency for forex pairs, or in the denomination of the underlying asset for commodities." />
                            </Text>

                            <Text size="1.6rem" mb="2rem">
                                <Localize translate_text="This gives you the swap charge in the quote currency for forex pairs, or in the denomination of the underlying asset for commodities. For instance, if you are trading the USD/JPY forex pair, the swap charge will be computed in Japanese Yen (JPY) which is the quote currency. On the other hand, if you are trading oil,  then the swap charge will be computed in US Dollar (USD), which is the denomination of the underlying asset – oil." />
                            </Text>

                            <Header as="h3">{localize('Example Calculation')}</Header>

                            <Text size="1.6rem" mb="2rem">
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
                                                <Localize translate_text="If the swap rate is positive, your account will be credited with the swap amount. If it is negative, your account will be deducted" />
                                            </span>
                                        </li>
                                    </StyledOl>
                                </FormulaText>
                            </ImageWrapper>
                            <Text size="1.6rem" mt="1.6rem">
                                <Localize
                                    translate_text="So you will be required to pay a swap charge of <0>0.24 USD</0> to keep the position open for one night."
                                    components={[<strong key={0} />]}
                                />
                            </Text>
                        </Flex>
                    </WrapContainer>

                    <BottomContent direction="column">
                        <Text size="1.6rem" mb="2.4rem" mt="2.4rem">
                            <Localize
                                translate_text="To view the asset price and swap rate, go to Deriv MetaTrader 5 (DMT5), click on the <0>View </0> tab and select<0> Market Watch</0>, then right-click on the symbol you want to trade and select <0>Specification.</0>"
                                components={[<strong key={0} />]}
                            />
                        </Text>

                        <Text size="1.6rem" mb="2.4rem">
                            <Localize translate_text="You can derive the point value from the current digits of the asset. Typically, if the digit is 3, then the point value will be 0.001. If the digit is 5, then the point value will be 0.00001, and so on." />
                        </Text>

                        <LinkWrapper>
                            <StyledLinkButton tertiary="true" to="/dmt5/">
                                {localize('Go to DMT5 dashboard')}
                            </StyledLinkButton>
                            <StyledLinkButton external secondary="true" to="/trade-types/margin">
                                {localize('Learn more about swaps')}
                            </StyledLinkButton>
                        </LinkWrapper>
                    </BottomContent>
                </>
            )}
        </Container>
    )
}

export default SwapCalculator
