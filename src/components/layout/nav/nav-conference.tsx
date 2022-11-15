// Note: When using layout component for partners page, please add type='partners' and padding_top='10rem'
import React from 'react'
import styled from 'styled-components'
import NavConferenceDesktop from './components/conference/nav-conference-desktop'

export const ConferenceNavWrapper = styled.div`
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 100;
    background-color: var(--color-black);
`

const NavConference = () => {
    return (
        <ConferenceNavWrapper>
            <NavConferenceDesktop />
        </ConferenceNavWrapper>
    )
}

export default NavConference
