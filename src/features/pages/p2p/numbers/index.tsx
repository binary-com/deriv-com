import React from 'react'
import { number_items } from './data'
import DP2NumberItem from './item'
import Flex from 'features/components/atoms/flex-box'
import Container from 'features/components/atoms/container'

const DP2Numbers = () => {
    return (
        <Container.Fixed as="section" padding_block="20x">
            <Flex.Box container="fluid" gap="40x" justify="center">
                {number_items.map((numb) => (
                    <DP2NumberItem key={numb.id} item={numb.data} />
                ))}
            </Flex.Box>
        </Container.Fixed>
    )
}

export default DP2Numbers
