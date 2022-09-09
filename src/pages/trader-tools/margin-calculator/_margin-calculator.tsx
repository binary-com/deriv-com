import React, { useCallback, useEffect, useState } from 'react'
import { Formik, Field } from 'formik'
import { graphql, useStaticQuery } from 'gatsby'
import {
    getMargin,
    numberSubmitFormat,
    getContractSize,
    getCurrency,
    resetValidationMargin,
    getMaxLength,
} from '../common/_utility'
import {
    optionItemDefault,
    leverageItemLists,
    syntheticItemLists,
    financialItemLists,
} from '../common/_underlying-data'
import {
    BreadCrumbContainer,
    CalculateButton,
    CalculatorBody,
    CalculatorForm,
    CalculatorHeader,
    CalculatorLabel,
    CalculatorOutputContainer,
    CalculatorOutputField,
    CalculatorOutputSymbol,
    CalculatorTabItem,
    ContentContainer,
    FormulaText,
    FormWrapper,
    header_style,
    InputGroup,
    item_style,
    LinkWrapper,
    RightContent,
    SectionSubtitle,
    StyledLinkButton,
    StyledOl,
    StyledSection,
} from '../common/_style'
import { localize, Localize } from 'components/localization'
import { Flex, Show } from 'components/containers'
import {
    Accordion,
    AccordionItem,
    Dropdown,
    DropdownSearch,
    Header,
    LocalizedLinkText,
    QueryImage,
    Text,
} from 'components/elements'
import Input from 'components/form/input'
import RightArrow from 'images/svg/tools/black-right-arrow.svg'
import { useDerivApi } from 'components/hooks/use-deriv-api'

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
    const [activeSymbols, setActiveSymbols] = useState([])
    const [disableDropdown, setDisableDropdown] = useState(true)
    const [symbolSpotPrice, setSymbolSpotPrice] = useState({})

    const onTabClick = (t) => {
        setTab(t)
    }
    const deriv_api = useDerivApi()

    useEffect(() => {
        const { send } = deriv_api
        send({ active_symbols: 'full' }, (response) => {
            if (!response.error && response.active_symbols.length > 0) {
                const data = response.active_symbols
                setActiveSymbols(data)
                setDisableDropdown(false)
            }
        })
    }, [])

    useEffect(() => {
        const tempSpotPrice = {}

        if (activeSymbols.length < 1) {
            return
        }
        activeSymbols.forEach((item) => {
            tempSpotPrice[item.symbol] = item.spot
        })

        setSymbolSpotPrice(tempSpotPrice)
    }, [activeSymbols])
    const fetchTickData = useCallback(
        (selectedSymbol, setAssetPrice) => {
            const price = symbolSpotPrice[selectedSymbol]
            setAssetPrice('assetPrice', price)
        },
        [symbolSpotPrice],
    )

    return (
        <>
            <BreadCrumbContainer>
                <Flex jc="flex-start" ai="center">
                    <LocalizedLinkText to="/trader-tools/" color="grey-5">
                        {localize("Traders' tools")}
                    </LocalizedLinkText>
                    <img
                        src={RightArrow}
                        alt={localize('right arrow')}
                        height="16"
                        width="16"
                        style={{ margin: '0 8px' }}
                    />
                    <Text>{localize('Margin calculator')}</Text>
                </Flex>
            </BreadCrumbContainer>
            <StyledSection direction="column">
                <SectionSubtitle as="h3" type="sub-section-title" align="center" weight="normal">
                    {localize(
                        'Our margin calculator helps you to estimate the margin required to keep your positions open overnight on Deriv MT5 (DMT5).',
                    )}
                </SectionSubtitle>
                <ContentContainer mt="8rem" mb="4rem">
                    <FormWrapper>
                        <Formik
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
                            validate={resetValidationMargin}
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
                            }) => {
                                return (
                                    <CalculatorForm>
                                        <CalculatorHeader>
                                            <CalculatorLabel htmlFor="message">
                                                {localize('Margin required')}
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
                                                        setFieldValue('accountType', 'Financial')
                                                        setFieldValue(
                                                            'optionList',
                                                            financialItemLists,
                                                        )
                                                    }}
                                                >
                                                    <Text align="center">
                                                        {localize('Financial')}
                                                    </Text>
                                                </CalculatorTabItem>
                                            </Flex>
                                            <DropdownSearch
                                                id="symbol"
                                                key={tab}
                                                contractSize={values.contractSize}
                                                default_item={optionItemDefault}
                                                error={touched.symbol && errors.symbol}
                                                items={values.optionList}
                                                label={localize('Symbol')}
                                                onChange={(value) => {
                                                    setFieldValue(
                                                        'marginSymbol',
                                                        getCurrency(value),
                                                    )
                                                    setFieldValue(
                                                        'contractSize',
                                                        getContractSize(value),
                                                    )
                                                    setFieldValue('symbol', value.symbol)
                                                    fetchTickData(value.symbol, setFieldValue)
                                                }}
                                                selected_item={values.symbol}
                                                onBlur={handleBlur}
                                                disabled={disableDropdown}
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
                                                                setFieldTouched(
                                                                    'volume',
                                                                    false,
                                                                    false,
                                                                )
                                                            }}
                                                            maxLength={getMaxLength(
                                                                values.volume,
                                                                8,
                                                            )}
                                                            background="white"
                                                        />
                                                    )}
                                                </Field>
                                            </InputGroup>
                                            <InputGroup>
                                                <Field
                                                    name="assetPrice"
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
                                                            error={
                                                                touched.assetPrice &&
                                                                errors.assetPrice
                                                            }
                                                            onBlur={handleBlur}
                                                            handleError={() => {
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
                                                            }}
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
                                )
                            }}
                        </Formik>
                    </FormWrapper>
                    <RightContent>
                        <Header as="h3" type="section-title" mb="0.8rem">
                            {localize('How to calculate margin')}
                        </Header>
                        <Text>
                            <Localize translate_text="The margin required for a contract on DMT5 is calculated based on the formula:" />
                        </Text>
                        <Text mb="1.6rem">
                            <Localize
                                translate_text="<0>Margin = (volume × contract size × asset price) ÷ leverage</0>"
                                components={[<strong key={0} />]}
                            />
                        </Text>
                        <Text mb="1.6rem">
                            <Localize translate_text="This gives you the margin requirement in the quote currency for forex pairs, or in the denomination of the underlying asset for other instruments." />
                        </Text>
                        <Text mb="40px">
                            {localize(
                                'For instance, if you are trading the USD/CHF forex pair, the margin requirement will be calculated in Swiss Franc (CHF) which is the quote currency. On the other hand, if you are trading Volatility Index 75,  then the margin requirement will be calculated in US Dollar (USD), which is the denomination of the underlying asset – Volatility Index 75.',
                            )}
                        </Text>
                        <Header as="h3" type="section-title" mb="0.8rem">
                            {localize('Example calculation')}
                        </Header>
                        <Accordion has_single_state>
                            <AccordionItem
                                header={localize('Margin required')}
                                header_style={header_style}
                                style={item_style}
                                plus
                            >
                                <Text mb="16px">
                                    {localize(
                                        'Let’s say you want to trade two lots of EUR/USD with an asset price of 1.10 USD and leverage of 100.',
                                    )}
                                </Text>
                                <Show.Desktop>
                                    <QueryImage
                                        data={data.margin_formula}
                                        alt={localize('Margin formula')}
                                    />
                                </Show.Desktop>
                                <Show.Mobile>
                                    <QueryImage
                                        data={data.margin_formula_mobile}
                                        alt={localize('Margin formula mobile')}
                                    />
                                </Show.Mobile>
                                <FormulaText>
                                    <StyledOl>
                                        <li>
                                            <span>
                                                <Localize translate_text="One standard lot of forex = 100,000 units" />
                                            </span>
                                        </li>
                                    </StyledOl>
                                </FormulaText>
                                <Text mb="1.6rem" mt="1.6rem">
                                    <Localize
                                        translate_text="So you will require a margin rate of <0>2,200 USD</0> to open the above position."
                                        components={[<strong key={0} />]}
                                    />
                                </Text>
                                <Text>
                                    {localize(
                                        'Note that these are approximate values only and will differ depending on the leverage that is set for your account and the asset you want to trade.',
                                    )}
                                </Text>
                            </AccordionItem>
                        </Accordion>
                        <LinkWrapper height="auto">
                            <StyledLinkButton
                                tertiary
                                external
                                type="mt5"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {localize('Go to Deriv MT5 dashboard')}
                            </StyledLinkButton>
                            <StyledLinkButton secondary to="/trade-types/cfds/">
                                {localize('Learn more about margin')}
                            </StyledLinkButton>
                        </LinkWrapper>
                    </RightContent>
                </ContentContainer>
            </StyledSection>
        </>
    )
}

export default MarginCalculator
