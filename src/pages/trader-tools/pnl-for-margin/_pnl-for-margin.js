import React, { useState } from 'react'
import { Formik, Field } from 'formik'
import { graphql, useStaticQuery } from 'gatsby'
import {
    resetValidationPnlMargin,
    getContractSize,
    getCurrency,
    getStopLossLevel,
    getStopLossPip,
    getTakeProfitLevel,
    getTakeProfitPip,
    // numberSubmitFormatNegative,
    numberSubmitFormat,
    numberWithCommas,
} from '../common/_utility'
import {
    optionItemDefault,
    syntheticItemLists,
    financialItemLists,
} from '../common/_underlying-data'
import {
    BreadCrumbContainer,
    CalculateButton,
    CalculatorBody,
    CalculatorDropdown,
    CalculatorForm,
    CalculatorHeader,
    CalculatorLabel,
    PnLCalculatorOutputContainer,
    PnLCalculatorOutputField,
    PnLCalculatorOutputSymbol,
    CalculatorTabItem,
    ContentContainer,
    FormulaText,
    header_style,
    PnLInputGroup,
    LinkWrapper,
    RightContent,
    SectionSubtitle,
    StyledLinkButton,
    StyledOl,
    StyledSection,
    FormWrapper,
    SwapTabSelector,
} from '../common/_style'
import { localize, Localize } from 'components/localization'
import {
    Accordion,
    AccordionItem,
    Header,
    LocalizedLinkText,
    QueryImage,
    Text,
} from 'components/elements'
import { Flex, Show } from 'components/containers'
import Input from 'components/form/input'
import RightArrow from 'images/svg/black-right-arrow.svg'

