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
    slug: string
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

type TBlogPost = {
    data: {
        strapiPost: {
            hero: Thero
            blogPostMarkDown: {
                data: {
                    childrenMarkdownRemark: {
                        html: string
                    }
                }
            }
        }
    }
}
