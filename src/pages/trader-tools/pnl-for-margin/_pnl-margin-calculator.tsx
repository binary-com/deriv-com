import * as React from 'react'
import { useState, useRef } from 'react'
import { Field, Formik } from 'formik'
import { graphql, useStaticQuery } from 'gatsby'
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
import { Desktop, Mobile } from 'components/containers/visibility'
import { localize, Localize } from 'components/localization'
import {
    Accordion,
    AccordionItem,
    Header,
    LocalizedLinkText,
    QueryImage,
    Text,
} from 'components/elements'
import { Flex } from 'components/containers'
import Input from 'components/form/input'
import RightArrow from 'images/svg/tools/black-right-arrow.svg'

const PnlMarginCalculator = () => {
    const query = graphql`
        query {
            stop_loss_level_formula: file(
                relativePath: { eq: "trade-tools/stop-loss-level-formula.png" }
            ) {
                ...fadeIn
            }
            stop_loss_level_formula_mobile: file(
                relativePath: { eq: "trade-tools/stop-loss-level-formula-mobile.png" }
            ) {
                ...fadeIn
            }
            stop_loss_pip_formula: file(
                relativePath: { eq: "trade-tools/stop-loss-pip-formula.png" }
            ) {
                ...fadeIn
            }
            stop_loss_pip_formula_mobile: file(
                relativePath: { eq: "trade-tools/stop-loss-pip-formula-mobile.png" }
            ) {
                ...fadeIn
            }
            take_profit_level_formula: file(
                relativePath: { eq: "trade-tools/take-profit-level-formula.png" }
            ) {
                ...fadeIn
            }
            take_profit_level_formula_mobile: file(
                relativePath: { eq: "trade-tools/take-profit-level-formula-mobile.png" }
            ) {
                ...fadeIn
            }
            take_profit_pip_formula: file(
                relativePath: { eq: "trade-tools/take-profit-pip-formula.png" }
            ) {
                ...fadeIn
            }
            take_profit_pip_formula_mobile: file(
                relativePath: { eq: "trade-tools/take-profit-pip-formula-mobile.png" }
            ) {
                ...fadeIn
            }
        }
    `

    const data = useStaticQuery(query)
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
                        {localize("Traders' tools")}
                    </LocalizedLinkText>
                    <img
                        src={RightArrow}
                        alt={localize('right arrow')}
                        height="16"
                        width="16"
                        style={{ margin: '0 8px' }}
                    />
                    <Text>{localize('PnL for margin')}</Text>
                </Flex>
            </BreadCrumbContainer>
            <StyledSection direction="column">
                <SectionSubtitle as="h3" type="sub-section-title" align="center" weight="normal">
                    {localize(
                        'Our profit and loss calculator for margin helps you to approximate your losses and/or gains.',
                    )}
                </SectionSubtitle>

                <Flex mt="80px" mb="40px" tablet={{ mt: '40px', mb: '24px' }}>
                    <SwapTabSelector active={tab === 'Buy'} onClick={() => onTabClick('Buy')}>
                        <Text size="var(--text-size-m)" align="center">
                            {localize('Buy')}
                        </Text>
                    </SwapTabSelector>
                    <SwapTabSelector active={tab === 'Sell'} onClick={() => onTabClick('Sell')}>
                        <Text size="var(--text-size-m)" align="center">
                            {localize('Sell')}
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
                                    current_input.focus()
                                }

                                const stopLossErrorHandler = (current_input) => {
                                    setFieldValue('stopLossAmount', '', false)
                                    setFieldError('stopLossAmount', '')
                                    setFieldTouched('stopLossAmount', false, false)
                                    current_input.focus()
                                }

                                const AssetPriceInput = ({ field }: { field: React.ReactNode }) => (
                                    <Input
                                        {...field}
                                        id="assetPrice"
                                        type="text"
                                        value={values.assetPrice}
                                        label={localize('Open price of asset')}
                                        autoComplete="off"
                                        error={touched.assetPrice && errors.assetPrice}
                                        onBlur={handleBlur}
                                        data-lpignore="true"
                                        handleError={(current_input) => {
                                            setFieldValue('assetPrice', '', false)
                                            setFieldError('assetPrice', '')
                                            setFieldTouched('assetPrice', false, false)
                                            current_input.focus()
                                        }}
                                        maxLength={getMaxLength(values.assetPrice, 15)}
                                        background="white"
                                    />
                                )

                                const StopLossAmountInput = ({
                                    field,
                                }: {
                                    field: React.ReactNode
                                }) => (
                                    <Input
                                        {...field}
                                        id="assetPrice"
                                        type="text"
                                        value={values.stopLossAmount}
                                        label={localize('Stop loss amount')}
                                        autoComplete="off"
                                        error={touched.stopLossAmount && errors.stopLossAmount}
                                        onBlur={handleBlur}
                                        data-lpignore="true"
                                        handleError={stopLossErrorHandler}
                                        maxLength={getMaxLength(values.stopLossAmount, 15)}
                                        background="white"
                                    />
                                )

                                const PointValueInput = ({ field }: { field: React.ReactNode }) => (
                                    <Input
                                        {...field}
                                        id="pointValue"
                                        type="text"
                                        label={localize('Point value')}
                                        autoComplete="off"
                                        error={touched.pointValue && errors.pointValue}
                                        onBlur={handleBlur}
                                        data-lpignore="true"
                                        handleError={(current_input) => {
                                            setFieldValue('pointValue', '', false)
                                            setFieldError('pointValue', '')
                                            setFieldTouched('pointValue', false, false)
                                            current_input.focus()
                                        }}
                                        maxLength={getMaxLength(values.pointValue, 8)}
                                        background="white"
                                    />
                                )

                                const takeProfitAmountChangeHandler = (value) => {
                                    setFieldValue('takeProfitAmount', value)
                                }

                                const stopLossAmountChangeHandler = (value) => {
                                    setFieldValue('stopLossAmount', value)
                                }

                                const TakeProfitAmountInput = ({
                                    field,
                                }: {
                                    field: React.ReactNode
                                }) => (
                                    <Input
                                        {...field}
                                        id="takeProfitAmount"
                                        type="text"
                                        label={localize('Take profit amount')}
                                        autoComplete="off"
                                        error={touched.takeProfitAmount && errors.takeProfitAmount}
                                        onBlur={handleBlur}
                                        data-lpignore="true"
                                        handleError={takeProfitErrorHanlder}
                                        maxLength={getMaxLength(values.takeProfitAmount, 15)}
                                        background="white"
                                    />
                                )

                                return (
                                    <>
                                        <Desktop breakpoint={'tablet'}>
                                            <PnlCalculatorFormMobile>
                                                <CalculatorHeader>
                                                    <Flex mb="24px">
                                                        <Flex fd="column" mr="24px">
                                                            <CalculatorLabel htmlFor="message">
                                                                {localize('Stop loss pips')}
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
                                                                {localize('Stop loss level')}
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
                                                                {localize('Take profit pips')}
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
                                                                {localize('Take profit level')}
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
                                                        {localize('Account type')}
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
                                                                {localize('Synthetic')}
                                                            </Text>
                                                        </PnlCalculatorTabItem>
                                                        <PnlCalculatorTabItem
                                                            active={sub_tab === 'Financial'}
                                                            disabled={sub_tab === 'Financial'}
                                                            onClick={pnlFinancialHandler}
                                                        >
                                                            <Text align="center">
                                                                {localize('Financial')}
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
                                                                label={localize('Symbol')}
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
                                                                    {PointValueInput}
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
                                                                                'Volume',
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
                                                                                current_input.focus()
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
                                                                    {TakeProfitAmountInput}
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
                                                                    {AssetPriceInput}
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
                                                                    {StopLossAmountInput}
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
                                                            {localize('Calculate')}
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
                                                                    {localize('Stop loss pips')}
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
                                                                    {localize('Stop loss level')}
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
                                                                    {localize('Take profit pips')}
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
                                                                    {localize('Take profit level')}
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
                                                        {localize('Account type')}
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
                                                                {localize('Synthetic')}
                                                            </Text>
                                                        </PnlCalculatorTabItem>
                                                        <PnlCalculatorTabItem
                                                            active={sub_tab === 'Financial'}
                                                            disabled={sub_tab === 'Financial'}
                                                            onClick={pnlFinancialHandler}
                                                        >
                                                            <Text align="center">
                                                                {localize('Financial')}
                                                            </Text>
                                                        </PnlCalculatorTabItem>
                                                    </Flex>
                                                    <CalculatorDropdown
                                                        option_list={values.optionList}
                                                        label={localize('Symbol')}
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
                                                                    label={localize('Volume')}
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
                                                                        current_input.focus()
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
                                                            {AssetPriceInput}
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
                                                            {PointValueInput}
                                                        </Field>
                                                    </InputGroup>
                                                    <InputGroup>
                                                        <Field
                                                            name="takeProfitAmount"
                                                            value={values.takeProfitAmount}
                                                            onChange={takeProfitAmountChangeHandler}
                                                        >
                                                            {TakeProfitAmountInput}
                                                        </Field>
                                                    </InputGroup>
                                                    <InputGroup>
                                                        <Field
                                                            name="stopLossAmount"
                                                            value={values.stopLossAmount}
                                                            onChange={stopLossAmountChangeHandler}
                                                        >
                                                            {StopLossAmountInput}
                                                        </Field>
                                                    </InputGroup>

                                                    <Flex mt="1.5rem">
                                                        <CalculateButton
                                                            secondary
                                                            type="submit"
                                                            disabled={!isValid || !dirty}
                                                        >
                                                            {localize('Calculate')}
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
                                {localize(
                                    'How to calculate stop loss and/or take profit level and pip value',
                                )}
                            </Header>

                            <Text mb="8px">
                                {localize(
                                    'The stop loss and/or take profit level and pip value when buying a contract on Deriv MT5 (DMT5) is calculated based on the formula:',
                                )}
                            </Text>
                            <Text mb="8px">
                                <Localize
                                    translate_text="<0>Stop loss and/or take profit level = asset price + {stop loss OR take profit amount ÷ (volume × contract size)}</0>"
                                    components={[<strong key={0} />]}
                                />
                            </Text>
                            <Text mb="16px">
                                <Localize
                                    translate_text="<0>Stop loss and/or take profit pip value = |(stop loss OR take profit level - asset price)| ÷ point value</0>"
                                    components={[<strong key={0} />]}
                                />
                            </Text>

                            <Text mb="8px">
                                {localize(
                                    'The stop loss and/or take profit level helps you to manage your risk when you are buying a contract.',
                                )}
                            </Text>
                            <Text mb="8px">
                                {localize(
                                    'For financial accounts, the stop loss and/or take profit pip value is in the quote currency for forex pairs.',
                                )}
                            </Text>
                            <Text mb="40px">
                                {localize(
                                    'For synthetic accounts, the stop loss and/or take profit pip value is in USD.',
                                )}
                            </Text>

                            <Header as="h3" type="section-title" mb="8px">
                                {localize('Example calculation')}
                            </Header>
                            <Text mb="16px">
                                {localize(
                                    'Let’s say you want to calculate the stop loss level and pip value when you want to buy a lot of EUR/USD priced at 1.17524 USD with a stop loss amount of 24 USD.',
                                )}
                            </Text>

                            <Accordion has_single_state>
                                <AccordionItem
                                    header={localize('Stop loss level')}
                                    header_style={header_style}
                                    style={{
                                        padding: '0 0 24px 0',
                                    }}
                                    plus
                                >
                                    <Desktop breakpoint={'tablet'}>
                                        <QueryImage
                                            data={data.stop_loss_level_formula}
                                            alt={localize('stop loss level formula')}
                                        />
                                    </Desktop>
                                    <Mobile>
                                        <QueryImage
                                            data={data.stop_loss_level_formula_mobile}
                                            alt={localize('stop loss level formula')}
                                        />
                                    </Mobile>
                                    <FormulaText>
                                        <StyledOl>
                                            <li>
                                                <span>
                                                    <Localize translate_text="The contract size is one standard lot of forex = 100,000 units." />
                                                </span>
                                            </li>
                                        </StyledOl>
                                    </FormulaText>
                                </AccordionItem>

                                <AccordionItem
                                    header={localize('Stop loss pip value')}
                                    header_style={header_style}
                                    plus
                                >
                                    <Desktop breakpoint={'tablet'}>
                                        <QueryImage
                                            data={data.stop_loss_pip_formula}
                                            alt={localize('stop loss pip formula')}
                                        />
                                    </Desktop>
                                    <Mobile>
                                        <QueryImage
                                            data={data.stop_loss_pip_formula_mobile}
                                            alt={localize('stop loss pip formula')}
                                        />
                                    </Mobile>
                                    <FormulaText>
                                        <StyledOl>
                                            <li>
                                                <span>
                                                    {localize(
                                                        'The point value is derived from the current digits of the asset. In this example, the digit is 5, so the point value is 0.00001.',
                                                    )}
                                                </span>
                                            </li>
                                        </StyledOl>
                                    </FormulaText>

                                    <Text mt="1.6rem">
                                        <Localize
                                            translate_text="Your position is automatically closed when your stop loss level is at <0>1.1750</0> and when your stop loss pip value is <0>24 USD</0>."
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
                                        {localize('Go to Deriv MT5 dashboard')}
                                    </StyledLinkButton>
                                }
                            </LinkWrapper>
                        </RightContent>
                    ) : (
                        <RightContent key={tab}>
                            <Header as="h3" type="section-title" mb="8px">
                                {localize(
                                    'How to calculate stop loss and/or take profit level and pip value',
                                )}
                            </Header>

                            <Text mb="8px">
                                {localize(
                                    'The stop loss and/or take profit level and pip value when selling a contract on Deriv MT5 (DMT5) is calculated based on the formula:',
                                )}
                            </Text>
                            <Text mb="8px">
                                <Localize
                                    translate_text="<0>Stop loss and/or take profit level = asset price - {stop loss OR take profit amount ÷ (volume × contract size)}</0>"
                                    components={[<strong key={0} />]}
                                />
                            </Text>
                            <Text mb="16px">
                                <Localize
                                    translate_text="<0>Stop loss and/or take profit pip value = |(stop loss OR take profit level - asset price)| ÷ point value</0>"
                                    components={[<strong key={0} />]}
                                />
                            </Text>

                            <Text mb="8px">
                                {localize(
                                    'The stop loss and/or take profit level helps you to manage your risk when you are selling a contract.',
                                )}
                            </Text>
                            <Text mb="8px">
                                {localize(
                                    'For financial accounts, the stop loss and/or take profit pip value is in the quote currency for forex pairs.',
                                )}
                            </Text>
                            <Text mb="40px">
                                {localize(
                                    'For synthetic accounts, the stop loss and/or take profit pip value is in USD.',
                                )}
                            </Text>

                            <Header as="h3" type="section-title" mb="8px">
                                {localize('Example calculation')}
                            </Header>
                            <Text mb="16px">
                                {localize(
                                    'Let’s say you want to calculate the take profit level and pip value when you want to sell 3 lots of Volatility 50 Index priced at 249.5961 USD with a take profit amount of 84 USD.',
                                )}
                            </Text>

                            <Accordion has_single_state>
                                <AccordionItem
                                    header={localize('Take profit level')}
                                    header_style={header_style}
                                    style={{
                                        padding: '0 0 24px 0',
                                    }}
                                    plus
                                >
                                    <Desktop breakpoint={'tablet'}>
                                        <QueryImage
                                            data={data.take_profit_level_formula}
                                            alt={localize('take profit level formula')}
                                        />
                                    </Desktop>
                                    <Mobile>
                                        <QueryImage
                                            data={data.take_profit_level_formula_mobile}
                                            alt={localize('take profit level formula')}
                                        />
                                    </Mobile>
                                    <FormulaText>
                                        <StyledOl>
                                            <li>
                                                <span>
                                                    <Localize translate_text="The contract size is one standard lot of Volatility 50 Index = 1." />
                                                </span>
                                            </li>
                                        </StyledOl>
                                    </FormulaText>
                                </AccordionItem>

                                <AccordionItem
                                    header={localize('Take profit pip value')}
                                    header_style={header_style}
                                    plus
                                >
                                    <Desktop breakpoint={'tablet'}>
                                        <QueryImage
                                            data={data.take_profit_pip_formula}
                                            alt={localize('take profit pip formula')}
                                        />
                                    </Desktop>
                                    <Mobile>
                                        <QueryImage
                                            data={data.take_profit_pip_formula_mobile}
                                            alt={localize('take profit pip formula')}
                                        />
                                    </Mobile>
                                    <FormulaText>
                                        <StyledOl>
                                            <li>
                                                <span>
                                                    {localize(
                                                        'The point value is derived from the current digits of the asset. In this example, the digit is 4, so the point value is 0.0001.',
                                                    )}
                                                </span>
                                            </li>
                                        </StyledOl>
                                    </FormulaText>

                                    <Text mt="1.6rem">
                                        <Localize
                                            translate_text="Your position is automatically closed when your take profit level is at <0>221.5961</0> and the pip value is <0>280,000 USD</0>."
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
                                        {localize('Go to Deriv MT5 dashboard')}
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
