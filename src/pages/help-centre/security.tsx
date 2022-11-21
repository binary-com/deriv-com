import React from 'react'
import styled from 'styled-components'
import { Article, ArticleProps } from './_article'
import { ArticleWrapper, StyledHeader, ExternalLink } from './_help-centre-style'
import { usePageLoaded } from 'components/hooks/use-page-loaded'
import { Header, Text, Ul } from 'components/elements'
import { localize, Localize, WithIntl } from 'components/localization'
import device from 'themes/device'
import TelegranDerivGroupImg from 'images/common/help-centre/help-center-telegram-one.png'
import TelegranDerivChatImg from 'images/common/help-centre/help-center-telegram-two.png'

const ImageWrapper = styled.section`
    margin-top: 16px;
    @media ${device.mobileL} {
        & > img {
            width: 110% !important;
        }
    }
`
const StyledText = styled.header`
    font-weight: normal;
    margin-top: 12px;
`
const VerifyAccount = ({ text }: ArticleProps) => (
    <ArticleWrapper>
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text>
            {localize(
                'No, you do not need to verify your Deriv account unless prompted. If your account requires verification, we will contact you via email to initiate the process and provide you with clear instructions on how to submit your documents.',
            )}
        </Text>
    </ArticleWrapper>
)

const VerificationDuration = ({ text }: ArticleProps) => (
    <ArticleWrapper>
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text>
            {localize(
                'We’ll typically take 1-3 business days to review your documents and will inform you of the result via email once it’s done.',
            )}
        </Text>
    </ArticleWrapper>
)

const DocumentsDeclined = ({ text }: ArticleProps) => (
    <ArticleWrapper>
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text>
            {localize(
                'We may decline your verification documents if they are insufficiently clear, invalid, expired, or have cropped edges.',
            )}
        </Text>
    </ArticleWrapper>
)
const IdentifyImpersonatorsTelegram = ({ text }: ArticleProps) => (
    <ArticleWrapper>
        <StyledHeader as="h4">{text}</StyledHeader>
        <ImageWrapper>
            <img
                src={TelegranDerivGroupImg}
                alt={localize('Telegream deriv group')}
                style={{ width: '36.4rem' }}
                loading="lazy"
            />
        </ImageWrapper>
        <Header color="grey" weight="normal">
            {localize('Examples of groups impersonating Deriv on Telegram')}
        </Header>
        <StyledText>
            {localize(
                'An impersonator’s main goal is to steal your sensitive information and funds. Here are some ways to identify impersonators of Deriv client support on Telegram:',
            )}
        </StyledText>
        <Ul>
            <li>
                <StyledText>
                    {localize(
                        'Impersonators ask for your login details or other sensitive information via Telegram or email.',
                    )}
                </StyledText>
            </li>
            <li>
                <StyledText>
                    {localize(
                        'They provide rewards that sound too good to be true and demand payments via untraceable channels, for example, via cryptocurrency.',
                    )}
                </StyledText>
            </li>
            <li>
                <StyledText>
                    {localize(
                        'They ask you to download an app that isn’t verified by the Android Play Store and Apple App Store.',
                    )}
                </StyledText>
            </li>
            <li>
                <StyledText>{localize('They ask you to download')}</StyledText>
            </li>
            <Ul>
                <li>
                    <StyledText>
                        {localize(
                            'Software that enables your device to be controlled remotely, or',
                        )}
                    </StyledText>
                </li>
                <li>
                    <StyledText>
                        {localize('Files containing malware or virus that can infect your device')}
                    </StyledText>
                </li>
            </Ul>
        </Ul>
        <StyledText>
            {localize(
                'Of course, this list isn’t exhaustive. Impersonators employ increasingly creative methods to try to steal your information and funds.',
            )}
        </StyledText>
        <ImageWrapper>
            <img
                src={TelegranDerivChatImg}
                alt={localize('Telegream deriv chat')}
                style={{ width: '26.9rem' }}
                loading="lazy"
            />
        </ImageWrapper>
        <Header color="grey" weight="normal">
            {localize('Examples of messages from impersonators')}
        </Header>
        <StyledText>
            <Localize
                translate_text="Please ensure to <0>join the correct Deriv group</0> on Telegram. If you have been contacted by a potential impersonator, or if you have any questions, talk to our Customer Support team <1>via live chat</1>."
                components={[
                    <ExternalLink
                        to={'https://telegramchannels.me/groups/derivdotcom'}
                        target="_blank"
                        external
                        weight="bold"
                        rel="noopener noreferrer"
                        key={0}
                    />,
                    <ExternalLink
                        to={'/contact_us/?is_livechat_open=true'}
                        target="_blank"
                        external
                        weight="normal"
                        rel="noopener noreferrer"
                        key={1}
                    />,
                ]}
            />
        </StyledText>
        <StyledText>
            {localize(
                'The live chat link is available on our website as well as our trading platforms.',
            )}
        </StyledText>
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
                        external
                        weight="bold"
                        rel="noopener noreferrer"
                        key={0}
                    />,
                    <ExternalLink
                        to={'https://app.deriv.com/account/two-factor-authentication'}
                        target="_blank"
                        external
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
                <DisableTwoFactorAuthentication
                    text={localize(
                        'I lost my phone. How can I disable two-factor authentication (2FA)?',
                    )}
                    label="disable-two-factor-authentication"
                    is_mounted={is_mounted}
                />
                <IdentifyImpersonatorsTelegram
                    text={localize(
                        'How to identify impersonators of Deriv client support on Telegram?',
                    )}
                    label="identify-impersonators-telegram"
                    is_mounted={is_mounted}
                ></IdentifyImpersonatorsTelegram>
            </Article>
        </div>
    )
}

export default WithIntl()(SecurityArticle)
