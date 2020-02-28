import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { Container, SectionContainer, Flex } from 'components/containers'
import { BackgroundImage, Text, Header } from 'components/elements'
import { localize, Localize } from 'components/localization'
import { LinkButton, Button } from 'components/form'
// SVG
import Career1 from 'images/svg/career-1.svg'
import Career2 from 'images/svg/career-2.svg'
import Career3 from 'images/svg/career-3.svg'
import Career4 from 'images/svg/career-4.svg'
import DownwardsLeft from 'images/svg/downwards-left.svg'
import DownwardsRight from 'images/svg/downwards-right.svg'

const StyledHeader = styled(Header)`
    margin-bottom: 5.8rem;
`

const ProcessContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
`

const StyledTipsCard = styled(Flex)`
    box-shadow: 0 16px 20px 0 rgba(0, 0, 0, 0.05), 0 0 20px 0 rgba(0, 0, 0, 0.05);
    padding: 2.4rem;
    position: relative;
    max-width: 30.9rem;

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

const TipsCard = ({ content, right, style }) => (
    <StyledTipsCard direction="column" right={right} style={style}>
        <Flex direction="row" mb="1.3rem" jc="flex-start">
            <TipsRounded>!</TipsRounded>
            <Text weight="bold">{localize('Tips:')}</Text>
        </Flex>
        <Text size="var(--text-size-xs)">{content}</Text>
    </StyledTipsCard>
)

const SecondaryHeader = styled(Header)`
    margin-bottom: 2.4rem;
`

const ProcessWrapper = styled(Flex)`
    max-width: 46.4rem;
`

const Process = ({ title, description, style }) => (
    <ProcessWrapper direction="column" style={style}>
        <SecondaryHeader as="h2">{title}</SecondaryHeader>
        <Text size="var(--text-size-sm)">{description}</Text>
    </ProcessWrapper>
)

const StyledCareer1 = styled(Career1)`
    margin-left: 5.2rem;
    margin-right: 1.3rem;
`

const StyledCareer2 = styled(Career2)`
    margin-left: 7.5rem;
    margin-right: 3.2rem;
`

const StyledCareer3 = styled(Career3)`
    margin-left: 3rem;
    margin-right: 3.7rem;
`

const StyledCareer4 = styled(Career4)`
    margin-left: 7.5rem;
    margin-right: 3rem;
`

const DownwardsRight1 = styled(DownwardsRight)`
    margin-left: 43.5%;
    margin-top: -6.5%;
`

const DownwardsRight2 = styled(DownwardsRight)`
    margin-left: 43.5%;
    margin-top: -9.5%;
`

const DownwardsLeft1 = styled(DownwardsLeft)`
    margin-left: 49%;
    margin-top: -6%;
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
                            "Apply for the jobs that match your skills and interest. If you want, link to your portfolio or other examples of work that demonstrate you're the one for the role.",
                        )}
                        style={{ marginTop: '4.7rem' }}
                        right
                    />
                    <StyledCareer1 />
                    <Process
                        title={localize('Apply')}
                        description={localize(
                            "Found a great role in an ad or our website? Let us know you're interested by sending us your CV. Every CV is read by our recruitment team. If there's a match, we'll get in touch.",
                        )}
                        style={{ marginTop: '1.7rem' }}
                    />
                </Flex>
                <DownwardsRight1 />
                <Flex direction="row" ml="2.4rem" mt="1rem">
                    <Process
                        title={localize('Test')}
                        description={localize(
                            'Complete a self-assessment questionnaire to tell us more about yourself, and a talent test to showcase your domain knowledge and approach to problem-solving.',
                        )}
                        style={{ maxWidth: '38.4rem' }}
                    />
                    <StyledCareer2 />
                    <TipsCard
                        content={localize(
                            'The self-assessment questionnaire is your opportunity to tell us about your background, values, character, and attitude. The questionnaire helps us to evaluate if our culture is right for you to be happy and productive.',
                        )}
                        style={{ maxWidth: '35.7rem', marginTop: '2.3rem' }}
                    />
                </Flex>
                <DownwardsLeft1 />
                <Flex direction="row" mt="2rem">
                    <TipsCard
                        content={localize(
                            'Be prepared to clarify and elaborate on the answers you gave in your self-assessment questionnaire. Remember, the interview is also an opportunity for you to ask questions about the company and your potential role.',
                        )}
                        right
                        style={{ marginTop: '4.7rem', maxWidth: '35.6rem' }}
                    />
                    <StyledCareer3 />
                    <Process
                        title={localize('Interview')}
                        description={localize(
                            "This is where you get to meet our team. Our interviews are not just about evaluating your technical ability and experience. We also try to understand what's important to you, how you work with others, and how you approach problems.",
                        )}
                        style={{ marginTop: '1.7rem' }}
                    />
                </Flex>
                <DownwardsRight2 />
                <Flex direction="row" mt="1.6rem">
                    <Process
                        title={localize('Decision')}
                        description={localize(
                            "We make a decision and proceed with reference and background checks. If all is well, you'll receive an official offer letter in your email inbox. Then it's over to you.",
                        )}
                        style={{ maxWidth: '38.4rem' }}
                    />
                    <StyledCareer4 />
                    <TipsCard
                        content={localize(
                            'Congratulations! Now all you have to do is read through your offer letter carefully. If you have a question about something in the offer letter, don’t be afraid to ask us.',
                        )}
                        style={{ maxWidth: '34rem', marginTop: '2.3rem' }}
                    />
                </Flex>
            </ProcessContainer>
        </Container>
    </SectionContainer>
)

Process.propTypes = {
    description: PropTypes.string,
    style: PropTypes.object,
    title: PropTypes.string,
}

TipsCard.propTypes = {
    content: PropTypes.string,
    right: PropTypes.bool,
    style: PropTypes.object,
}

export default OurHiringProcess
