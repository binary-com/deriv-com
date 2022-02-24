import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import DatePicker from 'react-date-picker'
import moment from 'moment'
import dayjs from 'dayjs'
import device from 'themes/device'

const DayPickerWrapper = styled.div`
    width: 100%;
    height: 100%;

    .react-date-picker {
        display: block;
        font-size: var(--text-size-xs);
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
        ${({ is_date_field, currentValue }) => {
            return is_date_field || currentValue
                ? css`
                      transform: translate(-0.6rem, -2.2rem) scale(0.7);
                      color: var(
                          --color-${({ error, labelFocusColor }) => (error ? 'red' : labelFocusColor)}
                      );
                  `
                : css`
                      transform: translate(0rem, 0rem) scale(1);
                      color: var(--color-${({ error }) => (error ? 'red' : 'grey')});
                  `
        }}
    }
`
const StyledLabel = styled.label`
    /* stylelint-disable */
    color: var(--color-${({ label_color }) => label_color || 'grey'});
    /* stylelint-enable */
    font-size: var(--text-size-xs);
    position: absolute;
    pointer-events: none;
    left: 0.8rem;
    top: ${({ is_affiliate }) => (is_affiliate ? '1.8rem' : '1.2rem')};
    transition: 0.25s ease transform;
    transform: translateZ(0);
    padding: 0 0.4rem;
    background: none;
    @media ${device.tabletL} {
        font-size: var(--text-size-s);
        top: 1.8rem;
    }
`
const AffiliateDatePicker = (props) => {
    const {
        id,
        error,
        setFieldValue,
        setFieldTouched,
        label,
        label_color,
        tablet_background,
        is_affiliate,
        labelFocusColor,
    } = props

    const [maxDate, setMaxDate] = useState()
    const [is_date_field, selectDateField] = useState(false)
    const [currentValue, onChange] = useState(maxDate)

    useEffect(() => {
        setMaxDate(moment().subtract(18, 'years').toDate())
    }, [])

    const onDateChange = (date) => {
        onChange(date)
        setFieldValue('date', date)
    }

    const onBlur = () => {
        selectDateField(false)
        setFieldTouched('date', true)
    }

    return (
        <DayPickerWrapper
            is_date_field={is_date_field}
            currentValue={currentValue}
            labelFocusColor={labelFocusColor}
            error={error}
        >
            <DatePicker
                onChange={onDateChange}
                value={currentValue}
                format={'dd/MM/yyyy'}
                formatShortWeekday={(locale, date) => dayjs(date).format('dd').substring(0, 1)}
                formatMonth={(locale, date) => dayjs(date).format('MMM')}
                formatMonthYear={(locale, date) => dayjs(date).format('MMM YYYY')}
                onFocus={() => selectDateField(true)}
                onBlur={onBlur}
                maxDate={maxDate}
                activeStartDate={maxDate}
                clearIcon={null}
            />
            <StyledLabel
                tablet_background={tablet_background}
                error={error}
                htmlFor={id}
                label_color={label_color}
                is_affiliate={is_affiliate}
                is_date_field={is_date_field}
            >
                {label}
            </StyledLabel>
        </DayPickerWrapper>
    )
}

AffiliateDatePicker.propTypes = {
    error: PropTypes.string,
    id: PropTypes.string,
    is_affiliate: PropTypes.bool,
    label: PropTypes.string,
    label_color: PropTypes.string,
    labelFocusColor: PropTypes.string,
    placeholder: PropTypes.string,
    setFieldTouched: PropTypes.func,
    setFieldValue: PropTypes.func,
    tablet_background: PropTypes.string,
}

export default AffiliateDatePicker
