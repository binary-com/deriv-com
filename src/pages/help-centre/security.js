import React from 'react'
import styled from 'styled-components'
import { Header, Text } from '../../components/elements/typography'
import { Article } from './_article'
import { localize, WithIntl } from 'components/localization'
import device from 'themes/device'

const ArticleWrapper = styled.div`
    max-width: 71.2rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: 100%;
    font-size: var(--text-size-s);
    line-height: 1.5;
    margin-left: 12.6rem;
    margin-top: 1.6rem;

    @media ${device.tabletL} {
        margin-left: 0;
    }
`

const StyledHeader = styled(Header)`
    margin-bottom: 2.4rem;
`

const VerifyAccount = () => (
    <ArticleWrapper>
        <StyledHeader as="h4">{localize('Do I need to verify my Deriv account?')}</StyledHeader>
        <Text>
            {localize(
                'No, you do not need to verify your Deriv account unless prompted. If your account requires verification, we will contact you via email to initiate the process and provide you with clear instructions on how to submit your documents.',
            )}
        </Text>
    </ArticleWrapper>
)
const VerificationDuration = () => (
    <ArticleWrapper>
        <StyledHeader as="h4">{localize('How long does verification take?')}</StyledHeader>
        <Text>
            {localize(
                'We’ll typically take 1-3 business days to review your documents and will inform you of the result via email once it’s done.',
            )}
        </Text>
    </ArticleWrapper>
)
const DocumentsDeclined = () => (
    <ArticleWrapper>
        <StyledHeader as="h4">{localize('Why were my documents declined?')}</StyledHeader>
        <Text>
            {localize(
                'We may decline your verification documents if they are insufficiently clear, invalid, expired, or have cropped edges.',
            )}
        </Text>
    </ArticleWrapper>
)

const SecurityArticle = () => {
    return (
        <Article header={localize('Security')}>
            <VerifyAccount
                text={localize('Do I need to verify my Deriv account?')}
                label="verify-account"
            />
            <VerificationDuration
                text={localize('How long does verification take?')}
                label="verification-duration"
            />
            <DocumentsDeclined
                text={localize('Why were my documents declined?')}
                label="documents-declined"
            />
        </Article>
    )
}

export default WithIntl()(SecurityArticle)
