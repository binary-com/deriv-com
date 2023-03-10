// TODO: Should do error handling for when the request was not successful and give the user
// ability to refetch the dropdown list again.
import React, { useCallback, useEffect, useState } from 'react'
import { Formik, Field } from 'formik'
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
    FormulaContainer,
    FormulaHighlight,
    FormulaValue,
    StyledSpan,
    FormulaValueSwapSyntheticMobile,
    FormulaGreen,
    PointerContainer,
    PointerDot,
    PointerStick,
    PointerText,
    FormulaContainerMobile,
    FormulaHighlightMobile,
    FormulaValueMobile,
    PointerContainerMobile,
    PointerStickMobile,
    PointerDotMobile,
    PointerTextMobile,
} from '../common/_style'
import { Localize, localize } from 'components/localization'
import { Flex, Desktop, Mobile } from 'components/containers'
import {
    Accordion,
    AccordionItem,
    Dropdown,
    DropdownSearch,
    Header,
    ImageWithDireciton,
    LocalizedLinkText,
    Text,
} from 'components/elements'
import Input from 'components/form/input'
import RightArrow from 'images/svg/tools/black-right-arrow.svg'
import useWS from 'components/hooks/useWS'

const MarginCalculator = () => {
    const { data, is_loading, send } = useWS('active_symbols')
    const [tab, setTab] = useState('Synthetic')

    const onTabClick = (t) => {
        setTab(t)
    }

    useEffect(() => {
        send({ active_symbols: 'full' })
    }, [send])

    const fetchTickData = useCallback(
        (selectedSymbol, setAssetPrice) => {
            const selected = data?.find((item) => item.symbol === selectedSymbol)
            if (selected) setAssetPrice('assetPrice', selected.spot)
        },
        [data],
    )

    return (
        <>
            <BreadCrumbContainer>
                <Flex jc="flex-start" ai="center">
                    <LocalizedLinkText to="/trader-tools/" color="grey-5">
                        <Localize translate_text="_t_Traders' tools_t_" />
                    </LocalizedLinkText>
                    <ImageWithDireciton
                        src={RightArrow}
                        alt={localize('_t_right arrow_t_')}
                        height="16"
                        width="16"
                        style={{ margin: '0 8px' }}
                    />
                    <Text>
                        <Localize translate_text="_t_Margin calculator_t_" />
                    </Text>
                </Flex>
            </BreadCrumbContainer>
            <StyledSection direction="column">
                <SectionSubtitle as="h3" type="sub-section-title" align="center" weight="normal">
                    <Localize translate_text="_t_Our margin calculator helps you to estimate the margin required to keep your positions open overnight on Deriv MT5._t_" />
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
                                                <Localize translate_text="_t_Margin required_t_" />
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
                                                <Localize translate_text="_t_Account type_t_" />
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
                                                        <Localize translate_text="_t_Synthetic_t_" />
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
                                                        <Localize translate_text="_t_Financial_t_" />
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
                                                label="_t_Symbol_t_"
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
                                                disabled={is_loading}
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
                                                            label="_t_Volume_t_"
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
                                                            label="_t_Asset price_t_"
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
                                                label="_t_Leverage_t_"
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
                                                    <Localize translate_text="_t_Calculate_t_" />
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
                            <Localize translate_text="_t_How to calculate margin_t_" />
                        </Header>
                        <Text>
                            <Localize translate_text="_t_The margin required for a contract on Deriv MT5 is calculated based on the formula:_t_" />
                        </Text>
                        <Text mb="1.6rem">
                            <Localize
                                translate_text="_t_<0>Margin = (volume × contract size × asset price) ÷ leverage</0>_t_"
                                components={[<strong key={0} />]}
                            />
                        </Text>
                        <Text mb="1.6rem">
                            <Localize translate_text="_t_This gives you the margin requirement in the quote currency for forex pairs, or in the denomination of the underlying asset for other instruments._t_" />
                        </Text>
                        <Text mb="40px">
                            <Localize translate_text="_t_For instance, if you are trading the USD/CHF forex pair, the margin requirement will be calculated in Swiss Franc (CHF) which is the quote currency. On the other hand, if you are trading Volatility Index 75,  then the margin requirement will be calculated in US Dollar (USD), which is the denomination of the underlying asset – Volatility Index 75._t_" />
                        </Text>
                        <Header as="h3" type="section-title" mb="0.8rem">
                            <Localize translate_text="_t_Example calculation_t_" />
                        </Header>
                        <Accordion id="margin-calculator" has_single_state>
                            <AccordionItem
                                header="_t_Margin required_t_"
                                header_style={header_style}
                                style={item_style}
                                plus
                                class_name="margin-required"
                            >
                                <Text mb="16px">
                                    <Localize translate_text="_t_Let’s say you want to trade two lots of EUR/USD with an asset price of 1.10 USD and leverage of 100._t_" />
                                </Text>
                                <Desktop>
                                    <FormulaContainer pt="50px" height="170px">
                                        <FormulaHighlight pl="87px" pr="87px" jc="space-evenly">
                                            <FormulaValue>
                                                <Localize translate_text="_t_( 2_t_" />
                                                <PointerContainer>
                                                    <PointerDot />
                                                    <PointerStick height="32px" />
                                                    <PointerText>
                                                        <Localize translate_text="_t_Volume_t_" />
                                                    </PointerText>
                                                </PointerContainer>
                                            </FormulaValue>

                                            <FormulaValue>
                                                <FormulaGreen> x </FormulaGreen>
                                            </FormulaValue>

                                            <FormulaValue>
                                                <Localize translate_text="_t_100,000_t_" />
                                                <PointerContainer width="100px" ml="-25px" top>
                                                    <PointerDot />
                                                    <PointerStick height="32px" />
                                                    <PointerText top>
                                                        <Localize translate_text="_t_Contract size_t_" />
                                                        <StyledSpan> 1</StyledSpan>
                                                    </PointerText>
                                                </PointerContainer>
                                            </FormulaValue>

                                            <FormulaValue>
                                                <FormulaGreen>x</FormulaGreen>
                                            </FormulaValue>

                                            <FormulaValue>
                                                <Localize translate_text="_t_1.10 )_t_" />
                                                <PointerContainer width="100px" ml="-20px">
                                                    <PointerDot />
                                                    <PointerStick height="32px" />
                                                    <PointerText>
                                                        <Localize translate_text="_t_Asset price_t_" />
                                                    </PointerText>
                                                </PointerContainer>
                                            </FormulaValue>

                                            <FormulaValue>
                                                <FormulaGreen>&divide; </FormulaGreen>
                                            </FormulaValue>

                                            <FormulaValue>
                                                <Localize translate_text="_t_100_t_" />
                                                <PointerContainer ml="-10px" top>
                                                    <PointerDot />
                                                    <PointerStick height="32px" />
                                                    <PointerText>
                                                        <Localize translate_text="_t_Leverage_t_" />
                                                    </PointerText>
                                                </PointerContainer>
                                            </FormulaValue>

                                            <FormulaValue>
                                                <FormulaGreen>=</FormulaGreen>
                                            </FormulaValue>

                                            <FormulaValue>
                                                <Localize
                                                    translate_text="_t_<0>2,200</0>_t_"
                                                    components={[<FormulaGreen key={0} />]}
                                                />
                                                <PointerContainer ml="-30px" width="100px">
                                                    <PointerDot />
                                                    <PointerStick height="32px" />
                                                    <PointerText>
                                                        <Localize translate_text="_t_Margin required_t_" />
                                                    </PointerText>
                                                </PointerContainer>
                                            </FormulaValue>
                                        </FormulaHighlight>
                                    </FormulaContainer>
                                </Desktop>
                                <Mobile>
                                    <FormulaContainerMobile>
                                        <FormulaHighlightMobile jc="space-evenly">
                                            <FormulaValueMobile>
                                                <Localize translate_text="_t_( 2_t_" />
                                                <PointerContainerMobile>
                                                    <PointerDotMobile />
                                                    <PointerStickMobile />
                                                    <PointerTextMobile>
                                                        <Localize translate_text="_t_Volume_t_" />
                                                    </PointerTextMobile>
                                                </PointerContainerMobile>
                                            </FormulaValueMobile>

                                            <FormulaValueSwapSyntheticMobile>
                                                <FormulaGreen> x </FormulaGreen>
                                            </FormulaValueSwapSyntheticMobile>

                                            <FormulaValueMobile>
                                                <Localize translate_text="_t_100,000_t_" />
                                                <PointerContainerMobile top ml="-20px" mw="0">
                                                    <PointerDotMobile />
                                                    <PointerStickMobile />
                                                    <PointerTextMobile top>
                                                        <Localize translate_text="_t_Contract size_t_" />
                                                        <StyledSpan> 1</StyledSpan>
                                                    </PointerTextMobile>
                                                </PointerContainerMobile>
                                            </FormulaValueMobile>

                                            <FormulaValueSwapSyntheticMobile>
                                                <FormulaGreen>x</FormulaGreen>
                                            </FormulaValueSwapSyntheticMobile>

                                            <FormulaValueMobile>
                                                <Localize translate_text="_t_1.10 )_t_" />
                                                <PointerContainerMobile ml="-20px" mw="0">
                                                    <PointerDotMobile />
                                                    <PointerStickMobile />
                                                    <PointerTextMobile>
                                                        <Localize translate_text="_t_Asset price_t_" />
                                                    </PointerTextMobile>
                                                </PointerContainerMobile>
                                            </FormulaValueMobile>

                                            <FormulaValueMobile>
                                                <FormulaGreen>&divide; </FormulaGreen>
                                            </FormulaValueMobile>

                                            <FormulaValueMobile>
                                                <Localize translate_text="_t_100_t_" />
                                                <PointerContainerMobile top ml="4px">
                                                    <PointerDotMobile />
                                                    <PointerStickMobile />
                                                    <PointerTextMobile top>
                                                        <Localize translate_text="_t_Leverage_t_" />
                                                    </PointerTextMobile>
                                                </PointerContainerMobile>
                                            </FormulaValueMobile>

                                            <FormulaValueSwapSyntheticMobile>
                                                <FormulaGreen>=</FormulaGreen>
                                            </FormulaValueSwapSyntheticMobile>

                                            <FormulaValueMobile>
                                                <Localize
                                                    translate_text="_t_<0>2,200</0>_t_"
                                                    components={[<FormulaGreen key={0} />]}
                                                />
                                                <PointerContainerMobile mw="0" ml="-20px">
                                                    <PointerDotMobile />
                                                    <PointerStickMobile />
                                                    <PointerTextMobile ml="-25px">
                                                        <Localize translate_text="_t_Margin required_t_" />
                                                    </PointerTextMobile>
                                                </PointerContainerMobile>
                                            </FormulaValueMobile>
                                        </FormulaHighlightMobile>
                                    </FormulaContainerMobile>
                                </Mobile>
                                <FormulaText>
                                    <StyledOl>
                                        <li>
                                            <span>
                                                <Localize translate_text="_t_One standard lot of forex = 100,000 units_t_" />
                                            </span>
                                        </li>
                                    </StyledOl>
                                </FormulaText>
                                <Text mb="1.6rem" mt="1.6rem">
                                    <Localize
                                        translate_text="_t_So you will require a margin rate of <0>2,200 USD</0> to open the above position._t_"
                                        components={[<strong key={0} />]}
                                    />
                                </Text>
                                <Text>
                                    <Localize translate_text="_t_Note that these are approximate values only and will differ depending on the leverage that is set for your account and the asset you want to trade._t_" />
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
                                <Localize translate_text="_t_Go to Deriv MT5 dashboard_t_" />
                            </StyledLinkButton>
                            <StyledLinkButton secondary to="/trade-types/cfds/">
                                <Localize translate_text="_t_Learn more about margin_t_" />
                            </StyledLinkButton>
                        </LinkWrapper>
                    </RightContent>
                </ContentContainer>
            </StyledSection>
        </>
    )
}

export default MarginCalculator
