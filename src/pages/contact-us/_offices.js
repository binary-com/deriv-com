import React from 'react'
// import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import { Text } from 'components/elements/typography'
import { Header } from 'components/elements'
import { SectionContainer, Container, Flex } from 'components/containers'
import { localize } from 'components/localization'
// import device from 'themes/device'
import { map_api_key } from 'common/utility'
// SVG
import Malta from 'images/svg/contact/malta.svg'
import Dubai from 'images/svg/contact/dubai.svg'
// import Paraguay from 'images/svg/contact/paraguay.svg'
// import Malaysia from 'images/svg/contact/malaysia.svg'

// const query = graphql`
//     query {
//         map_paraguay: file(relativePath: { eq: "map-paraguay.png" }) {
//             ...fadeIn
//         }
//         map_dubai_office: file(relativePath: { eq: "map-dubai-office.png" }) {
//             ...fadeIn
//         }
//         map_labuan: file(relativePath: { eq: "map-labuan.png" }) {
//             ...fadeIn
//         }
//     }
// `

const Content = styled.div`
    max-width: 996px;
`

const GridLayout = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2.4rem;
`

const BorderBox = styled.div`
    display: flex;
    padding-top: 1.6rem;
    border-top: 1px solid var(--color-grey-2);
`

const MapContainer = styled.div`
    width: 22.8rem;
    height: 12rem;
`

const Iframe = styled.iframe`
    width: 100%;
    height: 100%;
    border: 0;
`

export const Offices = () => {
    // const data = useStaticQuery(query)

    return (
        <SectionContainer>
            <Container>
                <Content>
                    <Header as="h2" mb="4rem">
                        {localize('Our offices')}
                    </Header>
                    <GridLayout>
                        <Flex fd="column" max_width="48.6rem">
                            <div>
                                <Malta />
                            </div>
                            <Header as="h4">{localize('Malta')}</Header>
                            <BorderBox>
                                <MapContainer>
                                    <Iframe
                                        src={`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJyTcAIli2zTERA4MWDMgk9i0&key=${map_api_key}`}
                                    />
                                </MapContainer>
                                <Text>
                                    Level 3, W Business Centre, Triq Dun Karm, Birkirkara, BKR 9033
                                </Text>
                            </BorderBox>
                        </Flex>
                        <Flex fd="column" max_width="48.6rem">
                            <div>
                                <Dubai />
                            </div>
                            <Header as="h4">{localize('Dubai')}</Header>
                            <BorderBox>
                                <MapContainer>
                                    <Iframe
                                        src={`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJyTcAIli2zTERA4MWDMgk9i0&key=${map_api_key}`}
                                    />
                                </MapContainer>
                                <Text>
                                    Unit 3004, 1 Lake Plaza, Cluster T, Jumeirah Lake Towers
                                </Text>
                            </BorderBox>
                        </Flex>
                    </GridLayout>
                </Content>
            </Container>
        </SectionContainer>
    )
}
