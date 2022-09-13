import React, { useState } from 'react'
import { Field, Formik } from 'formik'
import { graphql, useStaticQuery } from 'gatsby'
import { FormikErrors, FormikTouched } from '../common/_formik-types'
import {
    getPnlMultiplierCommon,
    numberSubmitFormat,
    resetValidationPnlMultipliersAmount,
    resetValidationPnlMultipliersLevel,
    getMaxLength,
} from '../common/_utility'
import {
    BreadCrumbContainer,
    CalculateButton,
    CalculatorBody,
    PnlCalculatorFormMobile,
    CalculatorHeader,
    CalculatorLabel,
    ContentContainer,
    FormulaText,
    FormWrapper,
    header_style,
    InputGroup,
    item_style,
    LinkWrapper,
    PnLCalculatorOutputContainer,
    PnLCalculatorOutputField,
    PnLCalculatorOutputSymbol,
    PnlCalculatorTabItem,
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

type ErrorHandlersKeyType =
    | 'commissionErrorHandler'
    | 'stopLossAmountErrorHandler'
    | 'assetPriceErrorHandler'
    | 'multiplierErrorHandler'
    | 'stopLossLevelErrorHandler'
    | 'stakeErrorHandler'

type ErrorHandlersCallbackType = (current_input: string) => void

type ErrorHandlersFunctionType = Partial<Record<ErrorHandlersKeyType, ErrorHandlersCallbackType>>

type FormikState<Values> = {
    values: Values
    setFieldValue: (field: string, value: string, shouldValidate?: boolean) => void
    touched: FormikTouched<Values>
    errors: FormikErrors<Values>
    handleBlur: {
        (e: React.FocusEvent<string>): void
    }
}

type FieldsType<Values> = FormikState<Values> & ErrorHandlersFunctionType

type CommissionFieldProps = {
    commission: string
}

type StopLossAmountFieldProps = {
    stopLossAmount: string
}

type AssetPriceFieldProps = {
    assetPrice: string
}

type MultiplierFieldProps = {
    multiplier: string
}

type StopLossLevelFieldProps = {
    stopLossLevel: string
}

type StakeFieldProps = {
    stake: string
}

const CommissionField = ({
    values,
    setFieldValue,
    touched,
    errors,
    handleBlur,
    commissionErrorHandler,
}: FieldsType<CommissionFieldProps>) => (
    <Field
        name="commission"
        value={values.commission}
        onChange={(value) => {
            setFieldValue('commission', value)
        }}
    >
        {({ field }) => (
            <Input
                {...field}
                id="commission"
                type="text"
                label={localize('Commission')}
                autoComplete="off"
                error={touched.commission && errors.commission}
                onBlur={handleBlur}
                data-lpignore="true"
                handleError={commissionErrorHandler}
                maxLength={getMaxLength(values.commission, 8)}
                background="white"
            />
        )}
    </Field>
)

const StopLossAmountField = ({
    values,
    setFieldValue,
    touched,
    errors,
    handleBlur,
    stopLossAmountErrorHandler,
}: FieldsType<StopLossAmountFieldProps>) => (
    <Field
        name="stopLossAmount"
        value={values.stopLossAmount}
        onChange={(value) => {
            setFieldValue('stopLossAmount', value)
        }}
    >
        {({ field }) => (
            <Input
                {...field}
                id="stopLossAmount"
                type="text"
                value={values.stopLossAmount}
                label={localize('Stop loss amount')}
                autoComplete="off"
                error={touched.stopLossAmount && errors.stopLossAmount}
                onBlur={handleBlur}
                data-lpignore="true"
                handleError={stopLossAmountErrorHandler}
                maxLength={getMaxLength(values.stopLossAmount, 15)}
                background="white"
            />
        )}
    </Field>
)

const AssetPriceField = ({
    values,
    setFieldValue,
    touched,
    errors,
    handleBlur,
    assetPriceErrorHandler,
}: FieldsType<AssetPriceFieldProps>) => (
    <Field
        name="assetPrice"
        value={values.assetPrice}
        onChange={(value) => setFieldValue('assetPrice', value)}
    >
        {({ field }) => (
            <Input
                {...field}
                id="assetPrice"
                type="text"
                label={localize('Asset price')}
                autoComplete="off"
                error={touched.assetPrice && errors.assetPrice}
                onBlur={handleBlur}
                data-lpignore="true"
                handleError={assetPriceErrorHandler}
                background="white"
            />
        )}
    </Field>
)

const MultiplierField = ({
    values,
    setFieldValue,
    touched,
    errors,
    handleBlur,
    multiplierErrorHandler,
}: FieldsType<MultiplierFieldProps>) => (
    <Field
        name="multiplier"
        value={values.multiplier}
        onChange={(value) => {
            setFieldValue('multiplier', value)
        }}
    >
        {({ field }) => (
            <Input
                {...field}
                id="multiplier"
                type="text"
                value={values.multiplier}
                label={localize('Multiplier')}
                autoComplete="off"
                error={touched.multiplier && errors.multiplier}
                onBlur={handleBlur}
                data-lpignore="true"
                handleError={multiplierErrorHandler}
                maxLength={getMaxLength(values.multiplier, 4)}
                background="white"
            />
        )}
    </Field>
)

const MultiplierFieldWithoutValue = ({
    values,
    setFieldValue,
    touched,
    errors,
    handleBlur,
    multiplierErrorHandler,
}: FieldsType<MultiplierFieldProps>) => (
    <Field
        name="multiplier"
        value={values.multiplier}
        onChange={(value) => {
            setFieldValue('multiplier', value)
        }}
    >
        {({ field }) => (
            <Input
                {...field}
                id="multiplier"
                type="text"
                label={localize('Multiplier')}
                autoComplete="off"
                error={touched.multiplier && errors.multiplier}
                onBlur={handleBlur}
                data-lpignore="true"
                handleError={multiplierErrorHandler}
                maxLength={getMaxLength(values.multiplier, 4)}
                background="white"
            />
        )}
    </Field>
)

const StopLossLevelField = ({
    values,
    setFieldValue,
    touched,
    errors,
    handleBlur,
    stopLossLevelErrorHandler,
}: FieldsType<StopLossLevelFieldProps>) => (
    <Field
        name="stopLossLevel"
        value={values.stopLossLevel}
        onChange={(value) => {
            setFieldValue('stopLossLevel', value)
        }}
    >
        {({ field }) => (
            <Input
                {...field}
                id="stopLossLevel"
                type="text"
                value={values.stopLossLevel}
                label={localize('Stop loss level')}
                autoComplete="off"
                error={touched.stopLossLevel && errors.stopLossLevel}
                onBlur={handleBlur}
                data-lpignore="true"
                handleError={stopLossLevelErrorHandler}
                maxLength={getMaxLength(values.stopLossLevel, 15)}
                background="white"
            />
        )}
    </Field>
)

const StakeField = ({
    values,
    setFieldValue,
    touched,
    errors,
    handleBlur,
    stakeErrorHandler,
}: FieldsType<StakeFieldProps>) => (
    <Field
        name="stake"
        value={values.stake}
        onChange={set_field_value_stake_change_handler(setFieldValue)}
    >
        {({ field }) => (
            <Input
                {...field}
                id="stake"
                type="text"
                label={localize('Stake')}
                autoComplete="off"
                error={touched.stake && errors.stake}
                onBlur={handleBlur}
                data-lpignore="true"
                handleError={stakeErrorHandler}
                maxLength={getMaxLength(values.stake, 15)}
                background="white"
            />
        )}
    </Field>
)

const StakeFieldWithValue = ({
    values,
    setFieldValue,
    touched,
    errors,
    handleBlur,
    stakeErrorHandler,
}: FieldsType<StakeFieldProps>) => (
    <Field
        name="stake"
        value={values.stake}
        onChange={(value) => {
            setFieldValue('stake', value)
        }}
    >
        {({ field }) => (
            <Input
                {...field}
                id="stake"
                type="text"
                value={values.stake}
                label={localize('Stake')}
                autoComplete="off"
                error={touched.stake && errors.stake}
                onBlur={handleBlur}
                data-lpignore="true"
                handleError={stakeErrorHandler}
                maxLength={getMaxLength(values.stake, 15)}
                background="white"
            />
        )}
    </Field>
)

const direction_down_click_handler = (onSubTabClick, setFieldValue) => () => {
    onSubTabClick('Down')
    setFieldValue('direction', 'Down')
}

const take_profit_amount_click_handler = (setFieldValue) => (value) => {
    setFieldValue('takeProfitAmount', value)
}

const set_field_value_stake_change_handler = (setFieldValue) => (value) => {
    setFieldValue('stake', value)
}

const take_profit_level_change_handler = (setFieldValue) => (value) => {
    setFieldValue('takeProfitLevel', value)
}

const PnlMultipliersCalculator = () => {
    const query = graphql`
        query {
            stop_loss_level_up_formula: file(
                relativePath: { eq: "trade-tools/stop-loss-level-up-formula.png" }
            ) {
                ...fadeIn
            }
            stop_loss_level_up_formula_mobile: file(
                relativePath: { eq: "trade-tools/stop-loss-level-up-formula-mobile.png" }
            ) {
                ...fadeIn
            }
            stop_loss_amount_down_formula: file(
                relativePath: { eq: "trade-tools/stop-loss-amount-down-formula.png" }
            ) {
                ...fadeIn
            }
            stop_loss_amount_down_formula_mobile: file(
                relativePath: { eq: "trade-tools/stop-loss-amount-down-formula-mobile.png" }
            ) {
                ...fadeIn
            }
            take_profit_level_down_formula: file(
                relativePath: { eq: "trade-tools/take-profit-level-down-formula.png" }
            ) {
                ...fadeIn
            }
            take_profit_level_down_formula_mobile: file(
                relativePath: { eq: "trade-tools/take-profit-level-down-formula-mobile.png" }
            ) {
                ...fadeIn
            }
            take_profit_amount_up_formula: file(
                relativePath: { eq: "trade-tools/take-profit-amount-up-formula.png" }
            ) {
                ...fadeIn
            }
            take_profit_amount_up_formula_mobile: file(
                relativePath: { eq: "trade-tools/take-profit-amount-up-formula-mobile.png" }
            ) {
                ...fadeIn
            }
        }
    `
    const data = useStaticQuery(query)

    const [tab, setTab] = useState('Level')
    const [sub_tab, setSubTab] = useState('Up')

    const onTabClick = (t) => setTab(t)
    const onSubTabClick = (t) => setSubTab(t)

    const mainAssetPriceErrorHandler =
        (setFieldValue, setFieldError, setFieldTouched) => (current_input) => {
            setFieldValue('assetPrice', '', false)
            setFieldError('assetPrice', '')
            setFieldTouched('assetPrice', false, false)
            current_input.focus()
        }

    const mainMultiplierErrorHandler =
        (setFieldValue, setFieldError, setFieldTouched) => (current_input) => {
            setFieldValue('multiplier', '', false)
            setFieldError('multiplier', '')
            setFieldTouched('multiplier', false, false)
            current_input.focus()
        }

    const mainCommissionErrorHandler =
        (setFieldValue, setFieldError, setFieldTouched) => (current_input) => {
            setFieldValue('commission', '', false)
            setFieldError('commission', '')
            setFieldTouched('commission', false, false)
            current_input.focus()
        }

    const mainStakeErrorHandler =
        (setFieldValue, setFieldError, setFieldTouched) => (current_input) => {
            setFieldValue('stake', '', false)
            setFieldError('stake', '')
            setFieldTouched('stake', false, false)
            current_input.focus()
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
                    <Text>{localize('PnL for multipliers')}</Text>
                </Flex>
            </BreadCrumbContainer>
            <StyledSection direction="column">
                <SectionSubtitle as="h3" type="sub-section-title" align="center" weight="normal">
                    {localize(
                        'Our profit and loss calculator for multipliers helps to determine the stop loss and take profit level in your trades to minimise losses and maximise gains.',
                    )}
                </SectionSubtitle>

                <Flex mt="80px" mb="40px" tablet={{ mt: '40px', mb: '24px' }}>
                    <SwapTabSelector active={tab === 'Level'} onClick={() => onTabClick('Level')}>
                        <Text size="var(--text-size-m)" align="center">
                            {localize('Level')}
                        </Text>
                    </SwapTabSelector>
                    <SwapTabSelector active={tab === 'Amount'} onClick={() => onTabClick('Amount')}>
                        <Text size="var(--text-size-m)" align="center">
                            {localize('Amount')}
                        </Text>
                    </SwapTabSelector>
                </Flex>

                {tab === 'Level' ? (
                    <ContentContainer mb="4.0rem">
                        <FormWrapper>
                            <Formik
                                enableReinitialize
                                initialValues={{
                                    direction: 'Up',
                                    stopLossLevelOutput: 0,
                                    takeProfitLevelOutput: 0,
                                    takeProfitAmount: '',
                                    stopLossAmount: '',
                                    assetPrice: '',
                                    commission: '',
                                    stake: '',
                                    multiplier: '',
                                }}
                                validate={resetValidationPnlMultipliersLevel}
                                onSubmit={(values, { setFieldValue }) => {
                                    setFieldValue(
                                        'takeProfitLevelOutput',
                                        sub_tab === 'Up'
                                            ? getPnlMultiplierCommon(values, 'getTakeProfitLevelUp')
                                            : getPnlMultiplierCommon(
                                                  values,
                                                  'getTakeProfitLevelDown',
                                              ),
                                    )
                                    setFieldValue(
                                        'stopLossLevelOutput',
                                        sub_tab === 'Up'
                                            ? getPnlMultiplierCommon(values, 'getStopLossLevelUp')
                                            : getPnlMultiplierCommon(
                                                  values,
                                                  'getStopLossLevelDown',
                                              ),
                                    )
                                    setFieldValue(
                                        'assetPrice',
                                        numberSubmitFormat(values.assetPrice),
                                    )
                                    setFieldValue(
                                        'commission',
                                        numberSubmitFormat(values.commission),
                                    )
                                    setFieldValue('stake', numberSubmitFormat(values.stake))
                                    setFieldValue(
                                        'multiplier',
                                        numberSubmitFormat(values.multiplier),
                                    )
                                    setFieldValue(
                                        'takeProfitAmount',
                                        numberSubmitFormat(values.takeProfitAmount),
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
                                }) => {
                                    const assetPriceErrorHandler = mainAssetPriceErrorHandler(
                                        setFieldValue,
                                        setFieldError,
                                        setFieldTouched,
                                    )

                                    const multiplierErrorHandler = mainMultiplierErrorHandler(
                                        setFieldValue,
                                        setFieldError,
                                        setFieldTouched,
                                    )

                                    const commissionErrorHandler = mainCommissionErrorHandler(
                                        setFieldValue,
                                        setFieldError,
                                        setFieldTouched,
                                    )

                                    const takeProfitAmountErrorHandler = (current_input) => {
                                        setFieldValue('takeProfitAmount', '', false)
                                        setFieldError('takeProfitAmount', '')
                                        setFieldTouched('takeProfitAmount', false, false)
                                        current_input.focus()
                                    }

                                    const stopLossAmountErrorHandler = (current_input) => {
                                        setFieldValue('stopLossAmount', '', false)
                                        setFieldError('stopLossAmount', '')
                                        setFieldTouched('stopLossAmount', false, false)
                                        current_input.focus()
                                    }

                                    const stakeErrorHandler = mainStakeErrorHandler(
                                        setFieldValue,
                                        setFieldError,
                                        setFieldTouched,
                                    )

                                    return (
                                        <>
                                            <Desktop breakpoint={'tablet'}>
                                                <PnlCalculatorFormMobile>
                                                    <CalculatorHeader>
                                                        <Flex>
                                                            <Flex fd="column" mr="24px">
                                                                <CalculatorLabel htmlFor="message">
                                                                    {localize('Take profit level')}
                                                                </CalculatorLabel>
                                                                <PnLCalculatorOutputContainer>
                                                                    <PnLCalculatorOutputField>
                                                                        {
                                                                            values.takeProfitLevelOutput
                                                                        }
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
                                                                        {values.stopLossLevelOutput}
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
                                                            {localize('Direction')}
                                                        </CalculatorLabel>
                                                        <Flex
                                                            mb="3rem"
                                                            mt="1rem"
                                                            jc="space-between"
                                                            tablet={{ height: 'unset' }}
                                                        >
                                                            <PnlCalculatorTabItem
                                                                active={sub_tab === 'Up'}
                                                                onClick={() => {
                                                                    onSubTabClick('Up')
                                                                    setFieldValue('direction', 'Up')
                                                                }}
                                                            >
                                                                <Text align="center">
                                                                    {localize('Up')}
                                                                </Text>
                                                            </PnlCalculatorTabItem>
                                                            <PnlCalculatorTabItem
                                                                active={sub_tab === 'Down'}
                                                                disabled={sub_tab === 'Down'}
                                                                onClick={direction_down_click_handler(
                                                                    onSubTabClick,
                                                                    setFieldValue,
                                                                )}
                                                            >
                                                                <Text align="center">
                                                                    {localize('Down')}
                                                                </Text>
                                                            </PnlCalculatorTabItem>
                                                        </Flex>
                                                        <Flex jc="space-between" mb="17px">
                                                            <Flex fd="column" width="23.4rem">
                                                                <PnLInputGroup>
                                                                    <AssetPriceField
                                                                        values={values}
                                                                        setFieldValue={
                                                                            setFieldValue
                                                                        }
                                                                        touched={touched}
                                                                        errors={errors}
                                                                        handleBlur={handleBlur}
                                                                        assetPriceErrorHandler={
                                                                            assetPriceErrorHandler
                                                                        }
                                                                    />
                                                                </PnLInputGroup>
                                                            </Flex>
                                                            <Flex fd="column" width="23.4rem">
                                                                <PnLInputGroup>
                                                                    <CommissionField
                                                                        values={values}
                                                                        setFieldValue={
                                                                            setFieldValue
                                                                        }
                                                                        touched={touched}
                                                                        errors={errors}
                                                                        handleBlur={handleBlur}
                                                                        commissionErrorHandler={
                                                                            commissionErrorHandler
                                                                        }
                                                                    />
                                                                </PnLInputGroup>
                                                            </Flex>
                                                        </Flex>

                                                        <Flex jc="space-between" mb="17px">
                                                            <Flex fd="column" width="23.4rem">
                                                                <PnLInputGroup>
                                                                    <StakeField
                                                                        values={values}
                                                                        setFieldValue={
                                                                            setFieldValue
                                                                        }
                                                                        touched={touched}
                                                                        errors={errors}
                                                                        handleBlur={handleBlur}
                                                                        stakeErrorHandler={
                                                                            stakeErrorHandler
                                                                        }
                                                                    />
                                                                </PnLInputGroup>
                                                            </Flex>
                                                            <Flex fd="column" width="23.4rem">
                                                                <PnLInputGroup>
                                                                    <Field
                                                                        name="takeProfitAmount"
                                                                        value={
                                                                            values.takeProfitAmount
                                                                        }
                                                                        onChange={take_profit_amount_click_handler(
                                                                            setFieldValue,
                                                                        )}
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
                                                                                handleError={
                                                                                    takeProfitAmountErrorHandler
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
                                                            <Flex fd="column" width="23.4rem">
                                                                <PnLInputGroup>
                                                                    <MultiplierField
                                                                        values={values}
                                                                        setFieldValue={
                                                                            setFieldValue
                                                                        }
                                                                        touched={touched}
                                                                        errors={errors}
                                                                        handleBlur={handleBlur}
                                                                        multiplierErrorHandler={
                                                                            multiplierErrorHandler
                                                                        }
                                                                    />
                                                                </PnLInputGroup>
                                                            </Flex>
                                                            <Flex fd="column" width="23.4rem">
                                                                <PnLInputGroup>
                                                                    <StopLossAmountField
                                                                        values={values}
                                                                        setFieldValue={
                                                                            setFieldValue
                                                                        }
                                                                        touched={touched}
                                                                        errors={errors}
                                                                        handleBlur={handleBlur}
                                                                        stopLossAmountErrorHandler={
                                                                            stopLossAmountErrorHandler
                                                                        }
                                                                    />
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
                                                    <CalculatorHeader>
                                                        <Flex fd="column">
                                                            <Flex fd="column" mb="16px">
                                                                <CalculatorLabel htmlFor="message">
                                                                    {localize('Take profit level')}
                                                                </CalculatorLabel>
                                                                <PnLCalculatorOutputContainer>
                                                                    <PnLCalculatorOutputField>
                                                                        {
                                                                            values.takeProfitLevelOutput
                                                                        }
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
                                                                        {values.stopLossLevelOutput}
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
                                                            {localize('Direction')}
                                                        </CalculatorLabel>
                                                        <Flex
                                                            mb="3rem"
                                                            mt="1rem"
                                                            jc="space-between"
                                                            tablet={{ height: 'unset' }}
                                                        >
                                                            <PnlCalculatorTabItem
                                                                active={sub_tab === 'Up'}
                                                                onClick={() => {
                                                                    onSubTabClick('Up')
                                                                }}
                                                            >
                                                                <Text align="center">
                                                                    {localize('Up')}
                                                                </Text>
                                                            </PnlCalculatorTabItem>
                                                            <PnlCalculatorTabItem
                                                                active={sub_tab === 'Down'}
                                                                disabled={sub_tab === 'Down'}
                                                                onClick={direction_down_click_handler(
                                                                    onSubTabClick,
                                                                    setFieldValue,
                                                                )}
                                                            >
                                                                <Text align="center">
                                                                    {localize('Down')}
                                                                </Text>
                                                            </PnlCalculatorTabItem>
                                                        </Flex>
                                                        <InputGroup>
                                                            <AssetPriceField
                                                                values={values}
                                                                setFieldValue={setFieldValue}
                                                                touched={touched}
                                                                errors={errors}
                                                                handleBlur={handleBlur}
                                                                assetPriceErrorHandler={
                                                                    assetPriceErrorHandler
                                                                }
                                                            />
                                                        </InputGroup>
                                                        <InputGroup>
                                                            <StakeFieldWithValue
                                                                values={values}
                                                                setFieldValue={setFieldValue}
                                                                touched={touched}
                                                                errors={errors}
                                                                handleBlur={handleBlur}
                                                                stakeErrorHandler={
                                                                    stakeErrorHandler
                                                                }
                                                            />
                                                        </InputGroup>
                                                        <InputGroup>
                                                            <MultiplierFieldWithoutValue
                                                                values={values}
                                                                setFieldValue={setFieldValue}
                                                                touched={touched}
                                                                errors={errors}
                                                                handleBlur={handleBlur}
                                                                multiplierErrorHandler={
                                                                    multiplierErrorHandler
                                                                }
                                                            />
                                                        </InputGroup>
                                                        <InputGroup>
                                                            <CommissionField
                                                                values={values}
                                                                setFieldValue={setFieldValue}
                                                                touched={touched}
                                                                errors={errors}
                                                                handleBlur={handleBlur}
                                                                commissionErrorHandler={
                                                                    commissionErrorHandler
                                                                }
                                                            />
                                                        </InputGroup>
                                                        <InputGroup>
                                                            <Field
                                                                name="takeProfitAmount"
                                                                value={values.takeProfitAmount}
                                                                onChange={take_profit_amount_click_handler(
                                                                    setFieldValue,
                                                                )}
                                                            >
                                                                {({ field }) => (
                                                                    <Input
                                                                        {...field}
                                                                        id="takeProfitAmount"
                                                                        type="text"
                                                                        value={
                                                                            values.takeProfitAmount
                                                                        }
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
                                                                        handleError={
                                                                            takeProfitAmountErrorHandler
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
                                                            <StopLossAmountField
                                                                values={values}
                                                                setFieldValue={setFieldValue}
                                                                touched={touched}
                                                                errors={errors}
                                                                handleBlur={handleBlur}
                                                                stopLossAmountErrorHandler={
                                                                    stopLossAmountErrorHandler
                                                                }
                                                            />
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

                        <RightContent>
                            <Header as="h3" type="section-title" mb="8px">
                                {localize('How to calculate stop loss and take profit level')}
                            </Header>

                            <Text mb="8px">
                                {localize(
                                    'The stop loss and take profit level for a contract on DTrader is calculated based on the formula:',
                                )}
                            </Text>
                            <Text mb="8px">
                                <Localize
                                    translate_text="<0>Stop loss and take profit level in the Up direction = asset price × {(stop loss OR take profit amount + commission) ÷ (stake × multiplier) + 1}</0>"
                                    components={[<strong key={0} />]}
                                />
                            </Text>
                            <Text mb="16px">
                                <Localize
                                    translate_text="<0>Stop loss and take profit level in the Down direction = asset price × {(-stop loss OR take profit amount - commission) ÷ (stake × multiplier) + 1}</0>"
                                    components={[<strong key={0} />]}
                                />
                            </Text>
                            <Text mb="40px">
                                {localize(
                                    'This helps you to set the stop loss and take profit level when the asset price moves in Up or Down direction.',
                                )}
                            </Text>

                            <Header as="h3" type="section-title" mb="16px">
                                {localize('Example calculation')}
                            </Header>

                            <Accordion has_single_state>
                                <AccordionItem
                                    header={localize('Stop loss level in Up direction')}
                                    header_style={header_style}
                                    style={item_style}
                                    plus
                                >
                                    <Text mb="16px">
                                        {localize(
                                            'Let’s say you want to calculate the stop loss level when you open a position for Volatility 100 Index priced at 3376.24 USD with a stake amount of 10 USD, a multiplier value of x100, and a stop loss amount of 7.54 USD in Up direction.',
                                        )}
                                    </Text>
                                    <Desktop breakpoint={'tablet'}>
                                        <QueryImage
                                            data={data.stop_loss_level_up_formula}
                                            alt={localize('stop loss level up formula')}
                                        />
                                    </Desktop>
                                    <Mobile>
                                        <QueryImage
                                            data={data.stop_loss_level_up_formula_mobile}
                                            alt={localize('stop loss level up formula')}
                                        />
                                    </Mobile>
                                    <FormulaText>
                                        <StyledOl>
                                            <li>
                                                <span>
                                                    <Localize translate_text="The commission is automatically calculated based on your stake, symbol, and the multiplier you choose. Its value is directly available on DTrader." />
                                                </span>
                                            </li>
                                        </StyledOl>
                                    </FormulaText>

                                    <Text mb="1.6rem" mt="1.6rem">
                                        <Localize
                                            translate_text="So in this scenario, you would set your stop loss level at <0>3351.46</0>."
                                            components={[<strong key={0} />]}
                                        />
                                    </Text>
                                </AccordionItem>

                                <AccordionItem
                                    header={localize('Take profit level in Down direction')}
                                    header_style={header_style}
                                    style={item_style}
                                    plus
                                >
                                    <Text mb="16px">
                                        {localize(
                                            'Let’s say you want to calculate the take profit level when you open a position for Volatility 100 Index priced at 3376.24 USD with a stake amount of 10 USD, a multiplier value of x100, and a take profit amount of 7.54 USD in Down direction.',
                                        )}
                                    </Text>
                                    <Desktop breakpoint={'tablet'}>
                                        <QueryImage
                                            data={data.take_profit_level_down_formula}
                                            alt={localize('take profit level down formula')}
                                        />
                                    </Desktop>
                                    <Mobile>
                                        <QueryImage
                                            data={data.take_profit_level_down_formula_mobile}
                                            alt={localize('take profit level down formula')}
                                        />
                                    </Mobile>
                                    <FormulaText>
                                        <StyledOl>
                                            <li>
                                                <span>
                                                    <Localize translate_text="The commission is automatically calculated based on your stake, symbol, and the multiplier you choose. Its value is directly available on DTrader." />
                                                </span>
                                            </li>
                                        </StyledOl>
                                    </FormulaText>

                                    <Text mt="1.6rem">
                                        <Localize
                                            translate_text="So in this scenario, you would set your take profit level at <0>3350.11</0>."
                                            components={[<strong key={0} />]}
                                        />
                                    </Text>
                                </AccordionItem>
                            </Accordion>

                            <LinkWrapper height="auto">
                                <StyledLinkButton
                                    secondary
                                    external
                                    type="deriv_app"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {localize('Go to DTrader')}
                                </StyledLinkButton>
                            </LinkWrapper>
                        </RightContent>
                    </ContentContainer>
                ) : (
                    <ContentContainer key={tab} mb="4.0rem">
                        <FormWrapper>
                            <Formik
                                enableReinitialize
                                initialValues={{
                                    direction: 'Up',
                                    pnlMarginSymbol: 'USD',
                                    stopLossAmountOutput: 0,
                                    takeProfitAmountOutput: 0,
                                    takeProfitLevel: '',
                                    stopLossLevel: '',
                                    assetPrice: '',
                                    commission: '',
                                    stake: '',
                                    multiplier: '',
                                }}
                                validate={resetValidationPnlMultipliersAmount}
                                onSubmit={(values, { setFieldValue }) => {
                                    setFieldValue(
                                        'takeProfitAmountOutput',
                                        sub_tab === 'Up'
                                            ? getPnlMultiplierCommon(
                                                  values,
                                                  'getTakeProfitAmountUp',
                                              )
                                            : getPnlMultiplierCommon(
                                                  values,
                                                  'getTakeProfitAmountDown',
                                              ),
                                    )
                                    setFieldValue(
                                        'stopLossAmountOutput',
                                        sub_tab === 'Up'
                                            ? getPnlMultiplierCommon(values, 'getStopLossAmountUp')
                                            : getPnlMultiplierCommon(
                                                  values,
                                                  'getStopLossAmountDown',
                                              ),
                                    )
                                    setFieldValue(
                                        'assetPrice',
                                        numberSubmitFormat(values.assetPrice),
                                    )
                                    setFieldValue(
                                        'commission',
                                        numberSubmitFormat(values.commission),
                                    )
                                    setFieldValue('stake', numberSubmitFormat(values.stake))
                                    setFieldValue(
                                        'multiplier',
                                        numberSubmitFormat(values.multiplier),
                                    )
                                    setFieldValue(
                                        'takeProfitLevel',
                                        numberSubmitFormat(values.takeProfitLevel),
                                    )
                                    setFieldValue(
                                        'stopLossLevel',
                                        numberSubmitFormat(values.stopLossLevel),
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
                                }) => {
                                    const assetPriceErrorHandler = mainAssetPriceErrorHandler(
                                        setFieldValue,
                                        setFieldError,
                                        setFieldTouched,
                                    )

                                    const multiplierErrorHandler = mainMultiplierErrorHandler(
                                        setFieldValue,
                                        setFieldError,
                                        setFieldTouched,
                                    )

                                    const commissionErrorHandler = mainCommissionErrorHandler(
                                        setFieldValue,
                                        setFieldError,
                                        setFieldTouched,
                                    )

                                    const takeProfitLevelErrorHandler = (current_input) => {
                                        setFieldValue('takeProfitLevel', '', false)
                                        setFieldError('takeProfitLevel', '')
                                        setFieldTouched('takeProfitLevel', false, false)
                                        current_input.focus()
                                    }

                                    const stopLossLevelErrorHandler = (current_input) => {
                                        setFieldValue('stopLossLevel', '', false)
                                        setFieldError('stopLossLevel', '')
                                        setFieldTouched('stopLossLevel', false, false)
                                        current_input.focus()
                                    }

                                    const stakeErrorHandler = mainStakeErrorHandler(
                                        setFieldValue,
                                        setFieldError,
                                        setFieldTouched,
                                    )

                                    return (
                                        <>
                                            <Desktop breakpoint={'tablet'}>
                                                <PnlCalculatorFormMobile>
                                                    <CalculatorHeader>
                                                        <Flex>
                                                            <Flex fd="column" mr="24px">
                                                                <CalculatorLabel htmlFor="message">
                                                                    {localize('Take profit amount')}
                                                                </CalculatorLabel>
                                                                <PnLCalculatorOutputContainer>
                                                                    <PnLCalculatorOutputField>
                                                                        {
                                                                            values.takeProfitAmountOutput
                                                                        }
                                                                    </PnLCalculatorOutputField>
                                                                    <PnLCalculatorOutputSymbol>
                                                                        {values.pnlMarginSymbol}
                                                                    </PnLCalculatorOutputSymbol>
                                                                </PnLCalculatorOutputContainer>
                                                            </Flex>
                                                            <Flex fd="column">
                                                                <CalculatorLabel htmlFor="message">
                                                                    {localize('Stop loss amount')}
                                                                </CalculatorLabel>
                                                                <PnLCalculatorOutputContainer>
                                                                    <PnLCalculatorOutputField>
                                                                        {
                                                                            values.stopLossAmountOutput
                                                                        }
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
                                                            {localize('Direction')}
                                                        </CalculatorLabel>
                                                        <Flex
                                                            mb="3rem"
                                                            mt="1rem"
                                                            jc="space-between"
                                                            tablet={{ height: 'unset' }}
                                                        >
                                                            <PnlCalculatorTabItem
                                                                active={sub_tab === 'Up'}
                                                                onClick={() => {
                                                                    onSubTabClick('Up')
                                                                    setFieldValue('direction', 'Up')
                                                                }}
                                                            >
                                                                <Text align="center">
                                                                    {localize('Up')}
                                                                </Text>
                                                            </PnlCalculatorTabItem>
                                                            <PnlCalculatorTabItem
                                                                active={sub_tab === 'Down'}
                                                                disabled={sub_tab === 'Down'}
                                                                onClick={direction_down_click_handler(
                                                                    onSubTabClick,
                                                                    setFieldValue,
                                                                )}
                                                            >
                                                                <Text align="center">
                                                                    {localize('Down')}
                                                                </Text>
                                                            </PnlCalculatorTabItem>
                                                        </Flex>
                                                        <Flex jc="space-between" mb="17px">
                                                            <Flex fd="column" width="23.4rem">
                                                                <PnLInputGroup>
                                                                    <AssetPriceField
                                                                        values={values}
                                                                        setFieldValue={
                                                                            setFieldValue
                                                                        }
                                                                        touched={touched}
                                                                        errors={errors}
                                                                        handleBlur={handleBlur}
                                                                        assetPriceErrorHandler={
                                                                            assetPriceErrorHandler
                                                                        }
                                                                    />
                                                                </PnLInputGroup>
                                                            </Flex>
                                                            <Flex fd="column" width="23.4rem">
                                                                <PnLInputGroup>
                                                                    <CommissionField
                                                                        values={values}
                                                                        setFieldValue={
                                                                            setFieldValue
                                                                        }
                                                                        touched={touched}
                                                                        errors={errors}
                                                                        handleBlur={handleBlur}
                                                                        commissionErrorHandler={
                                                                            commissionErrorHandler
                                                                        }
                                                                    />
                                                                </PnLInputGroup>
                                                            </Flex>
                                                        </Flex>

                                                        <Flex jc="space-between" mb="17px">
                                                            <Flex fd="column" width="23.4rem">
                                                                <PnLInputGroup>
                                                                    <StakeField
                                                                        values={values}
                                                                        setFieldValue={
                                                                            setFieldValue
                                                                        }
                                                                        touched={touched}
                                                                        errors={errors}
                                                                        handleBlur={handleBlur}
                                                                        stakeErrorHandler={
                                                                            stakeErrorHandler
                                                                        }
                                                                    />
                                                                </PnLInputGroup>
                                                            </Flex>
                                                            <Flex fd="column" width="23.4rem">
                                                                <PnLInputGroup>
                                                                    <Field
                                                                        name="takeProfitLevel"
                                                                        value={
                                                                            values.takeProfitLevel
                                                                        }
                                                                        onChange={take_profit_level_change_handler(
                                                                            setFieldValue,
                                                                        )}
                                                                    >
                                                                        {({ field }) => (
                                                                            <Input
                                                                                {...field}
                                                                                id="takeProfitLevel"
                                                                                type="text"
                                                                                label={localize(
                                                                                    'Take profit level',
                                                                                )}
                                                                                autoComplete="off"
                                                                                error={
                                                                                    touched.takeProfitLevel &&
                                                                                    errors.takeProfitLevel
                                                                                }
                                                                                onBlur={handleBlur}
                                                                                data-lpignore="true"
                                                                                handleError={
                                                                                    takeProfitLevelErrorHandler
                                                                                }
                                                                                maxLength={getMaxLength(
                                                                                    values.takeProfitLevel,
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
                                                            <Flex fd="column" width="23.4rem">
                                                                <PnLInputGroup>
                                                                    <MultiplierField
                                                                        values={values}
                                                                        setFieldValue={
                                                                            setFieldValue
                                                                        }
                                                                        touched={touched}
                                                                        errors={errors}
                                                                        handleBlur={handleBlur}
                                                                        multiplierErrorHandler={
                                                                            multiplierErrorHandler
                                                                        }
                                                                    />
                                                                </PnLInputGroup>
                                                            </Flex>
                                                            <Flex fd="column" width="23.4rem">
                                                                <PnLInputGroup>
                                                                    <StopLossLevelField
                                                                        values={values}
                                                                        setFieldValue={
                                                                            setFieldValue
                                                                        }
                                                                        touched={touched}
                                                                        errors={errors}
                                                                        handleBlur={handleBlur}
                                                                        stopLossLevelErrorHandler={
                                                                            stopLossLevelErrorHandler
                                                                        }
                                                                    />
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
                                                    <CalculatorHeader>
                                                        <Flex fd="column">
                                                            <Flex fd="column" mb="16px">
                                                                <CalculatorLabel htmlFor="message">
                                                                    {localize('Take profit amount')}
                                                                </CalculatorLabel>
                                                                <PnLCalculatorOutputContainer>
                                                                    <PnLCalculatorOutputField>
                                                                        {
                                                                            values.takeProfitAmountOutput
                                                                        }
                                                                    </PnLCalculatorOutputField>
                                                                    <PnLCalculatorOutputSymbol>
                                                                        {values.pnlMarginSymbol}
                                                                    </PnLCalculatorOutputSymbol>
                                                                </PnLCalculatorOutputContainer>
                                                            </Flex>
                                                            <Flex fd="column">
                                                                <CalculatorLabel htmlFor="message">
                                                                    {localize('Stop loss amount')}
                                                                </CalculatorLabel>
                                                                <PnLCalculatorOutputContainer>
                                                                    <PnLCalculatorOutputField>
                                                                        {
                                                                            values.stopLossAmountOutput
                                                                        }
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
                                                            {localize('Direction')}
                                                        </CalculatorLabel>
                                                        <Flex
                                                            mb="3rem"
                                                            mt="1rem"
                                                            jc="space-between"
                                                            tablet={{ height: 'unset' }}
                                                        >
                                                            <PnlCalculatorTabItem
                                                                active={sub_tab === 'Up'}
                                                                onClick={() => {
                                                                    onSubTabClick('Up')
                                                                }}
                                                            >
                                                                <Text align="center">
                                                                    {localize('Up')}
                                                                </Text>
                                                            </PnlCalculatorTabItem>
                                                            <PnlCalculatorTabItem
                                                                active={sub_tab === 'Down'}
                                                                disabled={sub_tab === 'Down'}
                                                                onClick={direction_down_click_handler(
                                                                    onSubTabClick,
                                                                    setFieldValue,
                                                                )}
                                                            >
                                                                <Text align="center">
                                                                    {localize('Down')}
                                                                </Text>
                                                            </PnlCalculatorTabItem>
                                                        </Flex>
                                                        <InputGroup>
                                                            <AssetPriceField
                                                                values={values}
                                                                setFieldValue={setFieldValue}
                                                                touched={touched}
                                                                errors={errors}
                                                                handleBlur={handleBlur}
                                                                assetPriceErrorHandler={
                                                                    assetPriceErrorHandler
                                                                }
                                                            />
                                                        </InputGroup>
                                                        <InputGroup>
                                                            <StakeFieldWithValue
                                                                values={values}
                                                                setFieldValue={setFieldValue}
                                                                touched={touched}
                                                                errors={errors}
                                                                handleBlur={handleBlur}
                                                                stakeErrorHandler={
                                                                    stakeErrorHandler
                                                                }
                                                            />
                                                        </InputGroup>
                                                        <InputGroup>
                                                            <MultiplierFieldWithoutValue
                                                                values={values}
                                                                setFieldValue={setFieldValue}
                                                                touched={touched}
                                                                errors={errors}
                                                                handleBlur={handleBlur}
                                                                multiplierErrorHandler={
                                                                    multiplierErrorHandler
                                                                }
                                                            />
                                                        </InputGroup>
                                                        <InputGroup>
                                                            <CommissionField
                                                                values={values}
                                                                setFieldValue={setFieldValue}
                                                                touched={touched}
                                                                errors={errors}
                                                                handleBlur={handleBlur}
                                                                commissionErrorHandler={
                                                                    commissionErrorHandler
                                                                }
                                                            />
                                                        </InputGroup>
                                                        <InputGroup>
                                                            <Field
                                                                name="takeProfitLevel"
                                                                value={values.takeProfitLevel}
                                                                onChange={take_profit_level_change_handler(
                                                                    setFieldValue,
                                                                )}
                                                            >
                                                                {({ field }) => (
                                                                    <Input
                                                                        {...field}
                                                                        id="takeProfitLevel"
                                                                        type="text"
                                                                        value={
                                                                            values.takeProfitLevel
                                                                        }
                                                                        label={localize(
                                                                            'Take profit level',
                                                                        )}
                                                                        autoComplete="off"
                                                                        error={
                                                                            touched.takeProfitLevel &&
                                                                            errors.takeProfitLevel
                                                                        }
                                                                        onBlur={handleBlur}
                                                                        data-lpignore="true"
                                                                        handleError={
                                                                            takeProfitLevelErrorHandler
                                                                        }
                                                                        maxLength={getMaxLength(
                                                                            values.takeProfitLevel,
                                                                            15,
                                                                        )}
                                                                        background="white"
                                                                    />
                                                                )}
                                                            </Field>
                                                        </InputGroup>
                                                        <InputGroup>
                                                            <StopLossLevelField
                                                                values={values}
                                                                setFieldValue={setFieldValue}
                                                                touched={touched}
                                                                errors={errors}
                                                                handleBlur={handleBlur}
                                                                stopLossLevelErrorHandler={
                                                                    stopLossLevelErrorHandler
                                                                }
                                                            />
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

                        <RightContent>
                            <Header as="h3" type="section-title" mb="8px">
                                {localize('How to calculate stop loss and take profit amount')}
                            </Header>

                            <Text mb="8px">
                                {localize(
                                    'The stop loss and take profit amount for a contract on DTrader is calculated based on the formula:',
                                )}
                            </Text>
                            <Text mb="8px">
                                <Localize
                                    translate_text="<0>Stop loss and take profit amount in the Up direction = Max [{stake × ((stop loss OR take profit level - asset price) ÷ asset price × multiplier) - commission}, -stake]</0>"
                                    components={[<strong key={0} />]}
                                />
                            </Text>
                            <Text mb="16px">
                                <Localize
                                    translate_text="<0>Stop loss and take profit amount in the Down direction = Max [{stake × (-(stop loss OR take profit level - asset price) ÷ asset price × multiplier) - commission}, -stake]</0>"
                                    components={[<strong key={0} />]}
                                />
                            </Text>
                            <Text mb="40px">
                                {localize(
                                    'This helps you to set the stop loss and take profit level when the asset price moves in Up or Down direction.',
                                )}
                            </Text>

                            <Header as="h3" type="section-title" mb="16px">
                                {localize('Example calculation')}
                            </Header>

                            <Accordion has_single_state>
                                <AccordionItem
                                    header={localize('Take profit amount in Up direction')}
                                    header_style={header_style}
                                    style={item_style}
                                    plus
                                >
                                    <Text mb="16px">
                                        {localize(
                                            'Let’s say you want to calculate the take profit amount when you want to open a position for Volatility 100 Index priced at 3376.24 USD with a stake amount of 10 USD, a multiplier value of x100, and a take profit level of 3400 in Up direction.',
                                        )}
                                    </Text>
                                    <Desktop breakpoint={'tablet'}>
                                        <QueryImage
                                            data={data.take_profit_amount_up_formula}
                                            alt={localize('take profit amount up formula')}
                                        />
                                    </Desktop>
                                    <Mobile>
                                        <QueryImage
                                            data={data.take_profit_amount_up_formula_mobile}
                                            alt={localize('take profit amount up formula')}
                                        />
                                    </Mobile>
                                    <FormulaText>
                                        <StyledOl>
                                            <li>
                                                <span>
                                                    <Localize translate_text="The commission is automatically calculated based on your stake, symbol, and the multiplier you choose. Its value is directly available on DTrader." />
                                                </span>
                                            </li>
                                        </StyledOl>
                                    </FormulaText>

                                    <Text mb="1.6rem" mt="1.6rem">
                                        <Localize
                                            translate_text="So in this scenario, you would set your take profit level at <0>6.83 USD</0>."
                                            components={[<strong key={0} />]}
                                        />
                                    </Text>
                                </AccordionItem>

                                <AccordionItem
                                    header={localize('Stop loss amount in Down direction')}
                                    header_style={header_style}
                                    style={item_style}
                                    plus
                                >
                                    <Text mb="16px">
                                        {localize(
                                            'Let’s say you want to calculate the stop loss amount when you want to open a position for Volatility 100 Index priced at 3376.24 USD with a stake amount of 10 USD, a multiplier value of x100, and a stop loss level of 3400 in Down direction.',
                                        )}
                                    </Text>
                                    <Desktop breakpoint={'tablet'}>
                                        <QueryImage
                                            data={data.stop_loss_amount_down_formula}
                                            alt={localize('stop loss amount down formula')}
                                        />
                                    </Desktop>
                                    <Mobile>
                                        <QueryImage
                                            data={data.stop_loss_amount_down_formula_mobile}
                                            alt={localize('stop loss amount down formula')}
                                        />
                                    </Mobile>
                                    <FormulaText>
                                        <StyledOl>
                                            <li>
                                                <span>
                                                    <Localize translate_text="The commission is automatically calculated based on your stake, symbol, and the multiplier you choose. Its value is directly available on DTrader." />
                                                </span>
                                            </li>
                                        </StyledOl>
                                    </FormulaText>

                                    <Text mt="1.6rem">
                                        <Localize
                                            translate_text="So in this scenario, you would set your stop loss amount at <0>-7.23 USD</0>."
                                            components={[<strong key={0} />]}
                                        />
                                    </Text>
                                </AccordionItem>
                            </Accordion>

                            <LinkWrapper height="auto">
                                <StyledLinkButton
                                    secondary
                                    external
                                    type="deriv_app"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {localize('Go to DTrader')}
                                </StyledLinkButton>
                            </LinkWrapper>
                        </RightContent>
                    </ContentContainer>
                )}
            </StyledSection>
        </>
    )
}

export default PnlMultipliersCalculator
