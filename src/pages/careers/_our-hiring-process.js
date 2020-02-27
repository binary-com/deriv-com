import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { Container, SectionContainer, Flex } from 'components/containers'
import { BackgroundImage, Text, Header } from 'components/elements'
import { localize, Localize } from 'components/localization'
import { LinkButton } from 'components/form'

const StyledHeader = styled(Header)`
    margin-bottom: 5.8rem;
`

const ProcessContainer = styled.div`
    position: relative;
    height: 152.7rem;
    display: flex;
    flex-direction: column;
`

const StyledTipsCard = styled(Flex)`
    box-shadow: 0 16px 20px 0 rgba(0, 0, 0, 0.05), 0 0 20px 0 rgba(0, 0, 0, 0.05);
    padding: 2.4rem;
    position: relative;
    height: fit-content;
    max-width: 35.2rem;

    &::after {
        content: '';
        position: absolute;
        background: var(--color-white);
        width: 2.4rem;
        height: 2.4rem;
        transform: rotate(45deg);
        ${props =>
            props.right
                ? css`
                      right: -1.2rem;
                  `
                : css`
                      left: -1.2rem;
                  `}
    }
`

const TipsRounded = styled.div`
    background: var(--color-black);
    border-radius: 50%;
    padding: 2px 9px;
    margin-right: 0.8rem;
    height: 2.2rem;
    color: var(--color-white);
    font-size: var(--text-size-s);
`

const TipsCard = ({ content, right }) => (
    <StyledTipsCard direction="column" right={right}>
        <Flex direction="row" mb="1.3rem" jc="flex-start">
            <TipsRounded>!</TipsRounded>
            <Text weight="bold">{localize('Tips:')}</Text>
        </Flex>
        <Text>{content}</Text>
    </StyledTipsCard>
)

const SecondaryHeader = styled(Header)`
    margin-bottom: 2.4rem;
`

const ProcessWrapper = styled(Flex)`
    max-width: 46.4rem;
    height: fit-content;
`

const OurHiringProcess = () => (
    <SectionContainer padding="12rem 0">
        <Container direction="column">
            <StyledHeader as="h3" align="center">
                {localize('Our hiring process')}
            </StyledHeader>
            <ProcessContainer>
                <Flex direction="row">
                    <TipsCard
                        content={localize(
                            'Be prepared to clarify and elaborate on the answers you gave in your self-assessment questionnaire. Remember, the interview is also an opportunity for you to ask questions about the company and your potential role.',
                        )}
                        right
                    />
                    <ProcessWrapper direction="column">
                        <SecondaryHeader as="h2">{localize('Apply')}</SecondaryHeader>
                        <Text>
                            {localize(
                                "Found a great role in an ad or our website? Let us know you're interested by sending us your CV. Every CV is read by our recruitment team. If there's a match, we'll get in touch.",
                            )}
                        </Text>
                    </ProcessWrapper>
                </Flex>

                <Flex direction="row">
                    <TipsCard
                        content={localize(
                            'Be prepared to clarify and elaborate on the answers you gave in your self-assessment questionnaire. Remember, the interview is also an opportunity for you to ask questions about the company and your potential role.',
                        )}
                        right
                    />
                </Flex>
            </ProcessContainer>
        </Container>
    </SectionContainer>
)

TipsCard.propTypes = {
    content: PropTypes.string,
    right: PropTypes.bool,
}

export default OurHiringProcess
