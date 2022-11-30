import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import DatePicker from 'react-date-picker'
import { TCertificate } from '../components/_personal-details'
import { AffiliateLabel } from './_affiliate-input'
import Calendar from 'images/svg/signup-affiliates/calendar.svg'

export type SetStateDate =
    | React.Dispatch<React.SetStateAction<string>>
    | React.Dispatch<React.SetStateAction<Date | [Date, Date]>>
    | React.Dispatch<React.SetStateAction<TCertificate>>

type BirthPickerWrapperProps = {
    is_date_field: boolean
    value: Date | [Date, Date]
    error: string
}
type BirthPickerProps = {
    id: string
    error: string
    value: Date | [Date, Date]
    setFieldValue: SetStateDate
    label?: string
    label_color?: string
    label_focus_color?: string
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
        width: 320px;
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
        ${({ is_date_field, value }) => {
            return is_date_field || value
                ? css<BirthPickerWrapperProps>`
                      transform: translate(-0.6rem, -2.2rem) scale(0.7);
                  `
                : css<BirthPickerWrapperProps>`
                      transform: translate(0rem, 0rem) scale(1);
                      color: var(--color-${({ error }) => (error ? 'red-1' : 'grey')});
                  `
        }}
    }
`

const BirthPicker = ({ id, error, value, setFieldValue, label, label_color }: BirthPickerProps) => {
    const [is_date_field, selectDateField] = useState(false)

    const onDateChange = (date) => {
        setFieldValue(date)
    }
    const subtractYears = (numOfYears, date = new Date()) => {
        date.setFullYear(date.getFullYear() - numOfYears)

        return date
    }
    const max_date = subtractYears(18)

    return (
        <BirthPickerWrapper
            is_date_field={is_date_field}
            value={value}
            error={error}
            onFocus={() => selectDateField(true)}
            onKeyDown={(e) => e.preventDefault()}
        >
            <DatePicker
                onChange={onDateChange}
                value={value}
                format={'dd-MM-yyyy'}
                maxDate={max_date}
                defaultActiveStartDate={max_date}
                showLeadingZeros={false}
                calendarIcon={<img src={Calendar} alt="calendar icon" />}
                clearIcon={null}
            />
            <AffiliateLabel htmlFor={id} label_color={label_color}>
                {label}
            </AffiliateLabel>
        </BirthPickerWrapper>
    )
}

export default BirthPicker
