import React from 'react'
import { number_items } from './data'
import DP2NumberItem from 'features/components/molecules/number-box'
import Flex from 'features/components/atoms/flex-box'
import Container from 'features/components/atoms/container'

const DP2Numbers = () => {
    return (
        <Container.Fixed as="section" padding_block="20x">
            <Flex.Box
                container="fluid"
                direction="col"
                gap="12x"
                md={{ direction: 'row', justify: 'center', gap: '40x' }}
            >
                {number_items.map((numb) => (
                    <DP2NumberItem key={numb.id} item={numb.data} />
                ))}
            </Flex.Box>
        </Container.Fixed>
    )
}

export default DP2Numbers
