import React from 'react'
import { Field } from 'formik'
import { FormikErrors, FormikTouched } from '../common/_formik-types'
import { getMaxLength } from '../common/_utility'
import Input from 'components/form/input'
import { localize } from 'components/localization'

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

export const CommissionField = ({
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
        onChange={(value: string) => {
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

export const StopLossAmountField = ({
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
        onChange={(value: string) => {
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

export const AssetPriceField = ({
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
        onChange={(value: string) => setFieldValue('assetPrice', value)}
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

export const MultiplierField = ({
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
        onChange={(value: string) => {
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

export const MultiplierFieldWithoutValue = ({
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
        onChange={(value: string) => {
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

export const StopLossLevelField = ({
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
        onChange={(value: string) => {
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

export const StakeField = ({
    values,
    setFieldValue,
    touched,
    errors,
    handleBlur,
    stakeErrorHandler,
}: FieldsType<StakeFieldProps>) => {
    const set_field_value_stake_change_handler = (setFieldValue) => (value) => {
        setFieldValue('stake', value)
    }

    return (
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
}

export const StakeFieldWithValue = ({
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
        onChange={(value: string) => {
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
