import React, { useState } from 'react'
import styled from 'styled-components'
import { TQuestionsData } from '../data/_data-types'
import { useFilteredQuestions } from '../data/_hooks'
import { getUntranslatedCategory, convertToHash } from './_utility'
import { Localize, LocalizedLink } from 'components/localization'
import { Header } from 'components/elements'
import device from 'themes/device'
import { usePlatformQueryParam } from 'components/hooks/use-platform-query-param'

type TQuestionsCategory = {
    data: TQuestionsData
    topic_number: number
}

const Wrapper = styled.div`
    width: 35rem;
    margin-right: 2.4rem;
    line-height: 1.5;

    @media ${device.laptopL} {
        width: 30rem;
    }
    @media ${device.laptopM} {
        width: 26rem;
    }
    @media ${device.tabletS} {
        width: auto;
    }
    @media ${device.tabletL} {
        padding-top: 3.55rem;
    }
`
const StyledList = styled.ul`
    list-style: none;
`
const Link = styled(LocalizedLink)`
    font-size: 16px;
    color: var(--color-black-3);
    text-decoration: none;
    margin-top: 1.6rem;
    display: flex;

    :hover {
        color: red;
        text-decoration: underline;
    }
`
const ShowMore = styled.span`
    display: flex;
    cursor: pointer;
    font-size: 16px;
    color: red;
    margin-top: 1.6rem;
`

const QuestionsCategory = ({ data, topic_number }: TQuestionsCategory) => {
    const { category, questions } = data
    const { platform } = usePlatformQueryParam()
    const [show_more, setShowMore] = useState(false)
    const filtered_data = useFilteredQuestions(questions)
    const can_expand = filtered_data.length > 3
    const questions_to_show = show_more ? filtered_data : filtered_data.splice(0, 3)
    // TODO we need to talk with translation team to change these texts and remove <0> from the texts
    const show_more_text = show_more
        ? '_t_<0>View fewer questions</0>_t_'
        : '_t_<0>View all questions</0>_t_'

    const handleShowMoreClick = () => setShowMore(!show_more)
    return (
        <Wrapper>
            <Header type="subtitle-1" mt="4.2rem" mb="1.8rem">
                <Localize translate_text={category} />
            </Header>

            <StyledList>
                {questions_to_show.map(({ question, label }) => {
                    const to = convertToHash(getUntranslatedCategory(category), label, platform)
                    return (
                        <Link key={label} to={to}>
                            <Localize translate_text={question} />
                        </Link>
                    )
                })}
            </StyledList>

            {can_expand && (
                <ShowMore onClick={handleShowMoreClick} className={`view_${topic_number}`}>
                    <Localize translate_text={show_more_text} />
                </ShowMore>
            )}
        </Wrapper>
    )
}

export default QuestionsCategory
