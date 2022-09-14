import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { zoho_url } from 'common/constants'
// SVG
import Career1 from 'images/svg/careers/career-1.svg'
import Career2 from 'images/svg/careers/career-2.svg'
import Career3 from 'images/svg/careers/career-3.svg'
import Career4 from 'images/svg/careers/career-4.svg'
import DownwardsLeft from 'images/svg/careers/downwards-left.svg'
import DownwardsRight from 'images/svg/careers/downwards-right.svg'
import { Container, SectionContainer, Flex } from 'components/containers'
import { Text, Header, LinkText } from 'components/elements'
import { LinkButton } from 'components/form'
import device from 'themes/device'
import TipIcon from 'images/svg/careers/career-tip.svg'
import { useCountryRule } from 'components/hooks/use-country-rule'

const StyledSectionContainer = styled(SectionContainer)`
    padding: 8rem 0 5rem 0;
    border-top: 1px solid #e5e5e5;

    @media ${device.tablet} {
        border: none;
    }
`
const StyledHeader = styled(Header)`
    margin-bottom: 5.8rem;
    font-size: 48px;
    line-height: 60px;

    @media ${device.tablet} {
        font-size: 28px;
        line-height: 34px;
    }
`

const StyledLinkButton = styled(LinkButton)`
    padding: 10px, 16px, 10px, 16px;
    font-size: 20px;
    font-weight: bold;
`

const StyledAnotherHeader = styled(Header)`
    margin-top: 6rem;
    margin-bottom: 5rem;
    font-size: 32px;
    line-height: 40px;

    & span {
        color: var(--color-red);
    }

    @media ${device.tablet} {
        font-size: 24px;
        line-height: 30px;
    }
`

const ProcessContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
`

const rightStyle = css`
    right: -1.2rem;
`
const leftStyle = css`
    left: -1.2rem;
`

const StyledTipsCard = styled(Flex)`
    box-shadow: 0 16px 20px 0 rgba(0, 0, 0, 0.05), 0 0 20px 0 rgba(0, 0, 0, 0.05);
    padding: 2.4rem;
    position: relative;
    max-width: 350px;

    @media ${device.tablet} {
        max-width: 100% !important;
    }

    &::after {
        content: '';
        position: absolute;
        background: var(--color-white);
        width: 2.4rem;
        height: 2.4rem;
        transform: rotate(45deg);
        ${(props) => (props.right ? rightStyle : leftStyle)}

        @media ${device.tablet} {
            left: 48%;
            top: -1.2rem;
            right: auto;
        }
    }
`

const TipsRounded = styled.img`
    margin-right: 0.8rem;
`
const TipsCardText = styled(Text)`
    font-size: 16px;
    line-height: 24px;
`

const StyledContainer = styled(Container)`
    flex-direction: column;
    align-items: center;
`

const TipsCard = ({ content, right, style }) => (
    <StyledTipsCard direction="column" right={right} style={style}>
        <Flex direction="row" mb="1.3rem" jc="flex-start">
            <TipsRounded src={TipIcon} alt="career1" />
            <Text weight="bold">Tips:</Text>
        </Flex>
        <TipsCardText>{content}</TipsCardText>
    </StyledTipsCard>
)

const SecondaryHeader = styled(Header)`
    margin-bottom: 16px;
    font-size: 48px;
    line-height: 60px;

    @media ${device.tablet} {
        font-size: 28px;
        line-height: 34px;
    }
`
const DescriptionText = styled(Text)`
    font-size: 24px;
    line-height: 36px;

    @media ${device.tablet} {
        font-size: 18px;
        line-height: 26px;
    }
`

const ProcessWrapper = styled(Flex)`
    max-width: 46.4rem;

    @media ${device.tablet} {
        max-width: 100% !important;
    }
