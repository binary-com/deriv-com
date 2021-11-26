//keeping this for potential future use once career page has been redesigned

import React, { useRef } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Header } from './typography'
import { LocalizedLinkText } from 'components/elements'
import { useOutsideClick } from 'components/hooks/use-outside-click'
import { DerivStore } from 'store'

const OffCanvasMenuCareer = styled.section`
    position: fixed;
    background-color: var(--color-white);
    top: 7.2rem;
    width: 253px;
    opacity: 1;
    overflow: scroll;
    transition: transform 0.4s;
    box-shadow: 0 16px 20px 0 rgba(0, 0, 0, 0.1);
    right: 0;
    ${({ is_canvas_menu_open }) => !is_canvas_menu_open && 'transform: translateX(254px)'};
`

const OffCanvasMenuContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2.4rem 1.6rem;

    div {
        a:first-child {
            margin-top: 0;
        }
    }
`

export const OffCanvasMenuWrapperCareer = (props) => {
    const { is_eu_country } = React.useContext(DerivStore)
    const canvas = useRef()

    useOutsideClick(canvas, props.closeOffCanvasMenu, null, 'mousedown')

    return (
        <OffCanvasMenuCareer
            is_canvas_menu_open={props.is_canvas_menu_open}
            ref={canvas}
            is_eu_country={is_eu_country}
        >
            <OffCanvasMenuContainer>
                <LocalizedLinkText to="/careers/" p="10px">
                    <Header type="main-paragraph">Home</Header>
                </LocalizedLinkText>
                <LocalizedLinkText to="/careers/locations/" p="10px">
                    <Header type="main-paragraph">Location</Header>
                </LocalizedLinkText>
                <LocalizedLinkText to="/careers/besquare/" p="10px">
                    <Header type="main-paragraph">BeSquare</Header>
                </LocalizedLinkText>
            </OffCanvasMenuContainer>
        </OffCanvasMenuCareer>
    )
}

OffCanvasMenuWrapperCareer.propTypes = {
    closeOffCanvasMenu: PropTypes.func,
    is_canvas_menu_open: PropTypes.bool,
    is_ppc: PropTypes.bool,
    is_ppc_redirect: PropTypes.bool,
}
