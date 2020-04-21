import React from 'react'
import styled from 'styled-components'
import util from './_util'
import { Container, Box, Flex } from 'components/containers'
import { Text, Header } from 'components/elements'
import { LinkButton } from 'components/form'
import { localize } from 'components/localization'
import device from 'themes/device'
import SimpleStepsBG from 'images/common/simple-steps.png'
import SimpleStepIcon1 from 'images/svg/simple-steps-1.svg'
import SimpleStepIcon2 from 'images/svg/simple-steps-2.svg'
import SimpleStepIcon3 from 'images/svg/simple-steps-3.svg'

const MediumButton = styled(LinkButton)`
    font-size: var(--text-size-sm);
    font-weight: normal;
    margin-top: 4rem;
`

const HandleAmp = styled(Box)`
    position: relative;
    width: 100%;
    background-image: url(${SimpleStepsBG});
`
const Ul = styled(Flex).attrs({ as: 'ul' })`
    max-width: 996px;
    flex-wrap: wrap;
    justify-content: center;
`

const Li = styled(Flex).attrs({ as: 'li' })`
    box-shadow: 0 4px 8px 0 rgba(14, 14, 14, 0.1);
    border-radius: 4px;
    max-width: 304px;
    display: flex;
    padding: 3.2rem 2.4rem;
    margin: 1.2rem;
    height: 204px;
    background: var(--color-white);
    flex-direction: column;

    @media ${device.tabletL} {
        height: auto;
    }
`

const SimpleSteps = () => {
    return (
        <HandleAmp p="8rem 0 1.6rem">
            <Container fd="column" ai="center">
                <Header as="h2" align="center" mb="4rem">
                    {localize('3 simple steps')}
                </Header>
                <Ul>
                    <Li>
                        <Flex ai="center" mb="0.8rem">
                            <Header as="h4">Practise</Header>
                            <SimpleStepIcon1 width="32" height="32" />
                        </Flex>
                        <Text>
                            {localize(
                                'Open a demo account and start trading for free. Practise with an unlimited amount of virtual funds.',
                            )}
                        </Text>
                    </Li>
                    <Li>
                        <Flex ai="center" mb="0.8rem">
                            <Header as="h4">{localize('Trade')}</Header>
                            <SimpleStepIcon2 width="32" height="32" />
                        </Flex>
                        <Text>
                            {localize(
                                'Open a real account, make a deposit, and start trading for real. Trade forex, indices, commodities, and more.',
                            )}
                        </Text>
                    </Li>
                    <Li>
                        <Flex alignItems="center" mb="0.8rem">
                            <Header as="h4">{localize('Withdraw')}</Header>
                            <SimpleStepIcon3 width="32" height="32" />
                        </Flex>
                        <Text>
                            {localize(
                                'Get your funds quickly and easily. We support a variety of withdrawal options.',
                            )}
                        </Text>
                    </Li>
                </Ul>
                <MediumButton to={util.getSignupUrl()} secondary target="_blank">
                    {localize('Sign up now')}
                </MediumButton>
            </Container>
        </HandleAmp>
    )
}

export default SimpleSteps
