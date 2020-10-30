import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import device from 'themes/device'
import { SectionContainer, Container, CssGrid, Flex, Box, Show } from 'components/containers'
import { Carousel, Header, Text, QueryImage } from 'components/elements'
import { Localize } from 'components/localization'

const query = graphql`
    query {
        rakshit_choudhary: file(relativePath: { eq: "leaders/rakshit-choudhary.png" }) {
            ...fadeIn
        }
        tom_molesworth: file(relativePath: { eq: "leaders/tom-molesworth.png" }) {
            ...fadeIn
        }
        anton_andreev: file(relativePath: { eq: "leaders/anton-andreev.png" }) {
            ...fadeIn
        }
        joanna_frendo: file(relativePath: { eq: "leaders/joanna-frendo.png" }) {
            ...fadeIn
        }
        shyamala_siva: file(relativePath: { eq: "leaders/shyamala-siva.png" }) {
            ...fadeIn
        }
        raunak_kathuria: file(relativePath: { eq: "leaders/raunak-kathuria.png" }) {
            ...fadeIn
        }
        munsei_loke: file(relativePath: { eq: "leaders/munsei-loke.png" }) {
            ...fadeIn
        }
        denis_makagonov: file(relativePath: { eq: "leaders/denis-makagonov.png" }) {
            ...fadeIn
        }
        waqas_awan: file(relativePath: { eq: "leaders/waqas-awan.png" }) {
            ...fadeIn
        }
        derek_swift: file(relativePath: { eq: "leaders/derek-swift.png" }) {
            ...fadeIn
        }
        jeyavarthini_vairakanan: file(relativePath: { eq: "leaders/jeyavarthini-vairakanan.png" }) {
            ...fadeIn
        }
        arun_venkataraman: file(relativePath: { eq: "leaders/arun-venkataraman.png" }) {
            ...fadeIn
        }
        ashkan_nemati: file(relativePath: { eq: "leaders/ashkan-nemati.png" }) {
            ...fadeIn
        }
        rakshit_choudhary_mobile: file(
            relativePath: { eq: "leaders/rakshit-choudhary-mobile.png" }
        ) {
            ...fadeIn
        }
        tom_molesworth_mobile: file(relativePath: { eq: "leaders/tom-molesworth-mobile.png" }) {
            ...fadeIn
        }
        anton_andreev_mobile: file(relativePath: { eq: "leaders/anton-andreev-mobile.png" }) {
            ...fadeIn
        }
        joanna_frendo_mobile: file(relativePath: { eq: "leaders/joanna-frendo-mobile.png" }) {
            ...fadeIn
        }
        shyamala_siva_mobile: file(relativePath: { eq: "leaders/shyamala-siva-mobile.png" }) {
            ...fadeIn
        }
        raunak_kathuria_mobile: file(relativePath: { eq: "leaders/raunak-kathuria-mobile.png" }) {
            ...fadeIn
        }
        munsei_loke_mobile: file(relativePath: { eq: "leaders/munsei-loke-mobile.png" }) {
            ...fadeIn
        }
        denis_makagonov_mobile: file(relativePath: { eq: "leaders/denis-makagonov-mobile.png" }) {
            ...fadeIn
        }
        waqas_awan_mobile: file(relativePath: { eq: "leaders/waqas-awan-mobile.png" }) {
            ...fadeIn
        }
        derek_swift_mobile: file(relativePath: { eq: "leaders/derek-swift-mobile.png" }) {
            ...fadeIn
        }
        jeyavarthini_vairakanan_mobile: file(
            relativePath: { eq: "leaders/jeyavarthini-vairakanan-mobile.png" }
        ) {
            ...fadeIn
        }
        arun_venkataraman_mobile: file(
            relativePath: { eq: "leaders/arun-venkataraman-mobile.png" }
        ) {
            ...fadeIn
        }
        ashkan_nemati_mobile: file(relativePath: { eq: "leaders/ashkan-nemati-mobile.png" }) {
            ...fadeIn
        }
    }
`

