import React, { useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Arrow from 'images/svg/arrow.svg'

const OffCanvasMenu = styled.div`
    position: fixed;
    background-color: var(--color-white);
    top: 0;
    height: 100vh;
    width: 238px;
    opacity: 0.98;
    transition: right 0.4s;
    right: ${props => (props.is_canvas_menu_open ? '0' : '-238px')};
`

const WrapperOffCanvasMenu = props => {
    const handleArrowClick = () => {
        props.closeOffCanvasMenu()
    }
    return (
        <OffCanvasMenu is_canvas_menu_open={props.is_canvas_menu_open}>
            <div>
                <Arrow onClick={handleArrowClick} />
            </div>
        </OffCanvasMenu>
    )
}
export function moveOffCanvasMenu() {
    const [is_canvas_menu_open, setOffCanvasMenuPosition] = useState(false)
    const openOffCanvasMenu = () => setOffCanvasMenuPosition(true)
    const closeOffCanvasMenu = () => setOffCanvasMenuPosition(false)

    return [is_canvas_menu_open, openOffCanvasMenu, closeOffCanvasMenu]
}

WrapperOffCanvasMenu.propTypes = {
    closeOffCanvasMenu: PropTypes.bool,
    is_canvas_menu_open: PropTypes.bool,
}
export default WrapperOffCanvasMenu
