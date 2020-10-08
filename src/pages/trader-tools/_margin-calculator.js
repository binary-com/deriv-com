import React, { useState, useEffect } from 'react'
import { Formik } from 'formik'
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
    AccountTypeButtonWrapper,
    CalculatorBody,
    CalculatorHeader,
    ActionSection,
    StyledCurrencyLabel,
    StyledTextAreaContainer,
    StyledFormikSymbolDropdown,
} from './_style'
import { localize, Localize } from 'components/localization'
import { Container, Flex } from 'components/containers'
import { Text, QueryImage } from 'components/elements'
import validation from 'common/validation'
import FormikSymbolDropdown from 'components/formikComponents/symbolDropdown'
import FormikInput from 'components/formikComponents/input'

// import { BinarySocketBase } from 'common/websocket/socket_base';`

const MarginCalculator = () => {
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

    const getMargin = (values) => {
        const { volume, assetPrice, leverage, contractSize } = values

        const margin = (volume * contractSize * assetPrice) / leverage.displayName

        return margin.toFixed(4)
    }

    const resetValidation = (values) => {
        let errors = {}
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
                    if (symbol.displayName !== 'Please select a value')
                        currency = symbol.displayName.slice(-3)
                }
            }
        }
        return currency
    }

    const getContractSize = (symbol) => {
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

    useEffect(() => {
        // fetchSymbol()
        // console.log('effect')
    }, [])

    return (
        <Container direction="column">
            <StyledHeaderTitle align="center" as="h2">
                {localize('Margin calculator')}
            </StyledHeaderTitle>
            <StyledHeaderP>
                <Localize
                    translate_text="Our margin calculator helps you to estimate the margin required to keep your
        positions open overnight on Deriv MetaTrader 5 (DMT5)."
                    components={[<strong key={0} />]}
                />
            </StyledHeaderP>
            <WrapContainer mb="4.0rem">
                <StyledFormWrapper>
                    <Formik
                        initialValues={{
                            accountType: 'Synthetic',
                            margin: '',
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
                            handleBlur,
                            errors,
                            touched,
                            setErrors,
                            resetForm,
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
                                            value={values.margin}
                                            disabled
                                        />
                                        <StyledCurrencyLabel>
                                            {values.marginSymbol}
                                        </StyledCurrencyLabel>
                                    </StyledTextAreaContainer>
                                </CalculatorHeader>
                                <CalculatorBody>
                                    <StyledLabel>{localize('Account type')}</StyledLabel>
                                    <AccountTypeButtonWrapper
                                        mb="3rem"
                                        mt="1rem"
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
                                    </AccountTypeButtonWrapper>

                                    <StyledFormikSymbolDropdown
                                        mb="2.4rem"
                                        option_list={values.optionList}
                                        label={localize('Symbol')}
                                        default_option={optionItemDefault}
                                        selected_option={values.symbol}
                                        id="symbol"
                                        onChange={(x) => {
                                            setFieldValue('marginSymbol', getMarginCurrency(x))
                                            setFieldValue('contractSize', getContractSize(x))
                                            setFieldValue('symbol', x)
                                        }}
                                        error={touched.symbol && errors.symbol}
                                        onBlur={handleBlur}
                                        autocomplete="off"
                                        contractSize={values.contractSize}
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
                                            required
                                            handleError={() => resetForm()}
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
                                            onBlur={handleBlur}
                                            data-lpignore="true"
                                            handleError={() => resetForm()}
                                        />
                                    </InputGroup>
                                    <FormikSymbolDropdown
                                        option_list={leverageItemLists}
                                        id="leverage"
                                        label={localize('Leverage')}
                                        default_option={optionItemDefault}
                                        selected_option={values.leverage}
                                        onChange={(x) => {
                                            setFieldValue('leverage', x)
                                        }}
                                        error={touched.leverage && errors.leverage}
                                        onBlur={handleBlur}
                                        autoComplete="off"
                                        data-lpignore="true"
                                    />
                                </CalculatorBody>
                                <ActionSection>
                                    <StyledButton secondary type="submit">
                                        {localize('Calculate')}
                                    </StyledButton>
                                </ActionSection>
                            </StyledForm>
                        )}
                    </Formik>
                </StyledFormWrapper>

                <Flex direction="column" max_width="69rem">
                    <StyledHeader align="center" as="h3" mt="1.6rem">
                        {localize('How margin is calculated')}
                    </StyledHeader>

                    <Text size="16px" mb="16px">
                        <Localize
                            translate_text="The margin required for a contract on DMT5 is calculated based on the formula:<1></1><0> Margin = volume in lots × contract size × asset price/leverage </0>"
                            components={[<strong key={0} />, <br key={1} />]}
                        />
                    </Text>

                    <Text size="16px" mb="16px">
                        <Localize
                            translate_text="This gives you the margin requirement in the quote currency for forex pairs, or in the denomination of the underlying asset for other instruments."
                            components={[<strong key={0} />]}
                        />
                    </Text>
                    <Text size="16px" mb="2.4rem">
                        {localize(
                            'For instance, if you are trading the USD/CHF forex pair, the margin requirement will be calculated in Swiss Franc (CHF) which is the quote currency. On the other hand, if you are trading Volatility Index 75,  then the margin requirement will be computed in US Dollar (USD), which is the denomination of the underlying asset – Volatility Index 75.',
                        )}
                    </Text>

                    <StyledHeader align="center" as="h3">
                        {localize('Example Calculation')}
                    </StyledHeader>

                    <Text size="16px" mb="16px">
                        {localize(
                            'Let’s say you want to trade two lots of EUR/USD with an asset price of 1.10 USD and leverage of 100.',
                        )}
                    </Text>
                    <ImageWrapper>
                        <QueryImage data={data.margin_formula} alt={'Margin formula'} />
                        <FormulaText>
                            <StyledOl>
                                <li>
                                    <span>
                                        <Localize
                                            translate_text=" One standard lot of forex = 100,000 units"
                                            components={[<strong key={0} />]}
                                        />
                                    </span>
                                </li>
                            </StyledOl>
                        </FormulaText>
                    </ImageWrapper>
                    <Text size="16px" mb="16px" mt="1.6rem">
                        <Localize
                            translate_text="So you will require a margin rate of <0>2,200 USD</0> to open the above position."
                            components={[<strong key={0} />]}
                        />
                    </Text>
                    <Text size="16px">
                        {localize(
                            'Note that these are approximate values only and will differ depending on the leverage that is set for your account and the asset you want to trade.',
                        )}
                    </Text>
                </Flex>
            </WrapContainer>

            <BottomContent direction="column">
                <Text size="16px" mb="2.4rem">
                    <Localize
                        translate_text="To view the asset price, go to Deriv MetaTrader 5 (DMT5), click on the <0>View </0> tab and select<0> Market Watch</0>, then right-click on the symbol you want to trade
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
                        <StyledLinkButton external secondary="true" to="/trade-types/margin">
                            {localize('Learn more about margin')}
                        </StyledLinkButton>
                    }
                </LinkWrapper>
            </BottomContent>
        </Container>
    )
}

MarginCalculator.propTypes = {}

export default MarginCalculator
