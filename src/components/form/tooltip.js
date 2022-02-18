import React from 'react'
import ReactTooltip from 'react-tooltip'
import styled from 'styled-components'
import Info from '../../images/svg/signup-affiliate-details/info.svg'
import { LocalizedLinkText } from '../elements'
import { localize } from 'components/localization'

const TooltipWrapper = styled.div`
    max-width: 250px;
`

const TooltipContent = () => (
    <TooltipWrapper>
        {localize('Choose which plan you would like to subscribe to.')}{' '}
        <LocalizedLinkText
            to="/partners/affiliate-ib#deriv-ap"
            external="true"
            color="red"
            target="_blank"
            is_anchor
            style={{ fontSize: '14px' }}
        >
            {localize('Learn more')}
        </LocalizedLinkText>
    </TooltipWrapper>
)

const Tooltip = () => {
    return (
        <>
            <img
                data-tip
                data-event="click focus"
                data-for="tooltip"
                style={{ margin: '0 5px', cursor: 'pointer' }}
                src={Info}
                alt="info"
            />
            <ReactTooltip
                id="tooltip"
                effect="solid"
                clickable
                place="top"
                globalEventOff="click"
                getContent={TooltipContent}
            />
        </>
    )
}

export default Tooltip
