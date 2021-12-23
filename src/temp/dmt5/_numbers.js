import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Header, Text } from 'components/elements'
import { SectionContainer, Flex } from 'components/containers'
import device from 'themes/device.js'

const NumberSection = styled(SectionContainer)`
    display: Flex;
    background-color: var(--color-grey-25);
    padding: 4rem 12rem;
    align-items: center;
    justify-content: center;

    @media ${device.laptopM} {
        padding: 4rem 4rem;
    }
    @media ${device.tablet} {
        flex-direction: column;
        padding: 4rem 4rem;
        justify-content: center;
    }
    @media ${device.mobileL} {
        padding: 24px 124px;

        * {
            width: 140px;
        }
    }
`
const Splitter = styled.div`
    height: 6rem;
    width: 0.1rem;
    background-color: var(--color-grey-26);
    margin-left: 2.4rem;
    margin-right: 2.4rem;

    @media ${device.tablet} {
        display: none;
    }
`
const StyledHeader = styled(Header)`
    width: auto;
    line-height: 1.5;

    @media ${device.tablet} {
        margin-bottom: 8px;
        font-size: 32px;
    }
    @media ${device.mobileL} {
        text-align: center;
    }
`
const StyledText = styled(Text)`
    @media ${device.tablet} {
        font-size: 16px;
    }
    @media ${device.mobileL} {
        text-align: center;
    }
`
const Number = styled(Flex)`
    align-items: center;
    width: unset;

    @media ${device.tablet} {
        flex-direction: column;
        justify-content: center;
        margin-bottom: 16px;
    }
`
const Numbers = ({ numbers_content }) => {
    return (
        <NumberSection>
            <Flex tablet_direction="column" max_width="1200px" jc="space-between">
                {numbers_content.map((content, index) => (
                    <Number key={index}>
                        <StyledHeader as="h2" type="page-title">
                            {content.title}
                        </StyledHeader>
                        <Splitter />
                        <StyledText>{content.subtitle}</StyledText>
                    </Number>
                ))}
            </Flex>
        </NumberSection>
    )
}

Numbers.propTypes = {
    numbers_content: PropTypes.array,
}

export default Numbers
