import * as React from 'react'
import { useState, useRef } from 'react'
import { Field, Formik } from 'formik'
import {
    getContractSize,
    getCurrency,
    getPnlMarginCommon,
    numberSubmitFormat,
    resetValidationPnlMargin,
    getMaxLength,
} from '../common/_utility'
import {
    financialItemLists,
    optionItemDefault,
    syntheticItemLists,
} from '../common/_underlying-data'
import {
    BreadCrumbContainer,
    CalculateButton,
    CalculatorBody,
    CalculatorDropdown,
    CalculatorHeader,
    CalculatorLabel,
    ContentContainer,
    FormulaText,
    FormWrapper,
    header_style,
    InputGroup,
    LinkWrapper,
    PnlCalculatorFormMobile,
    PnlCalculatorHeaderMobile,
    PnLCalculatorOutputContainer,
    PnLCalculatorOutputField,
    PnLCalculatorOutputSymbol,
    PnlCalculatorTabItem,
    PnlHeaderOverflow,
    PnLInputGroup,
    RightContent,
    SectionSubtitle,
    StyledLinkButton,
    StyledOl,
    StyledSection,
    SwapTabSelector,
} from '../common/_style'
import { StopLoss, PipValue, TakeProfitLevel, ProfitPipValue } from './_example-pnl-margin'
import { localize, Localize } from 'components/localization'
import {
    Accordion,
    AccordionItem,
    Header,
    ImageWithDireciton,
    LocalizedLinkText,
    Text,
} from 'components/elements'
import { Desktop, Mobile } from 'components/containers/visibility'
import { Flex } from 'components/containers'
import Input from 'components/form/input'
import RightArrow from 'images/svg/tools/black-right-arrow.svg'

