import React from 'react'
import { ButtonWrapper, Container, ContentContainer, LogoWrapper } from './style/nav'
import { localize } from 'components/localization'
import BeSquareLogo from 'images/svg/be-square/be-square-logo.svg'

const BeSquareNav = () => (
    <Container>
        <ContentContainer>
            <LogoWrapper src={BeSquareLogo} width="278" height="27" />
            <ButtonWrapper type="submit" secondary="true" to="#">
                {localize('Apply now')}
            </ButtonWrapper>
        </ContentContainer>
    </Container>
)

export default BeSquareNav
