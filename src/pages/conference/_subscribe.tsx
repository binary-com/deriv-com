import React from 'react'
import styled from 'styled-components'
import { localize } from 'components/localization'
import { Header } from 'components/elements'
import { Button } from 'components/form'

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
`

export const NoticableLogin = () => {
    return (
        <NoticableLoginWrapper>
            <LoginHeader as="div" type="heading-3">
                Deixe-nos saber se você vai estar presente!
            </LoginHeader>
            <Button secondary>Cadastre-se aqui</Button>
        </NoticableLoginWrapper>
    )
}

export default NoticableLogin
