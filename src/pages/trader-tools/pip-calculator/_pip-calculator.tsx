import React, { useEffect, useState } from 'react'
import { Formik, Field } from 'formik'
import { useStaticQuery, graphql } from 'gatsby'
import {
    getPipValue,
    resetValidationPip,
    getCurrency,
    getContractSize,
    numberSubmitFormat,
    getMaxLength,
} from '../common/_utility'
import { optionItemDefault } from '../common/_underlying-data'
import {
    BreadCrumbContainer,
    CalculateButton,
    CalculatorBody,
    CalculatorDropdown,
    CalculatorForm,
    CalculatorHeader,
    CalculatorLabel,
    CalculatorOutputContainer,
    CalculatorOutputField,
    CalculatorOutputSymbol,
    CalculatorTabItem,
    ContentContainer,
    FormWrapper,
    header_style,
    InputGroup,
    item_style,
    LinkWrapper,
    RightContent,
    SectionSubtitle,
    StyledLinkButton,
    StyledSection,
    FormulaText,
    StyledOl,
} from '../common/_style'
import { PipSyntheticExample, PipForexExample } from './_example-pip'
import {
    Accordion,
    AccordionItem,
    Header,
    LocalizedLinkText,
    Text,
    ImageWithDireciton,
} from 'components/elements'
import Input from 'components/form/input'
import RightArrow from 'images/svg/tools/black-right-arrow.svg'
import { Flex, Desktop, Mobile } from 'components/containers'
import { localize, Localize } from 'components/localization'
import { useDerivApi } from 'components/hooks/use-deriv-api'
import { useCountryRule } from 'components/hooks/use-country-rule'

interface DerivAPIResponse {
    active_symbols: []
    error: unknown
}

