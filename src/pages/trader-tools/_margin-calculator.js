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
    StyledSection,
    SectionHeader,
    SectionSubtitle,
    ContentContainer,
    FormWrapper,
    CalculatorForm,
    CalculatorHeader,
    CalculatorLabel,
    CalculatorOutputContainer,
    CalculatorOutputField,
    CalculatorOutputSymbol,
    CalculatorBody,
    CalculatorTabItem,
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
import { Flex, Show } from 'components/containers'
import { QueryImage, Dropdown } from 'components/elements'
import Input from 'components/form/input'

const MarginCalculator = () => {
    const query = graphql`
        query {
            margin_formula: file(relativePath: { eq: "trade-tools/margin-formula.png" }) {
                ...fadeIn
            }
            margin_info: file(relativePath: { eq: "trade-tools/margin-info.png" }) {
                ...fadeIn
            }
            margin_formula_mobile: file(
                relativePath: { eq: "trade-tools/margin-formula-mobile.png" }
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

    const getMargin = (values) => {
        const { symbol, volume, assetPrice, leverage, contractSize } = values
        let margin_formula
        const STEPINDEX_VALUE = 100
        const RANGEBREAK100VALUE = 400
        const RANGEBREAK200VALUE = 800

        if (symbol.name === 'Step Index') {
            margin_formula = volume * STEPINDEX_VALUE
        } else if (symbol.name === 'Range Break 100 Index') {
            margin_formula = volume * RANGEBREAK100VALUE
        } else if (symbol.name === 'Range Break 200 Index') {
            margin_formula = volume * RANGEBREAK200VALUE
        } else {
            margin_formula = (volume * contractSize * assetPrice) / leverage.name
        }

        return toFixed(margin_formula)
    }

    const toFixed = (val) => {
        return parseFloat(val.toFixed(2)).toLocaleString()
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

    return (
        <StyledSection direction="column">
            <SectionHeader as="h2" align="center" mt="6rem" mb="1.2rem">
                {localize('Margin calculator')}
            </SectionHeader>

            <SectionSubtitle as="h5" align="center" weight="normal">
                {localize(
                    'Our margin calculator helps you to estimate the margin required to keep your positions open overnight on Deriv MetaTrader 5 (DMT5).',
                )}
            </SectionSubtitle>

            <ContentContainer mb="4.0rem">
                <FormWrapper>
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
                            setFieldValue('volume', numberSubmitFormat(values.volume))
                            setFieldValue('assetPrice', numberSubmitFormat(values.assetPrice))
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
                            <CalculatorForm>
                                <CalculatorHeader>
                                    <CalculatorLabel htmlFor="message">
                                        {localize('Margin required')}
                                    </CalculatorLabel>
                                    <CalculatorOutputContainer>
                                        <CalculatorOutputField>
                                            {numberWithCommas(values.margin)}
                                        </CalculatorOutputField>
                                        <CalculatorOutputSymbol>
                                            {values.marginSymbol}
                                        </CalculatorOutputSymbol>
                                    </CalculatorOutputContainer>
                                </CalculatorHeader>

                                <CalculatorBody>
                                    <CalculatorLabel>{localize('Account type')}</CalculatorLabel>
                                    <Flex
                                        mb="3rem"
                                        mt="1rem"
                                        jc="space-between"
                                        tablet={{ height: 'unset' }}
                                    >
                                        <CalculatorTabItem
                                            active={tab === 'Synthetic'}
                                            onClick={() => {
                                                onTabClick('Synthetic')
                                                setErrors({})
                                                resetForm({})
                                            }}
                                        >
                                            <StyledText align="center">
                                                {localize('Synthetic')}
                                            </StyledText>
                                        </CalculatorTabItem>
                                        <CalculatorTabItem
                                            active={tab === 'Financial'}
                                            disabled={tab === 'Financial'}
                                            onClick={() => {
                                                onTabClick('Financial')
                                                setErrors({})
                                                resetForm({})
                                                setFieldValue('accountType', 'Financial')
                                                setFieldValue('optionList', financialItemLists)
                                            }}
                                        >
                                            <StyledText align="center">
                                                {localize('Financial')}
                                            </StyledText>
                                        </CalculatorTabItem>
                                    </Flex>

                                    <CalculatorDropdown
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
                                                    handleError={(current_input) => {
                                                        setFieldValue('volume', '', false)
                                                        setFieldError('volume', '')
                                                        setFieldTouched('volume', false, false)
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
                                                    id="assetPrice"
                                                    type="text"
                                                    label={localize('Asset price')}
                                                    autoComplete="off"
                                                    error={touched.assetPrice && errors.assetPrice}
                                                    onBlur={handleBlur}
                                                    handleError={(current_input) => {
                                                        setFieldValue('assetPrice', '', false)
                                                        setFieldError('assetPrice', '')
                                                        setFieldTouched('assetPrice', false, false)
                                                        current_input.focus()
                                                    }}
                                                    maxLength="15"
                                                    background="white"
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
                                        <CalculateButton
                                            secondary
                                            type="submit"
                                            disabled={!isValid || !dirty}
                                        >
                                            {localize('Calculate')}
                                        </CalculateButton>
                                    </ActionSection>
                                </CalculatorBody>
                            </CalculatorForm>
                        )}
                    </Formik>
                </FormWrapper>

                <RightContent>
                    <TextWrapper>
                        <RightContentHeader as="h3" mb="0.8rem">
                            {localize('How margin is calculated')}
                        </RightContentHeader>

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

                        <RightContentHeader as="h3" mb="0.8rem">
                            {localize('Example calculation')}
                        </RightContentHeader>

                        <StyledText mb="16px">
                            {localize(
                                'Let’s say you want to trade two lots of EUR/USD with an asset price of 1.10 USD and leverage of 100.',
                            )}
                        </StyledText>
                    </TextWrapper>

                    <ImageWrapper>
                        <Show.Desktop>
                            <QueryImage data={data.margin_formula} alt={'Margin formula'} />
                        </Show.Desktop>

                        <Show.Mobile>
                            <QueryImage
                                data={data.margin_formula_mobile}
                                alt={'Margin formula mobile'}
                            />
                        </Show.Mobile>

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

                    <TextWrapper>
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
                    </TextWrapper>
                </RightContent>
            </ContentContainer>

            <BottomContent direction="column">
                <BottomText mb="2.4rem">
                    <Localize
                        translate_text="To view the asset price, go to Deriv MetaTrader 5 (DMT5), click on the <0>View </0> tab and select<0> Market Watch</0>, then right-click on the symbol you want to trade and select <0>Specification.</0>"
                        components={[<strong key={0} />]}
                    />
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
                    <StyledLinkButton secondary="true" to="/trade-types/margin">
                        {localize('Learn more about margin')}
                    </StyledLinkButton>
                </LinkWrapper>
            </BottomContent>
        </StyledSection>
    )
}

export default MarginCalculator
