import React from 'react'
import styled from 'styled-components'
import device from 'themes/device'
import { Container, SectionContainer } from 'components/containers'
import { Text } from 'components/elements'
import { localize } from 'components/localization'
import { LinkButton } from 'components/form'

const StyledSection = styled(SectionContainer)`
    background-color: var(--color-grey-30);
    margin-top: 67px;
    padding: 7rem 0 3rem;

    @media ${device.tabletL} {
        padding: 40px 16px 0;
    }
`
const StyledContainer = styled(Container)`
    flex-direction: column;

    @media ${device.tabletL} {
        width: 100%;
    }
`

const StyledText = styled(Text)`
    font-size: 3.2rem;
    line-height: 40px;
    text-align: center;
    font-weight: 700;

    @media ${device.tabletL} {
        font-size: 24px;
        line-height: 30px;
    }
`

const TryButton = styled(LinkButton)`
    padding: 14px 16px;
    width: min-content;
    white-space: nowrap;
    font-size: 14px;
    margin-top: 4.2rem;
    margin-bottom: 40px;
    border: unset;

    @media ${device.mobileL} {
        padding: 1.5rem 1.6rem;
        height: 42px;
        white-space: nowrap;
        margin-bottom: 2rem;
    }
    @media ${device.mobileL} {
        margin-top: 24px;
        margin-bottom: 40px;
    }
`

const Titlebtn = () => {
    return (
        <StyledSection>
            <StyledContainer>
                <StyledText mt="16px">
                    {localize('Create your Deriv account now and start trading!')}
                </StyledText>
                <TryButton
                    secondary="true"
                    to="/"
                    external="true"
                    type="deriv_app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {localize('Get trading')}
                </TryButton>
            </StyledContainer>
        </StyledSection>
    )
}

export default Titlebtn