const PnlMarginCalculator = () => {
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

    const [tab, setTab] = useState('Buy')
    const [sub_tab, setSubTab] = useState('Synthetic')

    const onTabClick = (tab) => setTab(tab)
    const onSubTabClick = (tab) => setSubTab(tab)

    return (
        <>
            <BreadCrumbContainer>
                <Flex jc="flex-start" ai="center">
                    <LocalizedLinkText to="/trader-tools" color="grey-5">
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
                        'Our swap calculator helps you to estimate the swap charges required to keep your positions open overnight on Deriv MetaTrader 5 (DMT5).',
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

                {tab === 'Buy' ? (
                    <>
                        <ContentContainer mb="4.0rem">
                            <FormWrapper>
                                <Formik
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
                                        setFieldValue('stopLossPips', getStopLossPip(values))
                                        setFieldValue('stopLossLevel', getStopLossLevel(values))
                                        setFieldValue('takeProfitPips', getTakeProfitPip(values))
                                        setFieldValue('takeProfitLevel', getTakeProfitLevel(values))
                                        setFieldValue(
                                            'pointValue',
                                            numberSubmitFormat(values.pointValue),
                                        )
                                        setFieldValue('volume', numberSubmitFormat(values.volume))
                                        setFieldValue(
                                            'assetPrice',
                                            numberSubmitFormat(values.assetPrice),
                                        )
                                        setFieldValue(
                                            'stopLossAmount',
                                            numberSubmitFormat(values.stopLossAmount),
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
                                    }) => (
                                        <CalculatorForm>
                                            <CalculatorHeader>
                                                <Flex mb="24px">
                                                    <Flex fd="column" mr="24px">
                                                        <CalculatorLabel htmlFor="message">
                                                            {localize('Stop loss pips')}
                                                        </CalculatorLabel>
                                                        <PnLCalculatorOutputContainer>
                                                            <PnLCalculatorOutputField>
                                                                {numberWithCommas(
                                                                    values.stopLossPips,
                                                                )}
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
                                                                {numberWithCommas(
                                                                    values.stopLossLevel,
                                                                )}
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
                                                                {numberWithCommas(
                                                                    values.takeProfitPips,
                                                                )}
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
                                                                {numberWithCommas(
                                                                    values.takeProfitLevel,
                                                                )}
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
                                                    <CalculatorTabItem
                                                        active={sub_tab === 'Synthetic'}
                                                        onClick={() => {
                                                            onSubTabClick('Synthetic')
                                                            setErrors({})
                                                            resetForm({})
                                                        }}
                                                    >
                                                        <Text align="center">
                                                            {localize('Synthetic')}
                                                        </Text>
                                                    </CalculatorTabItem>
                                                    <CalculatorTabItem
                                                        active={sub_tab === 'Financial'}
                                                        disabled={sub_tab === 'Financial'}
                                                        onClick={() => {
                                                            onSubTabClick('Financial')
                                                            setErrors({})
                                                            resetForm({})
                                                            setFieldValue(
                                                                'accountType',
                                                                'Financial',
                                                            )
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
                                                <Flex jc="space-between">
                                                    <Flex fd="column" width="23.4rem">
                                                        <CalculatorDropdown
                                                            option_list={values.optionList}
                                                            label={localize('Symbol')}
                                                            default_option={optionItemDefault}
                                                            selected_option={values.symbol}
                                                            id="symbol"
                                                            onChange={(value) => {
                                                                setFieldValue(
                                                                    'pnlMarginSymbol',
                                                                    getCurrency(value),
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
                                                    </Flex>
                                                    <Flex fd="column" width="23.4rem">
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
                                                                            'Point value',
                                                                        )}
                                                                        autoComplete="off"
                                                                        error={
                                                                            touched.pointValue &&
                                                                            errors.pointValue
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
                                                                            current_input.focus()
                                                                        }}
                                                                        maxLength="8"
                                                                        background="white"
                                                                    />
                                                                )}
                                                            </Field>
                                                        </PnLInputGroup>
                                                    </Flex>
                                                </Flex>

                                                <Flex jc="space-between" mb="17px">
                                                    <Flex fd="column" width="23.4rem">
                                                        <PnLInputGroup>
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
                                                                        maxLength="8"
                                                                        background="white"
                                                                    />
                                                                )}
                                                            </Field>
                                                        </PnLInputGroup>
                                                    </Flex>
                                                    <Flex fd="column" width="23.4rem">
                                                        <PnLInputGroup>
                                                            <Field
                                                                name="takeProfitAmount"
                                                                value={values.takeProfitAmount}
                                                                onChange={(value) => {
                                                                    setFieldValue(
                                                                        'takeProfitAmount',
                                                                        value,
                                                                    )
                                                                }}
                                                            >
                                                                {({ field }) => (
                                                                    <Input
                                                                        {...field}
                                                                        id="takeProfitAmount"
                                                                        type="text"
                                                                        label={localize(
                                                                            'Take profit amount',
                                                                        )}
                                                                        autoComplete="off"
                                                                        error={
                                                                            touched.takeProfitAmount &&
                                                                            errors.takeProfitAmount
                                                                        }
                                                                        onBlur={handleBlur}
                                                                        data-lpignore="true"
                                                                        handleError={(
                                                                            current_input,
                                                                        ) => {
                                                                            setFieldValue(
                                                                                'takeProfitAmount',
                                                                                '',
                                                                                false,
                                                                            )
                                                                            setFieldError(
                                                                                'takeProfitAmount',
                                                                                '',
                                                                            )
                                                                            setFieldTouched(
                                                                                'takeProfitAmount',
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
                                                        </PnLInputGroup>
                                                    </Flex>
                                                </Flex>

                                                <Flex jc="space-between">
                                                    <Flex fd="column" width="23.4rem">
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
                                                                        value={values.assetPrice}
                                                                        label={localize(
                                                                            'Open price of asset',
                                                                        )}
                                                                        autoComplete="off"
                                                                        error={
                                                                            touched.assetPrice &&
                                                                            errors.assetPrice
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
                                                                            current_input.focus()
                                                                        }}
                                                                        maxLength="15"
                                                                        background="white"
                                                                    />
                                                                )}
                                                            </Field>
                                                        </PnLInputGroup>
                                                    </Flex>
                                                    <Flex fd="column" width="23.4rem">
                                                        <PnLInputGroup>
                                                            <Field
                                                                name="stopLossAmount"
                                                                value={values.stopLossAmount}
                                                                onChange={(value) => {
                                                                    setFieldValue(
                                                                        'stopLossAmount',
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
                                                                            values.stopLossAmount
                                                                        }
                                                                        label={localize(
                                                                            'Stop loss amount',
                                                                        )}
                                                                        autoComplete="off"
                                                                        error={
                                                                            touched.stopLossAmount &&
                                                                            errors.stopLossAmount
                                                                        }
                                                                        onBlur={handleBlur}
                                                                        data-lpignore="true"
                                                                        handleError={(
                                                                            current_input,
                                                                        ) => {
                                                                            setFieldValue(
                                                                                'stopLossAmount',
                                                                                '',
                                                                                false,
                                                                            )
                                                                            setFieldError(
                                                                                'stopLossAmount',
                                                                                '',
                                                                            )
                                                                            setFieldTouched(
                                                                                'stopLossAmount',
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
                                        </CalculatorForm>
                                    )}
                                </Formik>
                            </FormWrapper>

                            <RightContent>
                                <Header as="h3" type="section-title" mb="8px">
                                    {localize(
                                        'How to calculate stop loss and/or take profit level and pip value',
                                    )}
                                </Header>

                                <Text mb="8px">
                                    {localize(
                                        'The stop loss and/or take profit level and pip value when buying a contract on Deriv MetaTrader 5 (DMT5) is calculated based on the formula:',
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
                                        <Show.Desktop>
                                            <QueryImage
                                                data={data.swap_synthetic_formula}
                                                alt={localize('swap synthetic formula')}
                                            />
                                        </Show.Desktop>
                                        <Show.Mobile>
                                            <QueryImage
                                                data={data.swap_synthetic_formula_mobile}
                                                alt={localize('swap synthetic formula mobile')}
                                            />
                                        </Show.Mobile>
                                        <FormulaText size="14px">
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
                                        <Show.Desktop>
                                            <QueryImage
                                                data={data.swap_synthetic_formula}
                                                alt={localize('swap synthetic formula')}
                                            />
                                        </Show.Desktop>
                                        <Show.Mobile>
                                            <QueryImage
                                                data={data.swap_synthetic_formula_mobile}
                                                alt={localize('swap synthetic formula mobile')}
                                            />
                                        </Show.Mobile>
                                        <FormulaText size="14px">
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
                                            secondary="true"
                                            is_deriv_app_link
                                            to="/mt5"
                                            external="true"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {localize('Go to DMT5 dashboard')}
                                        </StyledLinkButton>
                                    }
                                </LinkWrapper>
                            </RightContent>
                        </ContentContainer>
                    </>
                ) : (
                    <>
                        <ContentContainer mb="4.0rem">
                            <FormWrapper>
                                <Formik
                                    enableReinitialize
                                    initialValues={{
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
                                        setFieldValue('takeProfitPips', getTakeProfitPip(values))
                                        setFieldValue('takeProfitLevel', getTakeProfitLevel(values))
                                        setFieldValue('volume', numberSubmitFormat(values.volume))
                                        setFieldValue(
                                            'assetPrice',
                                            numberSubmitFormat(values.assetPrice),
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
                                    }) => (
                                        <CalculatorForm>
                                            <CalculatorHeader>
                                                <Flex mb="24px">
                                                    <Flex fd="column" mr="24px">
                                                        <CalculatorLabel htmlFor="message">
                                                            {localize('Stop loss pips')}
                                                        </CalculatorLabel>
                                                        <PnLCalculatorOutputContainer>
                                                            <PnLCalculatorOutputField>
                                                                {numberWithCommas(
                                                                    values.stopLossPips,
                                                                )}
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
                                                                {numberWithCommas(
                                                                    values.stopLossLevel,
                                                                )}
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
                                                                {numberWithCommas(
                                                                    values.takeProfitPips,
                                                                )}
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
                                                                {numberWithCommas(
                                                                    values.takeProfitLevel,
                                                                )}
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
                                                    <CalculatorTabItem
                                                        active={sub_tab === 'Synthetic'}
                                                        onClick={() => {
                                                            onSubTabClick('Synthetic')
                                                            setErrors({})
                                                            resetForm({})
                                                        }}
                                                    >
                                                        <Text align="center">
                                                            {localize('Synthetic')}
                                                        </Text>
                                                    </CalculatorTabItem>
                                                    <CalculatorTabItem
                                                        active={sub_tab === 'Financial'}
                                                        disabled={sub_tab === 'Financial'}
                                                        onClick={() => {
                                                            onSubTabClick('Financial')
                                                            setErrors({})
                                                            resetForm({})
                                                            setFieldValue(
                                                                'accountType',
                                                                'Financial',
                                                            )
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
                                                <Flex jc="space-between">
                                                    <Flex fd="column" width="23.4rem">
                                                        <CalculatorDropdown
                                                            option_list={values.optionList}
                                                            label={localize('Symbol')}
                                                            default_option={optionItemDefault}
                                                            selected_option={values.symbol}
                                                            id="symbol"
                                                            onChange={(value) => {
                                                                setFieldValue(
                                                                    'pnlMarginSymbol',
                                                                    getCurrency(value),
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
                                                    </Flex>
                                                    <Flex fd="column" width="23.4rem">
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
                                                                            'Point value',
                                                                        )}
                                                                        autoComplete="off"
                                                                        error={
                                                                            touched.pointValue &&
                                                                            errors.pointValue
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
                                                                            current_input.focus()
                                                                        }}
                                                                        maxLength="8"
                                                                        background="white"
                                                                    />
                                                                )}
                                                            </Field>
                                                        </PnLInputGroup>
                                                    </Flex>
                                                </Flex>

                                                <Flex jc="space-between" mb="17px">
                                                    <Flex fd="column" width="23.4rem">
                                                        <PnLInputGroup>
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
                                                                        maxLength="8"
                                                                        background="white"
                                                                    />
                                                                )}
                                                            </Field>
                                                        </PnLInputGroup>
                                                    </Flex>
                                                    <Flex fd="column" width="23.4rem">
                                                        <PnLInputGroup>
                                                            <Field
                                                                name="takeProfitAmount"
                                                                value={values.takeProfitAmount}
                                                                onChange={(value) => {
                                                                    setFieldValue(
                                                                        'takeProfitAmount',
                                                                        value,
                                                                    )
                                                                }}
                                                            >
                                                                {({ field }) => (
                                                                    <Input
                                                                        {...field}
                                                                        id="takeProfitAmount"
                                                                        type="text"
                                                                        label={localize(
                                                                            'Take profit amount',
                                                                        )}
                                                                        autoComplete="off"
                                                                        error={
                                                                            touched.takeProfitAmount &&
                                                                            errors.takeProfitAmount
                                                                        }
                                                                        onBlur={handleBlur}
                                                                        data-lpignore="true"
                                                                        handleError={(
                                                                            current_input,
                                                                        ) => {
                                                                            setFieldValue(
                                                                                'takeProfitAmount',
                                                                                '',
                                                                                false,
                                                                            )
                                                                            setFieldError(
                                                                                'takeProfitAmount',
                                                                                '',
                                                                            )
                                                                            setFieldTouched(
                                                                                'takeProfitAmount',
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
                                                        </PnLInputGroup>
                                                    </Flex>
                                                </Flex>

                                                <Flex jc="space-between">
                                                    <Flex fd="column" width="23.4rem">
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
                                                                        value={values.assetPrice}
                                                                        label={localize(
                                                                            'Open price of asset',
                                                                        )}
                                                                        autoComplete="off"
                                                                        error={
                                                                            touched.assetPrice &&
                                                                            errors.assetPrice
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
                                                                            current_input.focus()
                                                                        }}
                                                                        maxLength="15"
                                                                        background="white"
                                                                    />
                                                                )}
                                                            </Field>
                                                        </PnLInputGroup>
                                                    </Flex>
                                                    <Flex fd="column" width="23.4rem">
                                                        <PnLInputGroup>
                                                            <Field
                                                                name="stopLossAmount"
                                                                value={values.stopLossAmount}
                                                                onChange={(value) => {
                                                                    setFieldValue(
                                                                        'stopLossAmount',
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
                                                                            values.stopLossAmount
                                                                        }
                                                                        label={localize(
                                                                            'Stop loss amount',
                                                                        )}
                                                                        autoComplete="off"
                                                                        error={
                                                                            touched.stopLossAmount &&
                                                                            errors.stopLossAmount
                                                                        }
                                                                        onBlur={handleBlur}
                                                                        data-lpignore="true"
                                                                        handleError={(
                                                                            current_input,
                                                                        ) => {
                                                                            setFieldValue(
                                                                                'stopLossAmount',
                                                                                '',
                                                                                false,
                                                                            )
                                                                            setFieldError(
                                                                                'stopLossAmount',
                                                                                '',
                                                                            )
                                                                            setFieldTouched(
                                                                                'stopLossAmount',
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
                                        </CalculatorForm>
                                    )}
                                </Formik>
                            </FormWrapper>

                            <RightContent>
                                <Header as="h3" type="section-title" mb="8px">
                                    {localize(
                                        'How to calculate stop loss and/or take profit level and pip value',
                                    )}
                                </Header>

                                <Text mb="8px">
                                    {localize(
                                        'The stop loss and/or take profit level and pip value when buying a contract on Deriv MetaTrader 5 (DMT5) is calculated based on the formula:',
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
                                        <Show.Desktop>
                                            <QueryImage
                                                data={data.swap_synthetic_formula}
                                                alt={localize('swap synthetic formula')}
                                            />
                                        </Show.Desktop>
                                        <Show.Mobile>
                                            <QueryImage
                                                data={data.swap_synthetic_formula_mobile}
                                                alt={localize('swap synthetic formula mobile')}
                                            />
                                        </Show.Mobile>
                                        <FormulaText size="14px">
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
                                        <Show.Desktop>
                                            <QueryImage
                                                data={data.swap_synthetic_formula}
                                                alt={localize('swap synthetic formula')}
                                            />
                                        </Show.Desktop>
                                        <Show.Mobile>
                                            <QueryImage
                                                data={data.swap_synthetic_formula_mobile}
                                                alt={localize('swap synthetic formula mobile')}
                                            />
                                        </Show.Mobile>
                                        <FormulaText size="14px">
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
                                            secondary="true"
                                            is_deriv_app_link
                                            to="/mt5"
                                            external="true"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {localize('Go to DMT5 dashboard')}
                                        </StyledLinkButton>
                                    }
                                </LinkWrapper>
                            </RightContent>
                        </ContentContainer>
                    </>
                )}
            </StyledSection>
        </>
    )
}

export default PnlMarginCalculator