const leaders_data = [
    {
        name: 'Rakshit Choudhary',
        position: <Localize translate_text="Chief Operations Officer" />,
        description: (
            <Localize translate_text="Rakshit joined us in 2010, jointly architecting the system behind our trading platform with our Chief Executive Officer. Today, he oversees the design and implementation of our business operations. Rakshit holds a master’s degree in quantitative and computational finance from Georgia Institute of Technology in Atlanta and a bachelor’s degree in mechanical engineering from Delhi College of Engineering in India." />
        ),
        image: 'rakshit_choudhary',
    },
    {
        name: 'Tom Molesworth',
        position: (
            <Localize
                translate_text="Chief Technology Officer <0 />/Chief Architect"
                components={[<br key={0} />]}
            />
        ),
        description: (
            <Localize translate_text="Tom is responsible for our technology strategy and is actively involved in engineering leadership. With over 20 years of experience in software development, he has made extensive contributions to the design and maintenance of large-scale platforms in the IT industry." />
        ),
        image: 'tom_molesworth',
    },
    {
        name: 'Anton Andreev',
        position: <Localize translate_text="Head of Project Management" />,
        description: (
            <Localize translate_text="Anton is responsible for overseeing the end-to-end development of our products. He has more than 17 years of experience in the online trading and retail banking industry with several international brokers. Anton holds a master’s degree in economics and another in applied informatics." />
        ),
        image: 'anton_andreev',
    },
    {
        name: 'Joanna Frendo',
        position: <Localize translate_text="Head of Compliance" />,
        description: (
            <Localize translate_text="Joanna oversees the whole process of benchmarking the group’s performance against the regulations in every jurisdiction we serve. Her credentials include a diploma in financial services operations and compliance, a professional postgraduate diploma in financial crime compliance, and a fellow membership with the International Compliance Association." />
        ),
        image: 'joanna_frendo',
    },
    {
        name: 'Shyamala Siva',
        position: <Localize translate_text="Head of Human Resources" />,
        description: (
            <Localize translate_text="Shyamala has been with the group for over 15 years, ensuring smooth workplace and workforce operations. She is a Certified Public Accountant and holds a master’s degree in corporate governance from HELP University in Malaysia." />
        ),
        image: 'shyamala_siva',
    },
    {
        name: 'Raunak Kathuria',
        position: <Localize translate_text="Back-end Manager" />,
        description: (
            <Localize translate_text="Raunak has more than 10 years of experience in front-end and back-end engineering. He has worked for multinational companies like Amdocs, Aon Hewitt, and Oracle Financial Services, where he developed skills for a wide range of platforms and programming languages. Raunak holds a bachelor’s degree in computer science engineering." />
        ),
        image: 'raunak_kathuria',
    },
    {
        name: 'Mun Sei Loke',
        position: <Localize translate_text="Quality Assurance Manager" />,
        description: (
            <Localize translate_text="With more than 11 years of experience in Quality Assurance (QA), Mun Sei is well versed in all stages of software development life cycle, as well as in all forms of QA testing. She holds a bachelor’s degree in computer science." />
        ),
        image: 'munsei_loke',
    },
    {
        name: 'Denis Makagonov',
        position: <Localize translate_text="Business Intelligence Manager" />,
        description: (
            <Localize translate_text="Denis has more than 10 years of data management experience. Denis previously worked with Forex Club (Libertex), one of the world’s leading forex retail brokers in Russia, and CIS as an enterprise data architect. Denis holds an engineering degree in computer systems information processing and management from Karaganda State Technical University in Kazakhstan." />
        ),
        image: 'denis_makagonov',
    },
    {
        name: 'Waqas Awan',
        position: <Localize translate_text="Head of Product Design" />,
        description: (
            <Localize translate_text="Waqas heads our Product Design department. He has more than 20 years of experience as a product specialist, leading multi-disciplinary teams to ship compelling products and services in domains including healthcare, human resources, and FinTech. Waqas holds a PhD in bioinformatics from the University of Cambridge." />
        ),
        image: 'waqas_awan',
    },
    {
        name: 'Derek Swift',
        position: <Localize translate_text="Compliance and Payments Manager" />,
        description: (
            <Localize translate_text="Derek has been with us since 2006. His role is pivotal to the onboarding of our new payment systems and bank accounts. He holds a master’s degree in risk management from Birmingham City University." />
        ),
        image: 'derek_swift',
    },
    {
        name: 'Jeyavarthini Vairakanan',
        position: <Localize translate_text="Customer Support Manager" />,
        description: (
            <Localize translate_text="Jeyavarthini drives our customer support strategy and assists her team to establish a sustainable relationship with our clients. Before joining us in 2017, Jeyavarthini worked for Intel in Malaysia. She holds an honours degree in Information Technology with a speciality in Information System Security (ISS) from Asia Pacific University associated with Staffordshire University, UK." />
        ),
        image: 'jeyavarthini_vairakanan',
    },
    {
        name: 'Arun Venkataraman',
        position: <Localize translate_text="DevOps Manager" />,
        description: (
            <Localize translate_text="Arun coordinates our product development teams with our operations teams. He has over 12 years of experience in the information industry and has a comprehensive perspective into his field. Arun holds a master’s degree in bioinformatics from Bharathiar University in India." />
        ),
        image: 'arun_venkataraman',
    },
    {
        name: 'Ashkan Nemati',
        position: <Localize translate_text="Head of Front-end" />,
        description: (
            <Localize translate_text="Ashkan directs our front-end resources across the globe. He has over a decade of experience working with marketers, engineers, and designers in the entertainment and trading industries. Ashkan and his team focus on building a user-centric trading experience, which can help our users make better trading decisions. He holds an MBA from Management and Science University." />
        ),
        image: 'ashkan_nemati',
    },
]
const StyledSection = styled(SectionContainer)`
    @media ${device.tabletL} {
        padding: 5rem 0 0 0;
    }
`
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
    width: '100%';
    height: auto;
    max-width: '304px';
    box-shadow: '0 20px 20px 0 rgba(0, 0, 0, 0.2)';
    border-radius: '4px';

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

