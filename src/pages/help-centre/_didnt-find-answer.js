import React from 'react'
import styled from 'styled-components'
import { StyledLink, Text } from 'components/elements'
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

    & > * {
        width: auto;
    }

    @media ${device.tabletL} {
        ${StyledLink} {
            font-size: var(--text-size-l);
        }
    }
`
const StyledIcon = styled(ContactUsIcon)`
    @media ${device.tabletL} {
        width: 30px;
        height: 30px;
    }
`

export const DidntFindYourAnswerBanner = () => (
    <DFYAWrapper>
        <DFYASection>
            <StyledIcon />
            <Text size="var(--text-size-l)" color="white" weight="bold" margin="0 2.4rem">
                {localize('Didn’t find your answer?')}
            </Text>
            <LinkButton secondary="true" to="/contact-us" weight="bold" color="black">
                {localize('Contact us')}
            </LinkButton>
        </DFYASection>
    </DFYAWrapper>
)
