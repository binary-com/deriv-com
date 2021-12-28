import { graphql } from 'gatsby'

export const GatsbyVimeoSrcSet = graphql`
    fragment GatsbyVimeoSrcSet on VimeoSrcset {
        quality
        type
        width
        height
        link
        created_time
        fps
        size
        md5
    }
`
