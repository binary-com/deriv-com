import React from 'react'
import styled from 'styled-components'
import { Article, ArticleProps } from './_article'
import { ArticleWrapper, StyledHeader } from './_help-centre-style'
import { usePageLoaded } from 'components/hooks/use-page-loaded'
import { Text, LocalizedLinkText, LiveChatLinkText } from 'components/elements'
import device from 'themes/device'
import { localize, Localize, WithIntl } from 'components/localization'

const StyledList = styled.ul<{ listStyle: string; paddingLeft: string }>`
    list-style: ${(props) => props.listStyle};
    padding-left: ${(props) => props.paddingLeft};
`

const StyledListItem = styled.li<{ marginTop: string }>`
    color: var(--color-black-3);
    margin-top: ${(props) => props.marginTop};
`

const ExternalLink = styled(LocalizedLinkText)`
    text-decoration: none;
    font-size: var(--text-size-s);
    font-weight: normal;
    color: var(--color-red);

    :hover {
        text-decoration: underline;
    }

    @media ${device.tabletL} {
        font-size: 16px;
    }
`
const SignUp = ({ text }: ArticleProps) => {
    return (
        <ArticleWrapper>
            <StyledHeader as="h4">{text}</StyledHeader>
            <Text>
                <Localize
                    translate_text="First, you need to be an affiliate with a Deriv account and an MT5 Derived real account. Then, <0></0> to apply for an IB account. <1>Get more info about our IB programme.</1>"
                    components={[
                        <LiveChatLinkText text="_t_contact us via live chat_t_" key={0} />,
                        <ExternalLink
                            to={'/partners/affiliate-ib/'}
                            external
                            weight="bold"
                            target="_blank"
                            rel="noopener noreferrer"
                            key={1}
                        />,
                    ]}
                />
            </Text>
        </ArticleWrapper>
    )
}
const WhyIb = ({ text }: ArticleProps) => (
    <ArticleWrapper>
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text>{localize('When you join our IB programme,')}</Text>
        <StyledList listStyle="disc" paddingLeft="5rem">
            <StyledListItem marginTop="1rem">
                <Text>
                    {localize(
                        "You'll earn commission whenever your clients trade CFDs on MT5, even on weekends and public holidays.",
                    )}
                </Text>
            </StyledListItem>
            <StyledListItem marginTop="1rem">
                <Text>
                    {localize("You'll get daily commission payouts in your MT5 Synthetic account.")}
                </Text>
            </StyledListItem>
            <StyledListItem marginTop="1rem">
                <Text>
                    {localize(
                        "You'll have access to various marketing tools to help promote our products and services to your clients.",
                    )}
                </Text>
            </StyledListItem>
            <StyledListItem marginTop="1rem">
                <Text>{localize("You'll have a dedicated account manager to help you.")}</Text>
            </StyledListItem>
        </StyledList>
        <Text style={{ marginTop: '1rem' }}>
            <Localize
                translate_text="Find out more about our IB programme <0>here</0>."
                components={[
                    <ExternalLink
                        to={'https://deriv.com/partners/affiliate-ib/'}
                        target="_blank"
                        external
                        weight="bold"
                        rel="noopener noreferrer"
                        key={0}
                    />,
                ]}
            />
        </Text>
    </ArticleWrapper>
)

const HowMuchCommission = ({ text }: ArticleProps) => (
    <ArticleWrapper>
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text>
            <Localize
                translate_text="You’ll earn a payout based on the volume of your clients' trades. Find out more <0>here</0>."
                components={[
                    <ExternalLink
                        to={'https://deriv.com/partners/affiliate-ib/'}
                        target="_blank"
                        external
                        weight="bold"
                        rel="noopener noreferrer"
                        key={0}
                    />,
                ]}
            />
        </Text>
    </ArticleWrapper>
)

const ChargesIb = ({ text }: ArticleProps) => (
    <ArticleWrapper>
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text>{localize("No, it's completely free of charge.")}</Text>
    </ArticleWrapper>
)

const ReceiveCommission = ({ text }: ArticleProps) => (
    <ArticleWrapper>
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text>
            {localize("We'll pay your IB commission into your MT5 Synthetic account daily.")}
        </Text>
    </ArticleWrapper>
)

const WithdrawCommission = ({ text }: ArticleProps) => (
    <ArticleWrapper>
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text>
            {localize(
                "Once we've paid your commission into your account, you can withdraw whenever you want.",
            )}
        </Text>
    </ArticleWrapper>
)

const WithdrawCondition = ({ text }: ArticleProps) => (
    <ArticleWrapper>
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text>{localize('No. You can withdraw your commission whenever you want.')}</Text>
    </ArticleWrapper>
)

const IbProgrammeArticle = () => {
    const [is_mounted] = usePageLoaded(false) // needed to fix tab highlighting not being rerendered during first load

    return (
        <div>
            <Article
                header={localize('IB programme')}
                title={localize('Help centre | Frequently asked questions | IB programme | Deriv')}
                description={localize('Frequently asked questions - IB programme')}
            >
                <SignUp
                    text={localize('How do I sign up as an introducing broker (IB)?')}
                    label="ib-sign-up"
                    is_mounted={is_mounted}
                />
                <WhyIb
                    text={localize('Why should I join your introducing broker (IB) programme?')}
                    label="why-ib"
                    is_mounted={is_mounted}
                />
                <HowMuchCommission
                    text={localize('How much do you pay in commission?')}
                    label="how-much-commission"
                    is_mounted={is_mounted}
                />
                <ChargesIb
                    text={localize(
                        'Are there any charges for joining your introducing broker programme?',
                    )}
                    label="charges-ib"
                    is_mounted={is_mounted}
                />
                <ReceiveCommission
                    text={localize('How and when will I receive my IB commission payout?')}
                    label="receive-commission"
                    is_mounted={is_mounted}
                />
                <WithdrawCommission
                    text={localize('When can I withdraw my commission?')}
                    label="withdraw-commission"
                    is_mounted={is_mounted}
                />
                <WithdrawCondition
                    text={localize(
                        'Are there any conditions that I should meet before I can withdraw my commission?',
                    )}
                    label="withdraw-condition"
                    is_mounted={is_mounted}
                />
            </Article>
        </div>
    )
}

export default WithIntl()(IbProgrammeArticle)
