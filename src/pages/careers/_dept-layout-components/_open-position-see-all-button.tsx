import React from 'react'
import { LinkButton } from 'components/form'
import { Header } from 'components/elements'
import { Flex } from 'components/containers'

type DataProps = {
    link: string
    has_position: boolean
}

const OpenPositionButton = ({ link, has_position }: DataProps) => {
    if (has_position) {
        return (
            <Flex>
                <LinkButton external mt="35px" to={link} secondary target="_blank">
                    See all
                </LinkButton>
            </Flex>
        )
    }

    return (
        <Flex>
            <Header type="subtitle-1" align="center" color="grey-5">
                Sorry, there are currently no open positions.
            </Header>
        </Flex>
    )
}

export default OpenPositionButton
