type StrapiImage = {
    localFile: {
        publicURL: string
    }
}
type Thero = {
    title: string
    date: Date
    tags: string
    banner: StrapiImage
}

type TBlogPosts = {
    data: {
        allStrapiPost: {
            nodes: {
                hero: Thero
            }[]
        }
    }
}