const LeaderMobile = styled.div`
    width: 100%;
    max-width: 304px;
    box-shadow: 0 20px 20px 0 rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    height: 532px;
    margin-bottom: 30px;

    > p {
        max-width: 273px;
    }
`

const Leaders = () => {
    const data = useStaticQuery(query)

    const settings = {
        container_style: {
            width: '100%',
            overflow: 'hidden',
        },
        slide_style: {
            minWidth: '273px',
            height: 'auto',
            position: 'relative',
            paddingRight: '10px',
        },
    }

    return (
        <StyledSection>
            <Container>
                <Show.Desktop>
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
                                <Box margin={{ bottom: '0.8rem' }} width="100%" position="relative">
                                    <QueryImage data={data[leader.image]} alt={leader.name} />
                                    <DescriptionWrapper>
                                        <Text lh="1.71" size="var(--text-size-xxs)" color="white">
                                            {leader.description}
                                        </Text>
                                    </DescriptionWrapper>
                                </Box>
                                <StyledHeader as="h4" align="center" lh="3.6rem">
                                    {leader.name}
                                </StyledHeader>
                                <Text align="center">{leader.position}</Text>
                            </LeaderWrapper>
                        ))}
                    </CssGrid>
                </Show.Desktop>
            </Container>
            <Show.Mobile>
                <Carousel {...settings}>
                    {leaders_data.map((leader, idx) => (
                        <LeaderMobile key={idx}>
                            <QueryImage data={data[`${leader.image}_mobile`]} alt={leader.name} />
                            <Header size="24px" align="center" m="16px 0 0">
                                {leader.name}
                            </Header>
                            <Text align="center" m="0 auto" size="2rem">
                                {leader.position}
                            </Text>
                            <Text m="16px 16px 32px 16px" size="1.6rem">
                                {leader.description}
                            </Text>
                        </LeaderMobile>
                    ))}
                </Carousel>
            </Show.Mobile>
        </StyledSection>
    )
}

export default Leaders