const PipCalculator = () => {
    const query = graphql`
        query {
            pip_value_formula: file(relativePath: { eq: "trade-tools/pip-value-formula.png" }) {
                ...fadeIn
            }
            pip_value_forex_formula: file(
                relativePath: { eq: "trade-tools/pip-value-forex-formula.png" }
            ) {
                ...fadeIn
            }
            pip_value_formula_mobile: file(
                relativePath: { eq: "trade-tools/pip-value-formula-mobile.png" }
            ) {
                ...fadeIn
            }
            pip_value_forex_formula_mobile: file(
                relativePath: { eq: "trade-tools/pip-value-forex-formula-mobile.png" }
            ) {
                ...fadeIn
            }
        }
    `
    const { is_row } = useCountryRule()
    const [tab, setTab] = useState('Synthetic')
    const [activeSymbols, setActiveSymbols] = useState([])
    const [syntheticSymbolNames, setSyntheticSymbolNames] = useState({})
    const [financialSymbolNames, setFinancialSymbolNames] = useState({})
    const [euSymbolNames, setEuSymbolNames] = useState({})

    const onTabClick = (t) => {
        setTab(t)
    }

    const deriv_api = useDerivApi()

    useEffect(() => {
        const { send } = deriv_api
        send(
            is_row
                ? { active_symbols: 'full' }
                : {
                      trading_platform_product_listing: 1,
                      country_code: 'de',
                  },
            (response: DerivAPIResponse) => {
                if (!response.error && response.active_symbols.length > 0) {
                    const data = response.active_symbols
                    setActiveSymbols(data)
                }
            },
        )
    }, [])

    useEffect(() => {
        const tempEuSymbolNames = []

        if (activeSymbols.length < 1) {
            return
        }
        const data = activeSymbols.filter((activeSymbol) => {
            return activeSymbol
        })
        tempEuSymbolNames.push(data)
        setEuSymbolNames(tempEuSymbolNames)
    }, [activeSymbols])

    useEffect(() => {
        const tempSyntheticSymbolNames = []

        if (activeSymbols.length < 1) {
            return
        }
        const data = activeSymbols.filter((activeSymbol) => {
            return activeSymbol.market === 'synthetic_index'
        })
        tempSyntheticSymbolNames.push(data)
        setSyntheticSymbolNames(tempSyntheticSymbolNames)
    }, [activeSymbols])

    useEffect(() => {
        const tempFinancialSymbolNames = []

        if (activeSymbols.length < 1) {
            return
        }

        const markets = ['forex', 'cryptocurrency', 'basket_index', 'commodities', 'indices']

        const data = activeSymbols.filter((activeSymbol) => {
            return markets.includes(activeSymbol.market)
        })

        tempFinancialSymbolNames.push(data)
        setFinancialSymbolNames(tempFinancialSymbolNames)
    }, [activeSymbols])

    return (
        <>
            <BreadCrumbContainer>
                <Flex jc="flex-start" ai="center">
                    <LocalizedLinkText to="/trader-tools/" color="grey-5">
                        {localize("Traders' tools")}
                    </LocalizedLinkText>
                    <ImageWithDireciton
                        src={RightArrow}
                        alt={localize('right arrow')}
                        height="16"
                        width="16"
                        style={{ margin: '0 8px' }}
                    />
                    <Text>{localize('Pip calculator')}</Text>
                </Flex>
            </BreadCrumbContainer>
            <StyledSection direction="column">
                <SectionSubtitle as="h3" type="sub-section-title" align="center" weight="normal">
                    {localize(
                        'Our pip calculator helps you to estimate the pip value in your trades so that you can better manage your risk.',
                    )}
                </SectionSubtitle>

                <ContentContainer mt="8rem" mb="4rem">
                    <FormWrapper>
                        <Formik
                            enableReinitialize
                            initialValues={{
                                accountType: 'Synthetic',
                                margin: 0,
                                marginSymbol: 'USD',
                                symbol: '',
                                volume: '',
                                pointValue: '',
                                optionList: is_row
                                    ? syntheticSymbolNames && syntheticSymbolNames[0]
                                    : euSymbolNames && euSymbolNames[0],
                                contractSize: '',
                            }}
                            validate={resetValidationPip}
                            onSubmit={(values, { setFieldValue }) => {
                                setFieldValue('margin', getPipValue(values))
                                setFieldValue('volume', numberSubmitFormat(values.volume))
                                setFieldValue('pointValue', numberSubmitFormat(values.pointValue))
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
                                            {localize('Pip value')}
                                        </CalculatorLabel>
                                        <CalculatorOutputContainer>
                                            <CalculatorOutputField>
                                                {values.margin}
                                            </CalculatorOutputField>
                                            <CalculatorOutputSymbol>
                                                {values.marginSymbol}
                                            </CalculatorOutputSymbol>
                                        </CalculatorOutputContainer>
                                    </CalculatorHeader>

                                    <CalculatorBody>
                                        {is_row && (
                                            <>
                                                <CalculatorLabel>
                                                    {localize('Account type')}
                                                </CalculatorLabel>

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
                                                        <Text align="center">
                                                            {localize('Synthetic')}
                                                        </Text>
                                                    </CalculatorTabItem>
                                                    <CalculatorTabItem
                                                        active={tab === 'Financial'}
                                                        disabled={tab === 'Financial'}
                                                        onClick={() => {
                                                            onTabClick('Financial')
                                                            setErrors({})
                                                            resetForm({})
                                                            setFieldValue(
                                                                'accountType',
                                                                'Financial',
                                                            )
                                                            setFieldValue(
                                                                'optionList',
                                                                financialSymbolNames &&
                                                                    financialSymbolNames[0],
                                                            )
                                                        }}
                                                    >
                                                        <Text align="center">
                                                            {localize('Financial')}
                                                        </Text>
                                                    </CalculatorTabItem>
                                                </Flex>
                                            </>
                                        )}
                                        <CalculatorDropdown
                                            option_list={values.optionList}
                                            label={localize('Symbol')}
                                            is_calculator={true}
                                            default_option={optionItemDefault}
                                            selected_option={values.symbol}
                                            id="symbol"
                                            onChange={(value) => {
                                                setFieldValue('marginSymbol', getCurrency(value))
                                                setFieldValue(
                                                    'contractSize',
                                                    getContractSize(value),
                                                )
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
                                                        maxLength={getMaxLength(values.volume, 8)}
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
                                                        label={localize('Point Value')}
                                                        autoComplete="off"
                                                        error={
                                                            touched.pointValue && errors.pointValue
                                                        }
                                                        onBlur={handleBlur}
                                                        handleError={(current_input) => {
                                                            setFieldValue('pointValue', '', false)
                                                            setFieldError('pointValue', '')
                                                            setFieldTouched(
                                                                'pointValue',
                                                                false,
                                                                false,
                                                            )
                                                            current_input.focus()
                                                        }}
                                                        maxLength={getMaxLength(
                                                            values.pointValue,
                                                            15,
                                                        )}
                                                        background="white"
                                                    />
                                                )}
                                            </Field>
                                        </InputGroup>
                                        <Flex mt="3rem">
                                            <CalculateButton
                                                secondary
                                                type="submit"
                                                disabled={!isValid || !dirty}
                                            >
                                                {localize('Calculate')}
                                            </CalculateButton>
                                        </Flex>
                                    </CalculatorBody>
                                </CalculatorForm>
                            )}
                        </Formik>
                    </FormWrapper>

                    <RightContent>
                        <Header as="h3" type="section-title" mb="0.8rem">
                            {localize('How to calculate pip value')}
                        </Header>

                        <Text>
                            {localize(
                                'The pip value for a contract on Deriv MT5 is calculated based on this formula:',
                            )}
                        </Text>
                        <Text mb="1.6rem">
                            <Localize
                                translate_text="<0>Pip value = point value × volume × contract size</0>"
                                components={[<strong key={0} />]}
                            />
                        </Text>

                        <Text mb="1.6rem">
                            {localize(
                                is_row
                                    ? 'For synthetic accounts, the pip value is calculated in USD.'
                                    : 'The pip value is calculated in USD for synthetic indices, metals, energies, stocks, equities, and cryptocurrencies.',
                            )}
                        </Text>
                        <Text mb="40px">
                            {localize(
                                is_row
                                    ? 'For financial accounts, the pip value is in the quote currency for forex pairs.'
                                    : 'The pip value is calculated in the quote currency for forex pairs.',
                            )}
                        </Text>

                        <Header as="h3" type="section-title" mb="0.8rem">
                            {localize('Example calculation')}
                        </Header>

                        <Accordion has_single_state>
                            <AccordionItem
                                header={localize('Pip value for synthetic indices')}
                                header_style={header_style}
                                style={item_style}
                                plus
                            >
                                <Text mb="16px">
                                    {localize(
                                        is_row
                                            ? 'Let’s say you want to trade 1 lot of Volatility 75 Index.'
                                            : 'Let’s say you want to trade 1 lot of Volatility 200 (1s) Index',
                                    )}
                                </Text>

                                <Desktop>
                                    <PipSyntheticExample />
                                </Desktop>

                                <Mobile>
                                    <PipSyntheticExample />
                                </Mobile>
                                <FormulaText>
                                    <StyledOl>
                                        <li>
                                            <span>
                                                {localize(
                                                    'The point value is derived from the current digits of the assets. In the example, the digit is 2, so the point value is 0.01.',
                                                )}
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                {localize(
                                                    is_row
                                                        ? 'The contract size is one standard lot of Volatility 75 index = 1'
                                                        : 'The contract size is one standard lot of Volatility 200 (1s) Index = 1',
                                                )}
                                            </span>
                                        </li>
                                    </StyledOl>
                                </FormulaText>
                                <Text mb="1.6rem" mt="1.6rem">
                                    <Localize
                                        translate_text="So your pip value is <0>0.01 USD</0>."
                                        components={[<strong key={0} />]}
                                    />
                                </Text>
                            </AccordionItem>
                            <AccordionItem
                                header={localize('Pip value for forex')}
                                header_style={header_style}
                                style={item_style}
                                plus
                            >
                                <Text mb="16px">
                                    {localize('Let’s say you want to trade 2 lots of EUR/USD.')}
                                </Text>

                                <Desktop>
                                    <PipForexExample />
                                </Desktop>

                                <Mobile>
                                    <PipForexExample />
                                </Mobile>

                                <FormulaText>
                                    <StyledOl>
                                        <li>
                                            <span>
                                                {localize(
                                                    'The point value is derived from the current digits of the assets. In the example, the digit is 5, so the point value is 0.00001.',
                                                )}
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                {localize(
                                                    'One standard lot of forex = 100,000 units',
                                                )}
                                            </span>
                                        </li>
                                    </StyledOl>
                                </FormulaText>

                                <Text mb="1.6rem" mt="1.6rem">
                                    <Localize
                                        translate_text="So your pip value is <0>2 USD</0>."
                                        components={[<strong key={0} />]}
                                    />
                                </Text>
                            </AccordionItem>
                        </Accordion>

                        <LinkWrapper style={{ height: 'fit-content' }}>
                            <StyledLinkButton
                                secondary
                                external
                                type="mt5"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {localize('Go to Deriv MT5 dashboard')}
                            </StyledLinkButton>
                        </LinkWrapper>
                    </RightContent>
                </ContentContainer>
            </StyledSection>
        </>
    )
}

export default PipCalculator
