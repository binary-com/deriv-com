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
        <Text>{localize('_t_Yes, we’re regulated by_t_')}</Text>
        <StyledList listStyle="disc" paddingLeft="5rem">
            <StyledListItem marginTop="0.3rem">
                <Text>{localize('_t_the Malta Financial Services Authority_t_')}</Text>
            </StyledListItem>
            <StyledListItem marginTop="0.3rem">
                <Text>{localize('_t_the Labuan Financial Services Authority_t_')}</Text>
            </StyledListItem>
            <StyledListItem marginTop="0.3rem">
                <Text>{localize('_t_the Vanuatu Financial Services Commission_t_')}</Text>
            </StyledListItem>
            <StyledListItem marginTop="0.3rem">
                <Text>{localize('_t_the British Virgin Islands Financial Services Commission_t_')}</Text>
            </StyledListItem>
        </StyledList>
        <StyledText>
            <Localize
                translate_text="_t_You can get more info about this on our <0>Regulatory information</0> page._t_"
                components={[
                    <ExternalLink
                        to={'/regulatory/'}
                        target="_blank"
                        external="true"
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
                "_t_Your money is held in secure financial institutions and is always available to you, should you wish to withdraw. We don't use your money for our business purposes._t_",
            )}
        </Text>
    </ArticleWrapper>
)

const AboutDerivArticle = () => {
    const [is_mounted] = usePageLoaded(false) // needed to fix tab highlighting not being rerendered during first load

    return (
        <div>
            <Article
                header={localize('_t_About Deriv_t_')}
                title={localize('_t_Help centre | Frequently asked questions | About | Deriv_t_')}
                description={localize('_t_Frequently asked questions - About_t_')}
            >
                <DerivRegulated
                    text={localize('_t_Is Deriv regulated?_t_')}
                    label="Deriv-regulated"
                    is_mounted={is_mounted}
                />
                <WhereMoneyHeld
                    text={localize('_t_Where is my money held?_t_')}
                    label="money-held"
                    is_mounted={is_mounted}
                />
            </Article>
        </div>
    )
}

export default WithIntl()(AboutDerivArticle)
