import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import DatePicker from 'react-date-picker'
import device from 'themes/device'

type BirthPickerWrapperProps = {
    is_date_field?: boolean
    current_value?: string
    error?: string
    label_focus_color?: string
}
type LabelProps = {
    label_color?: string
    top_shift?: string
}

const BirthPickerWrapper = styled.div<BirthPickerWrapperProps>`
    width: 100%;
    height: 100%;

    .react-date-picker {
        display: block;
        font-size: 14px;
        padding: 1rem 1rem 1rem 0.8rem;
        height: 40px;
    }
    .react-date-picker__wrapper {
        border: none;
        border-radius: 5px;
    }
    .react-date-picker__calendar {
        width: 280px;
    }
    .react-calendar__month-view__weekdays__weekday {
        font-size: 15px;
        font-weight: initial;
    }
    abbr {
        border-bottom: none !important;
        text-decoration: none !important;
    }
    .react-date-picker__inputGroup__input {
        outline: none;
        caret-color: transparent;
    }
    .react-date-picker__inputGroup__input:invalid {
        background: none;
    }
    .react-calendar {
        margin-top: 5px;
        border: none;
        border-radius: 5px;
        box-shadow: 0 1.6rem 2rem 0 rgba(0, 0, 0, 0.1);
    }
    .react-calendar__navigation {
        border-bottom: 1px solid #f3f4f5;
    }
    .react-calendar__navigation__arrow {
        font-size: 30px;
        font-weight: 100;
    }
    .react-calendar__navigation__arrow:hover {
        background-color: none;
    }
    .react-calendar__tile--active,
    .react-calendar__tile--active:hover,
    .react-calendar__tile--hasActive,
    .react-calendar__tile--hasActive:hover {
        background-color: red;
        border-radius: 5px;
    }
    label {
        background-color: var(--color-white);
        color: 'green';
        transform: translate(-0.6rem, -2rem) scale(0.7);
        padding: 5px 4px;
        margin: -5px 0;
        ${({ is_date_field, current_value }) => {
            return is_date_field || current_value
                ? css<BirthPickerWrapperProps>`
                      transform: translate(-0.6rem, -2.2rem) scale(0.7);
                      color: var(
                          --color-${({ error, label_focus_color }) => (error ? 'red-1' : label_focus_color)}
                      );
                  `
                : css<BirthPickerWrapperProps>`
                      transform: translate(0rem, 0rem) scale(1);
                      color: var(--color-${({ error }) => (error ? 'red-1' : 'grey')});
                  `
        }}
    }
`
const StyledLabel = styled.label<LabelProps>`
    color: ${({ label_color }) =>
        label_color ? `var(--color-${label_color})` : 'var(--color-grey)'};
    font-size: 1.5rem;
    position: absolute;
    pointer-events: none;
    left: 0.8rem;
    top: ${({ top_shift }) => (top_shift ? top_shift : '1.2rem')};
    transition: 0.25s ease transform;
    transform: translateZ(0);
    padding: 0 0.4rem;
    background: none;

    @media ${device.tabletL} {
        top: 1.8rem;
    }
`

type AffiliateBirthPickerProps = {
    id: string
    error: string
    setFieldValue: (arg0: string, arg1: string) => void
    setFieldTouched: (arg0: string, arg1: boolean) => void
    label?: string
    label_color?: string
    top_shift?: string
    label_focus_color?: string
}

const AffiliateDatePicker = ({
    id,
    error,
    setFieldValue,
    setFieldTouched,
    label,
    label_color,
    top_shift,
    label_focus_color,
}: AffiliateBirthPickerProps) => {
    const [is_date_field, selectDateField] = useState(false)
    const [current_value, onChange] = useState()

    const onDateChange = (date) => {
        onChange(date)
        setFieldValue('date', date)
    }
    const onBlur = () => {
        selectDateField(false)
        setFieldTouched('date', true)
    }
    const subtractYears = (numOfYears, date = new Date()) => {
        date.setFullYear(date.getFullYear() - numOfYears)

        return date
    }
    const max_date = subtractYears(18)

    return (
        <BirthPickerWrapper
            is_date_field={is_date_field}
            current_value={current_value}
            label_focus_color={label_focus_color}
            error={error}
            onFocus={() => selectDateField(true)}
            onBlur={onBlur}
            onKeyDown={(e) => e.preventDefault()}
        >
            <DatePicker
                onChange={onDateChange}
                value={current_value}
                format={'dd/MM/yyyy'}
                maxDate={max_date}
                defaultActiveStartDate={max_date}
                showLeadingZeros={false}
                clearIcon={null}
            />
            <StyledLabel htmlFor={id} label_color={label_color} top_shift={top_shift}>
                {label}
            </StyledLabel>
        </BirthPickerWrapper>
    )
}

export default AffiliateDatePicker
