import React from 'react'
import styled from 'styled-components'
import AcademyNav from './components/_nav'
import ConfirmText from './components/_text'
import ConfirmMails from './components/_mails'
import ToAcademyButton from './components/_button'
import { SectionContainer } from 'components/containers'
import device from 'themes/device.js'

const MailSection = styled(SectionContainer)`
    height: 100vh;
`

const TextAndEmailContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    max-width: 996px;
    margin: auto;
    padding: 32px 0;

    @media ${device.tabletL} {
        padding: 10px 16px;
    }
`

const ConfirmEmail = () => {
    return (
        <MailSection>
            <AcademyNav />
            <TextAndEmailContainer>
                <ConfirmText />
                <ConfirmMails />
            </TextAndEmailContainer>
            <ToAcademyButton />
        </MailSection>
    )
}

export default ConfirmEmail
