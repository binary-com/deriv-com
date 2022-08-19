//keeping this for potential future use once career page has been redesigned

import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'
import { Header } from './typography'
import { LocalizedLinkText } from 'components/elements'
import { DerivStore } from 'store'

const OffCanvasMenuCareer = styled.section<OffCanvasMenuWrapperCareerProps>`
    position: fixed;
    background-color: var(--color-white);
    top: 7.2rem;
    width: 253px;
    opacity: 1;
    overflow: scroll;
    transition: transform 0.4s;
    box-shadow: 0 16px 20px 0 rgba(0, 0, 0, 0.1);
    left: -254px;
    ${({ is_canvas_menu_open }) => is_canvas_menu_open && 'transform: translateX(254px)'};
`

const OffCanvasMenuContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2.4rem 1.6rem;
    height: 100vh;

    div {
        a:first-child {
            margin-top: 0;
        }
    }
`

type OffCanvasMenuWrapperCareerProps = {
    closeOffCanvasMenu?: () => void
    is_canvas_menu_open?: boolean
    is_ppc?: boolean
    is_ppc_redirect?: boolean
    is_eu_country?: boolean
}

export const OffCanvasMenuWrapperCareer = (props: OffCanvasMenuWrapperCareerProps) => {
    const { is_eu_country } = React.useContext(DerivStore)
    const canvas = useRef<HTMLDivElement>()

    const handleArrowClick = () => {
        props.closeOffCanvasMenu()
    }

    const outerClick = (e) => {
        if (!canvas.current.contains(e.target)) {
            props.closeOffCanvasMenu()
        } else return
    }

    useEffect(() => {
        document.addEventListener('mousedown', outerClick, false)
        return () => {
            document.removeEventListener('mousedown', outerClick, false)
        }
    }, [])

    return (
        <OffCanvasMenuCareer
            is_canvas_menu_open={props.is_canvas_menu_open}
            ref={canvas}
            is_eu_country={is_eu_country}
        >
            <OffCanvasMenuContainer>
                <LocalizedLinkText to="/careers/" onClick={handleArrowClick} p="10px">
                    <Header type="main-paragraph">Home</Header>
                </LocalizedLinkText>
                <LocalizedLinkText to="/careers/locations/" onClick={handleArrowClick} p="10px">
                    <Header type="main-paragraph">Location</Header>
                </LocalizedLinkText>
                <LocalizedLinkText to="/careers/besquare/" onClick={handleArrowClick} p="10px">
                    <Header type="main-paragraph">BeSquare</Header>
                </LocalizedLinkText>
            </OffCanvasMenuContainer>
        </OffCanvasMenuCareer>
    )
}
