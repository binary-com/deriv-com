import React from 'react'
import styled from 'styled-components'
import { localize } from 'components/localization'
import { Header } from 'components/elements'
import { Button } from 'components/form'

const LoginWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 80px 120px;
`
const LoginHeader = styled(Header)<{ pt?: string }>`
    padding-bottom: 32px;
    ${({ pt }) => pt || '0'};
`

const Login = () => {
    return (
        <LoginWrapper>
            <LoginHeader as="h3" type="subtitle-1" align="center">
                Tres dias de conteudo, networking e novidades.
            </LoginHeader>
            <Button secondary>Cadstre-se aqui</Button>
            <LoginHeader as="div" weight="normal" type="subtitle-1" align="center" pt="32px">
                ou, se ja tiver seu acesso ao evento
            </LoginHeader>
            <Button secondary>Faca login</Button>
        </LoginWrapper>
    )
}

export default Login
