import React from 'react'
import styled from 'styled-components'
import { Header } from 'components/elements'
import Email1 from 'images/svg/academy/email1.svg'
import Email2 from 'images/svg/academy/email2.svg'
import device from 'themes/device.js'
import { localize } from 'components/localization'

const MailContainer = styled.div`
    display: flex;
    margin: auto;
    max-width: 996px;
    width: 100%;

    @media ${device.tabletL} {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0px;
    }
`

const MailWrapper = styled.div`
    display: flex;
    align-items: center;
    margin: auto;
    max-width: 492px;
    @media ${device.tabletL} {
        margin: 0 0 24px 0;
        max-width: 450px;
    }
`

const MailImg = styled.img`
    width: 64px;
    height: 64px;

    @media ${device.tabletL} {
        width: 48px;
        height: 48px;
    }
`

const ConfirmMails = () => {
    return (
        <MailContainer>
            <MailWrapper>
                <MailImg src={Email1} />
                <Header type="paragraph-1" weight="regular" m="0 16px">
                    {localize(`If you don't receive an email, please check your junk folder.`)}
                </Header>
            </MailWrapper>
            <MailWrapper>
                <MailImg src={Email2} />
                <Header type="paragraph-1" weight="regular" m="0 16px">
                    {localize(` If the email still hasn't arrived after a few minutes, please refresh this
                    page, and check your inbox again.`)}
                </Header>
            </MailWrapper>
        </MailContainer>
    )
}

export default ConfirmMails
