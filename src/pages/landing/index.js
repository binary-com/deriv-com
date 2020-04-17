import React from 'react'
import styled from 'styled-components'
import { Text } from 'components/elements'

const White = styled(Text)`
    color: white;
`

const Landing = () => {
    return (
        <amp-layout width="200" height="400" layout="responsive">
            <White>Test</White>
        </amp-layout>
    )
}

export default Landing
