import React from 'react'
import { Article, ArticleProps } from './_article'
import { ArticleWrapper, StyledHeader, ExternalLink } from './_help-centre-style'
import { usePageLoaded } from 'components/hooks/use-page-loaded'
import { Text } from 'components/elements'
import { Localize, WithIntl } from 'components/localization'

const VerifyAccount = ({ text }: ArticleProps) => (
    <ArticleWrapper>
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text>
            {
                <Localize translate_text="No, you do not need to verify your Deriv account unless prompted. If your account requires verification, we will contact you via email to initiate the process and provide you with clear instructions on how to submit your documents." />
            }
        </Text>
    </ArticleWrapper>
)

const VerificationDuration = ({ text }: ArticleProps) => (
    <ArticleWrapper>
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text>
            {
                <Localize translate_text="We’ll typically take 1-3 business days to review your documents and will inform you of the result via email once it’s done." />
            }
        </Text>
    </ArticleWrapper>
)

const DocumentsDeclined = ({ text }: ArticleProps) => (
    <ArticleWrapper>
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text>
            {
                <Localize translate_text="We may decline your verification documents if they are insufficiently clear, invalid, expired, or have cropped edges." />
            }
        </Text>
    </ArticleWrapper>
)

const DisableTwoFactorAuthentication = ({ text }: ArticleProps) => (
    <ArticleWrapper>
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text>
            <Localize
                translate_text="Please <0>contact us via live chat</0> immediately, and we'll help to disable 2FA on your account. When you have a new phone, please <1>re-enable 2FA</1>."
                components={[
                    <ExternalLink
                        to={'/contact_us/?is_livechat_open=true'}
                        target="_blank"
                        external="true"
                        weight="bold"
                        rel="noopener noreferrer"
                        key={0}
                    />,
                    <ExternalLink
                        to={'https://app.deriv.com/account/two-factor-authentication'}
                        target="_blank"
                        external="true"
                        weight="bold"
                        rel="noopener noreferrer"
                        key={1}
                    />,
                ]}
            />
        </Text>
    </ArticleWrapper>
)

const SecurityArticle = () => {
    const [is_mounted] = usePageLoaded(false) // needed to fix tab highlighting not being rerendered during first load

    return (
        <div>
            <Article
                header={<Localize translate_text="Security" />}
                title={
                    <Localize translate_text="Help centre | Frequently asked questions | Security | Deriv" />
                }
                description={<Localize translate_text="Frequently asked questions - Security" />}
            >
                <VerifyAccount
                    text={<Localize translate_text="Do I need to verify my Deriv account?" />}
                    label="verify-account"
                    is_mounted={is_mounted}
                />
                <VerificationDuration
                    text={<Localize translate_text="How long does verification take?" />}
                    label="verification-duration"
                    is_mounted={is_mounted}
                />
                <DocumentsDeclined
                    text={<Localize translate_text="Why were my documents declined?" />}
                    label="documents-declined"
                    is_mounted={is_mounted}
                />
                <DisableTwoFactorAuthentication
                    text={
                        <Localize translate_text="I lost my phone. How can I disable two-factor authentication (2FA)?" />
                    }
                    label="disable-two-factor-authentication"
                    is_mounted={is_mounted}
                />
            </Article>
        </div>
    )
}

export default WithIntl()(SecurityArticle)
