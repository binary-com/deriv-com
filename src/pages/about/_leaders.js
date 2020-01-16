import React from 'react'
import styled from 'styled-components'
import { SectionContainer, Container, CssGrid, Flex, Wrapper } from 'components/containers'
import { Header, Text, Image } from 'components/elements'
import { localize, Localize } from 'components/localization'

const leaders_data = [
    {
        name: 'Rakshit Choudhary',
        position: localize('Chief Operations Officer'),
        description: localize(
            'Rakshit joined us in 2010, jointly architecting the system behind our trading platform with our Chief Executive Officer. Today, he oversees the design and implementation of our business operations. Rakshit holds a master’s degree in quantitative and computational finance from Georgia Institute of Technology in Atlanta and a bachelor’s degree in mechanical engineering from Delhi College of Engineering in India.',
        ),
        image: 'rakshit-choudhary.png',
    },
    {
        name: 'Tom Molesworth',
        position: (
            <Localize
                translate_text="Chief Technology Officer <0 />/Chief Architect"
                components={[<br key={0} />]}
            />
        ),
        description: localize(
            'Tom is responsible for our technology strategy and is actively involved in engineering leadership. With over 20 years of experience in software development, he has made extensive contributions to the design and maintenance of large-scale platforms in the IT industry.',
        ),
        image: 'tom-molesworth.png',
    },
    {
        name: 'Anton Andreev',
        position: localize('Head of Project Management'),
        description: localize(
            'Anton is responsible for overseeing the end-to-end development of our products. He has more than 17 years of experience in the online trading and retail banking industry with several international brokers. Anton holds a master’s degree in economics and another in applied informatics.',
        ),
        image: 'anton-andreev.png',
    },
    {
        name: 'Shyamala Siva',
        position: localize('Human Resources and Customer Service Operations Manager'),
        description: localize(
            'Shyamala has been with the group for over 10 years, ensuring smooth workplace and customer service operations. Shyamala is a Certified Public Accountant and holds a master’s degree in corporate governance from HELP University in Malaysia.',
        ),
        image: 'shyamala-siva.png',
    },
    {
        name: 'Raunak Kathuria',
        position: localize('Back-end Manager'),
        description: localize(
            'Raunak has more than 10 years of experience in front-end and back-end engineering. He has worked for multinational companies like Amdocs, Aon Hewitt, and Oracle Financial Services, where he developed skills for a wide range of platforms and programming languages. Raunak holds a bachelor’s degree in computer science engineering.',
        ),
        image: 'raunak-kathuria.png',
    },
    {
        name: 'Mun Sei Loke',
        position: localize('Quality Assurance Manager'),
        description: localize(
            'With more than 11 years of experience in Quality Assurance (QA), Mun Sei is well versed in all stages of software development life cycle, as well as in all forms of QA testing. She holds a bachelor’s degree in computer science.',
        ),
        image: 'munsei-loke.png',
    },
    {
        name: 'Denis Makagonov',
        position: localize('Business Intelligence Manager'),
        description: localize(
            'Denis has more than 10 years of data management experience. Denis previously worked with Forex Club (Libertex), one of the world’s leading forex retail brokers in Russia, and CIS as an enterprise data architect. Denis holds an engineering degree in computer systems information processing and management from Karaganda State Technical University in Kazakhstan.',
        ),
        image: 'denis-makagonov.png',
    },
    {
        name: 'Waqas Awan',
        position: localize('Head of Product Design'),
        description: localize(
            'Waqas heads our Product Design department. He has more than 20 years of experience as a product specialist, leading multi-disciplinary teams to ship compelling products and services in domains including healthcare, human resources, and FinTech. Waqas holds a PhD in bioinformatics from the University of Cambridge.',
        ),
        image: 'waqas-awan.png',
    },
    {
        name: 'Jeyavarthini Vairakanan',
        position: localize('Customer Support Manager'),
        description: localize(
            'Jeyavarthini drives our customer support strategy and assists her team to establish a sustainable relationship with our clients. Before joining us in 2017, Jeyavarthini worked for Intel in Malaysia. She holds an honours degree in Information Technology with a speciality in Information System Security (ISS) from Asia Pacific University associated with Staffordshire University, UK.',
        ),
        image: 'jeyavarthini-vairakanan.png',
    },
    {
        name: 'Arun Venkataraman',
        position: localize('DevOps Manager'),
        description: localize(
            'Arun coordinates our product development teams with our operations teams. He has over 12 years of experience in the information industry and has a comprehensive perspective into his field. Arun holds a master’s degree in bioinformatics from Bharathiar University in India.',
        ),
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
    border-radius: 6px;
`

const LeaderWrapper = styled(Flex)`
    cursor: pointer;
    height: auto;

    &:hover {
        ${DescriptionWrapper} {
            opacity: 0.85;
            height: 100%;
        }
    }
`

const StyledHeader = styled(Header)`
    font-size: 2.3rem;
`

const Leaders = () => {
    return (
        <SectionContainer>
            <Container>
                <CssGrid
                    columns="repeat(4, 26.9rem)"
                    column_gap="3.4rem"
                    row_gap="10.4rem"
                    laptop_columns="repeat(3, 1fr)"
                    tablet_columns="repeat(2, 1fr)"
                    mobile_columns="1fr"
                    mobile_row_gap="6rem"
                    margin="1rem 0 0"
                >
                    {leaders_data.map((leader, index) => (
                        <LeaderWrapper key={index} direction="column" ai="center">
                            <Wrapper margin={{ bottom: '0.8rem' }} width="100%" position="relative">
                                <Image img_name={leader.image} />
                                <DescriptionWrapper>
                                    <Text lh="1.71" size="var(--text-size-xs)" color="white">
                                        {leader.description}
                                    </Text>
                                </DescriptionWrapper>
                            </Wrapper>
                            <StyledHeader as="h4" align="center" lh="3.6rem">
                                {leader.name}
                            </StyledHeader>
                            <Text align="center">{leader.position}</Text>
                        </LeaderWrapper>
                    ))}
                </CssGrid>
            </Container>
        </SectionContainer>
    )
}

export default Leaders
