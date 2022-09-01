import React from 'react'
import styled from 'styled-components'
import { Article, ArticleProps } from './_article'
import { ArticleWrapper, StyledHeader, StyledText } from './_help-centre-style'
import { usePageLoaded } from 'components/hooks/use-page-loaded'
import { Text } from 'components/elements'
import { localize, Localize, WithIntl } from 'components/localization'
import device from 'themes/device'
// Images
import GetStartedImage from 'images/common/help-centre/dbot-button-get-started.png'
import SearchBarImage from 'images/common/help-centre/dbot-search-bar.png'
import DeleteImage from 'images/common/help-centre/dbot-delete.png'
import CreateVariableImage from 'images/common/help-centre/dbot-create-variable.png'
import NameVariableImage from 'images/common/help-centre/dbot-name-variable.png'
import UserDefinedVariableImage from 'images/common/help-centre/dbot-user-defined-variable.png'
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

const ImageWrapper = styled.div`
    padding: 2.4rem 10.2rem;
    max-width: 60rem;
    width: 100%;
    margin: 0 10rem;

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

const ImageWrapperRemove = styled.div`
    margin-top: 2.4rem;
    margin-left: 7rem;

    @media ${device.mobileL} {
        & > img {
            width: 10rem !important;
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
        <Text>
            {localize("1. Click 'Get started' at the top left corner to open the blocks menu.")}
        </Text>
        <ImageWrapper>
            <img
                src={GetStartedImage}
                alt={localize('Get Started')}
                width="14.2rem"
                style={{ width: '14.2rem' }}
                loading="lazy"
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
            <img
                src={SearchBarImage}
                alt={localize('Search')}
                width="17.9rem"
                style={{ width: '17.9rem' }}
                loading="lazy"
            />
        </ImageWrapper>
    </ArticleWrapper>
)

const RemoveBlocks = ({ text }: ArticleProps) => (
    <ArticleWrapper margin_left="2rem">
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text>
            {localize(
                "Just click on the block you want to remove and press 'Delete' on your keyboard. You can also drag the block to the recycle bin icon at the lower right corner of the workspace.",
            )}
        </Text>
        <ImageWrapperRemove>
            <img
                src={DeleteImage}
                alt={localize('Remove block')}
                width="7.4rem"
                style={{ width: '7.4rem' }}
                loading="lazy"
            />
        </ImageWrapperRemove>
    </ArticleWrapper>
)

const CreateVariables = ({ text }: ArticleProps) => (
    <ArticleWrapper margin_left="2rem">
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text>{localize("1. Click 'Get started' to open the blocks menu.")}</Text>
        <ImageWrapper>
            <img
                src={GetStartedImage}
                alt={localize('Get Started')}
                width="14.2rem"
                style={{ width: '14.2rem' }}
                loading="lazy"
            />
        </ImageWrapper>
        <Text>
            <Localize
                translate_text="2. Go to <0>Utility > Variables</0>."
                components={[<strong key={0} />]}
            />
        </Text>
        <StyledText>{localize("3. Click 'Create variable'.")}</StyledText>
        <ImageWrapper>
            <img
                src={CreateVariableImage}
                alt={localize('Create variable')}
                width="40.2rem"
                style={{ width: '40.2rem' }}
            />
        </ImageWrapper>
        <Text>{localize('4. Enter a name for the variable.')}</Text>
        <ImageWrapper>
            <img
                src={NameVariableImage}
                alt={localize('Name variable')}
                width="40.8rem"
                loading="lazy"
                style={{ width: '40.8rem' }}
            />
        </ImageWrapper>
        <Text>
            {localize(
                '5. The newly created variable is now available to be used in your strategy.',
            )}
        </Text>
        <ImageWrapper>
            <img
                src={UserDefinedVariableImage}
                alt={localize('User defined variable')}
                width="27.2rem"
                style={{ width: '27.2rem' }}
            />
        </ImageWrapper>
    </ArticleWrapper>
)

const QuickStrategy = ({ text }: ArticleProps) => (
    <ArticleWrapper margin_left="2rem">
        <StyledHeader as="h4" width="65%">
            {text}
        </StyledHeader>
        <Text width="65%">
            {localize(
                "A quick strategy is a ready-made strategy that you can use in DBot. There are 3 quick strategies you can choose from: Martingale, D'Alembert, and Oscar's Grind.",
            )}
        </Text>
        <Text mt="4rem">
            <strong>{localize('Using a quick strategy')}</strong>
        </Text>
        <StyledText>{localize("1. Click 'Get started' on the toolbar at the top.")}</StyledText>
        <ImageWrapper>
            <img
                src={GetStartedImage}
                alt={localize('Get Started')}
                width="14.2rem"
                style={{ width: '14.2rem' }}
                loading="lazy"
            />
        </ImageWrapper>
        <Text>
            <Localize
                translate_text="2. Click 'Quick Strategy'."
                components={[<strong key={0} />]}
            />
        </Text>
        <ImageWrapper>
            <img
                src={QuickStrategyImage}
                alt={localize('Quick strategy')}
                width="16.6rem"
                style={{ width: '16.6rem' }}
                loading="lazy"
            />
        </ImageWrapper>
        <Text>{localize('3. Choose the strategy that you want.')}</Text>
        <ImageWrapper>
            <img
                src={StrategiesImage}
                alt={localize('Strategies')}
                style={{ width: '42.1rem' }}
                width="42.1rem"
                loading="lazy"
            />
        </ImageWrapper>
        <Text>{localize('4. Select the asset and trade type.')}</Text>
        <ImageWrapper>
            <img
                src={AssetTradeTypeImage}
                alt={localize('Asset and trade type')}
                style={{ width: '44rem' }}
                loading="lazy"
                width="44rem"
            />
        </ImageWrapper>
        <Text>{localize("5. Enter your preferred trade parameters and click 'Create'.")}</Text>
        <ImageWrapper>
            <img
                src={ParametersImage}
                alt={localize('Parameters')}
                width="44rem"
                style={{ width: '44rem' }}
                loading="lazy"
            />
        </ImageWrapper>
        <Text>
            {localize(
                "6. The strategy is loaded onto the workspace. You may adjust your strategy however you want and when you’re ready to run your bot, click 'Run bot'.",
            )}
        </Text>
        <ImageWrapper>
            <img
                src={RunBotImage}
                alt={localize('Run bot')}
                width="11.8rem"
                loading="lazy"
                style={{ width: '11.8rem' }}
            />
        </ImageWrapper>
        <Text>
            {localize(
                '7. You may save your bot by either downloading it into your computer or by saving it on your Google Drive.',
            )}
        </Text>
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
                <QuickStrategy
                    text={localize('What is a quick strategy and how do I use it?')}
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
