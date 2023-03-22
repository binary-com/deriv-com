import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import { isBrowser } from 'common/utility'
import { SEO } from 'components/containers'
import Layout from 'components/layout/layout'
import { Header } from 'components/elements'
import { Localize, localize, WithIntl } from 'components/localization'
import { LinkButton } from 'components/form'
import ImageNotAvailable from 'images/svg/image-not-available.svg'

const PageNotFoundContainerInfo = styled.div`
    margin: 16px;

    * {
        margin: 1.6rem 0;
    }
`
const PageNotFoundContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    padding: 16rem 0;
    flex-wrap: wrap;
    flex-direction: column;
`
const ButtonWrapper = styled.div`
    margin-top: 3rem;
    text-align: center;
`

const PageNotFound = () => {
    return (
        isBrowser() && (
            <Layout>
                <SEO
                    title={localize('_t_404 - Page not found | Deriv_t_')}
                    description={localize('_t_The page you are looking for does not exist._t_')}
                />
                <PageNotFoundContainer>
                    <img
                        src={ImageNotAvailable}
                        alt={localize('_t_Page not found_t_')}
                        width="96"
                        height="96"
                    />

                    <PageNotFoundContainerInfo>
                        <Header as="h3" type="heading-3" align="center">
                            <Localize translate_text="_t_We couldn’t find that page_t_" />
                        </Header>
                        <Header as="p" type="paragraph-1" align="center" weight="normal">
                            <Localize translate_text="_t_It may not be available in your country, or maybe a broken link has brought you here._t_" />
                        </Header>

                        <ButtonWrapper>
                            <LinkButton secondary to="/">
                                <Localize translate_text="_t_Visit our homepage_t_" />
                            </LinkButton>
                        </ButtonWrapper>
                    </PageNotFoundContainerInfo>
                </PageNotFoundContainer>
            </Layout>
        )
    )
}

// this query exist here to get data only which need to be translated in crowdin
export const query = graphql`
    query {
        allStrapiWhoWeArePage {
            nodes {
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
        }
    }
`

export default WithIntl()(PageNotFound)
