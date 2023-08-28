import React from 'react'
import { number_items } from './data'
import PrimeNumberItem from 'features/components/molecules/number-box'
import Container from 'features/components/atoms/container'
import Flex from 'features/components/atoms/flex-box'

const PrimeNumbers = () => {
    return (
        <Container.Fixed as="section" padding_block="20x">
            <Flex.Box
                container="fluid"
                direction="col"
                md={{ direction: 'row', justify: 'center', wrap: 'wrap', gap: '20x' }}
                gap="20x"
                padding_inline="40x"
            >
                {number_items.map((number) => (
                    <PrimeNumberItem
                        key={number.id}
                        item={number.data}
                        md={{ basis: '1-4', grow: '1' }}
                    />
                ))}
            </Flex.Box>
        </Container.Fixed>
    )
}
export default PrimeNumbers
