import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Text } from 'components/elements'
import { Flex, Box } from 'components/containers'

const AvailableOptions = ({ title, content, remove_title, svg }) => {
    const Icon = styled(svg)`
        margin-right: 1.6rem;
        width: 80px;
        height: 80px;
    `
    return (
        <Flex direction="column" mt={remove_title ? '1.6rem !important' : ''}>
            {!remove_title && (
                <Box mb="0.8rem" height="2.4rem">
                    <Text weight="bold">{title ? title : null}</Text>
                </Box>
            )}
            <Flex jc="flex-start">
                <Icon />
                <Box max_width="28.8rem">
                    <Text>{content}</Text>
                </Box>
            </Flex>
        </Flex>
    )
}

AvailableOptions.propTypes = {
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    remove_title: PropTypes.bool,
    svg: PropTypes.func,
    title: PropTypes.string,
}
export default AvailableOptions
