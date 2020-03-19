import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { LocalizedLink, localize } from 'components/localization'
import { Flex } from 'components/containers'
import { Accordion, AccordionItem } from 'components/elements'

const OffCanvasMenu = styled.section`
    position: fixed;
    background-color: var(--color-white);
    top: 7.2rem;
    height: 100vh;
    width: 238px;
    opacity: 0.98;
    transition: left 0.4s;
    box-shadow: 0 16px 20px 0 rgba(0, 0, 0, 0.1);
    left: ${props => (props.is_canvas_menu_open ? '0' : '-238px')};
`
const StyledLink = styled(props => <LocalizedLink {...props} />)`
    color: var(--color-black);
    margin-top: 2.4rem;
    font-size: 2rem;
    font-weight: 400;
    text-decoration: none;
    line-height: 2.8rem;
`
const OffCanvasMenuContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 4rem 1.6rem;

    div {
        display: flex;
        flex-direction: column;

        a:first-child {
            margin-top: 0;
        }
    }
`

const header_style = {
    border: 'none',
    padding: '0',
    boxShadow: 'none',
    flexDirection: 'row',
}
const content_style = {
    marginLeft: '1.6rem',
    marginBottom: '2.4rem',
}

const OffCanvasMenuWrapper = props => {
    const canvas = useRef()

    const handleArrowClick = () => {
        props.closeOffCanvasMenu()
    }

    const outerClick = e => {
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
        <OffCanvasMenu is_canvas_menu_open={props.is_canvas_menu_open} ref={canvas}>
            <OffCanvasMenuContainer>
                <Accordion>
                    <AccordionItem
                        header={localize('Trading platforms')}
                        header_style={header_style}
                        style={content_style}
                    >
                        <StyledLink to="/about/" onClick={handleArrowClick}>
                            {localize('About us')}
                        </StyledLink>
                        <StyledLink to="/help-centre/" onClick={handleArrowClick}>
                            {localize('Help Centre')}
                        </StyledLink>
                    </AccordionItem>
                    {/* <AccordionItem
                        header={localize('Markets')}
                        header_style={header_style}
                        style={content_style}
                    >
                        <StyledLink to="/about/" onClick={handleArrowClick}>
                            {localize('About us')}
                        </StyledLink>
                        <StyledLink to="/help-centre/" onClick={handleArrowClick}>
                            {localize('Help Centre')}
                        </StyledLink>
                    </AccordionItem> */}
                    <AccordionItem
                        header={localize('Company')}
                        header_style={header_style}
                        style={content_style}
                    >
                        <StyledLink to="/about/" onClick={handleArrowClick}>
                            {localize('Why choose us')}
                        </StyledLink>
                        <StyledLink to="/help-centre/" onClick={handleArrowClick}>
                            {localize('Our story')}
                        </StyledLink>
                        <StyledLink to="/help-centre/" onClick={handleArrowClick}>
                            {localize('Our leadership')}
                        </StyledLink>
                        <StyledLink to="/help-centre/" onClick={handleArrowClick}>
                            {localize('Join us')}
                        </StyledLink>
                        <StyledLink to="/help-centre/" onClick={handleArrowClick}>
                            {localize('Contact us')}
                        </StyledLink>
                    </AccordionItem>
                    <AccordionItem
                        header={localize('Legal')}
                        header_style={header_style}
                        style={content_style}
                    >
                        <StyledLink to="/about/" onClick={handleArrowClick}>
                            {localize('About us')}
                        </StyledLink>
                        <StyledLink to="/help-centre/" onClick={handleArrowClick}>
                            {localize('Help Centre')}
                        </StyledLink>
                    </AccordionItem>
                </Accordion>
            </OffCanvasMenuContainer>
        </OffCanvasMenu>
    )
}
export const moveOffCanvasMenu = (initState = false) => {
    const [is_canvas_menu_open, setOffCanvasMenuPosition] = useState(initState)
    const openOffCanvasMenu = () => setOffCanvasMenuPosition(true)
    const closeOffCanvasMenu = () => setOffCanvasMenuPosition(false)

    return [is_canvas_menu_open, openOffCanvasMenu, closeOffCanvasMenu]
}

OffCanvasMenuWrapper.propTypes = {
    closeOffCanvasMenu: PropTypes.func,
    is_canvas_menu_open: PropTypes.bool,
}
export default OffCanvasMenuWrapper
