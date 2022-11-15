import React from 'react'
import styled from 'styled-components'
import { TQuestionsData } from '../data/_data-types'
import QuestionsCategory from './_questions-category'
import { Header } from 'components/elements'
import device from 'themes/device'
import { useCountryRule } from 'components/hooks/use-country-rule'
import { Localize } from 'components/localization'

type TQuestionsSection = {
    data: TQuestionsData[]
    section_name: string
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

const QuestionsSection = ({ data, section_name }: TQuestionsSection) => {
    const { is_eu } = useCountryRule()

    return (
        <Section>
            <SectionName>
                <Localize translate_text={`_t_${section_name}_t_`} />
            </SectionName>
            <HorizontalLine />
            <Div>
                {data.map((item) => {
                    const { hide_for_eu, category } = item
                    const hide_component = is_eu && hide_for_eu

                    if (!hide_component) {
                        return <QuestionsCategory key={category} data={item} />
                    }
                })}
            </Div>
        </Section>
    )
}

export default QuestionsSection
