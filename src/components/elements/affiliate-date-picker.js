import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import PropTypes from 'prop-types'
import 'react-datepicker/dist/react-datepicker.css'
import styled, { css } from 'styled-components'

const DatePickerWrapper = styled.div`
    .react-datepicker {
        border: none;
        border-radius: 4px;
        box-shadow: 0 8px 16px 0 rgb(0 0 0 / 16%);
    }
    .react-datepicker-wrapper {
        height: 100%;
    }
    .react-datepicker__input-container {
        height: 100%;
        padding: 1rem 1rem 1rem 0.8rem;

        input {
            width: 100%;
            height: 100%;
            border: none;
            outline: none;
        }
    }
    .react-datepicker-popper {
        padding-top: 3px;
    }
    .react-datepicker__triangle {
        display: none;
    }
    .react-datepicker__month-container {
        float: none;
    }
    .react-datepicker__current-month {
        font-size: 1.7rem;
    }
    .react-datepicker__header,
    .react-datepicker__month {
        font-size: 1.5rem;
    }
    .react-datepicker__day-name,
    .react-datepicker__day {
        margin: 1rem;
    }
    .react-datepicker__day--selected {
        width: 2rem;
        height: 1.7rem;
        background-color: var(--color-grey-5);
    }
    .react-datepicker__navigation {
        top: 0.8rem;
    }
    label {
        ${(props) =>
            props.isDateField
                ? css`
                      transform: translate(-0.6rem, -2rem) scale(0.7);
                      color: var(--color-${(props) => props.labelFocusColor || 'green'});
                      background-color: var(--color-white);
                  `
                : ''}
    }
    label::placeholder {
        ${(props) =>
            props.isDateField
                ? css`
                opacity: 1;
                color: var(--color-grey-5);
                ${(props) =>
                    props.label &&
                    css`
                        font-size: 14px;
                    `}
              }
              
              `
                : ''}
    }
`

export const StyledLabel = styled.label`
    /* prettier-ignore */
    color: var(--color-${(props) => props.labelColor || 'grey'});
    font-size: var(--text-size-xs);
    position: absolute;
    pointer-events: none;
    left: 0.8rem;
    top: 1.4rem;
    transition: 0.25s ease transform;
    transform: translateZ(0);
    padding: 0 0.4rem;
    background: none;
`

const AffiliateDatePicker = (props) => {
    const { id, error, label, labelColor, tabletBackground } = props
    const [birthDate, setBirthDate] = useState()
    const [isDateField, selectDateField] = useState(false)

    const getDate = (days, months, years) => {
        let date = new Date()
        date.setDate(date.getDate() + days)
        date.setMonth(date.getMonth() + months)
        date.setFullYear(date.getFullYear() + years)
        return date
    }

    return (
        <DatePickerWrapper isDateField={isDateField}>
            <DatePicker
                selected={birthDate}
                minDate={getDate(0, 0, -100)}
                maxDate={getDate(0, 0, -18)}
                onChange={(date) => setBirthDate(date)}
                onFocus={() => selectDateField(true)}
                onBlur={() => selectDateField(false)}
            />
            <StyledLabel
                tabletBackground={tabletBackground}
                error={error}
                htmlFor={id}
                labelColor={labelColor}
            >
                {label}
            </StyledLabel>
        </DatePickerWrapper>
    )
}

AffiliateDatePicker.propTypes = {
    error: PropTypes.string,
    id: PropTypes.string,
    label: PropTypes.string,
    labelColor: PropTypes.string,
    placeholder: PropTypes.string,
    tabletBackground: PropTypes.string,
}

export default AffiliateDatePicker
