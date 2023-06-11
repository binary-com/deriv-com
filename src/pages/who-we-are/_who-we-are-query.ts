import { graphql } from 'gatsby'

export const whoWeAreQuery = graphql`
    query {
        strapiWhoWeArePage {
            hero {
                header
                sub_header
                first_paragraph
                second_paragraph
                third_paragraph
                hero_image {
                    localFile {
                        publicURL
                    }
                }
                bg_desktop {
                    localFile {
                        publicURL
                    }
                }
                bg_mobile {
                    localFile {
                        publicURL
                    }
                }
            }
            our_values {
                header
                values {
                    header
                    sub_header
                    image {
                        localFile {
                            publicURL
                        }
                    }
                }
            }
            our_principles {
                header
                principles {
                    header
                    sub_header
                }
                button {
                    link_name
                    link_url
                }
            }
            our_leadership {
                header
                leaders {
                    name
                    role
                    link_url
                    photo {
                        url
                        localFile {
                            publicURL
                        }
                    }
                }
            }
            deriv_in_numbers {
                header
                sub_header
                numbers {
                    description
                    number
                }
            }
            our_locations {
                header
                numbers {
                    description
                    number
                }
                locations {
                    country_city
                    link_url
                }
                earth {
                    localFile {
                        publicURL
                    }
                }
                earth_mobile {
                    localFile {
                        publicURL
                    }
                }
            }
            banner {
                header
                sub_header
                link_name
                link_url
                bg_desktop {
                    localFile {
                        publicURL
                    }
                }
                bg_desktop_rtl {
                    localFile {
                        url
                        publicURL
                    }
                }
                bg_mobile {
                    localFile {
                        url
                        publicURL
                    }
                }
                bg_mobile_rtl {
                    localFile {
                        url
                        publicURL
                    }
                }
            }
            slider_medias {
                slider_1 {
                    localFile {
                        publicURL
                    }
                }
                slider_2 {
                    localFile {
                        publicURL
                    }
                }
                slider_3 {
                    localFile {
                        publicURL
                    }
                }
                slider_4 {
                    localFile {
                        publicURL
                    }
                }
                slider_5 {
                    localFile {
                        publicURL
                    }
                }
                slider_6 {
                    localFile {
                        publicURL
                    }
                }
            }
        }
    }
`
