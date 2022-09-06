import React from 'react'
import styled from 'styled-components'
import device from 'themes/device'
import { Container, SectionContainer } from 'components/containers'
import { Text } from 'components/elements'
import { LinkButton } from 'components/form'

const StyledSection = styled(SectionContainer)`
    @media ${device.tabletL} {
        margin-top: 2rem;
        padding: 40px 16px 0;
    }
`

const StyledContainer = styled(Container)`
    @media ${device.tabletL} {
        width: 100%;
    }
`

const StyledText = styled(Text)`
    @media ${device.tabletL} {
        font-size: 24px;
        line-height: 30px;
        text-align: center;
    }
`

const TryButton = styled(LinkButton)`
    @media ${device.mobileL} {
        white-space: nowrap;
        margin-bottom: 2rem;
    }
    @media ${device.mobileL} {
        margin-top: 24px 0 40px;
    }
`

type TitlebtnProps = {
    btnlabel: string
    text: string
}

const Titlebtn = ({ btnlabel, text }: TitlebtnProps) => {
    return (
        <StyledSection background="var(--color-grey-30)" padding="7rem 0 3rem" mt="9rem">
            <StyledContainer direction="column">
                <StyledText mt="16px" pl="2rem" pr="2rem" size="3.2rem" weight="700">
                    {text}
                </StyledText>
                <TryButton
                    secondary
                    m="4.2rem 0 40px"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    type="submit"
                    to={'/signup/'}
                >
                    {btnlabel}
                </TryButton>
            </StyledContainer>
        </StyledSection>
    )
}

export default Titlebtn
