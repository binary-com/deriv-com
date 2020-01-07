import React from 'react'
import { SectionContainer, Container, CssGrid, Flex, Wrapper } from 'components/containers'
import { Header, Text, Image } from 'components/elements'

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
        description:
            'lorem ipsum consequ adip constectur bequerqe, lorem ipsum consequ adip constectur bequerqe. lorem ipsum consequ adip constectur bequerqe',
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
        name: 'Arun Venkataraman',
        position: 'DevOps Manager',
        description:
            'lorem ipsum consequ adip constectur bequerqe, lorem ipsum consequ adip constectur bequerqe. lorem ipsum consequ adip constectur bequerqe',
        image: 'arun-venkataraman.png',
    },
    {
        name: 'Jeyavarthini Vairakanan',
        position: 'Customer Support Manager',
        description:
            'lorem ipsum consequ adip constectur bequerqe, lorem ipsum consequ adip constectur bequerqe. lorem ipsum consequ adip constectur bequerqe',
        image: 'jeyavarthini-vairakanan.png',
    },
]

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
                        <Flex key={index} fd="column" ai="center">
                            <Wrapper margin={{ bottom: '0.8rem' }} width="100%">
                                <Image img_name={leader.image} />
                            </Wrapper>
                            <Header as="h4" align="center" lh="3.6rem">
                                {leader.name}
                            </Header>
                            <Text align="center">{leader.position}</Text>
                        </Flex>
                    ))}
                </CssGrid>
            </Container>
        </SectionContainer>
    )
}

export default Leaders
