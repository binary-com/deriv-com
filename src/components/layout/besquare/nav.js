import React from 'react'
import { ButtonWrapper, ContentContainer, LogoWrapper, Section, StyledLogoLink } from './style/nav'
import { besquare_form_url } from 'common/utility'
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
            <ButtonWrapper type="submit" secondary="true" to={besquare_form_url}>
                {localize('Apply now')}
            </ButtonWrapper>
        </ContentContainer>
    </Section>
)

export default BeSquareNav
