import React, { useState } from 'react'
import styled from 'styled-components'
import { MapPinType } from '../_data'
import { LocalizedLink } from 'components/localization'
import { Header } from 'components/elements'
import { ReactComponent as Pin } from 'images/svg/who-we-are/pin.svg'
import device from 'themes/device'

type PinWrapperProps = {
    left: string
    top: string
    to: string
}

const PinWrapper = styled.div<PinWrapperProps>`
    position: absolute;
    top: ${(props) => props.top};
    left: ${(props) => props.left};
    -webkit-tap-highlight-color: transparent;
    /* stylelint-disable */
    -webkit-appearance: none;
    /* stylelint-enable */
    cursor: pointer;
`

const PinContent = styled(LocalizedLink)`
    width: max-content;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: var(--color-white);
    box-shadow: rgba(0, 0, 0, 0.05) 0 16px 20px 0, rgba(0, 0, 0, 0.05) 0 0 20px 0;
    border-radius: 5px;
    padding: 4px 8px;
    text-align: center;
    position: relative;
    left: -43%;
    top: -55px;
    transition: opacity 0.25s;
    z-index: 3;
    text-decoration: none;

    &::after {
        content: '';
        width: 12px;
        height: 12px;
        background: var(--color-white);
        position: absolute;
        transform: rotate(45deg);
        top: 83%;
        left: 40.5%;
    }
    @media ${device.tabletL} {
        padding: 2px 4px;
        width: 58px;
    }
`

const MapPin = ({ top, left, title, link }: MapPinType) => {
    const [is_pin_show, setPinShow] = useState(false)

    const onMouseEnter = () => setPinShow(true)
    const onMouseLeave = () => setPinShow(false)

    return (
        <PinWrapper
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            top={top}
            left={left}
            to={link}
        >
            <Pin />
            {is_pin_show && (
                <PinContent locale="en" to={link} anchor>
                    <Header color="black" mr="8px" weight="normal" type="small">
                        {title}
                    </Header>
                </PinContent>
            )}
        </PinWrapper>
    )
}

export default MapPin
