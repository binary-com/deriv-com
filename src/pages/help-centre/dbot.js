import React from 'react'
import styled from 'styled-components'
import { Article } from './_article'
import { Text, Header, Image } from 'components/elements'
import { localize, Localize, WithIntl } from 'components/localization'

const ArticleWrapper = styled.div`
    max-width: 71.2rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: 100%;
    font-size: var(--text-size-s);
    line-height: 1.5;
    margin-left: 12.6rem;
`
const StyledText = styled(Text)`
    margin-top: 1.7rem;
`
const ImageWrapper = styled.div`
    padding: 2.4rem 10.2rem;
`

const Th = styled.th`
    vertical-align: middle;
    padding: 1.6rem 2rem;
    border: 1px solid var(--color-grey-7);

    :first-child {
        p {
            text-align: center;
        }
    }
`

const Thead = styled.thead`
    font-size: var(--text-size-s);
    font-weight: bold;
    text-align: left;
    border: 1px solid var(--color-grey-7);
`

const Tbody = styled.tbody`
    text-align: left;
    width: 48.6rem;
    display: inline-block;
    padding: 1.6rem;
`
const Tr = styled.tr`
    border: 1px solid var(--color-grey-7);
`
const StyledTable = styled.table`
    border-collapse: collapse;
    width: 86%;
    margin-bottom: ${props => (props.has_note ? '2.4rem' : 0)};
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
const MartingaleStrategy = () => (
    <ArticleWrapper>
        <Header as="h4" margin=" 0 0 2.4rem 0" lh="1.5">
            {localize('What is the martingale strategy?')}
        </Header>
        <Text>
            {localize(
                'The martingale strategy is a classic trading technique that encourages traders to double contract size after a loss so that when they do win, they will regain what they have lost.',
            )}
        </Text>
    </ArticleWrapper>
)
const AlembertStrategy = () => (
    <ArticleWrapper>
        <Header as="h4" margin=" 0 0 2.4rem 0" lh="1.5">
            {localize('What is the d’Alembert strategy?')}
        </Header>
        <Text>
            {localize(
                'Named after the popular 18th-century French roulette theorist, Jean le Rond d’Alembert, this strategy encourages traders to increase contract size after a loss and decrease it after a successful trade.',
            )}
        </Text>
    </ArticleWrapper>
)
const OskarStrategy = () => (
    <ArticleWrapper>
        <Header as="h4" margin=" 0 0 2.4rem 0" lh="1.5">
            {localize("What is the Oscar's Grind strategy?")}
        </Header>
        <Text>
            {localize(
                'This is a low-risk positive progression strategy that first appeared in 1965. By using this strategy, you will increase the size of your contract after each successful trade, and decrease the size of your contract after each unsuccessful trade.',
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
        <Text margin="2.4rem 0 0">{localize('1. Select “Local” and click “Continue”.')}</Text>
        <ImageWrapper>
            <Image img_name="dbot-load-bot.png" alt={localize('Load bot')} width="40.7rem" />
        </ImageWrapper>
        <Text>
            {localize(
                '2. Select your strategy and click “Open”. Your blocks will be loaded accordingly.',
            )}
        </Text>
        <Text margin="4rem 0 0">
            <strong>{localize('Importing from your Google Drive')}</strong>
        </Text>
        <Text margin="2.4rem 0 0">{localize('1. Select “Local” and click “Continue”.')}</Text>
        <ImageWrapper>
            <Image
                img_name="dbot-load-bot-gd.png"
                alt={localize('Load bot google Drive')}
                width="40.7rem"
            />
        </ImageWrapper>
        <Text>
            {localize(
                '2. Select your strategy and click “Select”. Your blocks will be loaded accordingly.',
            )}
        </Text>
    </ArticleWrapper>
)
const TransactionLog = () => (
    <ArticleWrapper>
        <Header as="h4" margin=" 0 0 2.4rem 0" lh="1.5">
            {localize('How do I clear my transaction log?')}
        </Header>
        <Text>
            {localize('1. In the panel on the right of the workspace, click “Clear stat”.')}
        </Text>
        <ImageWrapper>
            <Image img_name="dbot-clear-stat.png" alt={localize('Clear stat')} width="24.8rem" />
        </ImageWrapper>
        <Text>{localize('2. Click “Ok”.')}</Text>
        <ImageWrapper>
            <Image
                img_name="dbot-are-you-sure.png"
                alt={localize('Are you sure?')}
                width="50.9rem"
            />
        </ImageWrapper>
    </ArticleWrapper>
)
const ControlLosses = () => (
    <ArticleWrapper>
        <Header as="h4" margin=" 0 0 2.4rem 0" lh="1.5">
            {localize('How do I control my losses with DBot?')}
        </Header>
        <Text>
            {localize(
                'There are many ways you can control your losses with DBot. Here’s a simple example of how you can implement loss control in your strategy:',
            )}
        </Text>

        <ImageWrapper>
            <Image img_name="dbot-losses.png" alt={localize('Control loss')} width="61.2rem" />
        </ImageWrapper>
        <Text margin="0 0 2.4rem">{localize('1. Create the following variables:')}</Text>
        <StyledTable>
            <Thead>
                <Tr>
                    <Th>
                        <Text weight="bold">{localize('currentPL')}</Text>
                    </Th>
                    <Tbody>
                        <Text>
                            {localize(
                                'This will store the cumulative profit or loss while the bot is running. Set the initial value to 0.',
                            )}
                        </Text>
                    </Tbody>
                </Tr>
                <Tr>
                    <Th>
                        <Text weight="bold">{localize('currentStake')}</Text>
                    </Th>
                    <Tbody>
                        <Text>
                            {localize(
                                'This will store the stake amount used in the last purchased contract. You can assign any amount based on your strategy. ',
                            )}
                        </Text>
                    </Tbody>
                </Tr>
                <Tr>
                    <Th>
                        <Text weight="bold">{localize('Min deposit')}</Text>
                    </Th>
                    <Tbody>
                        <Text>
                            {localize(
                                'This is your loss limit. You can assign any amount based on your strategy. The value must be a positive number.',
                            )}
                        </Text>
                    </Tbody>
                </Tr>
                <Tr>
                    <Th>
                        <Text weight="bold">{localize('tradeAgain')}</Text>
                    </Th>
                    <Tbody>
                        <Text>
                            {localize(
                                'This will be used to stop trading when your loss limit is reached. Set the initial value to “true”.',
                            )}
                        </Text>
                    </Tbody>
                </Tr>
            </Thead>
        </StyledTable>
        <ImageWrapper>
            <Image img_name="dbot-variables.png" alt={localize('Variables')} width="32.4rem" />
        </ImageWrapper>
        <Text>
            {localize(
                '2. Use a logic block to check if currentPL exceeds maximumLoss. If it does, set tradeAgain to “false” to prevent the bot from running another cycle.',
            )}
        </Text>
        <ImageWrapper>
            <Image img_name="dbot-logic-block.png" alt={localize('Logic block')} width="32.4rem" />
        </ImageWrapper>
        <Text>
            {localize(
                '3. Update currentPL with the profit from the last purchased contract. If the last contract was lost, the value of currentPL will be negative.',
            )}
        </Text>
        <ImageWrapper>
            <Image
                img_name="dbot-update-currentPL.png"
                alt={localize('Update currentPL')}
                width="32.4rem"
            />
        </ImageWrapper>
    </ArticleWrapper>
)

const TradeStatus = () => (
    <ArticleWrapper>
        <Header as="h4" margin=" 0 0 2.4rem 0" lh="1.5">
            {localize('Where can I see the status of my trades in DBot?')}
        </Header>
        <Text>
            {localize(
                'The panel on the right of the workspace gives you information about all your trades in DBot. The “Summary” tab shows information such as your total stake, total payout, profit/loss, etc.',
            )}
        </Text>

        <ImageWrapper>
            <Image img_name="dbot-summary-tab.png" alt={localize('Summary tab')} width="33.3rem" />
        </ImageWrapper>

        <Text>
            {localize(
                'The “Transactions” tab gives you more detailed information on each trade such as duration, barrier, start and end times, etc.',
            )}
        </Text>
        <ImageWrapper>
            <Image
                img_name="dbot-transactions.png"
                alt={localize('Transactions')}
                width="33.3rem"
            />
        </ImageWrapper>
    </ArticleWrapper>
)
const ViewChart = () => (
    <ArticleWrapper>
        <Header as="h4" margin=" 0 0 2.4rem 0" lh="1.5">
            {localize('How do I view the chart in DBot?')}
        </Header>
        <Text>
            {localize(
                'Click “Chart” at the bottom left corner of the workspace to view the chart.',
            )}
        </Text>

        <ImageWrapper>
            <Image img_name="dbot-chart.png" alt={localize('Chart')} width="22.5rem" />
        </ImageWrapper>
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
            <MartingaleStrategy
                text={localize('What is the martingale strategy?')}
                label="martingale-strategy"
            />
            <AlembertStrategy
                text={localize('What is the d’Alembert strategy?')}
                label="dalembert-strategy"
            />
            <OskarStrategy
                text={localize("What is the Oscar's Grind strategy?")}
                label="oscars-grind-strategy"
            />
            <SaveStrategy text={localize('How do I save my strategy?')} label="save-strategy" />
            <ImportStrategy
                text={localize('How do I import my strategies into DBot?')}
                label="import-strategy"
            />
            <TransactionLog
                text={localize('How do I clear my transaction log?')}
                label="clear-transaction-log"
            />
            <ControlLosses
                text={localize('How do I control my losses with DBot?')}
                label="control-loss"
            />
            <TradeStatus
                text={localize('Where can I see the status of my trades in DBot?')}
                label="status-of-trades"
            />
            <ViewChart text={localize('How do I view the chart in DBot?')} label="view-chart" />
        </Article>
    )
}

export default WithIntl()(DBotArticle)
