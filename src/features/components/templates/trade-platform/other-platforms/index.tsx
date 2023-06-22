import React from 'react'
import { TString } from 'types/generics'

export type RenderableDataType = {
    icon: string
    heading: string
    paragraph: TString
    link: string
}
type PropsType = {
    renderableData: RenderableDataType[]
    heading: TString
}

const PlatformsCarousel = ({ heading, renderableData }: PropsType) => {
    return <div>platformsCarousel</div>
}

export default PlatformsCarousel
