import React from 'react'
import styled from 'styled-components'
import { Header } from 'components/elements'
import { Button } from 'components/form'
import device from 'themes/device'
import { localize } from 'components/localization'

const LoginHeader = styled(Header)`
    text-align: center;
    font-weight: normal;
    padding-bottom: 40px;
`
const NoticableLoginWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: linear-gradient(76.83deg, #b1c9df 4.59%, #eaf4f5 66.44%);
    padding: 80px 120px;

    @media ${device.laptop} {
        padding: 60px;
    }
`

export const NoticableLogin = () => {
    return (
        <NoticableLoginWrapper>
            <LoginHeader as="div" type="heading-3">
                {localize('Let us know if you will be attending!')}
            </LoginHeader>
            <Button secondary>{localize('Register here')}</Button>
        </NoticableLoginWrapper>
    )
}

export default NoticableLogin
