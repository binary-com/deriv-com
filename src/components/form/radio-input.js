import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import device from '../../themes/device'
import { Flex } from '../containers'
import { localize } from 'components/localization'

const StyledContainerFlex = styled(Flex)`
    width: 48%;
    border-radius: 0.4rem;
    border: 1px solid var(--color-grey-7);
    cursor: pointer;
    height: auto;
    @media ${device.mobileL} {
        height: 15rem;
    }
`
const Label = styled.div`
    font-size: 14px;
    font-weight: bold;
`
const Description = styled.p`
    margin-bottom: 0;
    padding: 1rem 0;
    font-size: 12px;
    line-height: normal;
`

const RadioInput = ({ label, checked, onChange, description }) => {
    const onClickContainer = () => {
        onChange({
            target: {
                value: !checked,
            },
        })
    }

    return (
        <StyledContainerFlex fd="column" jc="start" p="1.6rem" onClick={onClickContainer}>
            <Flex
                width="100%"
                height="auto"
                ai="center"
                jc="space-between"
                style={{ cursor: 'pointer' }}
            >
                <Label>{label}</Label>
                <input
                    type="radio"
                    style={{ cursor: 'pointer' }}
                    checked={checked}
                    onChange={onClickContainer}
                />
            </Flex>
            <Description>{localize(description)}</Description>
        </StyledContainerFlex>
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
