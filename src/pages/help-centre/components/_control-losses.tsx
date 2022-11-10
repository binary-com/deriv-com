import React from 'react'
import styled from 'styled-components'
import ImageCard from './_image-card'
import { Header } from 'components/elements'
import { Localize } from 'components/localization'
import LossesImage from 'images/common/help-centre/dbot-losses.png'
import VariablesImage from 'images/common/help-centre/dbot-variables.png'
import LogicBlockImage from 'images/common/help-centre/dbot-logic-block.png'
import UpdateCurrentPlImage from 'images/common/help-centre/dbot-update-currentPL.png'

const Table = styled.table`
    width: 100%;
    font-size: var(--text-size-s);
    color: var(--color-black-3);
    line-height: 1.5;
`

const Tr = styled.tr`
    border: 1px solid var(--color-grey-7);
`

const Th = styled.th`
    font-weight: bold;
    vertical-align: middle;
    padding: 1.6rem 2rem;
    border: 1px solid var(--color-grey-7);
`

const Td = styled.td`
    max-width: 48.6rem;
    display: inline-block;
    padding: 1.6rem;
`

const table_data = [
    {
        th: '_t_currentPL_t_',
        td: '_t_This will store the cumulative profit or loss while the bot is running. Set the initial value to 0._t_',
    },
    {
        th: '_t_currentStake_t_',
        td: '_t_This will store the stake amount used in the last purchased contract. You can assign any amount based on your strategy._t_',
    },
    {
        th: '_t_maximumLoss_t_',
        td: '_t_This is your loss limit. You can assign any amount based on your strategy. The value must be a positive number._t_',
    },
    {
        th: '_t_tradeAgain_t_',
        td: "_t_This will be used to stop trading when your loss limit is reached. Set the initial value to 'true'._t_",
    },
]

const ControlLosses = () => (
    <>
        <Header size="16px" weight="normal">
            <Localize translate_text="_t_There are many ways you can control your losses with DBot. Here’s a simple example of how you can implement loss control in your strategy:_t_" />
        </Header>

        <ImageCard src={LossesImage} alt="Control loss" width="39.6rem" />

        <Header size="16px" weight="normal" mt="2.3rem" mb="2.4rem">
            <Localize translate_text="_t_1. Create the following variables:_t_" />
        </Header>

        <Table>
            <thead>
                {table_data.map(({ th, td }) => (
                    <Tr key={th}>
                        <Th>
                            <Localize translate_text={th} />
                        </Th>
                        <Td>
                            <Localize translate_text={td} />
                        </Td>
                    </Tr>
                ))}
            </thead>
        </Table>

        <ImageCard src={VariablesImage} alt="Variables" width="32.4rem" />

        <Header size="16px" weight="normal" mt="2.3rem">
            <Localize
                translate_text="_t_2. Use a logic block to check if <0>currentPL</0> exceeds <0>maximumLoss</0>. If it does, set <0>tradeAgain</0> to 'false' to prevent the bot from running another cycle._t_"
                components={[<strong key={0} />]}
            />
        </Header>

        <ImageCard src={LogicBlockImage} alt="Logic block" width="32.4rem" />

        <Header size="16px" weight="normal" mt="2.3rem">
            <Localize
                translate_text="_t_3. Update <0>currentPL</0> with the profit from the last purchased contract. If the last contract was lost, the value of <0>currentPL</0> will be negative._t_"
                components={[<strong key={0} />]}
            />
        </Header>

        <ImageCard src={UpdateCurrentPlImage} alt="Update currentPL" width="32.4rem" />
    </>
)

export default ControlLosses
