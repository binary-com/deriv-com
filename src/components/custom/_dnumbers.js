import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import device from 'themes/device'
import { Flex } from 'components/containers'
import { Header, Text } from 'components/elements'

const NumberWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 28.2rem;

    ${Text} {
        padding-top: 0.8rem;
    }

    @media ${device.laptop} {
        margin: 1.2rem 0;
        width: 22rem;
    }
    @media ${device.tabletL} {
        margin: 1.2rem 0;
        width: unset;

        ${Header} {
            font-size: 24px;
        }
        ${Text} {
            font-size: 16px;
        }
    }
`

const DnumberContainer = styled(Flex)`
    margin-top: 2.4rem;
    margin-bottom: 2.4rem;
    flex-direction: row;

    @media ${device.tabletL} {
        margin-bottom: 0;
        flex-direction: column;
    }
`

const DnumberContent = styled(Flex)`
    justify-content: space-between;
    @media ${device.tabletL} {
        justify-content: space-around;
    }
`

const DNumbers = ({ items }) => {
    return (
        <DnumberContainer padding="4rem">
            <DnumberContent>
                {items.slice(0, 2).map((item, index) => (
                    <NumberWrapper key={index}>
                        <Header as="h2" type="page-title" align="center">
                            {item.title}
                        </Header>
                        <Text align="center">{item.subtitle}</Text>
                    </NumberWrapper>
                ))}
            </DnumberContent>
            <DnumberContent>
                {items.slice(2, 4).map((item, index) => (
                    <NumberWrapper key={index}>
                        <Header as="h2" type="page-title" align="center">
                            {item.title}
                        </Header>
                        <Text align="center">{item.subtitle}</Text>
                    </NumberWrapper>
                ))}
            </DnumberContent>
        </DnumberContainer>
    )
}

DNumbers.propTypes = {
    items: PropTypes.array,
}
export default DNumbers
