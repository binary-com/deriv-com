import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'components/form'
import { Flex } from 'components/containers'
import Email from 'images/svg/career-email.svg'
import { localize } from 'components/localization'
import { Text } from 'components/elements'

export const EmailButton = ({ text, ...props }) => (
    <a href="mailto:recruitment@deriv.hr" {...props}>
        <Button secondary="true">{text}</Button>
    </a>
)

export const EmailContainer = () => (
    <Flex width="792px" height="88px">
        <Email />
        <Text>
            {localize('To apply send your CV to')}
            <a href="mailto:recruitment@deriv.hr">recruitment@deriv.hr</a>
        </Text>
    </Flex>
)

EmailButton.propTypes = {
    text: PropTypes.string,
}
