import React, { useState, useMemo } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import 'antd/dist/antd.css'
import { DatePicker, Space } from 'antd'
import moment from 'moment'
import device from 'themes/device'

const DatePickerWrapper = styled.div`
    width: 100%;
    height: 100%;

    .ant-space-vertical,
    .ant-picker,
    .ant-space-item {
        width: 100%;
        height: 100%;
    }
    .ant-picker {
        border: none;
    }
    .ant-picker-input {
        height: 30px;
    }
    .ant-picker-panel-container {
        border-radius: 8px;
    }
    .ant-picker-focused {
        box-shadow: none;
    }
    label {
        ${(props) => {
            return props.isDateField || props.birthDate || props.defaultValue
                ? css`
                      transform: translate(-0.6rem, -2rem) scale(0.7);
                      color: var(--color-${(props) => props.labelFocusColor || 'green'});
                      background-color: var(--color-white);
                  `
                : css`
                      transform: translate(0rem, 0rem) scale(1);
                  `
        }}
    }
`

const StyledLabel = styled.label`
    /* prettier-ignore */
    color: var(--color-${(props) => props.labelColor || 'grey'});
    font-size: var(--text-size-xs);
    position: absolute;
    pointer-events: none;
    left: 0.8rem;
    top: ${(props) => (props.isAffiliate ? '1.6rem' : '1.4rem')};
    transition: 0.25s ease transform;
    transform: translateZ(0);
    padding: 0 0.4rem;
    background: none;
    @media ${device.tabletL} {
        font-size: var(--text-size-s);
        top: 1.8rem;
    }
`
const minorAge = moment().subtract(18, 'years')
moment.updateLocale('en', {
    weekdaysMin: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
})

const AffiliateDatePicker = (props) => {
    const {
        id,
        error,
        setFieldValue,
        setFieldTouched,
        label,
        labelColor,
        tabletBackground,
        isAffiliate,
        value,
    } = props

    const [birthDate, setBirthDate] = useState('')
    const [isDateField, selectDateField] = useState(false)

    const defaultValue = useMemo(() => {
        if (value) {
            return moment(new Date(value * 1000).toLocaleDateString('en-GB'))
        }
    }, [value])

    const onChange = (date, dateString) => {
        setBirthDate(dateString)
        setFieldValue('date', dateString)
    }

    const onBlur = () => {
        selectDateField(false)
        setFieldTouched('date', true)
    }

    const disabledDate = (current) => minorAge < current
    return (
        <DatePickerWrapper
            birthDate={birthDate}
            defaultValue={defaultValue}
            isDateField={isDateField}
        >
            <Space direction="vertical">
                {defaultValue ? (
                    <DatePicker
                        key="datepicker-1"
                        defaultValue={defaultValue}
                        format={'DD/MM/YYYY'}
                        onChange={onChange}
                        placeholder={null}
                        onFocus={() => selectDateField(true)}
                        onBlur={onBlur}
                        defaultPickerValue={minorAge}
                        disabledDate={disabledDate}
                        showToday={false}
                    />
                ) : (
                    <DatePicker
                        key="datepicker-2"
                        format={'DD/MM/YYYY'}
                        onChange={onChange}
                        placeholder={null}
                        onFocus={() => selectDateField(true)}
                        onBlur={onBlur}
                        defaultPickerValue={minorAge}
                        disabledDate={disabledDate}
                        showToday={false}
                    />
                )}
            </Space>
            <StyledLabel
                tabletBackground={tabletBackground}
                error={error}
                htmlFor={id}
                labelColor={labelColor}
                isAffiliate={isAffiliate}
            >
                {label}
            </StyledLabel>
        </DatePickerWrapper>
    )
}

AffiliateDatePicker.propTypes = {
    error: PropTypes.string,
    id: PropTypes.string,
    isAffiliate: PropTypes.bool,
    label: PropTypes.string,
    labelColor: PropTypes.string,
    placeholder: PropTypes.string,
    setFieldTouched: PropTypes.func,
    setFieldValue: PropTypes.func,
    tabletBackground: PropTypes.string,
    value: PropTypes.string,
}

export default AffiliateDatePicker
