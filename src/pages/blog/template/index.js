import React from 'react'
import styled from 'styled-components'
import { localize, WithIntl } from 'components/localization'
import Layout from 'components/layout/layout'
import { SectionContainer, SEO, SmallContainer } from 'components/containers'
import { Header } from 'components/elements'

const html = `
<p><img src='https://amammustofa.com/assets/42d7a49b-51c1-40d0-8e35-e82e8b87ff64' /></p>
<p>On January 15, 2015, the Swiss National Bank decided to abandon the 1.20 peg against the euro. This quickly transformed the currency from a safe haven to one of the riskiest assets and sent the FX markets into chaos. Traders accounts went into negative balance and a number of brokers were forced to close. Black swan events like this come at a tremendous cost to investors. What&rsquo;s even worse is that they seem to be becoming more frequent. In the past decade alone, we have witnessed a global financial crisis, the rouble rout, plunging oil prices, Brexit, and a persisting pandemic.</p>
<p>But what if you could trade without being at the mercy of global events? This is what synthetic indices enable. Synthetic indices, also known as volatility indices, are simulated markets, which means they are not affected by world events.</p>
<p>They act like real monetary markets but have been created with the help of numbers that are randomly generated through a computer programme. The number generator is secured cryptographically and is audited by an independent third party to ensure fairness. With this, the broker is unable to predict or influence the generated numbers.</p>
<h4>Why trade synthetic indices?</h4>
<p>Before you decide on strategies to trade synthetic indices, you first need to understand why you would trade synthetic indices at all. There are multiple benefits of trading of synthetic indices, as compared to traditional indices and currency pairs.</p>
<p>Synthetic indices offer tight spreads and high leverage. Also, there is no risk of slipping into negative balance. So, in case things don&rsquo;t go according to plan, your losses will be limited. Plus, you get great flexibility when trading synthetic indices. You can choose different synthetic markets, with high or low risk characteristics, based on your risk appetite</p>
<p>Some of the other prominent benefits are:</p>
<ul>
    <li>You are aware of the potential risks right from the beginning. This means no unexpected margin calls or bad surprises.</li>
    <li>You don&rsquo;t need large capital to start trading synthetic indices.</li>
</ul>
<h4>The best trading platforms for synthetic indices</h4>
<p>There are 2 main platforms that can be used for synthetic indices trading. These are DTrader and Deriv MetaTrader 5 (DMT5).</p>
<h5>DTrader</h5>
<p><img src="https://amammustofa.com/assets/d9114b49-d29d-4f7f-b02b-93eee225958a" /></p>
<p>With DTrader, you can trade directly from the live charts. It continuously provides you a price feed for Rise (Up), Fall (Down), and other ways of trading synthetic indices. DTrader can be accessed through Deriv.com on a mobile device or on a desktop, via a browser.</p>
<p>With DTrader, you get:</p>
<li><strong>Wide Range of Choices</strong></li>
<p>DTrader offers you a wide range of synthetic indices to choose from, including higher volatility indices (Vol 100) and lower volatility indices (Vol 10). In Volatility 10 Index, the volatility is kept at 10%. This is a great choice for traders who prefer low price swings or fluctuations. On the other hand, Volatility 100 index, the volatility is maintained at 100%. This means that there are much stronger prices swings. Additionally, there are also no large price gaps, as they are continuous indices with deep liquidity.</p>
<p><img src='https://amammustofa.com/assets/fed38b8a-2dc6-476c-9f23-be141582b59f' /><img src='https://amammustofa.com/assets/fed38b8a-2dc6-476c-9f23-be141582b59f' /></p>
`
const replacedContent = html.replace(/<p><img /g, '<div><img ').replace(/\/><\/p>/g, '/></div>')
const article = {
    article_title: 'Strategies to trade synthetic indices',
    article_body: replacedContent,
    article_tags: [
        'DTrader',
        'Deriv MT5',
        'Trade type',
        'Synthetics',
        'Strategies',
        'Forex',
        'Market',
        'Platforms',
        'Ebook',
        'Benefit',
    ],
}

