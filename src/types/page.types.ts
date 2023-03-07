import type { IGatsbyImageData } from 'gatsby-plugin-image'

export type MetaAttributesType = {
    og_title: string
    og_description: string
}
export type StrapiImage = {
    localFile: { childImageSharp: { gatsbyImageData: IGatsbyImageData } } & IGatsbyImageData
}
