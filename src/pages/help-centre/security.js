import React from 'react'
import { Article } from './_article'
import { ArticleWrapper, StyledHeader } from './_help-centre-style'
import { Text } from 'components/elements'
import { localize, WithIntl } from 'components/localization'

const VerifyAccount = () => (
    <ArticleWrapper>
        <StyledHeader as="h4" type="sub-section-title">
            {localize('Do I need to verify my Deriv account?')}
        </StyledHeader>
        <Text>
            {localize(
                'No, you do not need to verify your Deriv account unless prompted. If your account requires verification, we will contact you via email to initiate the process and provide you with clear instructions on how to submit your documents.',
            )}
        </Text>
    </ArticleWrapper>
)
const VerificationDuration = () => (
    <ArticleWrapper>
        <StyledHeader as="h4" type="sub-section-title">
            {localize('How long does verification take?')}
        </StyledHeader>
        <Text>
            {localize(
                'We’ll typically take 1-3 business days to review your documents and will inform you of the result via email once it’s done.',
            )}
        </Text>
    </ArticleWrapper>
)
const DocumentsDeclined = () => (
    <ArticleWrapper>
        <StyledHeader as="h4" type="sub-section-title">
            {localize('Why were my documents declined?')}
        </StyledHeader>
        <Text>
            {localize(
                'We may decline your verification documents if they are insufficiently clear, invalid, expired, or have cropped edges.',
            )}
        </Text>
    </ArticleWrapper>
)

const SecurityArticle = () => {
    return (
        <div>
            <Article
                header={localize('Security')}
                title={localize('Help centre | Frequently asked questions | Security | Deriv')}
                description={localize('Frequently asked questions - Security')}
            >
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
        </div>
    )
}

export default WithIntl()(SecurityArticle)
