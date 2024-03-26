import React from 'react'
import { graphql } from 'gatsby'
import { WithIntl } from 'components/localization'
import PageNotFound from 'features/pages/404'
import { isBrowser } from 'common/utility'
import { SEO } from 'components/containers'
import { TGatsbyHead } from 'features/types'

const NotFound = ({ pageContext }: TGatsbyHead) => {
    const { region } = pageContext
    return isBrowser() && <PageNotFound region={region} />
}

export const query = graphql`
    query {
        strapiWhoWeArePage {
            hero {
                header
                sub_header
                first_paragraph
                second_paragraph
                third_paragraph
            }
            our_values {
                header
                values {
                    header
                    sub_header
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
                }
            }
            our_leadership {
                header
                leaders {
                    role
                }
            }
            deriv_in_numbers {
                header
                sub_header
                numbers {
                    description
                }
            }
            our_locations {
                header
                numbers {
                    description
                }
            }
            banner {
                header
                sub_header
                link_name
            }
        }
        strapiContactUs {
            hero {
                header
                sub_header
            }
            support_section {
                header
                sub_header
                link_title
            }
            our_offices
            office_address {
                continent
                country {
                    country_name
                }
            }
            business_partnership {
                header
                sub_header
                live_chat_title
            }
        }
    }
`

export default WithIntl()(NotFound)

export const Head = ({ pageContext }: TGatsbyHead) => (
    <SEO
        title="_t_404 - Page not found | Deriv_t_"
        description="_t_The page you are looking for does not exist._t_"
        pageContext={pageContext}
    />
)
