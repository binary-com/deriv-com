import React from 'react'
import styled from 'styled-components'
import { SectionContainer, Container, CssGrid, Flex, Wrapper } from 'components/containers'
import { Header, Text, Image } from 'components/elements'
import { localize } from 'components/localization'

const leaders_data = [
    {
        name: 'Rakshit Choudhary',
        position: 'Chief Operations Officer',
        description:
            'lorem ipsum consequ adip constectur bequerqe, lorem ipsum consequ adip constectur bequerqe. lorem ipsum consequ adip constectur bequerqe',
        image: 'rakshit-choudhary.png',
    },
    {
        name: 'Anton Andreev',
        position: 'Head of Project Management',
        description: localize(
            'Anton is responsible for overseeing the end-to-end development of our products. He has more than 17 years of experience in the online trading and retail banking industry with several international brokers. Anton holds a master’s degree in economics and another in applied informatics.',
        ),
        image: 'anton-andreev.png',
    },
    {
        name: 'Tom Molesworth',
        position: 'Chief Technology Officer / Chief Architect',
        description:
            'lorem ipsum consequ adip constectur bequerqe, lorem ipsum consequ adip constectur bequerqe. lorem ipsum consequ adip constectur bequerqe',
        image: 'tom-molesworth.png',
    },
    {
        name: 'Shyamala siva',
        position: 'Human Resources and Customer Service Operations Manager',
        description:
            'lorem ipsum consequ adip constectur bequerqe, lorem ipsum consequ adip constectur bequerqe. lorem ipsum consequ adip constectur bequerqe',
        image: 'shyamala-siva.png',
    },
    {
        name: 'Raunak Kathuria',
        position: 'Back-end Manager',
        description:
            'lorem ipsum consequ adip constectur bequerqe, lorem ipsum consequ adip constectur bequerqe. lorem ipsum consequ adip constectur bequerqe',
        image: 'raunak-kathuria.png',
    },
    {
        name: 'Mun Sei Loke',
        position: 'Quality Assurance Manager',
        description:
            'lorem ipsum consequ adip constectur bequerqe, lorem ipsum consequ adip constectur bequerqe. lorem ipsum consequ adip constectur bequerqe',
        image: 'munsei-loke.png',
    },
    {
        name: 'Denis Makagonov',
        position: 'Business Intelligence Manager',
        description:
            'lorem ipsum consequ adip constectur bequerqe, lorem ipsum consequ adip constectur bequerqe. lorem ipsum consequ adip constectur bequerqe',
        image: 'denis-makagonov.png',
    },
    {
        name: 'Waqas Awan',
        position: 'Head of Product Design',
        description:
            'lorem ipsum consequ adip constectur bequerqe, lorem ipsum consequ adip constectur bequerqe. lorem ipsum consequ adip constectur bequerqe',
        image: 'waqas-awan.png',
    },
    {
        name: 'Jeyavarthini Vairakanan',
        position: 'Customer Support Manager',
        description:
            'lorem ipsum consequ adip constectur bequerqe, lorem ipsum consequ adip constectur bequerqe. lorem ipsum consequ adip constectur bequerqe',
        image: 'jeyavarthini-vairakanan.png',
    },
    {
        name: 'Arun Venkataraman',
        position: 'DevOps Manager',
        description:
            'lorem ipsum consequ adip constectur bequerqe, lorem ipsum consequ adip constectur bequerqe. lorem ipsum consequ adip constectur bequerqe',
        image: 'arun-venkataraman.png',
    },
]

const DescriptionWrapper = styled.div`
    background: var(--color-black);
    opacity: 0;
    height: 0;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transition: opacity 0.25s, height 0.25s;
    padding: 1.6rem;
`

const LeaderWrapper = styled(Flex)`
    cursor: pointer;

    &:hover {
        ${DescriptionWrapper} {
            opacity: 0.85;
            height: 100%;
        }
    }
`

const Leaders = () => {
    return (
        <SectionContainer>
            <Container>
                <CssGrid
                    columns="repeat(4, 26.9rem)"
                    column_gap="3.4rem"
                    row_gap="10.4rem"
                    tablet_columns="repeat(2, 1fr)"
                    mobile_columns="1fr"
                    mobile_row_gap="6rem"
                    margin="1rem 0 0"
                >
                    {leaders_data.map((leader, index) => (
                        <LeaderWrapper key={index} fd="column" ai="center">
                            <Wrapper margin={{ bottom: '0.8rem' }} width="100%" position="relative">
                                <Image img_name={leader.image} />
                                <DescriptionWrapper>
                                    <Text size="var(--text-size-xs)" color="white">
                                        {leader.description}
                                    </Text>
                                </DescriptionWrapper>
                            </Wrapper>
                            <Header as="h4" align="center" lh="3.6rem">
                                {leader.name}
                            </Header>
                            <Text align="center">{leader.position}</Text>
                        </LeaderWrapper>
                    ))}
                </CssGrid>
            </Container>
        </SectionContainer>
    )
}

export default Leaders
