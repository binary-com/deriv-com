import React from 'react'
import PropTypes from 'prop-types'
import { Text } from 'components/elements'
import { Flex, Box } from 'components/containers'

const AvailableOptions = ({ title, content, remove_title }) => {
    return (
        <Flex direction="column" mt={remove_title ? '1.6rem !important' : ''}>
            {!remove_title && (
                <Box mb="0.8rem" height="2.4rem">
                    <Text weight="bold">{title ? title : null}</Text>
                </Box>
            )}
            <Flex jc="flex-start">
                <div
                    style={{
                        width: '80px',
                        height: '80px',
                        borderRadius: '40px',
                        background: '#f2f3f4',
                        marginRight: '1.6rem',
                    }}
                />
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
    title: PropTypes.string,
}
export default AvailableOptions
