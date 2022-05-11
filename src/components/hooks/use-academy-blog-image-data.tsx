import { useStaticQuery, graphql } from 'gatsby'
import type { ImageDataLike } from 'gatsby-plugin-image'

export type AcademyBlogImageDataType = {
    blog: BlogType[]
}

export type BlogType = {
    id: string
    main_image: MainImageType
}

export type MainImageType = {
    description?: string
    id: string
    imageFile: ImageDataLike
}

// This hook is used to fetch data from Directus during build time
export const useAcademyBlogImageData = (): [AcademyBlogImageDataType] => {
    let academy_blog_image_data = useStaticQuery(query)
    academy_blog_image_data = academy_blog_image_data?.directus

    return [academy_blog_image_data]
}

const query = graphql`
    query ImageQuery {
        directus {
            blog(filter: { status: { _eq: "published" } }, sort: "-published_date") {
                main_image {
                    id
                    description
                    imageFile {
                        childImageSharp {
                            gatsbyImageData(width: 600, aspectRatio: 1.82)
                        }
                    }
                }
            }
        }
    }
`
