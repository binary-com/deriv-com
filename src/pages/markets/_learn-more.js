import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
// import { localize } from 'components/localization'
import { Container } from 'components/containers'
import device from 'themes/device'
import { Header, Text, Accordion, AccordionItem } from 'components/elements'

const ContentWrapper = styled.section`
    width: 100%;
    padding: 8rem 32.4rem;

    @media ${device.laptopM} {
        padding: 8rem 14rem;
    }
    @media ${device.tablet} {
        padding: 8rem 4rem;
    }
`

const AccordionWrapper = styled.div`
    width: 100%;
`

export const LearnMore = ({ data, header }) => {
    return (
        <ContentWrapper>
            <Header mb="4rem" size="3.6rem" align="center">
                {header}
            </Header>
            <Container direction="column">
                <AccordionWrapper>
                    <Accordion has_single_state>
                        {data.map((record, idx) => {
                            return (
                                <AccordionItem
                                    key={idx}
                                    header={record.header}
                                    parent_style={{
                                        marginBottom: '2.4rem',
                                    }}
                                >
                                    {record.text.map((item, idx2) => {
                                        return (
                                            <Text mb="1.5rem" key={idx2}>
                                                {item}
                                            </Text>
                                        )
                                    })}
                                </AccordionItem>
                            )
                        })}
                    </Accordion>
                </AccordionWrapper>
            </Container>
        </ContentWrapper>
    )
}
LearnMore.propTypes = {
    data: PropTypes.object,
    header: PropTypes.string,
}