`

const Process = ({ title, description, style }) => (
    <ProcessWrapper direction="column" style={style}>
        <SecondaryHeader as="h2" type="page-title">
            {title}
        </SecondaryHeader>
        <DescriptionText>{description}</DescriptionText>
    </ProcessWrapper>
)

const SharedIconLeftStyles = css`
    height: 120px;
    width: 120px;
    margin: auto 4rem auto 6.4rem;

    @media ${device.tablet} {
        margin: 0;
    }
`
const SharedIconRightStyles = css`
    height: 120px;
    width: 120px;
    margin: auto 6.4rem auto 4rem;

    @media ${device.tablet} {
        margin: 0;
    }
`

const StyledCareer1 = styled.img`
    ${SharedIconLeftStyles}
`

const StyledCareer2 = styled.img`
    ${SharedIconRightStyles}
`

const StyledCareer3 = styled.img`
    ${SharedIconLeftStyles}
`

const StyledCareer4 = styled.img`
    ${SharedIconRightStyles}
`

const DownwardsShape = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
`

const StyledDownwardsRight = styled.img`
    margin: -106px 60px -87px 0;

    @media ${device.tablet} {
        margin: 0 -60px -109px 0;
        height: auto;
    }
`
const StyledDownwardsRight1 = styled.img`
    margin: -74px 60px -67px 0;

    @media ${device.tablet} {
        margin: 0 -60px -109px 0;
        height: auto;
    }
`

const StyledDownwardsLeft = styled.img`
    margin: -75px -19px -142px 0;

    @media ${device.tablet} {
        margin: 0 0 -109px -61px;
        height: auto;
    }
`

const ResponsiveFlex1 = styled(Flex)`
    @media ${device.tablet} {
        flex-direction: column-reverse;
    }
`

const SubResponsiveFlex1 = styled(Flex)`
    @media ${device.tablet} {
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
    }
`

const ResponsiveFlex2 = styled(Flex)`
    @media ${device.tablet} {
        flex-direction: column;
        align-items: flex-start;
        margin-top: 4.8rem;
        margin-left: 0;
        width: 100%;
    }
`

const SubResponsiveFlex2 = styled(Flex)`
    @media ${device.tablet} {
        flex-direction: column-reverse;
        align-items: flex-end;
    }
`

const ResponsiveFlex3 = styled(Flex)`
    @media ${device.tablet} {
        flex-direction: column-reverse;
        margin-top: 4.8rem;
    }
`

const SubResponsiveFlex3 = styled(Flex)`
    @media ${device.tablet} {
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
    }
`

const ResponsiveFlex4 = styled(Flex)`
    @media ${device.tablet} {
        flex-direction: column;
        margin-top: 4.8rem;
        align-items: flex-start;
    }
`

const SubResponsiveFlex4 = styled(Flex)`
    @media ${device.tablet} {
        flex-direction: column-reverse;
        align-items: flex-end;
    }
`

const StyledText = styled(Text)`
    font-size: 1.6rem;
`

const StyledLinkText = styled(LinkText)`
    margin: 0.5rem;
`