const PnlMarginCalculator = () => {
    const formik_ref = useRef(null)
    const form = formik_ref.current

    const [tab, setTab] = useState('Buy')
    const [sub_tab, setSubTab] = useState('Synthetic')
    // These additional states have been created to track the first output (levels)
    // from the calculator in order to rerender the second output (pips)
    const [stop_loss_output, setStopLossOutput] = useState('0')
    const [take_profit_output, setTakeProfitOutput] = useState('0')

    const onTabClick = (t) => {
        setTab(t)
        if (form) {
            form.resetForm({})
            form.setErrors({})
            form.setFieldValue('accountType', sub_tab === 'Synthetic' ? 'Synthetic' : 'Financial')
            form.setFieldValue(
                'optionList',
                sub_tab === 'Synthetic' ? syntheticItemLists : financialItemLists,
            )
        }
    }
    const onSubTabClick = (t) => setSubTab(t)

    // Watch the state of the first output, and update the second output upon change
    // TODO: Find a cleaner solution for this
    React.useEffect(() => {
        if (form?.values.pointValue) {
            form.setFieldValue(
                'stopLossPips',
                getPnlMarginCommon(formik_ref.current.values, 'getStopLossPip'),
            )
            form.setFieldValue(
                'takeProfitPips',
                getPnlMarginCommon(formik_ref.current.values, 'getTakeProfitPip'),
            )
            // The 2 calls below is to reset the output state in order
            // prevent the pip output from displaying NAN
            setStopLossOutput('0')
            setTakeProfitOutput('0')
        }
    }, [stop_loss_output, take_profit_output])

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
                        <Localize translate_text="_t_PnL for margin_t_" />
                    </Text>
                </Flex>
            </BreadCrumbContainer>
            <StyledSection direction="column">
                <SectionSubtitle as="h3" type="sub-section-title" align="center" weight="normal">
                    <Localize translate_text="_t_Our profit and loss calculator for margin helps you to approximate your losses and/or gains._t_" />
                </SectionSubtitle>

                <Flex mt="80px" mb="40px" tablet={{ mt: '40px', mb: '24px' }}>
                    <SwapTabSelector
                        active={tab === 'Buy'}
                        onClick={() => onTabClick('Buy')}
                        id="pnl-margin-tab-selector"
                    >
                        <Text size="var(--text-size-m)" align="center" className="buy">
                            <Localize translate_text="_t_Buy_t_" />
                        </Text>
                    </SwapTabSelector>
                    <SwapTabSelector active={tab === 'Sell'} onClick={() => onTabClick('Sell')}>
                        <Text size="var(--text-size-m)" align="center" className="sell">
                            <Localize translate_text="_t_Sell_t_" />
                        </Text>
                    </SwapTabSelector>
                </Flex>

                <ContentContainer mb="4.0rem">
                    <FormWrapper>
                        <Formik
                            innerRef={formik_ref}
                            enableReinitialize
                            initialValues={{
                                accountType: 'Synthetic',
                                pnlMarginSymbol: 'USD',
                                stopLossPips: 0,
                                stopLossLevel: 0,
                                takeProfitPips: 0,
                                takeProfitLevel: 0,
                                symbol: '',
                                pointValue: '',
                                volume: '',
                                takeProfitAmount: '',
                                optionList: syntheticItemLists,
                                contractSize: '',
                                assetPrice: '',
                                stopLossAmount: '',
                            }}
                            validate={resetValidationPnlMargin}
                            onSubmit={(values, { setFieldValue }) => {
                                setFieldValue(
                                    'stopLossPips',
                                    getPnlMarginCommon(values, 'getStopLossPip'),
                                )
                                if (tab === 'Buy') {
                                    setFieldValue(
                                        'takeProfitLevel',
                                        getPnlMarginCommon(values, 'getTakeProfitLevelBuy'),
                                    )
                                    setTakeProfitOutput(
                                        getPnlMarginCommon(values, 'getTakeProfitLevelBuy'),
                                    )
                                    setFieldValue(
                                        'stopLossLevel',
                                        getPnlMarginCommon(values, 'getStopLossLevelBuy'),
                                    )
                                    setStopLossOutput(
                                        getPnlMarginCommon(values, 'getStopLossLevelBuy'),
                                    )
                                }
                                if (tab === 'Sell') {
                                    setFieldValue(
                                        'stopLossLevel',
                                        getPnlMarginCommon(values, 'getStopLossLevelSell'),
                                    )
                                    setStopLossOutput(
                                        getPnlMarginCommon(values, 'getStopLossLevelSell'),
                                    )
                                    setFieldValue(
                                        'takeProfitLevel',
                                        getPnlMarginCommon(values, 'getTakeProfitLevelSell'),
                                    )
                                    setTakeProfitOutput(
                                        getPnlMarginCommon(values, 'getTakeProfitLevelSell'),
                                    )
                                }
                                setFieldValue(
                                    'takeProfitPips',
                                    getPnlMarginCommon(values, 'getTakeProfitPip'),
                                )

                                setFieldValue('pointValue', numberSubmitFormat(values.pointValue))
                                setFieldValue('volume', numberSubmitFormat(values.volume))
                                setFieldValue('assetPrice', numberSubmitFormat(values.assetPrice))
                                setFieldValue(
                                    'stopLossAmount',
                                    numberSubmitFormat(values.stopLossAmount),
                                )
                                setFieldValue(
                                    'takeProfitAmount',
                                    numberSubmitFormat(values.takeProfitAmount),
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
                                setErrors,
                                resetForm,
                            }) => {
                                const pnlSyntheticHandler = () => {
                                    onSubTabClick('Synthetic')
                                    setErrors({})
                                    resetForm()
                                }

                                const pnlFinancialHandler = () => {
                                    onSubTabClick('Financial')
                                    setErrors({})
                                    resetForm()
                                    setFieldValue('accountType', 'Financial')
                                    setFieldValue('optionList', financialItemLists)
                                }

                                const calculatorDropdownHandler = (value) => {
                                    setFieldValue('pnlMarginSymbol', getCurrency(value))
                                    setFieldValue('contractSize', getContractSize(value))
                                    setFieldValue('symbol', value)
                                }

                                const takeProfitErrorHanlder = (current_input) => {
                                    setFieldValue('takeProfitAmount', '', false)
                                    setFieldError('takeProfitAmount', '')
                                    setFieldTouched('takeProfitAmount', false, false)
                                    current_input?.current?.focus()
                                }

                                const stopLossErrorHandler = (current_input) => {
                                    setFieldValue('stopLossAmount', '', false)
                                    setFieldError('stopLossAmount', '')
                                    setFieldTouched('stopLossAmount', false, false)
                                    current_input?.current?.focus()
                                }

                                const takeProfitAmountChangeHandler = (value) => {
                                    setFieldValue('takeProfitAmount', value)
                                }

                                const stopLossAmountChangeHandler = (value) => {
                                    setFieldValue('stopLossAmount', value)
                                }

                                return (
                                    <>
                                        <Desktop breakpoint="tablet">
                                            <PnlCalculatorFormMobile>
                                                <CalculatorHeader>
                                                    <Flex mb="24px">
                                                        <Flex fd="column" mr="24px">
                                                            <CalculatorLabel htmlFor="message">
                                                                <Localize translate_text="_t_Stop loss pips_t_" />
                                                            </CalculatorLabel>
                                                            <PnLCalculatorOutputContainer>
                                                                <PnLCalculatorOutputField>
                                                                    {values.stopLossPips}
                                                                </PnLCalculatorOutputField>
                                                                <PnLCalculatorOutputSymbol>
                                                                    {values.pnlMarginSymbol}
                                                                </PnLCalculatorOutputSymbol>
                                                            </PnLCalculatorOutputContainer>
                                                        </Flex>
                                                        <Flex fd="column">
                                                            <CalculatorLabel htmlFor="message">
                                                                <Localize translate_text="_t_Stop loss level_t_" />
                                                            </CalculatorLabel>
                                                            <PnLCalculatorOutputContainer>
                                                                <PnLCalculatorOutputField>
                                                                    {values.stopLossLevel}
                                                                </PnLCalculatorOutputField>
                                                                <PnLCalculatorOutputSymbol>
                                                                    {values.pnlMarginSymbol}
                                                                </PnLCalculatorOutputSymbol>
                                                            </PnLCalculatorOutputContainer>
                                                        </Flex>
                                                    </Flex>

                                                    <Flex>
                                                        <Flex fd="column" mr="24px">
                                                            <CalculatorLabel htmlFor="message">
                                                                <Localize translate_text="_t_Take profit pips_t_" />
                                                            </CalculatorLabel>
                                                            <PnLCalculatorOutputContainer>
                                                                <PnLCalculatorOutputField>
                                                                    {values.takeProfitPips}
                                                                </PnLCalculatorOutputField>
                                                                <PnLCalculatorOutputSymbol>
                                                                    {values.pnlMarginSymbol}
                                                                </PnLCalculatorOutputSymbol>
                                                            </PnLCalculatorOutputContainer>
                                                        </Flex>
                                                        <Flex fd="column">
                                                            <CalculatorLabel htmlFor="message">
                                                                <Localize translate_text="_t_Take profit level_t_" />
                                                            </CalculatorLabel>
                                                            <PnLCalculatorOutputContainer>
                                                                <PnLCalculatorOutputField>
                                                                    {values.takeProfitLevel}
                                                                </PnLCalculatorOutputField>
                                                                <PnLCalculatorOutputSymbol>
                                                                    {values.pnlMarginSymbol}
                                                                </PnLCalculatorOutputSymbol>
                                                            </PnLCalculatorOutputContainer>
                                                        </Flex>
                                                    </Flex>
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
                                                        <PnlCalculatorTabItem
                                                            active={sub_tab === 'Synthetic'}
                                                            onClick={pnlSyntheticHandler}
                                                        >
                                                            <Text align="center">
                                                                <Localize translate_text="_t_Synthetic_t_" />
                                                            </Text>
                                                        </PnlCalculatorTabItem>
                                                        <PnlCalculatorTabItem
                                                            active={sub_tab === 'Financial'}
                                                            disabled={sub_tab === 'Financial'}
                                                            onClick={pnlFinancialHandler}
                                                        >
                                                            <Text align="center">
                                                                <Localize translate_text="_t_Financial_t_" />
                                                            </Text>
                                                        </PnlCalculatorTabItem>
                                                    </Flex>
                                                    <Flex jc="space-between">
                                                        <Flex
                                                            fd="column"
                                                            width="100%"
                                                            ml="3px"
                                                            mr="2rem"
                                                        >
                                                            <CalculatorDropdown
                                                                option_list={values.optionList}
                                                                label={localize('_t_Symbol_t_')}
                                                                default_option={optionItemDefault}
                                                                selected_option={values.symbol}
                                                                id="symbol"
                                                                onChange={calculatorDropdownHandler}
                                                                contractSize={values.contractSize}
                                                                error={
                                                                    touched.symbol && errors.symbol
                                                                }
                                                                onBlur={handleBlur}
                                                            />
                                                        </Flex>
                                                        <Flex fd="column" width="100%" ml="5px">
                                                            <PnLInputGroup>
                                                                <Field
                                                                    name="pointValue"
                                                                    value={values.pointValue}
                                                                    onChange={(value) => {
                                                                        setFieldValue(
                                                                            'pointValue',
                                                                            value,
                                                                        )
                                                                    }}
                                                                >
                                                                    {({ field }) => (
                                                                        <Input
                                                                            {...field}
                                                                            id="pointValue"
                                                                            type="text"
                                                                            label={localize(
                                                                                '_t_Point value_t_',
                                                                            )}
                                                                            autoComplete="off"
                                                                            error={
                                                                                touched.pointValue &&
                                                                                errors?.pointValue
                                                                            }
                                                                            onBlur={handleBlur}
                                                                            data-lpignore="true"
                                                                            handleError={(
                                                                                current_input,
                                                                            ) => {
                                                                                setFieldValue(
                                                                                    'pointValue',
                                                                                    '',
                                                                                    false,
                                                                                )
                                                                                setFieldError(
                                                                                    'pointValue',
                                                                                    '',
                                                                                )
                                                                                setFieldTouched(
                                                                                    'pointValue',
                                                                                    false,
                                                                                    false,
                                                                                )
                                                                                current_input?.current?.focus()
                                                                            }}
                                                                            maxLength={getMaxLength(
                                                                                values.pointValue,
                                                                                8,
                                                                            )}
                                                                            background="white"
                                                                        />
                                                                    )}
                                                                </Field>
                                                            </PnLInputGroup>
                                                        </Flex>
                                                    </Flex>

                                                    <Flex jc="space-between" mb="17px">
                                                        <Flex
                                                            fd="column"
                                                            width="100%"
                                                            ml="3px"
                                                            mr="2rem"
                                                        >
                                                            <PnLInputGroup>
                                                                <Field
                                                                    name="volume"
                                                                    value={values.volume}
                                                                    onChange={(value) => {
                                                                        setFieldValue(
                                                                            'volume',
                                                                            value,
                                                                        )
                                                                    }}
                                                                >
                                                                    {({ field }) => (
                                                                        <Input
                                                                            {...field}
                                                                            id="volume"
                                                                            type="text"
                                                                            label={localize(
                                                                                '_t_Volume_t_',
                                                                            )}
                                                                            autoComplete="off"
                                                                            error={
                                                                                touched.volume &&
                                                                                errors.volume
                                                                            }
                                                                            onBlur={handleBlur}
                                                                            data-lpignore="true"
                                                                            handleError={(
                                                                                current_input,
                                                                            ) => {
                                                                                setFieldValue(
                                                                                    'volume',
                                                                                    '',
                                                                                    false,
                                                                                )
                                                                                setFieldError(
                                                                                    'volume',
                                                                                    '',
                                                                                )
                                                                                setFieldTouched(
                                                                                    'volume',
                                                                                    false,
                                                                                    false,
                                                                                )
                                                                                current_input?.current?.focus()
                                                                            }}
                                                                            maxLength={getMaxLength(
                                                                                values.volume,
                                                                                8,
                                                                            )}
                                                                            background="white"
                                                                        />
                                                                    )}
                                                                </Field>
                                                            </PnLInputGroup>
                                                        </Flex>
                                                        <Flex fd="column" width="100%" ml="5px">
                                                            <PnLInputGroup>
                                                                <Field
                                                                    name="takeProfitAmount"
                                                                    value={values.takeProfitAmount}
                                                                    onChange={
                                                                        takeProfitAmountChangeHandler
                                                                    }
                                                                >
                                                                    {({ field }) => (
                                                                        <Input
                                                                            {...field}
                                                                            id="takeProfitAmount"
                                                                            type="text"
                                                                            label={localize(
                                                                                '_t_Take profit amount_t_',
                                                                            )}
                                                                            autoComplete="off"
                                                                            error={
                                                                                touched.takeProfitAmount &&
                                                                                errors?.takeProfitAmount
                                                                            }
                                                                            onBlur={handleBlur}
                                                                            data-lpignore="true"
                                                                            handleError={
                                                                                takeProfitErrorHanlder
                                                                            }
                                                                            maxLength={getMaxLength(
                                                                                values.takeProfitAmount,
                                                                                15,
                                                                            )}
                                                                            background="white"
                                                                        />
                                                                    )}
                                                                </Field>
                                                            </PnLInputGroup>
                                                        </Flex>
                                                    </Flex>

                                                    <Flex jc="space-between">
                                                        <Flex
                                                            fd="column"
                                                            width="100%"
                                                            ml="3px"
                                                            mr="2rem"
                                                        >
                                                            <PnLInputGroup>
                                                                <Field
                                                                    name="assetPrice"
                                                                    value={values.assetPrice}
                                                                    onChange={(value) => {
                                                                        setFieldValue(
                                                                            'assetPrice',
                                                                            value,
                                                                        )
                                                                    }}
                                                                >
                                                                    {({ field }) => (
                                                                        <Input
                                                                            {...field}
                                                                            id="assetPrice"
                                                                            type="text"
                                                                            value={
                                                                                values.assetPrice
                                                                            }
                                                                            label={localize(
                                                                                '_t_Open price of asset_t_',
                                                                            )}
                                                                            autoComplete="off"
                                                                            error={
                                                                                touched.assetPrice &&
                                                                                errors?.assetPrice
                                                                            }
                                                                            onBlur={handleBlur}
                                                                            data-lpignore="true"
                                                                            handleError={(
                                                                                current_input,
                                                                            ) => {
                                                                                setFieldValue(
                                                                                    'assetPrice',
                                                                                    '',
                                                                                    false,
                                                                                )
                                                                                setFieldError(
                                                                                    'assetPrice',
                                                                                    '',
                                                                                )
                                                                                setFieldTouched(
                                                                                    'assetPrice',
                                                                                    false,
                                                                                    false,
                                                                                )
                                                                                current_input?.current?.focus()
                                                                            }}
                                                                            maxLength={getMaxLength(
                                                                                values.assetPrice,
                                                                                15,
                                                                            )}
                                                                            background="white"
                                                                        />
                                                                    )}
                                                                </Field>
                                                            </PnLInputGroup>
                                                        </Flex>
                                                        <Flex fd="column" width="100%" ml="5px">
                                                            <PnLInputGroup>
                                                                <Field
                                                                    name="stopLossAmount"
                                                                    value={values.stopLossAmount}
                                                                    onChange={
                                                                        stopLossAmountChangeHandler
                                                                    }
                                                                >
                                                                    {({ field }) => (
                                                                        <Input
                                                                            {...field}
                                                                            id="assetPrice"
                                                                            type="text"
                                                                            value={
                                                                                values.stopLossAmount
                                                                            }
                                                                            label={localize(
                                                                                '_t_Stop loss amount_t_',
                                                                            )}
                                                                            autoComplete="off"
                                                                            error={
                                                                                touched.stopLossAmount &&
                                                                                errors?.stopLossAmount
                                                                            }
                                                                            onBlur={handleBlur}
                                                                            data-lpignore="true"
                                                                            handleError={
                                                                                stopLossErrorHandler
                                                                            }
                                                                            maxLength={getMaxLength(
                                                                                values.stopLossAmount,
                                                                                15,
                                                                            )}
                                                                            background="white"
                                                                        />
                                                                    )}
                                                                </Field>
                                                            </PnLInputGroup>
                                                        </Flex>
                                                    </Flex>

                                                    <Flex mt="1.5rem">
                                                        <CalculateButton
                                                            secondary
                                                            type="submit"
                                                            disabled={!isValid || !dirty}
                                                        >
                                                            <Localize translate_text="_t_Calculate_t_" />
                                                        </CalculateButton>
                                                    </Flex>
                                                </CalculatorBody>
                                            </PnlCalculatorFormMobile>
                                        </Desktop>

                                        <Mobile>
                                            <PnlCalculatorFormMobile>
                                                <PnlHeaderOverflow>
                                                    <PnlCalculatorHeaderMobile>
                                                        <Flex fd="column">
                                                            <Flex fd="column" mr="24px" mb="24px">
                                                                <CalculatorLabel htmlFor="message">
                                                                    <Localize translate_text="_t_Stop loss pips_t_" />
                                                                </CalculatorLabel>
                                                                <PnLCalculatorOutputContainer>
                                                                    <PnLCalculatorOutputField>
                                                                        {values.stopLossPips}
                                                                    </PnLCalculatorOutputField>
                                                                    <PnLCalculatorOutputSymbol>
                                                                        {values.pnlMarginSymbol}
                                                                    </PnLCalculatorOutputSymbol>
                                                                </PnLCalculatorOutputContainer>
                                                            </Flex>
                                                            <Flex fd="column" mb="24px">
                                                                <CalculatorLabel htmlFor="message">
                                                                    <Localize translate_text="_t_Stop loss level_t_" />
                                                                </CalculatorLabel>
                                                                <PnLCalculatorOutputContainer>
                                                                    <PnLCalculatorOutputField>
                                                                        {values.stopLossLevel}
                                                                    </PnLCalculatorOutputField>
                                                                    <PnLCalculatorOutputSymbol>
                                                                        {values.pnlMarginSymbol}
                                                                    </PnLCalculatorOutputSymbol>
                                                                </PnLCalculatorOutputContainer>
                                                            </Flex>
                                                        </Flex>

                                                        <Flex fd="column">
                                                            <Flex fd="column" mr="24px" mb="24px">
                                                                <CalculatorLabel htmlFor="message">
                                                                    <Localize translate_text="_t_Take profit pips_t_" />
                                                                </CalculatorLabel>
                                                                <PnLCalculatorOutputContainer>
                                                                    <PnLCalculatorOutputField>
                                                                        {values.takeProfitPips}
                                                                    </PnLCalculatorOutputField>
                                                                    <PnLCalculatorOutputSymbol>
                                                                        {values.pnlMarginSymbol}
                                                                    </PnLCalculatorOutputSymbol>
                                                                </PnLCalculatorOutputContainer>
                                                            </Flex>
                                                            <Flex fd="column">
                                                                <CalculatorLabel htmlFor="message">
                                                                    <Localize translate_text="_t_Take profit level_t_" />
                                                                </CalculatorLabel>
                                                                <PnLCalculatorOutputContainer>
                                                                    <PnLCalculatorOutputField>
                                                                        {values.takeProfitLevel}
                                                                    </PnLCalculatorOutputField>
                                                                    <PnLCalculatorOutputSymbol>
                                                                        {values.pnlMarginSymbol}
                                                                    </PnLCalculatorOutputSymbol>
                                                                </PnLCalculatorOutputContainer>
                                                            </Flex>
                                                        </Flex>
                                                    </PnlCalculatorHeaderMobile>
                                                </PnlHeaderOverflow>

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
                                                        <PnlCalculatorTabItem
                                                            active={sub_tab === 'Synthetic'}
                                                            onClick={pnlSyntheticHandler}
                                                        >
                                                            <Text align="center">
                                                                <Localize translate_text="_t_Synthetic_t_" />
                                                            </Text>
                                                        </PnlCalculatorTabItem>
                                                        <PnlCalculatorTabItem
                                                            active={sub_tab === 'Financial'}
                                                            disabled={sub_tab === 'Financial'}
                                                            onClick={pnlFinancialHandler}
                                                        >
                                                            <Text align="center">
                                                                <Localize translate_text="_t_Financial_t_" />
                                                            </Text>
                                                        </PnlCalculatorTabItem>
                                                    </Flex>
                                                    <CalculatorDropdown
                                                        option_list={values.optionList}
                                                        label={localize('_t_Symbol_t_')}
                                                        default_option={optionItemDefault}
                                                        selected_option={values.symbol}
                                                        id="symbol"
                                                        onChange={calculatorDropdownHandler}
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
                                                                    label={localize('_t_Volume_t_')}
                                                                    autoComplete="off"
                                                                    error={
                                                                        touched.volume &&
                                                                        errors.volume
                                                                    }
                                                                    onBlur={handleBlur}
                                                                    data-lpignore="true"
                                                                    handleError={(
                                                                        current_input,
                                                                    ) => {
                                                                        setFieldValue(
                                                                            'volume',
                                                                            '',
                                                                            false,
                                                                        )
                                                                        setFieldError('volume', '')
                                                                        setFieldTouched(
                                                                            'volume',
                                                                            false,
                                                                            false,
                                                                        )
                                                                        current_input?.current?.focus()
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
                                                                    value={values.assetPrice}
                                                                    label={localize(
                                                                        '_t_Open price of asset_t_',
                                                                    )}
                                                                    autoComplete="off"
                                                                    error={
                                                                        touched.assetPrice &&
                                                                        errors?.assetPrice
                                                                    }
                                                                    onBlur={handleBlur}
                                                                    data-lpignore="true"
                                                                    handleError={(
                                                                        current_input,
                                                                    ) => {
                                                                        setFieldValue(
                                                                            'assetPrice',
                                                                            '',
                                                                            false,
                                                                        )
                                                                        setFieldError(
                                                                            'assetPrice',
                                                                            '',
                                                                        )
                                                                        setFieldTouched(
                                                                            'assetPrice',
                                                                            false,
                                                                            false,
                                                                        )
                                                                        current_input?.current?.focus()
                                                                    }}
                                                                    maxLength={getMaxLength(
                                                                        values.assetPrice,
                                                                        15,
                                                                    )}
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
                                                                    label={localize(
                                                                        '_t_Point value_t_',
                                                                    )}
                                                                    autoComplete="off"
                                                                    error={
                                                                        touched.pointValue &&
                                                                        errors?.pointValue
                                                                    }
                                                                    onBlur={handleBlur}
                                                                    data-lpignore="true"
                                                                    handleError={(
                                                                        current_input,
                                                                    ) => {
                                                                        setFieldValue(
                                                                            'pointValue',
                                                                            '',
                                                                            false,
                                                                        )
                                                                        setFieldError(
                                                                            'pointValue',
                                                                            '',
                                                                        )
                                                                        setFieldTouched(
                                                                            'pointValue',
                                                                            false,
                                                                            false,
                                                                        )
                                                                        current_input?.current?.focus()
                                                                    }}
                                                                    maxLength={getMaxLength(
                                                                        values.pointValue,
                                                                        8,
                                                                    )}
                                                                    background="white"
                                                                />
                                                            )}
                                                        </Field>
                                                    </InputGroup>
                                                    <InputGroup>
                                                        <Field
                                                            name="takeProfitAmount"
                                                            value={values.takeProfitAmount}
                                                            onChange={takeProfitAmountChangeHandler}
                                                        >
                                                            {({ field }) => (
                                                                <Input
                                                                    {...field}
                                                                    id="takeProfitAmount"
                                                                    type="text"
                                                                    label={localize(
                                                                        '_t_Take profit amount_t_',
                                                                    )}
                                                                    autoComplete="off"
                                                                    error={
                                                                        touched.takeProfitAmount &&
                                                                        errors?.takeProfitAmount
                                                                    }
                                                                    onBlur={handleBlur}
                                                                    data-lpignore="true"
                                                                    handleError={
                                                                        takeProfitErrorHanlder
                                                                    }
                                                                    maxLength={getMaxLength(
                                                                        values.takeProfitAmount,
                                                                        15,
                                                                    )}
                                                                    background="white"
                                                                />
                                                            )}
                                                        </Field>
                                                    </InputGroup>
                                                    <InputGroup>
                                                        <Field
                                                            name="stopLossAmount"
                                                            value={values.stopLossAmount}
                                                            onChange={stopLossAmountChangeHandler}
                                                        >
                                                            {({ field }) => (
                                                                <Input
                                                                    {...field}
                                                                    id="assetPrice"
                                                                    type="text"
                                                                    value={values.stopLossAmount}
                                                                    label={localize(
                                                                        '_t_Stop loss amount_t_',
                                                                    )}
                                                                    autoComplete="off"
                                                                    error={
                                                                        touched.stopLossAmount &&
                                                                        errors?.stopLossAmount
                                                                    }
                                                                    onBlur={handleBlur}
                                                                    data-lpignore="true"
                                                                    handleError={
                                                                        stopLossErrorHandler
                                                                    }
                                                                    maxLength={getMaxLength(
                                                                        values.stopLossAmount,
                                                                        15,
                                                                    )}
                                                                    background="white"
                                                                />
                                                            )}
                                                        </Field>
                                                    </InputGroup>

                                                    <Flex mt="1.5rem">
                                                        <CalculateButton
                                                            secondary
                                                            type="submit"
                                                            disabled={!isValid || !dirty}
                                                        >
                                                            <Localize translate_text="_t_Calculate_t_" />
                                                        </CalculateButton>
                                                    </Flex>
                                                </CalculatorBody>
                                            </PnlCalculatorFormMobile>
                                        </Mobile>
                                    </>
                                )
                            }}
                        </Formik>
                    </FormWrapper>

                    {tab === 'Buy' ? (
                        <RightContent>
                            <Header as="h3" type="section-title" mb="8px">
                                <Localize translate_text="_t_How to calculate stop loss and/or take profit level and pip value_t_" />
                            </Header>

                            <Text mb="8px">
                                <Localize translate_text="_t_The stop loss and/or take profit level and pip value when buying a contract on Deriv MT5 is calculated based on the formula:_t_" />
                            </Text>
                            <Text mb="8px">
                                <Localize
                                    translate_text="_t_<0>Stop loss and/or take profit level = asset price + {stop loss OR take profit amount ÷ (volume × contract size)}</0>_t_"
                                    components={[<strong key={0} />]}
                                />
                            </Text>
                            <Text mb="16px">
                                <Localize
                                    translate_text="_t_<0>Stop loss and/or take profit pip value = |(stop loss OR take profit level - asset price)| ÷ point value</0>_t_"
                                    components={[<strong key={0} />]}
                                />
                            </Text>

                            <Text mb="8px">
                                <Localize translate_text="_t_The stop loss and/or take profit level helps you to manage your risk when you are buying a contract._t_" />
                            </Text>
                            <Text mb="8px">
                                <Localize translate_text="_t_For financial accounts, the stop loss and/or take profit pip value is in the quote currency for forex pairs._t_" />
                            </Text>
                            <Text mb="40px">
                                <Localize translate_text="_t_For synthetic accounts, the stop loss and/or take profit pip value is in USD._t_" />
                            </Text>

                            <Header as="h3" type="section-title" mb="8px">
                                <Localize translate_text="_t_Example calculation_t_" />
                            </Header>
                            <Text mb="16px">
                                <Localize translate_text="_t_Let’s say you want to calculate the stop loss level and pip value when you want to buy a lot of EUR/USD priced at 1.17524 USD with a stop loss amount of 24 USD._t_" />
                            </Text>

                            <Accordion id="pnl-for-margin" has_single_state>
                                <AccordionItem
                                    header={localize('_t_Stop loss level_t_')}
                                    header_style={header_style}
                                    style={{
                                        padding: '0 0 24px 0',
                                    }}
                                    plus
                                    class_name="take-profit"
                                >
                                    <Desktop breakpoint="tablet">
                                        <StopLoss />
                                    </Desktop>
                                    <Mobile>
                                        <StopLoss />
                                    </Mobile>
                                    <FormulaText>
                                        <StyledOl>
                                            <li>
                                                <span>
                                                    <Localize translate_text="_t_The contract size is one standard lot of forex = 100,000 units._t_" />
                                                </span>
                                            </li>
                                        </StyledOl>
                                    </FormulaText>
                                </AccordionItem>

                                <AccordionItem
                                    header={localize('_t_Stop loss pip value_t_')}
                                    header_style={header_style}
                                    plus
                                    class_name="stop-loss"
                                >
                                    <Desktop breakpoint="tablet">
                                        <PipValue />
                                    </Desktop>
                                    <Mobile>
                                        <PipValue />
                                    </Mobile>
                                    <FormulaText>
                                        <StyledOl>
                                            <li>
                                                <span>
                                                    <Localize translate_text="_t_The point value is derived from the current digits of the asset. In this example, the digit is 5, so the point value is 0.00001._t_" />
                                                </span>
                                            </li>
                                        </StyledOl>
                                    </FormulaText>

                                    <Text mt="1.6rem">
                                        <Localize
                                            translate_text="_t_Your position is automatically closed when your stop loss level is at <0>1.1750</0> and when your stop loss pip value is <0>24 USD</0>._t_"
                                            components={[<strong key={0} />]}
                                        />
                                    </Text>
                                </AccordionItem>
                            </Accordion>

                            <LinkWrapper height="auto">
                                {
                                    <StyledLinkButton
                                        secondary
                                        external
                                        type="mt5"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Localize translate_text="_t_Go to Deriv MT5 dashboard_t_" />
                                    </StyledLinkButton>
                                }
                            </LinkWrapper>
                        </RightContent>
                    ) : (
                        <RightContent key={tab}>
                            <Header as="h3" type="section-title" mb="8px">
                                <Localize translate_text="_t_How to calculate stop loss and/or take profit level and pip value_t_" />
                            </Header>

                            <Text mb="8px">
                                <Localize translate_text="_t_The stop loss and/or take profit level and pip value when selling a contract on Deriv MT5 is calculated based on the formula:_t_" />
                            </Text>
                            <Text mb="8px">
                                <Localize
                                    translate_text="_t_<0>Stop loss and/or take profit level = asset price - {stop loss OR take profit amount ÷ (volume × contract size)}</0>_t_"
                                    components={[<strong key={0} />]}
                                />
                            </Text>
                            <Text mb="16px">
                                <Localize
                                    translate_text="_t_<0>Stop loss and/or take profit pip value = |(stop loss OR take profit level - asset price)| ÷ point value</0>_t_"
                                    components={[<strong key={0} />]}
                                />
                            </Text>

                            <Text mb="8px">
                                <Localize translate_text="_t_The stop loss and/or take profit level helps you to manage your risk when you are selling a contract._t_" />
                            </Text>
                            <Text mb="8px">
                                <Localize translate_text="_t_For financial accounts, the stop loss and/or take profit pip value is in the quote currency for forex pairs._t_" />
                            </Text>
                            <Text mb="40px">
                                <Localize translate_text="_t_For synthetic accounts, the stop loss and/or take profit pip value is in USD._t_" />
                            </Text>

                            <Header as="h3" type="section-title" mb="8px">
                                <Localize translate_text="_t_Example calculation_t_" />
                            </Header>
                            <Text mb="16px">
                                <Localize translate_text="_t_Let’s say you want to calculate the take profit level and pip value when you want to sell 3 lots of Volatility 50 Index priced at 249.5961 USD with a take profit amount of 84 USD._t_" />
                            </Text>

                            <Accordion id="pnl-for-margin" has_single_state>
                                <AccordionItem
                                    header={localize('_t_Take profit level_t_')}
                                    header_style={header_style}
                                    style={{
                                        padding: '0 0 24px 0',
                                    }}
                                    plus
                                    class_name="take-profit"
                                >
                                    <Desktop breakpoint="tablet">
                                        <TakeProfitLevel />
                                    </Desktop>
                                    <Mobile>
                                        <TakeProfitLevel />
                                    </Mobile>

                                    <FormulaText>
                                        <StyledOl>
                                            <li>
                                                <span>
                                                    <Localize translate_text="_t_The contract size is one standard lot of Volatility 50 Index = 1._t_" />
                                                </span>
                                            </li>
                                        </StyledOl>
                                    </FormulaText>
                                </AccordionItem>

                                <AccordionItem
                                    header={localize('_t_Take profit pip value_t_')}
                                    header_style={header_style}
                                    plus
                                >
                                    <Desktop breakpoint="tablet">
                                        <ProfitPipValue />
                                    </Desktop>
                                    <Mobile>
                                        <ProfitPipValue />
                                    </Mobile>
                                    <FormulaText>
                                        <StyledOl>
                                            <li>
                                                <span>
                                                    <Localize translate_text="_t_The point value is derived from the current digits of the asset. In this example, the digit is 4, so the point value is 0.0001._t_" />
                                                </span>
                                            </li>
                                        </StyledOl>
                                    </FormulaText>

                                    <Text mt="1.6rem">
                                        <Localize
                                            translate_text="_t_Your position is automatically closed when your take profit level is at <0>221.5961</0> and the pip value is <0>280,000 USD</0>._t_"
                                            components={[<strong key={0} />]}
                                        />
                                    </Text>
                                </AccordionItem>
                            </Accordion>

                            <LinkWrapper height="auto">
                                {
                                    <StyledLinkButton
                                        secondary
                                        external
                                        type="mt5"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Localize translate_text="_t_Go to Deriv MT5 dashboard_t_" />
                                    </StyledLinkButton>
                                }
                            </LinkWrapper>
                        </RightContent>
                    )}
                </ContentContainer>
            </StyledSection>
        </>
    )
}

export default PnlMarginCalculator
