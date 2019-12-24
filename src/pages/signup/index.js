import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import Signup, { Appearances } from 'components/custom/signup'
import { localize } from 'components/localization'
import { Header, Text } from 'components/elements'
import device from 'themes/device.js'
import Award from 'images/svg/award-winning.svg'
import Complaint from 'images/svg/complaint.svg'
import Security from 'images/svg/security.svg'

const Content = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    height: 100%;
    padding: 4rem 4rem;
    ${props =>
        props.inverse
            ? css`
                  background: var(--color-black);
                  color: var(--color-white);
              `
            : ''}
`

const SignupContent = styled(Content)`
    padding: 4rem 4rem;
    overflow: hidden;
    background-color: var(--color-white);

    @media ${device.tabletL} {
        padding-top: 6rem;
        width: 100%;
    }
`

const Item = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    margin-top: 2.4rem;

    * {
        margin-right: 1.6rem;
        width: fit-content;
    }
    :last-child {
        margin-bottom: 0;
    }
`
const Line = styled.div`
    width: 404px;
    height: 1px;
    background-color: var(--color-red);
    margin-top: 2.4rem;
`
const StyledText = styled(Text)`
    font-size: ${props => props.fontSize || 'var(--text-size-xs)'};
    margin-top: 2.4rem;
`
const NewSignup = () => (
    <>
        <Content>
            <Header as="h4">{localize('Start trading with Deriv')}</Header>
            <br />
            <Text>{localize('Join over 1 million traders worldwide')}</Text>
            <Line />
            <Item>
                <Award />
                <Text>
                    {localize(
                        'Deriv is the next evolution of Binary.com — an award-winning platform that’s been trusted for 20 years.',
                    )}
                </Text>
            </Item>
            <Item>
                <Complaint />
                <Text>{localize('We’re compliant with regulators around the world.')}</Text>
            </Item>
            <Item>
                <Security />
                <Text>
                    {localize(
                        'Your privacy and security are our top priority. We’ll never use your details without consent.',
                    )}
                </Text>
            </Item>
            <Line />
            <StyledText color="grey-12">
                {localize(
                    'By giving us your email address, you agree to receive marketing emails from us. You may unsubscribe from these emails at any time.',
                )}
            </StyledText>
        </Content>

        <SignupContent>
            <Signup appearance={Appearances.newSignup}/>
        </SignupContent>
    </>
)

NewSignup.propTypes = {
    autofocus: PropTypes.bool,
    closeModal: PropTypes.func,
}

export default NewSignup
