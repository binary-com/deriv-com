import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
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

const Titlebtn = ({ btnlabel, text }) => {
    return (
        <StyledSection background="var(--color-grey-30)" padding="7rem 0 3rem" mt="9rem">
            <StyledContainer direction="column">
                <StyledText mt="16px" pl="2rem" pr="2rem" size="3.2rem" weight="700">
                    {text}
                </StyledText>
                <TryButton
                    secondary="true"
                    to="/"
                    external="true"
                    type="deriv_app"
                    target="_blank"
                    rel="noopener noreferrer"
                    mt="4.2rem"
                    mb="40px"
                >
                    {btnlabel}
                </TryButton>
            </StyledContainer>
        </StyledSection>
    )
}

Titlebtn.propTypes = {
    btnlabel: PropTypes.string,
    text: PropTypes.string,
}

export default Titlebtn
