import React from 'react'
import styled from 'styled-components'
import { Localize } from 'components/localization'
import device from 'themes/device'
import { Header, StyledLink, Text } from 'components/elements'
import EmailIcon from 'images/svg/check-email/email.svg'
import { Button } from 'components/form'

const EmailLink = styled(StyledLink)`
    display: table;
    font-size: 1.4rem;
    margin-top: 1.8rem;
    text-decoration: underline;
    width: 100%;
    text-align: center;
`

const Wrapper = styled.section`
    background-color: white;
    min-height: 80vh;
    padding: 8rem 0;
    width: 100%;
    height: 80vh;
    display: flex;
    justify-content: center;
    flex-direction: row;

    @media ${device.mobileL} {
        padding: 0;
    }
`

const ResponseWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 33rem;
    margin: 0 auto;
    flex-direction: column;
    padding: 2rem 1rem;
`
const ContinueButton = styled(Button)`
    margin: 1rem auto;
    cursor: pointer;
    height: 40px;
    border: none;
    border-radius: 4px;
    background-color: #ff444f;
    color: #ffffff;
    font-size: 14;
    font-weight: bold;
    text-align: center;
`

const CtraderCheckEmail = ({
    email,
    handleSuccess,
}: {
    email: string
    handleSuccess: () => void
}) => {
    return (
        <Wrapper>
            <ResponseWrapper>
                <Header as="h3" type="section-title" align="center" weight="bold" mb="2rem">
                    <Localize translate_text="_t_Check your email_t_" />
                </Header>
                <img src={EmailIcon} alt="email" width="128px" height="128px" />
                <Text align="center" pt="20px" pb="20px">
                    <Localize
                        translate_text="Verification code was sent to {{email}}. If you have received the code please continue. If you didn't receive the code please make sure you didn't have any account already."
                        values={{ email }}
                    />
                </Text>
                <ContinueButton onClick={handleSuccess}>Continue</ContinueButton>
                <EmailLink to="/check-email/" align="center">
                    <Localize translate_text="Didn't receive the code?" />
                </EmailLink>
            </ResponseWrapper>
        </Wrapper>
    )
}

export default CtraderCheckEmail
