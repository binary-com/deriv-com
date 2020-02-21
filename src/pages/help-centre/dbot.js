import React from 'react'
import styled from 'styled-components'
import { Article } from './_article'
import { Text, Header, Image } from 'components/elements'
import { localize, Localize, WithIntl } from 'components/localization'

const ArticleWrapper = styled.div`
    max-width: 79.2rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: 100%;
    font-size: var(--text-size-s);
    line-height: 1.5;
    padding-left: 2.4rem;
`
const StyledText = styled(Text)`
    margin-top: 1.7rem;
`
const ImageWrapper = styled.div`
    padding: 2.4rem 10.2rem;
`
const WhatIsDBot = () => (
    <ArticleWrapper>
        <Header as="h4" margin=" 0 0 2.4rem 0" lh="1.5">
            {localize('What is DBot?')}
        </Header>
        <Text>
            {localize(
                'DBot is a web-based strategy builder for trading binary options. It’s a platform where you can build your own trading bot using drag-and-drop "blocks".',
            )}
        </Text>
    </ArticleWrapper>
)
const FindBlocks = () => (
    <ArticleWrapper>
        <Header as="h4" margin=" 0 0 2.4rem 0" lh="1.5">
            {localize('How do I find the blocks I need?')}
        </Header>
        <Text>
            {localize('1. Click “Get started” at the top left corner to open the blocks menu.')}
        </Text>
        <ImageWrapper>
            <Image
                img_name="dbot-button-get-started.png"
                alt={localize('Get Started')}
                width="14.2rem"
            />
        </ImageWrapper>
        <Text>
            {localize(
                '2. The blocks are categorised accordingly. Just choose the blocks you want and drag them to the workspace.',
            )}
        </Text>
        <StyledText>
            {localize(
                '3. You can also search for the blocks you want using the search field on the toolbar at the top of the workspace.',
            )}
        </StyledText>
        <ImageWrapper>
            <Image img_name="dbot-search-bar.png" alt={localize('Search')} width="17.9rem" />
        </ImageWrapper>
    </ArticleWrapper>
)
const RemoveBlocks = () => (
    <ArticleWrapper>
        <Header as="h4" margin=" 0 0 2.4rem 0" lh="1.5">
            {localize('How do I remove blocks from the workspace?')}
        </Header>
        <Text>
            {localize(
                'Just click on the block you want to remove and press “Delete” on your keyboard. You can also drag the block to the recycle bin icon at the lower right corner of the workspace.',
            )}
        </Text>
        <ImageWrapper>
            <Image img_name="dbot-delete.png" alt={localize('Get Started')} width="7.4rem" />
        </ImageWrapper>
    </ArticleWrapper>
)
const CreateVariables = () => (
    <ArticleWrapper>
        <Header as="h4" margin=" 0 0 2.4rem 0" lh="1.5">
            {localize('How do I create variables?')}
        </Header>
        <Text>
            {localize('1. Click “Get started” at the top left corner to open the blocks menu.')}
        </Text>
        <ImageWrapper>
            <Image
                img_name="dbot-button-get-started.png"
                alt={localize('Get Started')}
                width="14.2rem"
            />
        </ImageWrapper>
        <Text>
            <Localize
                translate_text="2. Go to <0>Utility > Variables</0>."
                components={[<strong key={0} />]}
            />
        </Text>
        <StyledText>{localize('3. Click “Create variable”.')}</StyledText>
        <ImageWrapper>
            <Image
                img_name="dbot-create-variable.png"
                alt={localize('Create variable')}
                width="47.2rem"
            />
        </ImageWrapper>
        <Text>{localize('4. Enter a name for the variable.')}</Text>
        <ImageWrapper>
            <Image
                img_name="dbot-name-variable.png"
                alt={localize('Name variable')}
                width="43.8rem"
            />
        </ImageWrapper>
        <Text>
            {localize(
                '5. The newly created variable is now available to be used in your strategy.',
            )}
        </Text>
        <ImageWrapper>
            <Image
                img_name="dbot-user-defined-variable.png"
                alt={localize('User defined variable')}
                width="27.2rem"
            />
        </ImageWrapper>
    </ArticleWrapper>
)
const QuickStrategy = () => (
    <ArticleWrapper>
        <Header as="h4" margin=" 0 0 2.4rem 0" lh="1.5">
            {localize('What is a quick strategy and how do I use it?')}
        </Header>
        <Text>
            {localize(
                "A quick strategy is a ready-made strategy that you can use in DBot. There are 3 quick strategies you can choose from: martingale, d'Alembert, and Oscar's Grind.",
            )}
        </Text>
        <Text margin="4rem 0 0">
            <strong>{localize('Using a quick strategy')}</strong>
        </Text>
        <StyledText>
            {localize('1. Click “Get started” at the top left corner to open the blocks menu.')}
        </StyledText>
        <ImageWrapper>
            <Image
                img_name="dbot-button-get-started.png"
                alt={localize('Get Started')}
                width="14.2rem"
            />
        </ImageWrapper>
        <Text>
            <Localize
                translate_text="2. Click “Quick Strategy”."
                components={[<strong key={0} />]}
            />
        </Text>
        <ImageWrapper>
            <Image
                img_name="dbot-quick-strategy.png"
                alt={localize('Quick strategy')}
                width="16.6rem"
            />
        </ImageWrapper>
        <Text>{localize('3. Choose the strategy that you want.')}</Text>
        <ImageWrapper>
            <Image img_name="dbot-strategies.png" alt={localize('Strategies')} width="42.1rem" />
        </ImageWrapper>
        <Text>{localize('4. Select the asset and trade type.')}</Text>
        <ImageWrapper>
            <Image
                img_name="dbot-asset-trade-type.png"
                alt={localize('Asset and trade type')}
                width="44rem"
            />
        </ImageWrapper>
        <Text>{localize('5. Enter your preferred trade parameters and click “Create”.')}</Text>
        <ImageWrapper>
            <Image img_name="dbot-parameters.png" alt={localize('Parameters')} width="44rem" />
        </ImageWrapper>
        <Text>
            {localize(
                '6. The strategy is loaded onto the workspace. You may adjust your strategy however you want and when you’re ready to run your bot, click “Run bot”.',
            )}
        </Text>
        <ImageWrapper>
            <Image img_name="dbot-run-bot.png" alt={localize('Run bot')} width="11.8rem" />
        </ImageWrapper>
        <Text>
            {localize(
                '7. You may save your bot by either downloading it into your computer or by saving it on your Google Drive.',
            )}
        </Text>
    </ArticleWrapper>
)
const SaveStrategy = () => (
    <ArticleWrapper>
        <Header as="h4" margin=" 0 0 2.4rem 0" lh="1.5">
            {localize('How do I save my strategy?')}
        </Header>
        <Text>
            {localize(
                'First, give your strategy a name. Click the “Bot name” field on the toolbar at the top and enter a name.',
            )}
        </Text>
    </ArticleWrapper>
)
const ImportStrategy = () => (
    <ArticleWrapper>
        <Header as="h4" margin=" 0 0 2.4rem 0" lh="1.5">
            {localize('How do I import my strategies into DBot?')}
        </Header>
        <Text>
            {localize(
                'Just drag the XML file from your computer onto the workspace. Your blocks will be loaded accordingly. Alternatively, you can click “Import” on the toolbar at the top of the workspace and choose to load your strategy from your computer or from your Google Drive.',
            )}
        </Text>
        <ImageWrapper>
            <Image
                img_name="dbot-import-strategy.png"
                alt={localize('Import strategy')}
                width="40.7rem"
            />
        </ImageWrapper>
        <Text margin="4rem 0 0">
            <strong>{localize('Importing from your computer')}</strong>
        </Text>
        <StyledText>{localize('1. Select “Local” and click “Continue”.')}</StyledText>
    </ArticleWrapper>
)

const DBotArticle = () => {
    return (
        <Article header="DBot">
            <WhatIsDBot text={localize('What is DBot?')} label="what-is-dbot" />
            <FindBlocks text={localize('How do I find the blocks I need?')} label="find-blocks" />
            <RemoveBlocks
                text={localize('How do I remove blocks from the workspace?')}
                label="remove-blocks"
            />
            <CreateVariables
                text={localize('How do I create variables?')}
                label="create-variables"
            />
            <QuickStrategy
                text={localize('What is a quick strategy and how do I use it?')}
                label="quick-strategy"
            />
            <SaveStrategy text={localize('How do I save my strategy?')} label="save-strategy" />
            <ImportStrategy
                text={localize('How do I import my strategies into DBot?')}
                label="import-strategy"
            />
        </Article>
    )
}

export default WithIntl()(DBotArticle)
