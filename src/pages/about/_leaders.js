import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { SectionContainer, Container, CssGrid, Box, Flex } from 'components/containers'
import { QueryImage, Text } from 'components/elements'
import { Localize } from 'components/localization'
import device from 'themes/device.js'

const query = graphql`
    query {
        anton: file(relativePath: { eq: "leaders/anton.png" }) {
            ...fadeIn
        }
        arun: file(relativePath: { eq: "leaders/arun.png" }) {
            ...fadeIn
        }
        ashkan: file(relativePath: { eq: "leaders/ashkan.png" }) {
            ...fadeIn
        }
        denis: file(relativePath: { eq: "leaders/denis.png" }) {
            ...fadeIn
        }
        derek: file(relativePath: { eq: "leaders/derek.png" }) {
            ...fadeIn
        }
        gary: file(relativePath: { eq: "leaders/gary.png" }) {
            ...fadeIn
        }
        jennice: file(relativePath: { eq: "leaders/jennice.png" }) {
            ...fadeIn
        }
        jeya: file(relativePath: { eq: "leaders/jeya.png" }) {
            ...fadeIn
        }
        joanna: file(relativePath: { eq: "leaders/joanna.png" }) {
            ...fadeIn
        }
        jy: file(relativePath: { eq: "leaders/jy.png" }) {
            ...fadeIn
        }
        louise: file(relativePath: { eq: "leaders/louise.png" }) {
            ...fadeIn
        }
        munsei: file(relativePath: { eq: "leaders/munsei.png" }) {
            ...fadeIn
        }
        rakshit: file(relativePath: { eq: "leaders/rakshit.png" }) {
            ...fadeIn
        }
        raunak: file(relativePath: { eq: "leaders/raunak.png" }) {
            ...fadeIn
        }
        shyamala: file(relativePath: { eq: "leaders/shyamala.png" }) {
            ...fadeIn
        }
        tom: file(relativePath: { eq: "leaders/tom.png" }) {
            ...fadeIn
        }
        waqas: file(relativePath: { eq: "leaders/waqas.png" }) {
            ...fadeIn
        }
    }
`

const leaders_data = [
    {
        name: <Localize translate_text="Anton Andreev" />,
        position: <Localize translate_text="Head of Project Management" />,
        image_name: 'anton',
    },
    {
        name: <Localize translate_text="Arun Venkataraman" />,
        position: <Localize translate_text="DevOps Manager" />,
        image_name: 'arun',
    },
    {
        name: <Localize translate_text="Ashkan Nemati" />,
        position: <Localize translate_text="Head of Front-end" />,
        image_name: 'ashkan',
    },
    {
        name: <Localize translate_text="Denis Makagonov" />,
        position: <Localize translate_text="Business Intelligence Manager" />,
        image_name: 'denis',
    },
    {
        name: <Localize translate_text="Derek Swift" />,
        position: <Localize translate_text="Compliance and Payments Manager" />,
        image_name: 'derek',
    },
    {
        name: <Localize translate_text="Gary Ross" />,
        position: <Localize translate_text="Chief Risk Officer" />,
        image_name: 'gary',
    },
    {
        name: <Localize translate_text="Jennice Lourdsamy" />,
        position: <Localize translate_text="Head of Accounts" />,
        image_name: 'jennice',
    },
    {
        name: <Localize translate_text="Jeyavarthini Vairakanan" />,
        position: <Localize translate_text="Customer Support Manager" />,
        image_name: 'jeya',
    },
    {
        name: <Localize translate_text="Joanna Frendo" />,
        position: <Localize translate_text="Head of Compliance" />,
        image_name: 'joanna',
    },
    {
        name: <Localize translate_text="Jean-Yves Sireau" />,
        position: <Localize translate_text="Founder and Chief Executive Officer" />,
        image_name: 'jy',
        ceo: true,
    },
    {
        name: <Localize translate_text="Louise Wolf" />,
        position: <Localize translate_text="Financial Controller" />,
        image_name: 'louise',
    },
    {
        name: <Localize translate_text="Mun Sei Loke" />,
        position: <Localize translate_text="Quality Assurance Manager" />,
        image_name: 'munsei',
    },
    {
        name: <Localize translate_text="Rakshit Choudhary" />,
        position: <Localize translate_text="Chief Operations Officer" />,
        image_name: 'rakshit',
    },
    {
        name: <Localize translate_text="Raunak Kathuria" />,
        position: <Localize translate_text="Back-end Manager" />,
        image_name: 'raunak',
    },
    {
        name: <Localize translate_text="Shyamala Siva" />,
        position: <Localize translate_text="Head of Human Resources" />,
        image_name: 'shyamala',
    },
    {
        name: <Localize translate_text="Tom Molesworth" />,
        position: <Localize translate_text="CTO / Chief Architect" />,
        image_name: 'tom',
    },
    {
        name: <Localize translate_text="Waqas Awan" />,
        position: <Localize translate_text="Head of Product Design" />,
        image_name: 'waqas',
    },
]

