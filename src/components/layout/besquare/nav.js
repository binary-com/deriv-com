import React from 'react'
import { ButtonWrapper, ContentContainer, LogoWrapper, Section, StyledLogoLink } from './style/nav'
import { besquare_signup_url } from 'common/constants'
import { localize } from 'components/localization'
import BeSquareLogo from 'images/svg/be-square/be-square-logo.svg'

const BeSquareNav = () => (
    <Section>
        <ContentContainer>
            <LogoWrapper>
                <StyledLogoLink to={'/'} aria-label={'Home'}>
                    <img src={BeSquareLogo} width="278" height="27" />
                </StyledLogoLink>
            </LogoWrapper>
            <ButtonWrapper
                secondary="true"
                to={besquare_signup_url}
                external
                target="_blank"
                rel="noopener noreferrer"
            >
                {localize('Apply now')}
            </ButtonWrapper>
        </ContentContainer>
    </Section>
)

export default BeSquareNav
