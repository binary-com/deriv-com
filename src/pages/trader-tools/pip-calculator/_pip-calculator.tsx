import React, { useState } from 'react'
import { Formik, Field } from 'formik'
import { graphql, useStaticQuery } from 'gatsby'
import {
    getPipValue,
    resetValidationPip,
    getCurrency,
    getContractSize,
    numberSubmitFormat,
    getMaxLength,
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
import {
    Accordion,
    AccordionItem,
    Header,
    LocalizedLinkText,
    QueryImage,
    Text,
} from 'components/elements'
import Input from 'components/form/input'
import RightArrow from 'images/svg/tools/black-right-arrow.svg'
import { Flex, Show } from 'components/containers'
import { localize, Localize } from 'components/localization'

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
                    <Text>{localize('_t_Pip calculator_t_')}</Text>
                </Flex>
            </BreadCrumbContainer>
            <StyledSection direction="column">
                <SectionSubtitle as="h3" type="sub-section-title" align="center" weight="normal">
                    {localize(
                        '_t_Our pip calculator helps you to estimate the pip value in your trades so that you can better manage your risk._t_',
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
                                optionList: syntheticItemLists,
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
                                            {localize('_t_Pip value_t_')}
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

                                        <CalculatorDropdown
                                            option_list={values.optionList}
                                            label={localize('_t_Symbol_t_')}
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
                                                        label={localize('_t_Point Value_t_')}
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
                            {localize('_t_How to calculate pip value_t_')}
                        </Header>

                        <Text>
                            {localize(
                                '_t_The pip value for a contract on DMT5 is calculated based on this formula:_t_',
                            )}
                        </Text>
                        <Text mb="1.6rem">
                            <Localize
                                translate_text="_t_<0>Pip value = point value × volume × contract size</0>_t_"
                                components={[<strong key={0} />]}
                            />
                        </Text>

                        <Text mb="1.6rem">
                            {localize(
                                '_t_For synthetic accounts, the pip value is calculated in USD._t_',
                            )}
                        </Text>
                        <Text mb="40px">
                            {localize(
                                '_t_For financial accounts, the pip value is in the quote currency for forex pairs._t_',
                            )}
                        </Text>

                        <Header as="h3" type="section-title" mb="0.8rem">
                            {localize('_t_Example calculation_t_')}
                        </Header>

                        <Accordion has_single_state>
                            <AccordionItem
                                header={localize('_t_Pip value for synthetic indices_t_')}
                                header_style={header_style}
                                style={item_style}
                                plus
                            >
                                <Text mb="16px">
                                    {localize(
                                        '_t_Let’s say you want to trade 1 lot of Volatility 75 Index._t_',
                                    )}
                                </Text>

                                <Show.Desktop>
                                    <QueryImage
                                        data={data.pip_value_formula}
                                        alt={localize('_t_Margin formula_t_')}
                                    />
                                    <QueryImage data={data.pip_info} alt={localize('_t_Pip Info_t_')} />
                                </Show.Desktop>

                                <Show.Mobile>
                                    <QueryImage
                                        data={data.pip_value_formula_mobile}
                                        alt={localize('_t_Margin formula mobile_t_')}
                                    />
                                    <QueryImage
                                        data={data.pip_info_mobile}
                                        alt={localize('_t_Pip Info_t_')}
                                    />
                                </Show.Mobile>
                                <FormulaText>
                                    <StyledOl>
                                        <li>
                                            <span>
                                                {localize(
                                                    '_t_The point value is derived from the current digits of the assets. In the example, the digit is 2, so the point value is 0.01._t_',
                                                )}
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                {localize(
                                                    '_t_The contract size is one standard lot of Volatility 75 index = 1_t_',
                                                )}
                                            </span>
                                        </li>
                                    </StyledOl>
                                </FormulaText>
                                <Text mb="1.6rem" mt="1.6rem">
                                    <Localize
                                        translate_text="_t_So your pip value is <0>0.01 USD</0>._t_"
                                        components={[<strong key={0} />]}
                                    />
                                </Text>
                            </AccordionItem>
                            <AccordionItem
                                header={localize('_t_Pip value for forex_t_')}
                                header_style={header_style}
                                style={item_style}
                                plus
                            >
                                <Text mb="16px">
                                    {localize('_t_Let’s say you want to trade 2 lots of EUR/USD._t_')}
                                </Text>

                                <Show.Desktop>
                                    <QueryImage
                                        data={data.pip_value_forex_formula}
                                        alt={localize('_t_Pip Forex formula_t_')}
                                    />
                                </Show.Desktop>

                                <Show.Mobile>
                                    <QueryImage
                                        data={data.pip_value_forex_formula_mobile}
                                        alt={localize('_t_Pip Forex formula_t_')}
                                    />
                                </Show.Mobile>

                                <FormulaText>
                                    <StyledOl>
                                        <li>
                                            <span>
                                                {localize(
                                                    '_t_The point value is derived from the current digits of the assets. In the example, the digit is 5, so the point value is 0.00001._t_',
                                                )}
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                {localize(
                                                    '_t_One standard lot of forex = 100,000 units_t_',
                                                )}
                                            </span>
                                        </li>
                                    </StyledOl>
                                </FormulaText>

                                <Text mb="1.6rem" mt="1.6rem">
                                    <Localize
                                        translate_text="_t_So your pip value is <0>2 USD</0>._t_"
                                        components={[<strong key={0} />]}
                                    />
                                </Text>
                            </AccordionItem>
                        </Accordion>

                        <LinkWrapper style={{ height: 'fit-content' }}>
                            <StyledLinkButton
                                secondary="true"
                                type="mt5"
                                external="true"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {localize('_t_Go to Deriv MT5 dashboard_t_')}
                            </StyledLinkButton>
                        </LinkWrapper>
                    </RightContent>
                </ContentContainer>
            </StyledSection>
        </>
    )
}

export default PipCalculator