const OurHiringProcess = () => {
    const { is_eu } = useCountryRule()
    return (
        <StyledSectionContainer>
            <Container direction="column">
                <StyledHeader as="h3" type="section-title" align="center">
                    Our hiring process
                </StyledHeader>
                <ProcessContainer>
                    <ResponsiveFlex1 direction="row">
                        <TipsCard
                            content={
                                "Apply for the jobs that match your skills and interest. If you want, link to your portfolio or other examples of work that demonstrate you're the one for the role."
                            }
                            style={{ marginTop: '4.7rem' }}
                            right
                        />
                        <SubResponsiveFlex1 direction="row" justify="unset">
                            <StyledCareer1 src={Career1} alt="career1" />
                            <Process
                                title={'Apply'}
                                description={
                                    "Found a great role in an ad or our website? Let us know you're interested by sending us your CV. Every CV is read by our recruitment team. If there's a match, we'll get in touch."
                                }
                                style={{ marginTop: '1.7rem' }}
                            />
                        </SubResponsiveFlex1>
                    </ResponsiveFlex1>
                    <DownwardsShape>
                        <StyledDownwardsRight1 src={DownwardsRight} alt="downwards right" />
                    </DownwardsShape>
                    <ResponsiveFlex2 direction="row" ml="2.4rem" mt="1rem" width="unset">
                        <SubResponsiveFlex2 direction="row" width="unset">
                            <Process
                                title={'Application form'}
                                description={
                                    'Complete our comprehensive application form to tell us more about yourself and showcase your approach to problem-solving.'
                                }
                                style={{ maxWidth: '38.4rem' }}
                            />
                            <StyledCareer2 src={Career2} alt="career2" />
                        </SubResponsiveFlex2>
                        <TipsCard
                            content={
                                'The application form gives you an opportunity to tell us about your background, values, and character strengths in your own words. It helps us to evaluate if our company can be a productive work environment for you.'
                            }
                            style={{ maxWidth: '35.7rem', marginTop: '2.3rem' }}
                        />
                    </ResponsiveFlex2>
                    <DownwardsShape>
                        <StyledDownwardsLeft src={DownwardsLeft} alt="downwards left" />
                    </DownwardsShape>
                    <ResponsiveFlex3 direction="row" mt="2rem">
                        <TipsCard
                            content={
                                'Be prepared to clarify and elaborate on the answers you gave in your self-assessment questionnaire. Remember, the interview is also an opportunity for you to ask questions about the company and your potential role.'
                            }
                            right
                            style={{ marginTop: '4.7rem', maxWidth: '35.6rem' }}
                        />
                        <SubResponsiveFlex3 direction="row">
                            <StyledCareer3 src={Career3} alt="career3" />
                            <Process
                                title={'Interview'}
                                description={
                                    "This is where you get to meet our team. Our interviews are not just about evaluating your technical ability and experience. We also try to understand what's important to you, how you work with others, and how you approach problems."
                                }
                                style={{ marginTop: '1.7rem' }}
                            />
                        </SubResponsiveFlex3>
                    </ResponsiveFlex3>
                    <DownwardsShape>
                        <StyledDownwardsRight src={DownwardsRight} alt="downwards right 2" />
                    </DownwardsShape>
                    <ResponsiveFlex4 direction="row" mt="1.6rem" width="unset">
                        <SubResponsiveFlex4 direction="row" width="unset">
                            <Process
                                title={'Decision'}
                                description={
                                    "We make a decision and proceed with reference and background checks. If all is well, you'll receive an official offer letter in your email inbox. Then it's over to you."
                                }
                                style={{ maxWidth: '38.4rem' }}
                            />
                            <StyledCareer4 src={Career4} alt="career4" />
                        </SubResponsiveFlex4>
                        <TipsCard
                            content={
                                'Congratulations! Now all you have to do is read through your offer letter carefully. If you have a question about something in the offer letter, don’t be afraid to ask us.'
                            }
                            style={{ maxWidth: '34rem', marginTop: '2.3rem' }}
                        />
                    </ResponsiveFlex4>
                </ProcessContainer>
            </Container>
            <StyledContainer>
                <StyledAnotherHeader as="h3" type="section-title" align="center">
                    Make an impact. Start your Deriv journey <span>now</span>.
                </StyledAnotherHeader>
                <StyledLinkButton
                    secondary
                    to={zoho_url}
                    external
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    See all jobs
                </StyledLinkButton>
            </StyledContainer>
            {is_eu && (
                <Container>
                    <StyledText mt="8rem">
                        Please read this
                        <StyledLinkText
                            color="red"
                            key={0}
                            target="_blank"
                            href="/regulatory/Job_application_privacy_policy_.pdf"
                            rel="noopener noreferrer"
                        >
                            privacy policy
                        </StyledLinkText>
                        before submitting your application.
                    </StyledText>
                </Container>
            )}
        </StyledSectionContainer>
    )
}

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
