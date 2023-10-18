import React from 'react'
import styled from 'styled-components'
import { Text, LocalizedLinkText } from 'components/elements'
import { Flex } from 'components/containers'
import { Localize, localize } from 'components/localization'
import BinaryWhite from 'images/svg/interim/interim_binary-white.svg'
import BinaryBlue from 'images/svg/interim/interim_binary.svg'

type CtaBinaryProps = {
    is_white?: boolean
}

const BinaryLink = styled(LocalizedLinkText)<CtaBinaryProps>`
    &:hover {
        text-decoration: underline;
        color: ${(props) => (props.is_white ? 'var(--color-white)' : 'var(--color-red)')};
    }
`

const CtaBinary = ({ is_white }: CtaBinaryProps) => {
    const color = is_white ? 'white' : 'black'
    return (
        <Flex mt="1.6rem" ai="center">
            {is_white ? (
                <img src={BinaryWhite} alt={localize('_t_binary white_t_')} />
            ) : (
                <img src={BinaryBlue} alt={localize('_t_binary_t_')} />
            )}
            <Text ml="4px" max_width="20rem" lh="15px" color={color} size="var(--text-size-xs)">
                <Localize
                    translate_text="_t_No sign up needed. Log in with your <0>Binary.com</0> credentials._t_"
                    components={[
                        <BinaryLink
                            id="dm-binary-login-link-1"
                            is_white={is_white}
                            key={0}
                            external
                            to="home"
                            type="binary"
                            target="_blank"
                            rel="noopener noreferrer"
                            color={color}
                            size="var(--text-size-xs)"
                        />,
                    ]}
                />
            </Text>
        </Flex>
    )
}

export default CtaBinary
