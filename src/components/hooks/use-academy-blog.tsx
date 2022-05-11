import { useStaticQuery, graphql } from 'gatsby'
import { AcademyDataType } from './use-academy-data'

// This hook is used to fetch data from Directus during build time
export const useAcademyBlog = (): [AcademyDataType] => {
    let academy_blog = useStaticQuery(blog)
    academy_blog = academy_blog?.directus

    return [academy_blog]
}

const blog = graphql`
    query BlogQuery {
        directus {
            blog(filter: { status: { _eq: "published" } }, sort: "-published_date") {
                blog_title
                published_date
                blog_description
                slug
                featured
                main_image {
                    id
                    imageFile {
                        childImageSharp {
                            gatsbyImageData(width: 600)
                        }
                    }
                }
                tags {
                    id
                    tags_id {
                        tag_name
                    }
                }
            }
        }
    }
`
