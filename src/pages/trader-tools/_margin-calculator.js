import React, { useState } from 'react'
import { Formik, Field } from 'formik'
import { graphql, useStaticQuery } from 'gatsby'
import {
    optionItemDefault,
    leverageItemLists,
    syntheticItemLists,
    financialItemLists,
} from './_underlying-data'
import {
    StyledText,
    AccountTypeTabItem,
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
    StyledHeader,
    StyledTitleHeader,
    CalculatorBody,
    CalculatorHeader,
    ActionSection,
    StyledCurrencyLabel,
    StyledTextAreaContainer,
    StyledDropdown,
} from './_style'
import validation from './_validation'
import { localize, Localize } from 'components/localization'
import { Container, Flex } from 'components/containers'
import { QueryImage, Dropdown } from 'components/elements'
import Input from 'components/form/input'

const MarginCalculator = () => {
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

    const getMargin = (values) => {
        const { volume, assetPrice, leverage, contractSize } = values

        const margin_formula = (volume * contractSize * assetPrice) / leverage.display_name

        return toFixed(margin_formula)
    }

    const toFixed = (val) => {
        return parseFloat(val.toFixed(2))
    }

    const resetValidation = (values) => {
        const errors = {}
        const symbol_error = validation.symbol(values.symbol)
        const volume_error = validation.volume(values.volume)
        const assetPrice_error = validation.assetPrice(values.assetPrice)
        const leverage_error = validation.leverage(values.leverage)

        if (symbol_error) {
            errors.symbol = symbol_error
        }
        if (volume_error) {
            errors.volume = volume_error
        }
        if (assetPrice_error) {
            errors.assetPrice = assetPrice_error
        }
        if (leverage_error) {
            errors.leverage = leverage_error
        }

        return errors
    }

    const getMarginCurrency = (symbol) => {
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
                    if (symbol.name !== 'default' && symbol.name !== 'CL_BRENT')
                        currency = symbol.display_name.slice(-3)
                }
            }
        }
        return currency
    }

    const getContractSize = (symbol) => {
        let contractSize = 1

        if (symbol.market === 'forex') {
            contractSize = 100000
        } else if (symbol.name === 'XAGUSD') {
            contractSize = 5000
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

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    }

    return (
        <Container direction="column">
            <StyledTitleHeader as="h2" align="center" mt="8rem" mb="1.2rem">
                {localize('Margin calculator')}
            </StyledTitleHeader>

            <StyledText as="h5" align="center" mb="4rem" weight="normal">
                {localize(
                    'Our margin calculator helps you to estimate the margin required to keep your positions open overnight on Deriv MetaTrader 5 (DMT5).',
                )}
            </StyledText>

            <WrapContainer mb="4.0rem">
                <StyledFormWrapper>
                    <Formik
                        enableReinitialize
                        initialValues={{
                            accountType: 'Synthetic',
                            margin: 0,
                            marginSymbol: 'USD',
                            symbol: '',
                            volume: '',
                            assetPrice: '',
                            leverage: '',
                            optionList: syntheticItemLists,
                            contractSize: '',
                        }}
                        validate={resetValidation}
                        onSubmit={(values, { setFieldValue }) => {
                            setFieldValue('margin', getMargin(values))
                        }}
                    >
                        {({
                            values,
                            setFieldValue,
                            setFieldError,
                            setFieldTouched,
                            handleBlur,
                            errors,
                            touched,
                            setErrors,
                            resetForm,
                            isValid,
                            dirty,
                        }) => (
                            <StyledForm>
                                <CalculatorHeader>
                                    <StyledLabel htmlFor="message">
                                        {localize('Margin required')}
                                    </StyledLabel>
                                    <StyledTextAreaContainer>
                                        <StyledTextArea
                                            as="textarea"
                                            id="message"
                                            value={numberWithCommas(values.margin)}
                                            disabled
                                        />
                                        <StyledCurrencyLabel>
                                            {values.marginSymbol}
                                        </StyledCurrencyLabel>
                                    </StyledTextAreaContainer>
                                </CalculatorHeader>
                                <CalculatorBody>
                                    <StyledLabel>{localize('Account type')}</StyledLabel>
                                    <Flex
                                        mb="3rem"
                                        mt="1rem"
                                        jc="space-between"
                                        tablet={{ height: 'unset' }}
                                    >
                                        <AccountTypeTabItem
                                            active={tab === 'Synthetic'}
                                            onClick={() => {
                                                onTabClick('Synthetic')
                                                setErrors({})
                                                resetForm()
                                            }}
                                        >
                                            <StyledText align="center">
                                                {localize('Synthetic')}
                                            </StyledText>
                                        </AccountTypeTabItem>
                                        <AccountTypeTabItem
                                            active={tab === 'Financial'}
                                            disabled={tab === 'Financial'}
                                            onClick={() => {
                                                resetForm()
                                                setFieldValue('accountType', 'Financial')
                                                onTabClick('Financial')
                                                setFieldValue('optionList', financialItemLists)
                                            }}
                                        >
                                            <StyledText align="center">
                                                {localize('Financial')}
                                            </StyledText>
                                        </AccountTypeTabItem>
                                    </Flex>

                                    <StyledDropdown
                                        option_list={values.optionList}
                                        label={localize('Symbol')}
                                        default_option={optionItemDefault}
                                        selected_option={values.symbol}
                                        id="symbol"
                                        onChange={(value) => {
                                            setFieldValue('marginSymbol', getMarginCurrency(value))
                                            setFieldValue('contractSize', getContractSize(value))
                                            setFieldValue('symbol', value)
                                        }}
                                        error={touched.symbol && errors.symbol}
                                        onBlur={handleBlur}
                                        autocomplete="off"
                                        contractSize={values.contractSize}
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
                                                    handleError={() => {
                                                        setFieldValue('volume', '', false)
                                                        setFieldError('volume', '')
                                                        setFieldTouched('volume', false, false)
                                                    }}
                                                    required
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
                                                    id="assetPrice"
                                                    type="text"
                                                    label={localize('Asset price')}
                                                    autoComplete="off"
                                                    error={touched.assetPrice && errors.assetPrice}
                                                    onBlur={handleBlur}
                                                    handleError={() => {
                                                        setFieldValue('assetPrice', '', false)
                                                        setFieldError('assetPrice', '')
                                                        setFieldTouched('assetPrice', false, false)
                                                    }}
                                                    required
                                                />
                                            )}
                                        </Field>
                                    </InputGroup>
                                    <Dropdown
                                        option_list={leverageItemLists}
                                        id="leverage"
                                        label={localize('Leverage')}
                                        default_option={optionItemDefault}
                                        selected_option={values.leverage}
                                        onChange={(value) => {
                                            setFieldValue('leverage', value)
                                        }}
                                        error={touched.leverage && errors.leverage}
                                        onBlur={handleBlur}
                                        autoComplete="off"
                                        data-lpignore="true"
                                    />
                                    <ActionSection>
                                        <StyledButton
                                            secondary
                                            type="submit"
                                            disabled={!isValid || !dirty}
                                        >
                                            {localize('Calculate')}
                                        </StyledButton>
                                    </ActionSection>
                                </CalculatorBody>
                            </StyledForm>
                        )}
                    </Formik>
                </StyledFormWrapper>

                <Flex direction="column" max_width="69rem">
                    <StyledHeader as="h3" mb="0.8rem">
                        {localize('How margin is calculated')}
                    </StyledHeader>

                    <StyledText mb="1.6rem">
                        <Localize
                            translate_text="The margin required for a contract on DMT5 is calculated based on the formula:<1></1><0> Margin = volume in lots × contract size × asset price/leverage </0>"
                            components={[<strong key={0} />, <br key={1} />]}
                        />
                    </StyledText>

                    <StyledText mb="1.6rem">
                        <Localize translate_text="This gives you the margin requirement in the quote currency for forex pairs, or in the denomination of the underlying asset for other instruments." />
                    </StyledText>
                    <StyledText mb="2.4rem">
                        {localize(
                            'For instance, if you are trading the USD/CHF forex pair, the margin requirement will be calculated in Swiss Franc (CHF) which is the quote currency. On the other hand, if you are trading Volatility Index 75,  then the margin requirement will be computed in US Dollar (USD), which is the denomination of the underlying asset – Volatility Index 75.',
                        )}
                    </StyledText>

                    <StyledHeader as="h3">{localize('Example calculation')}</StyledHeader>

                    <StyledText mb="1.6rem">
                        {localize(
                            'Let’s say you want to trade two lots of EUR/USD with an asset price of 1.10 USD and leverage of 100.',
                        )}
                    </StyledText>
                    <ImageWrapper>
                        <QueryImage data={data.margin_formula} alt={'Margin formula'} />
                        <FormulaText>
                            <StyledOl>
                                <li>
                                    <span>
                                        <Localize translate_text=" One standard lot of forex = 100,000 units" />
                                    </span>
                                </li>
                            </StyledOl>
                        </FormulaText>
                    </ImageWrapper>
                    <StyledText mb="1.6rem" mt="1.6rem">
                        <Localize
                            translate_text="So you will require a margin rate of <0>2,200 USD</0> to open the above position."
                            components={[<strong key={0} />]}
                        />
                    </StyledText>
                    <StyledText>
                        {localize(
                            'Note that these are approximate values only and will differ depending on the leverage that is set for your account and the asset you want to trade.',
                        )}
                    </StyledText>
                </Flex>
            </WrapContainer>

            <BottomContent direction="column">
                <StyledText mb="2.4rem">
                    <Localize
                        translate_text="To view the asset price, go to Deriv MetaTrader 5 (DMT5), click on the <0>View </0> tab and select<0> Market Watch</0>, then right-click on the symbol you want to trade and select <0>Specification.</0>"
                        components={[<strong key={0} />]}
                    />
                </StyledText>

                <LinkWrapper>
                    <StyledLinkButton
                        tertiary="true"
                        to="https://app.deriv.com/mt5"
                        external="true"
                        target="_blank"
                    >
                        {localize('Go to DMT5 dashboard')}
                    </StyledLinkButton>
                    <StyledLinkButton secondary="true" to="/trade-types/margin">
                        {localize('Learn more about margin')}
                    </StyledLinkButton>
                </LinkWrapper>
            </BottomContent>
        </Container>
    )
}

export default MarginCalculator
