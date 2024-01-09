import React from 'react'
import { Features } from '@deriv-com/blocks'
import { ContentImageType } from '../data'

interface DetailsCardRightProps {
    content: ContentImageType
}

function DetailsCardRight({ content }: DetailsCardRightProps) {
    const { header, description, image } = content

    return <Features.ContentRight title={header} description={description} content={() => image} />
}

export default DetailsCardRight
