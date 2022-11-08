import React from 'react'
import styled from 'styled-components'
import { Text } from 'components/elements'
import { localize, Localize } from 'components/localization'
import device from 'themes/device'
import LossesImage from 'images/common/help-centre/dbot-losses.png'
import VariablesImage from 'images/common/help-centre/dbot-variables.png'
import LogicBlockImage from 'images/common/help-centre/dbot-logic-block.png'
import UpdateCurrentPlImage from 'images/common/help-centre/dbot-update-currentPL.png'

type ImageType = {
    width: string
}

const ImageWrapper = styled.div`
    padding: 2.4rem 20.2rem;
    padding-bottom: 0.7rem;
    max-width: 60rem;

    @media ${device.laptopL} {
        padding: 2.4rem 10rem;
    }

    @media ${device.mobileL} {
        padding: 2.4rem 10rem 2.1rem;
    }
`

const Image = styled.img<ImageType>`
    width: ${({ width }) => width};

    @media ${device.mobileL} {
        width: 110%;
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
const StyledTable = styled.table`
    border-collapse: collapse;
    width: 100%;
    margin-bottom: ${(props) => (props.has_note ? '2.4rem' : 0)};
`

const ControlLosses = () => (
    <>
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
    </>
)

export default ControlLosses
