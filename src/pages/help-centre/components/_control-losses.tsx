import React from 'react'
import styled from 'styled-components'
import ImageCard from './_image-card'
import { Header } from 'components/elements'
import { Localize } from 'components/localization'
import LogicBlockImage from 'images/common/help-centre/purchase-condition.png'
import LossesImage from 'images/common/help-centre/dbot-losses.png'
import UpdateCurrentPlImage from 'images/common/help-centre/restart-trading.png'
import VariablesImage from 'images/common/help-centre/dbot-variables.png'
import { TString } from 'types/generics'

const Table = styled.table`
    width: 100%;
    font-size: var(--text-size-s);
    color: var(--color-black-3);
    line-height: 1.5;
    margin-bottom: 1.6rem;
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

const table_data: { th: TString; td: TString }[] = [
    {
        th: '_t_Stop loss threshold_t_',
        td: '_t_Use this variable to store your loss limit. You can assign any amount you want. Your bot will stop when your losses hits or exceeds this amount._t_',
    },
    {
        th: '_t_Current stake_t_',
        td: '_t_Use this variable to store the stake amount. You can assign any amount you want, but it must be a positive number._t_',
    },
]

const ControlLosses = () => (
    <>
        <Header size="16px" weight="normal" mb="1.6rem">
            <Localize translate_text="_t_There are several ways to control your losses with Deriv Bot. Here’s a simple example of how you can implement loss control in your strategy:_t_" />
        </Header>

        <ImageCard src={LossesImage} alt="Control loss" width="70rem" />

        <Header size="16px" weight="normal" mt="2.3rem" mb="2.4rem">
            <Localize
                translate_text="_t_1. Create the following variables and place them under <0>Run once at start</0>:_t_"
                components={[<strong key={0} />]}
            />
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

        <Header size="16px" weight="normal" mt="2.3rem" mb="2.6rem">
            <Localize translate_text="_t_This is how your trade parameters, variables, and trade options should look like:_t_" />
        </Header>
        <ImageCard src={VariablesImage} alt="Variables" width="40rem" />

        <Header size="16px" weight="normal" mt="2.3rem" mb="2.6rem">
            <Localize
                translate_text="_t_2. Set the <0>Purchase conditions</0>. In this example, your bot will purchase a <0>Rise</0> contract when it starts and after a contract closes._t_"
                components={[<strong key={0} />]}
            />
        </Header>

        <ImageCard src={LogicBlockImage} alt="Logic block" width="40rem" />

        <Header size="16px" weight="normal" mt="2.3rem" mb="2.6rem">
            <Localize
                translate_text="_t_3. Use a logic block to check if <0>Total profit/loss</0> is more than the <0>Stop loss threshold</0> amount. You can find the <0>Total profit/loss</0> variable under <0>Analysis > Stats</0> on the <0>Blocks menu</0> on the left. Your bot will continue to purchase new contracts until the <0>Total profit/loss</0> amount exceeds the <0>Stop loss threshold</0> amount._t_"
                components={[<strong key={0} />]}
            />
        </Header>

        <ImageCard src={UpdateCurrentPlImage} alt="Update currentPL" width="40rem" />
    </>
)

export default ControlLosses
