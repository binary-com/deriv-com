import { useStaticQuery, graphql } from 'gatsby'

export const useAcademyBlogData = () => {
    const { directus } = useStaticQuery(
        graphql`
            query AcademyBlogData {
                directus {
                    blog(filter: { status: { _eq: "published" } }, sort: "-published_date") {
                        id
                        main_image {
                            id
                            description
                            imageFile {
                                childImageSharp {
                                    gatsbyImageData(width: 600, aspectRatio: 1.725)
                                }
                            }
                        }
                        slug
                        published_date
                        featured
                        tags {
                            id
                            tags_id {
                                tag_name
                            }
                        }
                        blog_title
                        blog_description
                    }
                }
            }
        `,
    )
    return directus.blog
}
