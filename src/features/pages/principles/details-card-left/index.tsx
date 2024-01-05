import React from 'react'
import { Features } from '@deriv-com/blocks'
import { ContentImageType } from '../data'

interface DetailsCardRightProps {
    content: ContentImageType
}

const DetailsCardLeft = ({ content }: DetailsCardRightProps) => {
    const { header, description, image } = content

    return (
        <Features.ContentLeft title={header} description={description} content={() => <>{image}</>}>
            <div></div>
        </Features.ContentLeft>
    )
}

export default DetailsCardLeft
