import React from 'react'
import { OtherPlatform } from 'components/elements/other-platforms.js'
import { localize } from 'components/localization'

export const Trade = () => (
    <OtherPlatform
        header={localize('Trade the way you like')}
        subHeader={localize(
            'Whether you’re a beginner or a seasoned trader, our trading experience is something you’ll love.',
        )}
        exclude=""
    />
)
