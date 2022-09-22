import React from 'react'
import styled from 'styled-components'
import { Article, ArticleProps } from './_article'
import { ArticleWrapper, StyledHeader, StyledText, ExternalLink } from './_help-centre-style'
import { usePageLoaded } from 'components/hooks/use-page-loaded'
import { Text } from 'components/elements'
import { localize, Localize, WithIntl } from 'components/localization'
import device from 'themes/device'
// Images
import GetStartedImage from 'images/common/help-centre/dbot-button-get-started.png'
import QuickStrategyImage from 'images/common/help-centre/dbot-quick-strategy.png'
import StrategiesImage from 'images/common/help-centre/dbot-strategies.png'
import AssetTradeTypeImage from 'images/common/help-centre/dbot-asset-trade-type.png'
import ParametersImage from 'images/common/help-centre/dbot-parameters.png'
import RunBotImage from 'images/common/help-centre/dbot-run-bot.png'
import BotNameImage from 'images/common/help-centre/dbot-botname.png'
import SaveBotImage from 'images/common/help-centre/dbot-save.png'
import GoogleDriveImage from 'images/common/help-centre/dbot-google-drive.png'
import SaveBotOptionImage from 'images/common/help-centre/dbot-save-bot.png'
import SaveBotDriveImage from 'images/common/help-centre/dbot-savebot-drive.png'
import ImportantStrategyImage from 'images/common/help-centre/dbot-import-strategy.png'
import LoadBotImage from 'images/common/help-centre/dbot-load-bot.png'
import LoadBotGDImage from 'images/common/help-centre/dbot-load-bot-gd.png'
import ResetImage from 'images/common/help-centre/dbot-reset.png'
import ClearStatImage from 'images/common/help-centre/dbot-clear-stat.png'
import AreYouSureImage from 'images/common/help-centre/dbot-are-you-sure.png'
import LossesImage from 'images/common/help-centre/dbot-losses.png'
import VariablesImage from 'images/common/help-centre/dbot-variables.png'
import LogicBlockImage from 'images/common/help-centre/dbot-logic-block.png'
import UpdateCurrentPlImage from 'images/common/help-centre/dbot-update-currentPL.png'
import SummaryTabImage from 'images/common/help-centre/dbot-summary-tab.png'
import TransactionsImage from 'images/common/help-centre/dbot-transactions.png'
import ChartImage from 'images/common/help-centre/dbot-chart.png'
import BlockMenuImage from 'images/common/help-centre/dbot-block-menu.png'
import BlockMenuSearchBarImage from 'images/common/help-centre/dbot-block-menu-search-bar.png'

const ImageWrapper = styled.div`
    padding: 2.4rem 0;
    max-width: 60rem;
    width: 100%;
    margin: 0 11rem;
    display: flex;
    align-self: flex-end;

    @media ${device.laptopL} {
        padding: 2.4rem 0;
        width: auto;
    }
    @media ${device.mobileL} {
        & > img {
            width: 110% !important;
        }
    }
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

const Td = styled.td`
    text-align: left;
    width: 100%;
    max-width: 48.6rem;
    display: inline-block;
    padding: 1.6rem;
`
const Tr = styled.tr`
    border: 1px solid var(--color-grey-7);
`
const StyledTable = styled.table<ArticleProps>`
    border-collapse: collapse;
    width: 100%;
    margin-bottom: ${(props) => (props.has_note ? '2.4rem' : 0)};
`
const StyledLink = styled(ExternalLink)`
    @media ${device.tabletL} {
        font-size: 16px;
    }
`

const StyledListItem = styled.li<{ marginTop: string }>`
    color: var(--color-black-3);
    margin-top: ${(props) => props.marginTop};
`

const StyledList = styled.ul<{ listStyle: string; paddingLeft: string }>`
    list-style: ${(props) => props.listStyle};
    padding-left: ${(props) => props.paddingLeft};
