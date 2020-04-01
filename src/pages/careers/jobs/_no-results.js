import React from 'react'
import { Text, Header } from 'components/elements'

const NoResultsFound = () => (
    <div style={{ marginTop: '10rem' }}>
        <Header as="h2" size="var(--text-size-l)" align="center">
            No results found.
        </Header>
        <Text align="center" style={{ marginTop: '1.6rem' }}>
            There are currently no open positions. Search again or try removing filters.
        </Text>
    </div>
)

export default NoResultsFound
