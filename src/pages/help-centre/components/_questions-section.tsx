import React from 'react'
import styled from 'styled-components'
import { TQuestionsData } from '../data/_data-types'
import { usePlatformQueryParam } from 'components/hooks/use-platform-query-param'
import { Header } from 'components/elements'
import device from 'themes/device'
import { useCountryRule } from 'components/hooks/use-country-rule'

type TQuestionsSection = {
    data: TQuestionsData[]
}

const Section = styled.section`
    display: flex;
    flex-direction: column;
    padding-bottom: 8rem;
    width: 100%;

    @media ${device.tabletL} {
        flex-wrap: wrap;
    }
`

const SectionName = styled(Header)`
    font-size: var(--text-size-l);
    font-weight: normal;
    color: var(--color-grey-5);
    margin: 2rem 0 0 1rem;

    @media ${device.tabletL} {
        color: var(--color-black-3);
        font-size: 24px;
        font-weight: bold;
        margin: 32px auto 0;
    }
`

const HorizontalLine = styled.hr`
    display: block;
    border: 0;
    border-top: 1px solid var(--color-grey-2);
    height: 1px;
    margin: 1em 0;
    padding: 0;
`

const Div = styled.div`
    display: flex;
    flex-wrap: wrap;

    @media ${device.tabletL} {
        flex-direction: column;
    }
`

const QuestionsSection = ({ data }: TQuestionsSection) => {
    const { is_eu } = useCountryRule()
    const { platform } = usePlatformQueryParam()

    return (
        <Section>
            <SectionName>General</SectionName>
            <HorizontalLine />
            <Div>
                {data.map(({ hide_for_eu, category }) => {
                    const hide_component = is_eu && hide_for_eu

                    if (!hide_component) {
                        return (
                            <div key={category}>
                                <span>category</span>
                            </div>
                        )
                    }
                })}
            </Div>
        </Section>
    )
}

export default QuestionsSection