`

const WhatIsDBot = ({ text }: ArticleProps) => (
    <ArticleWrapper margin_left="2rem">
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text>
            {localize(
                "DBot is a web-based strategy builder for trading digital options. It’s a platform where you can build your own trading bot using drag-and-drop 'blocks'.",
            )}
        </Text>
    </ArticleWrapper>
)

const FindBlocks = ({ text }: ArticleProps) => (
    <ArticleWrapper margin_left="2rem">
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text>{localize('Follow these steps:')}</Text>
        <StyledList listStyle="decimal" paddingLeft="2rem">
            <StyledListItem marginTop="1.6rem">
                <Localize
                    translate_text="Go to <0>Bot Builder</0>."
                    components={[<strong key={0} />]}
                />
            </StyledListItem>
            <StyledListItem marginTop="0.8rem">
                <Localize
                    translate_text={
                        "Under the <0>Blocks menu</0>, you'll see a list of categories. Blocks are grouped within these categories. Choose the block you want and drag them to the workspace."
                    }
                    components={[<strong key={0} />]}
                />
            </StyledListItem>
            {/* Todo:(Mitra) fix the image issue caused by wrapping between StyledList component */}
            <ImageWrapper>
                <img
                    src={BlockMenuImage}
                    alt={localize('Get Started')}
                    style={{ width: '60rem', margin: '0 -12.6rem' }}
                    loading="lazy"
                />
            </ImageWrapper>
            <StyledListItem marginTop="0">
                {localize(
                    'You can also search for the blocks you want using the search bar above the categories.',
                )}
            </StyledListItem>
        </StyledList>
        <ImageWrapper>
            <img
                src={BlockMenuSearchBarImage}
                alt={localize('Get Started')}
                style={{ width: '60rem', alignSelf: 'end' }}
                loading="lazy"
            />
        </ImageWrapper>
        <Text>
            <Localize
                translate_text="For more info, <0>check out this blog post</0> on the basics of building a trading bot."
                components={[
                    <StyledLink
                        to="/academy/blog/posts/how-to-build-a-basic-trading-bot-with-dbot/"
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

const RemoveBlocks = ({ text }: ArticleProps) => (
    <ArticleWrapper margin_left="2rem">
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text>
            <Localize
                translate_text={
                    'Click on the block you want to remove and press <0>Delete</0> on your keyboard.'
                }
                components={[<strong key={0} />]}
            />
        </Text>
    </ArticleWrapper>
)

const CreateVariables = ({ text }: ArticleProps) => (
    <ArticleWrapper margin_left="2rem">
        <StyledHeader as="h4">{text}</StyledHeader>
        <StyledList listStyle="decimal" paddingLeft="2rem">
            <StyledListItem marginTop="0">
                <Localize
                    translate_text={
                        'Under the <0>Blocks</0> menu, go to <0>Utility > Variables.</0>'
                    }
                    components={[<strong key={0} />]}
                />
            </StyledListItem>
            <StyledListItem marginTop="0.8rem">
                <Localize
                    translate_text="Enter a name for your variable, and hit <0>Create</0>. New blocks containing your new variable will appear below."
                    components={[<strong key={0} />]}
                />
            </StyledListItem>
            <StyledListItem marginTop="0.8rem">
                {localize('Choose the block you want and drag it to the workspace.')}
            </StyledListItem>
        </StyledList>
    </ArticleWrapper>
)

const PreBuilt = ({ text }: ArticleProps) => (
    <ArticleWrapper margin_left="2rem">
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text width="110%">
            <Localize
                translate_text={
                    "Yes, you can get started with a pre-built bot using the <0>Quick strategy</0> feature. You’ll find some of the most popular trading strategies here: Martingale, D'Alembert, and Oscar's Grind. Grind. Just select the strategy, enter your trade parameters, and your bot will be created for you. You can always tweak the parameters later."
                }
                components={[<strong key={0} />]}
            />
        </Text>
    </ArticleWrapper>
)
const QuickStrategy = ({ text }: ArticleProps) => (
    <ArticleWrapper margin_left="2rem">
        <StyledHeader as="h4" width="65%">
            {text}
        </StyledHeader>
        <Text width="110%">
            {localize(
                "A quick strategy is a ready-made strategy that you can use in DBot. There are 3 quick strategies you can choose from: Martingale, D'Alembert, and Oscar's Grind.",
            )}
        </Text>
        <Text mt="4rem">
            <strong>{localize('Using a quick strategy')}</strong>
        </Text>
        <StyledList listStyle="decimal" paddingLeft="2.5rem">
            <StyledListItem marginTop="1.8rem">
                <Localize
                    translate_text={'Go to Quick strategy and select the strategy you want.'}
                    components={[<strong key={0} />]}
                />
            </StyledListItem>
            <StyledListItem marginTop="1.4rem">
                {localize('Select the asset and trade type.')}
            </StyledListItem>
            <StyledListItem marginTop="1.4rem">
                <Localize
                    translate_text={'Set your trade parameters and hit <0>Create</0>.'}
                    components={[<strong key={0} />]}
                />
            </StyledListItem>
            <StyledListItem marginTop="1.4rem">
                <Localize
                    translate_text={
                        'Once the blocks are loaded onto the workspace, tweak the parameters if you want, or hit <0>Run</0> to start trading'
                    }
                    components={[<strong key={0} />]}
                />
            </StyledListItem>
            <StyledListItem marginTop="1.4rem">
                <Localize
                    translate_text={
                        'Hit <0>Save</0> to download your bot. You can choose to download your bot to your device or your Google Drive.'
                    }
                    components={[<strong key={0} />]}
                />
            </StyledListItem>
        </StyledList>
    </ArticleWrapper>
)

const MartingaleStrategy = ({ text }: ArticleProps) => (
    <ArticleWrapper margin_left="2rem">
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text>
            {localize(
                'The Martingale strategy is a classic trading technique that encourages traders to double contract size after a loss so that when they do win, they will regain what they have lost.',
            )}
        </Text>
    </ArticleWrapper>
)

const AlembertStrategy = ({ text }: ArticleProps) => (
    <ArticleWrapper margin_left="2rem">
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text>
            {localize(
                'Named after the popular 18th-century French roulette theorist, Jean le Rond d’Alembert, this strategy encourages traders to increase contract size after a loss and decrease it after a successful trade.',
            )}
        </Text>
    </ArticleWrapper>
)

const OskarStrategy = ({ text }: ArticleProps) => (
    <ArticleWrapper margin_left="2rem">
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text>
            {localize(
                'This is a low-risk positive progression strategy that first appeared in 1965. By using this strategy, you will increase the size of your contract after each successful trade, and decrease the size of your contract after each unsuccessful trade.',
            )}
        </Text>
    </ArticleWrapper>
)

const SaveStrategy = ({ text }: ArticleProps) => (
    <ArticleWrapper margin_left="2rem">
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text>
            {localize(
                "First, give your strategy a name. Click the 'Bot name' field on the toolbar at the top and enter a name.",
            )}
        </Text>
        <ImageWrapper>
            <img
                src={BotNameImage}
                alt={localize('Bot name')}
                width="21.1rem"
                loading="lazy"
                style={{ width: '21.1rem' }}
            />
        </ImageWrapper>
        <Text>
            {localize(
                "Next, click 'Save' on the toolbar at the top of the workspace. You can choose to save to your computer or to your Google Drive. Your strategy will be saved in the XML format.",
            )}
        </Text>
        <ImageWrapper>
            <img
                src={SaveBotImage}
                alt={localize('Save')}
                width="40.7rem"
                loading="lazy"
                style={{ width: '40.7rem' }}
            />
        </ImageWrapper>
        <Text>
            <Localize
                translate_text="<0>Saving to your computer</0>"
                components={[<strong key={0} />]}
            />
        </Text>
        <Text mt="2.4rem">{localize("1. Select 'Local' and click 'Continue'.")}</Text>
        <ImageWrapper>
            <img
                src={SaveBotOptionImage}
                alt={localize('Save bot')}
                width="40rem"
                loading="lazy"
                style={{ width: '40rem' }}
            />
        </ImageWrapper>
        <Text mt="2.4rem">
            {localize(
                "2. The XML file will be saved in the 'Downloads' folder of your internet browser.",
            )}
        </Text>
        <Text mt="4rem">
            <Localize
                translate_text="<0>Saving to Google Drive</0>"
                components={[<strong key={0} />]}
            />
        </Text>
        <Text mt="2.4rem">{localize("1. Click 'Connect'.")}</Text>
        <ImageWrapper>
            <img
                src={GoogleDriveImage}
                alt={localize('Google Drive')}
                style={{ width: '12.1rem' }}
                loading="lazy"
                width="12.1rem"
            />
        </ImageWrapper>
        <Text mt="2.4rem">
            {localize(
                '2. Select your Google account and grant the necessary permission for DBot to access your Google Drive.',
            )}
        </Text>
        <Text mt="2.4rem">{localize("3. Click 'Continue'.")}</Text>
        <ImageWrapper>
            <img
                src={SaveBotDriveImage}
                alt={localize('Save bot Google Drive')}
                width="38.4rem"
                loading="lazy"
                style={{ width: '38.4rem' }}
            />
        </ImageWrapper>
        <Text mt="2.4rem">
            {localize(
                "4. Choose the folder you want to save your strategy in and click  'Select'.",
            )}
        </Text>
    </ArticleWrapper>
)

const ImportStrategy = ({ text }: ArticleProps) => (
    <ArticleWrapper margin_left="2rem">
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text width="88%">
            {localize(
                "Just drag the XML file from your computer onto the workspace. Your blocks will be loaded accordingly. Alternatively, you can click 'Import' on the toolbar at the top of the workspace and choose to load your strategy from your computer or from your Google Drive.",
            )}
        </Text>
        <ImageWrapper>
            <img
                src={ImportantStrategyImage}
                alt={localize('Import strategy')}
                style={{ width: '40.7rem' }}
                loading="lazy"
                width="40.7rem"
            />
        </ImageWrapper>
        <Text mt="4rem">
            <strong>{localize('Importing from your computer')}</strong>
        </Text>
        <Text mt="2.4rem">{localize("1. Select 'Local' and click 'Continue'.")}</Text>
        <ImageWrapper>
            <img
                src={LoadBotImage}
                alt={localize('Load bot')}
                width="40.7rem"
                loading="lazy"
                style={{ width: '40.7rem' }}
            />
        </ImageWrapper>
        <Text>
            {localize(
                "2. Select your strategy and click 'Open'. Your blocks will be loaded accordingly.",
            )}
        </Text>
        <Text mt="4rem">
            <strong>{localize('Importing from your Google Drive')}</strong>
        </Text>
        <Text mt="2.4rem">{localize("1. Select 'Google Drive' and click 'Continue'.")}</Text>
        <ImageWrapper>
            <img
                src={LoadBotGDImage}
                alt={localize('Load bot google Drive')}
                width="40.7rem"
                loading="lazy"
                style={{ width: '40.7rem' }}
            />
        </ImageWrapper>
        <Text>
            {localize(
                "2. Select your strategy and click 'Select'. Your blocks will be loaded accordingly.",
            )}
        </Text>
    </ArticleWrapper>
)

const ResetWorkspace = ({ text }: ArticleProps) => (
    <ArticleWrapper margin_left="2rem">
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text>
            {localize(
                "Click 'Reset' on the toolbar at the top of the workspace. This will revert the workspace back to its original state and any unsaved changes will be lost.",
            )}
        </Text>
        <ImageWrapper>
            <img
                src={ResetImage}
                alt={localize('Reset')}
                width="40.7rem"
                loading="lazy"
                style={{ width: '40.7rem' }}
            />
        </ImageWrapper>
    </ArticleWrapper>
)

const TransactionLog = ({ text }: ArticleProps) => (
    <ArticleWrapper margin_left="2rem">
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text>
            {localize("1. In the panel on the right of the workspace, click 'Clear stat'.")}
        </Text>
        <ImageWrapper>
            <img
                src={ClearStatImage}
                alt={localize('Clear stat')}
                loading="lazy"
                width="24.8rem"
                style={{ width: '24.8rem' }}
            />
        </ImageWrapper>
        <Text>{localize("2. Click 'Ok'.")}</Text>
        <ImageWrapper>
            <img
                src={AreYouSureImage}
                alt={localize('Are you sure?')}
                loading="lazy"
                style={{ width: '40rem' }}
                width="40rem"
            />
        </ImageWrapper>
    </ArticleWrapper>
)

const ControlLosses = ({ text }: ArticleProps) => (
    <ArticleWrapper margin_left="2rem">
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text>
            {localize(
                'There are many ways you can control your losses with DBot. Here’s a simple example of how you can implement loss control in your strategy:',
            )}
        </Text>

        <ImageWrapper>
            <img
                src={LossesImage}
                alt={localize('Control loss')}
                loading="lazy"
                width="61.2rem"
                style={{ width: '100%', maxWidth: '61.2rem' }}
            />
        </ImageWrapper>
        <Text mb="2.4rem">{localize('1. Create the following variables:')}</Text>
        <StyledTable>
            <Thead>
                <Tr>
                    <Th>
                        <Text weight="bold">{localize('currentPL')}</Text>
                    </Th>
                    <Td>
                        <Text>
                            {localize(
                                'This will store the cumulative profit or loss while the bot is running. Set the initial value to 0.',
                            )}
                        </Text>
                    </Td>
                </Tr>
                <Tr>
                    <Th>
                        <Text weight="bold">{localize('currentStake')}</Text>
                    </Th>
                    <Td>
                        <Text>
                            {localize(
                                'This will store the stake amount used in the last purchased contract. You can assign any amount based on your strategy.',
                            )}
                        </Text>
                    </Td>
                </Tr>
                <Tr>
                    <Th>
                        <Text weight="bold">{localize('maximumLoss')}</Text>
                    </Th>
                    <Td>
                        <Text>
                            {localize(
                                'This is your loss limit. You can assign any amount based on your strategy. The value must be a positive number.',
                            )}
                        </Text>
                    </Td>
                </Tr>
                <Tr>
                    <Th>
                        <Text weight="bold">{localize('tradeAgain')}</Text>
                    </Th>
                    <Td>
                        <Text>
                            {localize(
                                "This will be used to stop trading when your loss limit is reached. Set the initial value to 'true'.",
                            )}
                        </Text>
                    </Td>
                </Tr>
            </Thead>
        </StyledTable>
        <ImageWrapper>
            <img
                src={VariablesImage}
                alt={localize('Variables')}
                loading="lazy"
                width="32.4rem"
                style={{ width: '32.4rem' }}
            />
        </ImageWrapper>
        <Text>
            <Localize
                translate_text="2. Use a logic block to check if <0>currentPL</0> exceeds <0>maximumLoss</0>. If it does, set <0>tradeAgain</0> to 'false' to prevent the bot from running another cycle."
                components={[<strong key={0} />]}
            />
        </Text>
        <ImageWrapper>
            <img
                src={LogicBlockImage}
                alt={localize('Logic block')}
                loading="lazy"
                width="32.4rem"
                style={{ width: '32.4rem' }}
            />
        </ImageWrapper>
        <Text>
            <Localize
                translate_text="3. Update <0>currentPL</0> with the profit from the last purchased contract. If the last contract was lost, the value of <0>currentPL</0> will be negative."
                components={[<strong key={0} />]}
            />
        </Text>
        <ImageWrapper>
            <img
                src={UpdateCurrentPlImage}
                alt={localize('Update currentPL')}
                width="32.4rem"
                style={{ width: '32.4rem' }}
                loading="lazy"
            />
        </ImageWrapper>
    </ArticleWrapper>
)

const TradeStatus = ({ text }: ArticleProps) => (
    <ArticleWrapper margin_left="2rem">
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text>
            {localize(
                "The panel on the right of the workspace gives you information about all your trades in DBot. The 'Summary' tab shows information such as your total stake, total payout, profit/loss, etc.",
            )}
        </Text>

        <ImageWrapper>
            <img
                src={SummaryTabImage}
                alt={localize('Summary tab')}
                width="33.3rem"
                loading="lazy"
                style={{ width: '33.3rem' }}
            />
        </ImageWrapper>

        <Text>
            {localize(
                "The 'Transactions' tab gives you more detailed information on each trade such as duration, barrier, start and end times, etc.",
            )}
        </Text>
        <ImageWrapper>
            <img
                src={TransactionsImage}
                alt={localize('Transactions')}
                width="33.3rem"
                loading="lazy"
                style={{ width: '33.3rem' }}
            />
        </ImageWrapper>
    </ArticleWrapper>
)

const ViewChart = ({ text }: ArticleProps) => (
    <ArticleWrapper margin_left="2rem">
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text>
            {localize(
                "Click 'Chart' at the bottom left corner of the workspace to view the chart.",
            )}
        </Text>

        <ImageWrapper>
            <img
                src={ChartImage}
                alt={localize('Chart')}
                width="22.5rem"
                loading="lazy"
                style={{ width: '22.5rem' }}
            />
        </ImageWrapper>
    </ArticleWrapper>
)

const DBotArticle = () => {
    const [is_mounted] = usePageLoaded(false) // needed to fix tab highlighting not being rerendered during first load

    return (
        <div>
            <Article
                header="DBot"
                title={localize('Help centre | Frequently asked questions | DBot | Deriv')}
                description={localize('Frequently asked questions - DBot')}
                is_mounted={is_mounted}
            >
                <WhatIsDBot text={localize('What is DBot?')} label="what-is-dbot" />
                <FindBlocks
                    text={localize('How do I find the blocks I need?')}
                    label="find-blocks"
                    is_mounted={is_mounted}
                />
                <RemoveBlocks
                    text={localize('How do I remove blocks from the workspace?')}
                    label="remove-blocks"
                    is_mounted={is_mounted}
                />
                <CreateVariables
                    text={localize('How do I create variables?')}
                    label="create-variables"
                    is_mounted={is_mounted}
                />
                <PreBuilt
                    text={localize('Do you offer pre-built trading bots on DBot?')}
                    label="pre-built"
                    is_mounted={is_mounted}
                />
                <QuickStrategy
                    text={localize('What is quick strategy?')}
                    label="quick-strategy"
                    is_mounted={is_mounted}
                />
                <MartingaleStrategy
                    text={localize('What is the Martingale strategy?')}
                    label="martingale-strategy"
                    is_mounted={is_mounted}
                />
                <AlembertStrategy
                    text={localize('What is the D’Alembert strategy?')}
                    label="dalembert-strategy"
                    is_mounted={is_mounted}
                />
                <OskarStrategy
                    text={localize("What is the Oscar's Grind strategy?")}
                    label="oscars-grind-strategy"
                    is_mounted={is_mounted}
                />
                <SaveStrategy
                    text={localize('How do I save my strategy?')}
                    label="save-strategy"
                    is_mounted={is_mounted}
                />
                <ImportStrategy
                    text={localize('How do I import my strategies into DBot?')}
                    label="import-strategy"
                    is_mounted={is_mounted}
                />
                <ResetWorkspace
                    text={localize('How do I reset the workspace?')}
                    label="reset-workspace"
                    is_mounted={is_mounted}
                />
                <TransactionLog
                    text={localize('How do I clear my transaction log?')}
                    label="clear-transaction-log"
                    is_mounted={is_mounted}
                />
                <ControlLosses
                    text={localize('How do I control my losses with DBot?')}
                    label="control-loss"
                    is_mounted={is_mounted}
                />
                <TradeStatus
                    text={localize('Where can I see the status of my trades in DBot?')}
                    label="status-of-trades"
                    is_mounted={is_mounted}
                />
                <ViewChart
                    text={localize('How do I view the chart in DBot?')}
                    label="view-chart"
                    is_mounted={is_mounted}
                />
            </Article>
        </div>
    )
}

export default WithIntl()(DBotArticle)
