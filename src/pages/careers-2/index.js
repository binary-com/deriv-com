import React from 'react'
import { localize, WithIntl } from 'components/localization'
import Layout from 'components/layout/layout'
import { SEO, SectionContainer, Container } from 'components/containers'
import { useRecruitData } from 'components/hooks/use-recruit-data'

const Careers2 = () => {
    const [status, data] = useRecruitData()

    return (
        <Layout>
            <SEO
                title={localize('Careers | Join and grow with us | Deriv')}
                description={localize(
                    'Looking for a great place to work? Deriv is looking for smart, talented, and dedicated people who are up for a challenging and rewarding career.',
                )}
            />
            <SectionContainer tablet={{ p: '40px 0' }}>
                <Container fd="column">
                    <div>Testing Zoho Api Calls</div>
                    {status && <div>{status}</div>}
                    {data.data && <div>{JSON.stringify(data.data[0])}</div>}
                </Container>
            </SectionContainer>
        </Layout>
    )
}

export default WithIntl()(Careers2)
