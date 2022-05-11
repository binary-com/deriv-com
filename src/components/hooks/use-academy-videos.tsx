import { useStaticQuery, graphql } from 'gatsby'
import { AcademyDataType } from './use-academy-data'

// This hook is used to fetch data from Directus during build time
export const useAcademyVideos = (): [AcademyDataType] => {
    let academy_video = useStaticQuery(videos)
    academy_video = academy_video?.directus

    return [academy_video]
}

const videos = graphql`
    query VideoQuery {
        directus {
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
                            gatsbyImageData(width: 382, aspectRatio: 1.82)
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