const StyledHeader = styled(Header)`
    width: 30%;
`
// const ArticleTagsContainer = styled.div`
//     display: flex;
//     position: absolute;
// `

const HeroContainer = styled.div`
    width: 100%;
    max-width: 1444px;
    padding: 148px 24px 0 120px;
    height: 634px;
    background-color: #f2f3f4;
    position: absolute;
    transform: translate(-50%);
    left: 50%;
`

const PreviewContainer = styled(SmallContainer)`
    font-size: 16px;
    top: 150px;
    left: 180px;
    position: relative;
    margin-bottom: 70px;

    & p {
        margin-top: 22px;
        font-weight: 400;
        line-height: 24px;
        font-size: 16px;
    }
    & blockquote {
        margin-top: 32px;
        border-left: 0.25rem solid #ff1a75;
        padding-left: 2rem;
        font-style: italic;
        line-height: 32px;
    }
    & hr {
        margin: 32px 0;
    }
    & ul {
        margin-top: 32px;
        list-style-type: disc;
        margin-block-start: 1em;
        margin-block-end: 1em;

        > li {
            margin: 8px 0 0 18px;
            padding: 0;
            line-height: 24px;
            font-size: 16px;
        }
    }
    li > strong {
        display: inline-block;
        margin: 16px 0 0 8px;
        padding: 0;
        line-height: 24px;
        font-size: 16px;
        font-weight: bold;
    }
    & a {
        font-size: 20px;
        color: var(--color-red);
        text-decoration: none;
        cursor: pointer;

        &:hover {
            text-decoration: underline;
        }
    }
    & img {
        max-width: 100%;
        height: auto;
    }
    & img[width='full'] {
        margin-left: calc(50% - 50vw);
        margin-right: calc(50% - 50vw);
        max-width: 100vw;
    }
    & div {
        display: flex;
        justify-content: center;
        margin: auto;

        > img {
            margin-right: 24px;
        }
        > img:last-child {
            margin-right: 0;
        }

        @media (max-width: 800px) {
            flex-direction: column;

            > img {
                margin-right: 0;
            }
        }
    }
    & h1 {
        font-size: 64px;
        line-height: 80px;
        margin-top: 32px;
        font-weight: bold;
    }
    & h2 {
        font-size: 48px;
        line-height: 60px;
        margin-top: 32px;
        font-weight: bold;
    }
    & h3 {
        font-size: 32px;
        line-height: 40px;
        margin-top: 40px;
        font-weight: bold;

        & + p {
            margin-top: 8px;
        }
    }
    & h4 {
        font-size: 24px;
        line-height: 36px;
        margin-top: 40px;
        font-weight: bold;
    }
    & h5 {
        font-size: 20px;
        line-height: 30px;
        margin-top: 40px;
        font-weight: bold;
    }
    & h6 {
        font-size: 16px;
        line-height: 24px;
        margin-top: 40px;
        font-weight: bold;
    }

    @media (max-width: 1024px) {
        left: 0;
    }
`

const PreviewPage = () => {
    return (
        <Layout>
            <SEO
                description={localize(
                    'Learn about the markets that you can trade online with Deriv, including forex, commodities, synthetic indices, and stock indices.',
                )}
                title={localize('Markets | Markets to trade | Deriv')}
            />

            <SectionContainer position="relative" padding="8rem 0 8rem">
                <HeroContainer>
                    <StyledHeader as="h1" type="page-title">
                        {article.article_title}
                    </StyledHeader>
                </HeroContainer>
                <PreviewContainer
                    ai="flex-start"
                    fd="column"
                    dangerouslySetInnerHTML={{
                        __html: article.article_body,
                    }}
                ></PreviewContainer>

                {/* <ArticleTagsContainer>
                    {article.article_tags.map((tag) => {
                        return <div key={tag}>{tag}</div>
                    })}
                </ArticleTagsContainer> */}
            </SectionContainer>
        </Layout>
    )
}

export default WithIntl()(PreviewPage)
