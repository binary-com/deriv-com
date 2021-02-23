import React, { useState } from 'react'
import { Formik, Field } from 'formik'
import { graphql, useStaticQuery } from 'gatsby'
import {
    optionItemDefault,
    syntheticItemLists,
    financialItemLists,
} from '../components/_underlying-data'
import {
    StyledText,
    StyledSection,
    ContentContainer,
    FormWrapper,
    CalculatorForm,
    CalculatorHeader,
    CalculatorLabel,
    CalculatorOutputContainer,
    CalculatorOutputField,
    CalculatorOutputSymbol,
    CalculatorBody,
    CalculatorTabItem,
    CalculatorDropdown,
    InputGroup,
    ActionSection,
    CalculateButton,
    RightContent,
    RightContentHeader,
    TextWrapper,
    ImageWrapper,
    FormulaText,
    StyledOl,
    LinkWrapper,
    BottomContent,
    StyledLinkButton,
} from '../components/_style'
import validation from '../components/_validation'
import { localize, Localize } from 'components/localization'
import { Flex, Show } from 'components/containers'
import { Text, QueryImage } from 'components/elements'
import Input from 'components/form/input'

const PipCalculator = () => {
    const query = graphql`
        query {
            pip_formula: file(relativePath: { eq: "trade-tools/pip-value-formula.png" }) {
                ...fadeIn
            }
        }
    `
    const data = useStaticQuery(query)

    const [tab, setTab] = useState('Synthetic')

    const onTabClick = (tab) => {
        setTab(tab)
    }

    const getPip = (values) => {
        const { symbol, volume, pointValue, contractSize } = values
        let pip_formula
        const STEPINDEX_VALUE = 100
        const RANGEBREAK100VALUE = 400
        const RANGEBREAK200VALUE = 800

        if (symbol.name === 'Step Index') {
            pip_formula = volume * STEPINDEX_VALUE
        } else if (symbol.name === 'Range Break 100 Index') {
            pip_formula = volume * RANGEBREAK100VALUE
        } else if (symbol.name === 'Range Break 200 Index') {
            pip_formula = volume * RANGEBREAK200VALUE
        } else {
            pip_formula = volume * contractSize * pointValue
        }

        return toFixed(pip_formula)
    }

    const toFixed = (val) => {
        return parseFloat(val.toFixed(3)).toLocaleString()
    }

    const resetValidation = (values) => {
        const errors = {}
        const symbol_error = validation.symbol(values.symbol)
        const volume_error = validation.volume(values.volume)
        const pointValue_error = validation.pointValue(values.pointValue)

        if (symbol_error) {
            errors.symbol = symbol_error
        }
        if (volume_error) {
            errors.volume = volume_error
        }
        if (pointValue_error) {
            errors.pointValue = pointValue_error
        }

        return errors
    }

    const getPipCurrency = (symbol) => {
        let currency = 'USD'
        if (symbol.market === 'synthetic_indices' || symbol.market === 'commodities') {
            currency = 'USD'
        }

        if (symbol.name === 'DAX_30') {
            currency = 'EUR'
        }

        if (symbol.market === 'forex' && symbol.name !== 'default' && symbol.name !== 'CL_BRENT') {
            currency = symbol.display_name.slice(-3)
        }

        return currency
    }

    const getContractSize = (symbol) => {
        let contractSize = 1

        if (symbol.market === 'forex') {
            contractSize = 100000
        }

        if (symbol.market === 'commodities') {
            switch (symbol.name) {
                case 'XAGUSD':
                    contractSize = 5000
                    break
                case 'XAUUSD':
                case 'XPDUSD':
                case 'XPTUSD':
                    contractSize = 100
                    break
            }
        }

        if (symbol.name === 'Step Index') {
            contractSize = 10
        }

        return contractSize
    }

    const numberWithCommas = (input) => {
        return input.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    }

    const numberSubmitFormat = (input) => {
        return input.replace(/^0+(?!\.|$)/, '')
    }

    return (
        <StyledSection direction="column">
            <Text padding="0rem 0rem 6rem 32rem">
                <Localize
                    translate_text="Trader`s tools > <0> Pip Calculator</0>"
                    components={[<strong key={0} />]}
                ></Localize>
            </Text>
            <Text size="var(--text-size-m)" align="center">
                {localize(
                    'Our pip calculator helps you to estimate the pip value in your trades so',
                )}
            </Text>
            <Text size="var(--text-size-m)" align="center" padding="0rem 0rem 6rem 0rem">
                {localize('that you can better manage your risk.')}
            </Text>

            <ContentContainer mb="4.0rem">
                <FormWrapper>
                    <Formik
                        enableReinitialize
                        initialValues={{
                            accountType: 'Synthetic',
                            pip: 0,
                            pipSymbol: 'USD',
                            symbol: '',
                            volume: '',
                            pointValue: '',
                            optionList: syntheticItemLists,
                            contractSize: '',
                        }}
                        validate={resetValidation}
                        onSubmit={(values, { setFieldValue }) => {
                            setFieldValue('pip', getPip(values))
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
                                        {localize('Pip required')}
                                    </CalculatorLabel>
                                    <CalculatorOutputContainer>
                                        <CalculatorOutputField>
                                            {numberWithCommas(values.pip)}
                                        </CalculatorOutputField>
                                        <CalculatorOutputSymbol>
                                            {values.pipSymbol}
                                        </CalculatorOutputSymbol>
                                    </CalculatorOutputContainer>
                                </CalculatorHeader>

                                <CalculatorBody>
                                    <CalculatorLabel>{localize('Account type')}</CalculatorLabel>
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
                                            <StyledText align="center">
                                                {localize('Synthetic')}
                                            </StyledText>
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
                                            <StyledText align="center">
                                                {localize('Financial')}
                                            </StyledText>
                                        </CalculatorTabItem>
                                    </Flex>

                                    <CalculatorDropdown
                                        option_list={values.optionList}
                                        label={localize('Symbol')}
                                        default_option={optionItemDefault}
                                        selected_option={values.symbol}
                                        id="symbol"
                                        onChange={(value) => {
                                            setFieldValue('pipSymbol', getPipCurrency(value))
                                            setFieldValue('contractSize', getContractSize(value))
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
                                                    label={localize('Point Value')}
                                                    autoComplete="off"
                                                    error={touched.pointValue && errors.pointValue}
                                                    onBlur={handleBlur}
                                                    handleError={(current_input) => {
                                                        setFieldValue('pointValue', '', false)
                                                        setFieldError('pointValue', '')
                                                        setFieldTouched('pointValue', false, false)
                                                        current_input.focus()
                                                    }}
                                                    maxLength="15"
                                                    background="white"
                                                />
                                            )}
                                        </Field>
                                    </InputGroup>
                                    <ActionSection>
                                        <CalculateButton
                                            secondary
                                            type="submit"
                                            disabled={!isValid || !dirty}
                                        >
                                            {localize('Calculate')}
                                        </CalculateButton>
                                    </ActionSection>
                                </CalculatorBody>
                            </CalculatorForm>
                        )}
                    </Formik>
                </FormWrapper>

                <RightContent>
                    <TextWrapper>
                        <RightContentHeader as="h3" type="section-title" mb="0.8rem">
                            {localize('How to calculate pip value')}
                        </RightContentHeader>

                        <StyledText>
                            <Localize translate_text="The pip value for a contract on DMT5 is calculated based on this formula:" />
                        </StyledText>
                        <StyledText mb="1.6rem">
                            <Localize
                                translate_text="<0> Pip value = point value x volume x contract size</0>"
                                components={[<strong key={0} />]}
                            />
                        </StyledText>

                        <StyledText mb="1.6rem">
                            <Localize translate_text="The pip value is calculated in USD." />
                        </StyledText>

                        <RightContentHeader as="h3" type="section-title" mb="0.8rem">
                            {localize('Example calculation')}
                        </RightContentHeader>

                        <StyledText mb="16px">
                            {localize('Let’s say you want to trade 1 lot of Volatility 75 Index.')}
                        </StyledText>
                    </TextWrapper>

                    <ImageWrapper>
                        <Show.Desktop>
                            <QueryImage data={data.pip_formula} alt={'Pip formula'} />
                        </Show.Desktop>

                        <Show.Mobile>
                            <QueryImage data={data.pip_formula_mobile} alt={'Pip formula mobile'} />
                        </Show.Mobile>

                        <FormulaText>
                            <StyledOl>
                                <li>
                                    <span>
                                        <Localize translate_text=" The point value is derived from the current digits of the asset. In this example, the digit is 2, so the point value is 0.01." />
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        <Localize translate_text=" The contract size is one standard lot of Volatility 75 Index = 1" />
                                    </span>
                                </li>
                            </StyledOl>
                        </FormulaText>
                    </ImageWrapper>

                    <TextWrapper>
                        <StyledText mb="1.6rem" mt="1.6rem">
                            <Localize
                                translate_text="So your pip value is <0>0.01 USD</0>."
                                components={[<strong key={0} />]}
                            />
                        </StyledText>
                    </TextWrapper>
                </RightContent>
            </ContentContainer>

            <BottomContent direction="column">
                <LinkWrapper>
                    <StyledLinkButton
                        secondary="true"
                        to="https://app.deriv.com/mt5"
                        external="true"
                        target="_blank"
                    >
                        {localize('Go to DMT5 dashboard')}
                    </StyledLinkButton>
                </LinkWrapper>
            </BottomContent>
        </StyledSection>
    )
}

export default PipCalculator
