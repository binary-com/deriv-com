import React from 'react'
import { Text, Header } from 'components/elements'
import { localize } from 'components/localization'

const NoResultsFound = () => (
    <div style={{ marginTop: '10rem' }}>
        <Header as="h2" font_size="var(--text-size-l)" align="center">
            {localize('No results found.')}
        </Header>
        <Text align="center" style={{ marginTop: '1.6rem' }}>
            {localize(
                'There are currently no open positions. Search again or try removing filters.',
            )}
        </Text>
    </div>
)

export default NoResultsFound
