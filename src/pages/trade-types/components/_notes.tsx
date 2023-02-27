import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Flex } from 'components/containers'
import { Text } from 'components/elements'
import device from 'themes/device'
import Info from 'images/svg/trade-types/info.svg'
import { TString } from 'types/generics'
import { Localize } from 'components/localization'

const StyledNote = styled(Flex)`
    padding: 1.6rem 4rem 1.6rem 2.4rem;
    border-radius: 60px;
    max-width: 66rem;
    width: auto;
    position: relative;
    background: var(--color-grey-25);

    @media ${device.tabletS} {
        align-items: flex-start;
        border-radius: 8px;
    }
`

type NotesProps = {
    text: TString
}

const Notes = ({ text }: NotesProps) => {
    return (
        <StyledNote ai="center" jc="flex-start">
            <div>
                <img src={Info} alt="info" />
            </div>

            <Text ml="1.6rem">
                <Localize translate_text={text} />
            </Text>
        </StyledNote>
    )
}

Notes.propTypes = {
    text: PropTypes.string,
}

export default Notes
