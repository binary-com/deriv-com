import React from 'react'
import styled from 'styled-components'
import { Text } from 'components/elements'
import { LinkButton } from 'components/form'
import { localize } from 'components/localization'
import { Container } from 'components/containers'
import ContactUsIcon from 'images/svg/contact-us.svg'
import device from 'themes/device'

const DFYAWrapper = styled.section`
    background-color: var(--color-black-3);
`
const DFYASection = styled(Container)`
    padding: 3.5rem 0;
    justify-content: flex-start;
    align-items: center;
    @media ${device.mobileL} {
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }

    & > * {
        width: auto;
    }
`
const StyledIcon = styled(ContactUsIcon)`
    @media ${device.tabletL} {
        width: 30px;
        height: 30px;
        margin-right: 1.6rem;
    }
`
const MiddleText = styled(Text)`
    @media ${device.mobileL} {
        margin: 1.6rem 0;
        text-align: center;
    }
`

export const DidntFindYourAnswerBanner = () => (
    <DFYAWrapper>
        <DFYASection>
            <StyledIcon />
            <MiddleText size="var(--text-size-l)" color="white" weight="bold" m="0 2.4rem">
                {localize('Didn’t find your answer?')}
            </MiddleText>
            <LinkButton secondary="true" to="/contact-us" weight="bold" color="black">
                {localize('Contact us')}
            </LinkButton>
        </DFYASection>
    </DFYAWrapper>
)
