import React from 'react'
import styled from 'styled-components'
import { Article, ArticleProps } from './_article'
import { ArticleWrapper, StyledHeader, ExternalLink, StyledText } from './_help-centre-style'
import { usePageLoaded } from 'components/hooks/use-page-loaded'
import { Text } from 'components/elements'
import { localize, Localize, WithIntl } from 'components/localization'

const StyledList = styled.ul<{ listStyle: string; paddingLeft: string }>`
    list-style: ${(props) => props.listStyle};
    padding-left: ${(props) => props.paddingLeft};
`

const StyledListItem = styled.li<{ marginTop: string }>`
    color: var(--color-black-3);
    margin-top: ${(props) => props.marginTop};
`

const DerivRegulated = ({ text }: ArticleProps) => (
    <ArticleWrapper>
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text>{localize('Yes, we’re regulated by')}</Text>
        <StyledList listStyle="disc" paddingLeft="5rem">
            <StyledListItem marginTop="0.3rem">
                <Text>{localize('the Malta Financial Services Authority')}</Text>
            </StyledListItem>
            <StyledListItem marginTop="0.3rem">
                <Text>{localize('the Labuan Financial Services Authority')}</Text>
            </StyledListItem>
            <StyledListItem marginTop="0.3rem">
                <Text>{localize('the Vanuatu Financial Services Commission')}</Text>
            </StyledListItem>
            <StyledListItem marginTop="0.3rem">
                <Text>{localize('the British Virgin Islands Financial Services Commission')}</Text>
            </StyledListItem>
        </StyledList>
        <StyledText>
            <Localize
                translate_text="You can get more info about this on our <0>Regulatory information</0> page."
                components={[
                    <ExternalLink
                        to={'/regulatory/'}
                        target="_blank"
                        external
                        weight="bold"
                        rel="noopener noreferrer"
                        key={0}
                    />,
                ]}
            />
        </StyledText>
    </ArticleWrapper>
)

const WhereMoneyHeld = ({ text }: ArticleProps) => (
    <ArticleWrapper>
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text>
            {localize(
                "Your money is held in secure financial institutions and is always available to you, should you wish to withdraw. We don't use your money for our business purposes.",
            )}
        </Text>
    </ArticleWrapper>
)

const AboutDerivArticle = () => {
    const [is_mounted] = usePageLoaded(false) // needed to fix tab highlighting not being rerendered during first load

    return (
        <div>
            <Article
                header={localize('About Deriv')}
                title={localize('Help centre | Frequently asked questions | About | Deriv')}
                description={localize('Frequently asked questions - About')}
            >
                <DerivRegulated
                    text={localize('Is Deriv regulated?')}
                    label="Deriv-regulated"
                    is_mounted={is_mounted}
                />
                <WhereMoneyHeld
                    text={localize('Where is my money held?')}
                    label="money-held"
                    is_mounted={is_mounted}
                />
            </Article>
        </div>
    )
}

export default WithIntl()(AboutDerivArticle)
