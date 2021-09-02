import React from 'react'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import { localize, WithIntl } from 'components/localization'
import Layout from 'components/layout/layout'
import { SEO, SectionContainer, Container } from 'components/containers'

const queryClient = new QueryClient()

const meta_attributes = {
    og_title: localize('Careers | Join and grow with us | Deriv'),
    og_description: localize(
        'Looking for a great place to work? Deriv is looking for smart, talented, and dedicated people who are up for a challenging and rewarding career.',
    ),
}

const Careers2 = () => {
    const { isLoading, error, data } = useQuery('repoData', () =>
        fetch('https://api.github.com/repos/tannerlinsley/react-query').then((res) => {
            res.json()
            console.log(res.json()) //eslint-disable-line
            console.log(data) //eslint-disable-line
        }),
    )

    if (isLoading) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message

    return (
        <QueryClientProvider client={queryClient}>
            <Layout>
                <SEO
                    title={localize('Careers | Join and grow with us | Deriv')}
                    description={localize(
                        'Looking for a great place to work? Deriv is looking for smart, talented, and dedicated people who are up for a challenging and rewarding career.',
                    )}
                    meta_attributes={meta_attributes}
                />
                <SectionContainer tablet={{ p: '40px 0' }}>
                    <Container>
                        Testing Zoho Api Calls
                        {data}
                    </Container>
                </SectionContainer>
            </Layout>
        </QueryClientProvider>
    )
}

export default WithIntl()(Careers2)
