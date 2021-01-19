import React from 'react'
import { ButtonWrapper, ContentContainer, LogoWrapper, Section } from './style/nav'
import { scrollTop } from 'common/utility'
import { localize } from 'components/localization'
import BeSquareLogo from 'images/svg/be-square/be-square-logo.svg'

const BeSquareNav = () => (
    <Section>
        <ContentContainer>
            <LogoWrapper src={BeSquareLogo} width="278" height="27" onClick={scrollTop} />
            <ButtonWrapper type="submit" secondary="true" to="#">
                {localize('Apply now')}
            </ButtonWrapper>
        </ContentContainer>
    </Section>
)

export default BeSquareNav
