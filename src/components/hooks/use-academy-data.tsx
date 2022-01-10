import { useStaticQuery, graphql } from 'gatsby'

// This hook is used to fetch data from Directus during build time
export const useAcademyData = (): [unknown] => {
    let academy_data = useStaticQuery(query)
    academy_data = academy_data?.directus

    return [academy_data]
}

const query = graphql`
    query StoreQuery {
        directus {
            blog(filter: { status: { _eq: "published" } }, sort: "-published_date") {
                id
                main_image {
                    id
                    description
                    imageFile {
                        childImageSharp {
                            gatsbyImageData
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
            videos(filter: { status: { _eq: "published" } }, sort: "-published_date") {
                video_title
                published_date
                video_description
                video_duration
                featured
                video_thumbnail {
                    id
                    title
                    imageFile {
                        id
                        childImageSharp {
                            gatsbyImageData
                        }
                    }
                }
                video_file {
                    id
                }
                tags {
                    tags_id {
                        tag_name
                    }
                }
            }
        }
    }
`
