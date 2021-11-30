import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import device from '../../themes/device'
import { localize } from 'components/localization'

const Container = styled.div`
    display: flex;
    height: 10rem;
    flex-direction: column;
    width: 48%;
    border-radius: 0.4rem;
    border: 1px solid #d6dadb;
    padding: 1.6rem;
    cursor: pointer;

    @media ${device.mobileL} {
        height: 15rem;
    }
`
const Radio = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    direction: ltr;
    justify-content: space-between;
    cursor: pointer;
`
const Label = styled.div`
    font-size: 14px;
    font-weight: bold;
`

const Description = styled.p`
    padding: 1rem 0;
    font-size: 12px;
`

const RadioInput = ({ label, checked, onChange, description }) => {
    const onClickContainer = (e) => {
        e.stopPropagation()
        e.preventDefault()
        onChange({
            target: {
                value: !checked,
            },
        })
    }

    return (
        <Container onClick={onClickContainer}>
            <Radio>
                <Label>{localize(label)}</Label>
                <input type="radio" checked={checked} onChange={onClickContainer} />
            </Radio>
            <Description>{localize(description)}</Description>
        </Container>
    )
}

RadioInput.propTypes = {
    checked: PropTypes.bool,
    className: PropTypes.string,
    description: PropTypes.string.isRequired,
    id: PropTypes.string,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
}

export default RadioInput
