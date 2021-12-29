import React from 'react'
import styled from 'styled-components'
import ZohoJob from './_zoho-job'
import { OpenPositionsProps } from './_dept-layout.types'
import { SectionContainer, Container } from 'components/containers'
import { Header } from 'components/elements'
import { LinkButton } from 'components/form'
import device from 'themes/device'

const JobWrapper = styled.div`
    width: 100%;
    display: grid;
    padding: 24px 35px 24px 18px;

    @media ${device.tablet} {
        display: grid;
    }

    @media (max-width: 600px) {
        padding: 24px 0 18px;
    }
`

type DataProps = {
    data: {
        title: OpenPositionsProps[]
        url: OpenPositionsProps[]
    }
}

const OpenPositions = (data: DataProps) => {
    return (
        <SectionContainer padding="0">
            <Container fd="column">
                <Header mb="40px" align="center" type="heading-3" as="h3">
                    Open positions
                </Header>
                <JobWrapper>
                    <ZohoJob title={data.data.title} />
                </JobWrapper>
                <LinkButton external mt="35px" to={data.data.url} secondary target="_blank">
                    See all
                </LinkButton>
            </Container>
        </SectionContainer>
    )
}

export default OpenPositions
