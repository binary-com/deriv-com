import React, { useState } from 'react'
import { Formik, Field } from 'formik'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import {
    getSwapChargeSynthetic,
    getSwapChargeForex,
    resetValidationSynthetic,
    resetValidationForex,
    getContractSize,
    getCurrency,
    numberSubmitFormatNegative,
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
    CalculatorForm,
    CalculatorHeader,
    CalculatorLabel,
    CalculatorOutputContainer,
    CalculatorOutputField,
    CalculatorOutputSymbol,
    ContentContainer,
    FormulaText,
    header_style,
    InputGroup,
    item_style,
    LinkWrapper,
    RightContent,
    SectionSubtitle,
    StyledLinkButton,
    StyledOl,
    StyledSection,
    SwapFormWrapper,
    SwapTabSelector,
} from '../common/_style'
import { localize, Localize } from 'components/localization'
import {
    Accordion,
    AccordionItem,
    Dropdown,
    Header,
    LocalizedLinkText,
    QueryImage,
    Text,
} from 'components/elements'
import { Flex, Show } from 'components/containers'
import Input from 'components/form/input'
import RightArrow from 'images/svg/black-right-arrow.svg'

const StyledInputGroup = styled(InputGroup)`
    margin: 0;
`

const SwapCalculator = () => {
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

    const [tab, setTab] = useState('Synthetic')

    const onTabClick = (tab) => {
        setTab(tab)
    }

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
                    <Text>{localize('Swap calculator')}</Text>
                </Flex>
            </BreadCrumbContainer>
            <StyledSection direction="column">
                <SectionSubtitle as="h3" type="sub-section-title" align="center" weight="normal">
                    {localize(
                        'Our swap calculator helps you to estimate the swap charges required to keep your positions open overnight on Deriv MetaTrader 5 (DMT5).',
                    )}
                </SectionSubtitle>

                <Flex mt="80px" mb="40px" tablet={{ mt: '40px', mb: '24px' }}>
                    <SwapTabSelector
                        active={tab === 'Synthetic'}
                        onClick={() => onTabClick('Synthetic')}
                    >
                        <Text size="var(--text-size-m)" align="center">
                            {localize('Synthetic')}
                        </Text>
                    </SwapTabSelector>
                    <SwapTabSelector active={tab === 'Real'} onClick={() => onTabClick('Real')}>
                        <Text size="var(--text-size-m)" align="center">
                            {localize('Financial')}
                        </Text>
                    </SwapTabSelector>
                </Flex>

                {tab === 'Synthetic' ? (
                    <>
                        <ContentContainer mb="4.0rem">
                            <SwapFormWrapper>
                                <Formik
                                    enableReinitialize
                                    initialValues={{
                                        swapCharge: 0,
                                        swapChargeSymbol: 'USD',
                                        symbol: '',
                                        volume: '',
                                        optionList: syntheticItemLists,
                                        contractSize: '',
                                        swapRate: '',
                                        assetPrice: '',
                                    }}
                                    validate={resetValidationSynthetic}
                                    onSubmit={(values, { setFieldValue }) => {
                                        setFieldValue('swapCharge', getSwapChargeSynthetic(values))
                                        setFieldValue('volume', numberSubmitFormat(values.volume))
                                        setFieldValue(
                                            'swapRate',
                                            numberSubmitFormatNegative(values.swapRate),
                                        )
                                        setFieldValue(
                                            'assetPrice',
                                            numberSubmitFormat(values.assetPrice),
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
                                    }) => (
                                        <CalculatorForm>
                                            <CalculatorHeader>
                                                <CalculatorLabel htmlFor="message">
                                                    {localize('Swap charge')}
                                                </CalculatorLabel>
                                                <CalculatorOutputContainer>
                                                    <CalculatorOutputField>
                                                        {numberWithCommas(values.swapCharge)}
                                                    </CalculatorOutputField>
                                                    <CalculatorOutputSymbol>
                                                        {values.swapChargeSymbol}
                                                    </CalculatorOutputSymbol>
                                                </CalculatorOutputContainer>
                                            </CalculatorHeader>

                                            <CalculatorBody>
                                                <Dropdown
                                                    mb="3.6rem"
                                                    option_list={values.optionList}
                                                    label={localize('Symbol')}
                                                    default_option={optionItemDefault}
                                                    selected_option={values.symbol}
                                                    id="symbol"
                                                    onChange={(value) => {
                                                        setFieldValue(
                                                            'swapCurrency',
                                                            getCurrency(value),
                                                        )

                                                        setFieldValue(
                                                            'contractSize',
                                                            getContractSize(value),
                                                        )
                                                        setFieldValue('symbol', value)
                                                    }}
                                                    contract_size={values.contractSize}
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
                                                                    touched.volume && errors.volume
                                                                }
                                                                onBlur={handleBlur}
                                                                data-lpignore="true"
                                                                handleError={(current_input) => {
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
                                                                handleError={(current_input) => {
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
                                                                    current_input.focus()
                                                                }}
                                                                maxLength="15"
                                                                background="white"
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
                                                                    touched.swapRate &&
                                                                    errors.swapRate
                                                                }
                                                                onBlur={handleBlur}
                                                                data-lpignore="true"
                                                                handleError={(current_input) => {
                                                                    setFieldValue(
                                                                        'swapRate',
                                                                        '',
                                                                        false,
                                                                    )
                                                                    setFieldError('swapRate', '')
                                                                    setFieldTouched(
                                                                        'swapRate',
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
                                                </StyledInputGroup>
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
                            </SwapFormWrapper>

                            <RightContent>
                                <Header as="h3" type="section-title" mb="8px">
                                    {localize('How to calculate swap charges')}
                                </Header>

                                <Text>
                                    <Localize translate_text="For synthetic, the swap charge is calculated on an annual basis for long and short positions based on this formula:" />
                                </Text>
                                <Text mb="2rem">
                                    <Localize
                                        translate_text="<0>Swap charge = volume × contract size × asset price × (swap rate ÷ 100) ÷ 360</0>"
                                        components={[<strong key={0} />]}
                                    />
                                </Text>

                                <Text mb="2rem">
                                    <Localize translate_text="This gives you the swap charge in USD." />
                                </Text>

                                <Header as="h3" type="section-title" mb="16px">
                                    {localize('Example calculation')}
                                </Header>

                                <Accordion has_single_state>
                                    <AccordionItem
                                        header={localize('Swap charge')}
                                        header_style={header_style}
                                        style={item_style}
                                        plus
                                    >
                                        <Text mb="2rem">
                                            {localize(
                                                'Let’s say you want to keep 0.01 lots of Volatility 75 Index with an asset price of 400,000 USD and swap rate of -7.5 open for one night.',
                                            )}
                                        </Text>

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
                                                        <Localize translate_text="The contract size is one standard lot of Volatility 75 Index = 1" />
                                                    </span>
                                                </li>
                                                <li>
                                                    <span>
                                                        <Localize translate_text="If the swap rate is positive, your account will be credited with the swap amount. If it is negative, your account will be debited." />
                                                    </span>
                                                </li>
                                            </StyledOl>
                                        </FormulaText>

                                        <Text mt="1.6rem">
                                            <Localize
                                                translate_text="So you will require a swap charge of <0>0.83 USD</0> to keep the position open for one night."
                                                components={[<strong key={0} />]}
                                            />
                                        </Text>
                                    </AccordionItem>
                                </Accordion>

                                <LinkWrapper height="auto">
                                    {
                                        <StyledLinkButton
                                            tertiary="true"
                                            is_deriv_app_link
                                            to="/mt5"
                                            external="true"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {localize('Go to DMT5 dashboard')}
                                        </StyledLinkButton>
                                    }
                                    {
                                        <StyledLinkButton
                                            secondary="true"
                                            to="/trade-types/margin#swap-policy"
                                        >
                                            {localize('Learn more about swap')}
                                        </StyledLinkButton>
                                    }
                                </LinkWrapper>
                            </RightContent>
                        </ContentContainer>
                    </>
                ) : (
                    <>
                        <ContentContainer mb="2.0rem">
                            <SwapFormWrapper>
                                <Formik
                                    enableReinitialize
                                    initialValues={{
                                        swapCharge: 0,
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
                                        setFieldValue('volume', numberSubmitFormat(values.volume))
                                        setFieldValue(
                                            'swapRate',
                                            numberSubmitFormatNegative(values.swapRate),
                                        )
                                        setFieldValue(
                                            'pointValue',
                                            numberSubmitFormat(values.pointValue),
                                        )
                                    }}
                                >
                                    {({
                                        values,
                                        setFieldValue,
                                        handleBlur,
                                        errors,
                                        touched,
                                        isValid,
                                        dirty,
                                        setFieldTouched,
                                        setFieldError,
                                    }) => (
                                        <CalculatorForm>
                                            <CalculatorHeader>
                                                <CalculatorLabel htmlFor="message">
                                                    {localize('Swap charge')}
                                                </CalculatorLabel>
                                                <CalculatorOutputContainer>
                                                    <CalculatorOutputField>
                                                        {numberWithCommas(values.swapCharge)}
                                                    </CalculatorOutputField>
                                                    <CalculatorOutputSymbol>
                                                        {values.swapChargeSymbol}
                                                    </CalculatorOutputSymbol>
                                                </CalculatorOutputContainer>
                                            </CalculatorHeader>

                                            <CalculatorBody>
                                                <Dropdown
                                                    default_option={optionItemDefault}
                                                    option_list={values.optionList}
                                                    label={localize('Symbol')}
                                                    selected_option={values.symbol}
                                                    id="symbol"
                                                    onChange={(value) => {
                                                        setFieldValue(
                                                            'swapCurrency',
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
                                                                    touched.volume && errors.volume
                                                                }
                                                                onBlur={handleBlur}
                                                                data-lpignore="true"
                                                                handleError={(current_input) => {
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
                                                                maxLength="8"
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
                                                                value={values.pointValue}
                                                                label={localize('Point value')}
                                                                autoComplete="off"
                                                                error={
                                                                    touched.pointValue &&
                                                                    errors.pointValue
                                                                }
                                                                onBlur={handleBlur}
                                                                data-lpignore="true"
                                                                handleError={(current_input) => {
                                                                    setFieldValue(
                                                                        'pointValue',
                                                                        '',
                                                                        false,
                                                                    )
                                                                    setFieldError('pointValue', '')
                                                                    setFieldTouched(
                                                                        'pointValue',
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
                                                                    touched.swapRate &&
                                                                    errors.swapRate
                                                                }
                                                                onBlur={handleBlur}
                                                                data-lpignore="true"
                                                                handleError={(current_input) => {
                                                                    setFieldValue(
                                                                        'swapRate',
                                                                        '',
                                                                        false,
                                                                    )
                                                                    setFieldError('swapRate', '')
                                                                    setFieldTouched(
                                                                        'swapRate',
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
                                                </StyledInputGroup>
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
                            </SwapFormWrapper>

                            <RightContent direction="column" max_width="69rem">
                                <Header as="h3" type="section-title" mb="8px">
                                    {localize('How to calculate swap charges')}
                                </Header>

                                <Text>
                                    <Localize translate_text="For financial, the swap charge is calculated based on this formula:" />
                                </Text>
                                <Text mb="2rem">
                                    <Localize
                                        translate_text="<0>Swap charge = volume × contract size × point value × swap rate</0>"
                                        components={[<strong key={0} />]}
                                    />
                                </Text>

                                <Text mb="2rem">
                                    <Localize translate_text="This gives you the swap charge in the quote currency for forex pairs, or in the denomination of the underlying asset for commodities." />
                                </Text>

                                <Text mb="2rem">
                                    <Localize translate_text="For instance, if you are trading the USD/JPY forex pair, the swap charge will be computed in Japanese Yen (JPY) which is the quote currency. On the other hand, if you are trading oil,  then the swap charge will be computed in US Dollar (USD), which is the denomination of the underlying asset – oil." />
                                </Text>

                                <Header as="h3" type="section-title" mb="16px">
                                    {localize('Example calculation')}
                                </Header>

                                <Accordion has_single_state>
                                    <AccordionItem
                                        header={localize('Swap charge')}
                                        header_style={header_style}
                                        style={item_style}
                                        plus
                                    >
                                        <Text mb="2rem">
                                            {localize(
                                                'Let’s say you want to keep two lots of EUR/USD with a point value of 0.00001 and swap rate of -0.12 open for one night.',
                                            )}
                                        </Text>

                                        <Show.Desktop>
                                            <QueryImage
                                                data={data.swap_forex_formula}
                                                alt={localize('Swap forex formula')}
                                            />
                                        </Show.Desktop>
                                        <Show.Mobile>
                                            <QueryImage
                                                data={data.swap_forex_formula_mobile}
                                                alt={localize('Swap forex formula mobile')}
                                            />
                                        </Show.Mobile>
                                        <FormulaText size="14px">
                                            <StyledOl>
                                                <li>
                                                    <span>
                                                        <Localize translate_text="One standard lot for Forex = 100,000 units" />
                                                    </span>
                                                </li>
                                                <li>
                                                    <span>
                                                        <Localize translate_text="The point value is derivied from the current digits of the asset. In this example, the digit is 5, so the point value is 0.00001." />
                                                    </span>
                                                </li>
                                                <li>
                                                    <span>
                                                        <Localize translate_text="If the swap rate is positive, your account will be credited with the swap amount. If it is negative, your account will be debited." />
                                                    </span>
                                                </li>
                                            </StyledOl>
                                        </FormulaText>

                                        <Text mt="1.6rem">
                                            <Localize
                                                translate_text="So you will require a swap charge of <0>0.24 USD</0> to keep the position open for one night."
                                                components={[<strong key={0} />]}
                                            />
                                        </Text>
                                    </AccordionItem>
                                </Accordion>
                                <LinkWrapper height="auto">
                                    <StyledLinkButton
                                        tertiary="true"
                                        is_deriv_app_link
                                        to="/mt5"
                                        external="true"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {localize('Go to DMT5 dashboard')}
                                    </StyledLinkButton>
                                    <StyledLinkButton
                                        secondary="true"
                                        to="/trade-types/margin#swap-policy"
                                    >
                                        {localize('Learn more about swap')}
                                    </StyledLinkButton>
                                </LinkWrapper>
                            </RightContent>
                        </ContentContainer>
                    </>
                )}
            </StyledSection>
        </>
    )
}

export default SwapCalculator
