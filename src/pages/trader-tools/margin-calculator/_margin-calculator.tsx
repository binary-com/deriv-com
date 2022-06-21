import React, { useState } from 'react'
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
    FormulaValueSwapSynthetic,
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
    Sup,
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
    Text,
} from 'components/elements'
import Input from 'components/form/input'
import RightArrow from 'images/svg/tools/black-right-arrow.svg'

const MarginCalculator = () => {
    const [tab, setTab] = useState('Synthetic')

    const onTabClick = (t) => {
        setTab(t)
    }

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
                                                <Text align="center">{localize('Synthetic')}</Text>
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
                                                <Text align="center">{localize('Financial')}</Text>
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
                                                        label={localize('Asset price')}
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
                            )}
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
                                    <FormulaContainer pt="8px">
                                        <FormulaHighlight pl="87px" pr="87px" jc="space-evenly">
                                            <FormulaValue>
                                                <Localize translate_text="( 2" />
                                                <PointerContainer>
                                                    <PointerDot />
                                                    <PointerStick height="32px" />
                                                    <PointerText>
                                                        <Localize translate_text="Volume" />
                                                    </PointerText>
                                                </PointerContainer>
                                            </FormulaValue>

                                            <FormulaValue>
                                                <FormulaGreen> x </FormulaGreen>
                                            </FormulaValue>

                                            <FormulaValue>
                                                <Localize translate_text="100,000" />
                                                <PointerContainer width="100px" ml="-25px">
                                                    <PointerDot />
                                                    <PointerStick height="32px" />
                                                    <PointerText top>
                                                        <Localize
                                                            translate_text="Contract size <0>1</0>"
                                                            components={[<Sup key={0} />]}
                                                        />
                                                    </PointerText>
                                                </PointerContainer>
                                            </FormulaValue>

                                            <FormulaValue>
                                                <FormulaGreen>x</FormulaGreen>
                                            </FormulaValue>

                                            <FormulaValue>
                                                <Localize translate_text="1.10 )" />
                                                <PointerContainer width="100px" ml="-20px">
                                                    <PointerDot />
                                                    <PointerStick height="32px" />
                                                    <PointerText>
                                                        <Localize translate_text="Asset price" />
                                                    </PointerText>
                                                </PointerContainer>
                                            </FormulaValue>

                                            <FormulaValue>
                                                <FormulaGreen>&divide; </FormulaGreen>
                                            </FormulaValue>

                                            <FormulaValue>
                                                <Localize translate_text="100" />
                                                <PointerContainer ml="-10px">
                                                    <PointerDot />
                                                    <PointerStick height="32px" />
                                                    <PointerText>
                                                        <Localize translate_text="Leverage" />
                                                    </PointerText>
                                                </PointerContainer>
                                            </FormulaValue>

                                            <FormulaValue>
                                                <FormulaGreen>=</FormulaGreen>
                                            </FormulaValue>

                                            <FormulaValue>
                                                <Localize
                                                    translate_text="<0>2,200</0>"
                                                    components={[<FormulaGreen key={0} />]}
                                                />
                                                <PointerContainer ml="-30px" width="100px">
                                                    <PointerDot />
                                                    <PointerStick height="32px" />
                                                    <PointerText>
                                                        <Localize translate_text="Margin required" />
                                                    </PointerText>
                                                </PointerContainer>
                                            </FormulaValue>
                                        </FormulaHighlight>
                                    </FormulaContainer>
                                </Show.Desktop>
                                <Show.Mobile>
                                    <FormulaContainerMobile>
                                        <FormulaHighlightMobile jc="space-evenly">
                                            <FormulaValueMobile>
                                                <Localize translate_text="( 2" />
                                                <PointerContainerMobile>
                                                    <PointerDotMobile />
                                                    <PointerStickMobile />
                                                    <PointerTextMobile>
                                                        <Localize translate_text="Volume" />
                                                    </PointerTextMobile>
                                                </PointerContainerMobile>
                                            </FormulaValueMobile>

                                            <FormulaValueSwapSyntheticMobile>
                                                <FormulaGreen> x </FormulaGreen>
                                            </FormulaValueSwapSyntheticMobile>

                                            <FormulaValueMobile>
                                                <Localize translate_text="100,000" />
                                                <PointerContainerMobile top ml="-20px" mw="0">
                                                    <PointerDotMobile />
                                                    <PointerStickMobile />
                                                    <PointerTextMobile top>
                                                        <Localize
                                                            translate_text="Contract size <0>1</0>"
                                                            components={[<Sup key={0} />]}
                                                        />
                                                    </PointerTextMobile>
                                                </PointerContainerMobile>
                                            </FormulaValueMobile>

                                            <FormulaValueSwapSyntheticMobile>
                                                <FormulaGreen>x</FormulaGreen>
                                            </FormulaValueSwapSyntheticMobile>

                                            <FormulaValueMobile>
                                                <Localize translate_text="1.10 )" />
                                                <PointerContainerMobile ml="-20px" mw="0">
                                                    <PointerDotMobile />
                                                    <PointerStickMobile />
                                                    <PointerTextMobile>
                                                        <Localize translate_text="Asset price" />
                                                    </PointerTextMobile>
                                                </PointerContainerMobile>
                                            </FormulaValueMobile>

                                            <FormulaValueMobile>
                                                <FormulaGreen>&divide; </FormulaGreen>
                                            </FormulaValueMobile>

                                            <FormulaValueMobile>
                                                <Localize translate_text="100" />
                                                <PointerContainerMobile top ml="4px">
                                                    <PointerDotMobile />
                                                    <PointerStickMobile />
                                                    <PointerTextMobile top>
                                                        <Localize translate_text="Leverage" />
                                                    </PointerTextMobile>
                                                </PointerContainerMobile>
                                            </FormulaValueMobile>

                                            <FormulaValueSwapSyntheticMobile>
                                                <FormulaGreen>=</FormulaGreen>
                                            </FormulaValueSwapSyntheticMobile>

                                            <FormulaValueMobile>
                                                <Localize
                                                    translate_text="<0>2,200</0>"
                                                    components={[<FormulaGreen key={0} />]}
                                                />
                                                <PointerContainerMobile mw="0" ml="-20px">
                                                    <PointerDotMobile />
                                                    <PointerStickMobile />
                                                    <PointerTextMobile ml="-25px">
                                                        <Localize translate_text="Margin required" />
                                                    </PointerTextMobile>
                                                </PointerContainerMobile>
                                            </FormulaValueMobile>
                                        </FormulaHighlightMobile>
                                    </FormulaContainerMobile>
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
                                tertiary="true"
                                type="mt5"
                                external="true"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {localize('Go to Deriv MT5 dashboard')}
                            </StyledLinkButton>
                            <StyledLinkButton secondary="true" to="/trade-types/cfds/">
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