const StyledGrid = styled(CssGrid)`
    width: 100%;
    grid-template-columns: repeat(12, 1fr);
    grid-column-gap: 2.4rem;
    grid-row-gap: 2.4rem;
    grid-template-areas:
        'jy jy jy jy jy jy rakshit rakshit rakshit tom tom tom'
        'jy jy jy jy jy jy joanna joanna joanna shyamala shyamala shyamala'
        'gary gary gary ashkan ashkan ashkan waqas waqas waqas louise louise louise'
        'denis denis denis raunak raunak raunak munsei munsei munsei anton anton anton'
        'derek derek derek jennice jennice jennice jeya jeya jeya arun arun arun';

    @media ${device.tabletL} {
        grid-template-columns: 1fr;
        grid-column-gap: 0;
        grid-row-gap: 3rem;
        grid-template-areas:
            'jy' 'rakshit' 'tom' 'joanna' 'shyamala' 'gary'
            'ashkan' 'waqas' 'louise' 'denis' 'raunak' 'munsei'
            'anton' 'derek' 'jennice' 'jeya' 'arun';
    }
`
const LeaderWrapper = styled(Box)`
    grid-area: ${(props) => props.grid_name};
    width: 100%;
    position: relative;

    @media ${device.tabletL} {
        max-width: 400px;
        margin: 0 auto;
    }
`
const LeaderInformation = styled(Flex)`
    width: 100%;
    position: absolute;
    background-image: linear-gradient(to top, #0e0e0e 16%, rgba(0, 0, 0, 0) 100%, #d5d9da 119%);
    bottom: 0;
    height: 31.2%;
    max-height: 14rem;
    flex-direction: column;
    padding: ${(props) => (props.is_ceo ? '3.2rem' : '2.4rem')};

    @media ${device.tabletL} {
        max-height: 11.25rem;
        padding: 2.62rem 2rem 2rem;
    }
`
const LeaderName = styled(Text)`
    color: var(--color-white);
    font-weight: bold;
    font-size: ${(props) => (props.is_ceo ? 'var(--text-size-l)' : 'var(--text-size-s)')};
    line-height: ${(props) => (props.is_ceo ? '1.25' : '1.5')};

    @media ${device.tabletL} {
        font-size: 2.5rem;
        line-height: 1.6;
    }
`
const LeaderPosition = styled(Text)`
    color: var(--color-white);
    font-size: ${(props) => (props.is_ceo ? 'var(--text-size-m)' : 'var(--text-size-xs)')};

    @media ${device.tabletL} {
        font-size: 2rem;
    }
`
const Leaders = () => {
    const data = useStaticQuery(query)

    return (
        <SectionContainer>
            <Container>
                <StyledGrid>
                    {leaders_data.map((leader) => (
                        <LeaderWrapper key={leader.image_name} grid_name={leader.image_name}>
                            <QueryImage
                                data={data[leader.image_name]}
                                alt={leader.name}
                                width="100%"
                            />
                            <LeaderInformation is_ceo={leader.ceo}>
                                <LeaderName is_ceo={leader.ceo}>{leader.name}</LeaderName>
                                <LeaderPosition is_ceo={leader.ceo}>
                                    {leader.position}
                                </LeaderPosition>
                            </LeaderInformation>
                        </LeaderWrapper>
                    ))}
                </StyledGrid>
            </Container>
        </SectionContainer>
    )
}

export default Leaders
