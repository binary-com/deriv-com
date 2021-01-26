import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Flex, Box } from 'components/containers'
import { Text } from 'components/elements'
import device from 'themes/device'

const StyledFlex = styled(Flex)`
    flex-direction: column;

    @media ${device.tabletL} {
        padding-top: ${(props) => (props.mobile_pt ? props.mobile_pt : '')};
    }
`

const StyledText = styled(Text)`
    @media ${device.tabletL} {
        font-size: 14px;
    }
`
const AvailableOptions = ({ title, content, remove_title, svg, mobile_pt }) => {
    const Icon = styled.img`
        margin-right: 1.6rem;
        width: 80px;
        height: 80px;

        @media ${device.tabletL} {
            width: 60px;
            height: 60px;
        }
    `
    return (
        <StyledFlex mt={remove_title ? '1.6rem' : 0} mobile_pt={mobile_pt}>
            {!remove_title && (
                <Box mb="0.8rem" height="2.4rem">
                    <StyledText weight="bold">{title ? title : null}</StyledText>
                </Box>
            )}
            <Flex jc="flex-start">
                <Icon src={svg} />
                <Box max_width="28.8rem">
                    <StyledText>{content}</StyledText>
                </Box>
            </Flex>
        </StyledFlex>
    )
}

AvailableOptions.propTypes = {
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    mobile_pt: PropTypes.string,
    remove_title: PropTypes.bool,
    svg: PropTypes.func,
    title: PropTypes.object,
}
export default AvailableOptions
