import React from 'react'
import { contentData } from './data'
import ImageWithParagraph from 'features/components/molecules/image-text-boxes'

const AcuityTradeTools = () => {
    return <ImageWithParagraph contentData={contentData} mobileDirection={'col-reverse'} />
}

export default AcuityTradeTools
