import React from 'react'
import { Article } from './_article'
import { ArticleWrapper, StyledHeader } from './_help-centre-style'
import { usePageLoaded } from 'components/hooks/use-page-loaded'
import { Text } from 'components/elements'
import { localize, WithIntl } from 'components/localization'

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
    const [is_mounted] = usePageLoaded(false) // needed to fix tab highlighting not being rerendered during first load

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
                    is_mounted={is_mounted}
                />
                <VerificationDuration
                    text={localize('How long does verification take?')}
                    label="verification-duration"
                    is_mounted={is_mounted}
                />
                <DocumentsDeclined
                    text={localize('Why were my documents declined?')}
                    label="documents-declined"
                    is_mounted={is_mounted}
                />
            </Article>
        </div>
    )
}

export default WithIntl()(SecurityArticle)
