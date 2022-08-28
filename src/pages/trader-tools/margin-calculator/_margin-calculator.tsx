import React, { useState } from 'react'
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

    const onTabClick = (t) => {
        setTab(t)
    }

    return (
        <>
            <BreadCrumbContainer>
                <Flex jc="flex-start" ai="center">
                    <LocalizedLinkText to="/trader-tools/" color="grey-5">
                        {localize("_t_Traders' tools_t_")}
                    </LocalizedLinkText>
                    <img
                        src={RightArrow}
                        alt={localize('_t_right arrow_t_')}
                        height="16"
                        width="16"
                        style={{ margin: '0 8px' }}
                    />
                    <Text>{localize('_t_Margin calculator_t_')}</Text>
                </Flex>
            </BreadCrumbContainer>
            <StyledSection direction="column">
                <SectionSubtitle as="h3" type="sub-section-title" align="center" weight="normal">
                    {localize(
                        '_t_Our margin calculator helps you to estimate the margin required to keep your positions open overnight on Deriv MT5 (DMT5)._t_',
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
                            }) => (
                                <CalculatorForm>
                                    <CalculatorHeader>
                                        <CalculatorLabel htmlFor="message">
                                            {localize('_t_Margin required_t_')}
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
                                            {localize('_t_Account type_t_')}
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
                                                <Text align="center">{localize('_t_Synthetic_t_')}</Text>
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
                                                <Text align="center">{localize('_t_Financial_t_')}</Text>
                                            </CalculatorTabItem>
                                        </Flex>
                                        <DropdownSearch
                                            id="symbol"
                                            key={tab}
                                            contractSize={values.contractSize}
                                            default_item={optionItemDefault}
                                            error={touched.symbol && errors.symbol}
                                            items={values.optionList}
                                            label={localize('_t_Symbol_t_')}
                                            onChange={(value) => {
                                                setFieldValue('marginSymbol', getCurrency(value))
                                                setFieldValue(
                                                    'contractSize',
                                                    getContractSize(value),
                                                )
                                                setFieldValue('symbol', value)
                                            }}
                                            selected_item={values.symbol}
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
                                                        label={localize('_t_Asset price_t_')}
                                                        autoComplete="off"
                                                        error={
                                                            touched.assetPrice && errors.assetPrice
                                                        }
                                                        onBlur={handleBlur}
                                                        handleError={(current_input) => {
                                                            setFieldValue('assetPrice', '', false)
                                                            setFieldError('assetPrice', '')
                                                            setFieldTouched(
                                                                'assetPrice',
                                                                false,
                                                                false,
                                                            )
                                                            current_input.focus()
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
                                        <Dropdown
                                            option_list={leverageItemLists}
                                            id="leverage"
                                            label={localize('_t_Leverage_t_')}
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
                                                {localize('_t_Calculate_t_')}
                                            </CalculateButton>
                                        </Flex>
                                    </CalculatorBody>
                                </CalculatorForm>
                            )}
                        </Formik>
                    </FormWrapper>
                    <RightContent>
                        <Header as="h3" type="section-title" mb="0.8rem">
                            {localize('_t_How to calculate margin_t_')}
                        </Header>
                        <Text>
                            <Localize translate_text="_t_The margin required for a contract on DMT5 is calculated based on the formula:_t_" />
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
                            {localize(
                                '_t_For instance, if you are trading the USD/CHF forex pair, the margin requirement will be calculated in Swiss Franc (CHF) which is the quote currency. On the other hand, if you are trading Volatility Index 75,  then the margin requirement will be calculated in US Dollar (USD), which is the denomination of the underlying asset – Volatility Index 75._t_',
                            )}
                        </Text>
                        <Header as="h3" type="section-title" mb="0.8rem">
                            {localize('_t_Example calculation_t_')}
                        </Header>
                        <Accordion has_single_state>
                            <AccordionItem
                                header={localize('_t_Margin required_t_')}
                                header_style={header_style}
                                style={item_style}
                                plus
                            >
                                <Text mb="16px">
                                    {localize(
                                        '_t_Let’s say you want to trade two lots of EUR/USD with an asset price of 1.10 USD and leverage of 100._t_',
                                    )}
                                </Text>
                                <Show.Desktop>
                                    <QueryImage
                                        data={data.margin_formula}
                                        alt={localize('_t_Margin formula_t_')}
                                    />
                                </Show.Desktop>
                                <Show.Mobile>
                                    <QueryImage
                                        data={data.margin_formula_mobile}
                                        alt={localize('_t_Margin formula mobile_t_')}
                                    />
                                </Show.Mobile>
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
                                    {localize(
                                        '_t_Note that these are approximate values only and will differ depending on the leverage that is set for your account and the asset you want to trade._t_',
                                    )}
                                </Text>
                            </AccordionItem>
                        </Accordion>
                        <LinkWrapper height="auto">
                            <StyledLinkButton
                                tertiary="true"
                                type="mt5"
                                external="true"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {localize('_t_Go to Deriv MT5 dashboard_t_')}
                            </StyledLinkButton>
                            <StyledLinkButton secondary="true" to="/trade-types/cfds/">
                                {localize('_t_Learn more about margin_t_')}
                            </StyledLinkButton>
                        </LinkWrapper>
                    </RightContent>
                </ContentContainer>
            </StyledSection>
        </>
    )
}

export default MarginCalculator
