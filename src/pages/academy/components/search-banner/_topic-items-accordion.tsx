import React, { useState } from 'react'
import styled from 'styled-components'
import type { TopicType } from '../../common/_constants'
import { StyledLink, StyledChevron, HoverChevron } from './_search-styled'
import { Flex } from 'components/containers'
import { Header } from 'components/elements'
import Chevron from 'images/svg/custom/chevron-thick.svg'

const DetailsWrapper = styled(Flex)`
    height: auto;
    overflow: hidden;
    transition: max-height 0.5s ease;
    max-height: ${(props) => (props.is_expanded ? '180px' : '0')};

    :nth-last-child(-n + 2) {
        max-height: ${(props) => (props.is_expanded ? '110px' : '0')};
    }
`

type TopicItemsAccordionProps = {
    items?: TopicType
    setModal?: React.Dispatch<React.SetStateAction<boolean>>
    handleGreyed: (category: string) => void
    handleHref: (category: string) => void
}

const TopicItemsAccordion = ({
    items,
    setModal,
    handleGreyed,
    handleHref,
}: TopicItemsAccordionProps) => {
    const [is_expanded, setExpanded] = useState(false)

    const toggleExpand = () => {
        setExpanded(!is_expanded)
    }

    const handleModal = () => {
        setModal(false)
    }

    return (
        <>
            <Flex
                mb="16px"
                fd="column"
                height="auto"
                style={{
                    borderBottom: '1px solid var(--color-grey-7)',
                }}
                onClick={toggleExpand}
            >
                <Flex jc="space-between" align="center" p="8px">
                    <Header as="h3" type="paragraph-2" color="grey-5" width="auto">
                        {items.type.toUpperCase()}
                    </Header>
                    <HoverChevron>
                        <StyledChevron src={Chevron} alt="chevron" expanded={is_expanded} />
                    </HoverChevron>
                </Flex>
            </Flex>
            <DetailsWrapper is_expanded={is_expanded} fd="column">
                {items.items.map((item, idx) => {
                    return (
                        <StyledLink
                            key={idx}
                            to={handleHref(item.title)}
                            onClick={handleModal}
                            greyed={handleGreyed(item.title)}
                        >
                            {item.title}
                        </StyledLink>
                    )
                })}
            </DetailsWrapper>
        </>
    )
}

export default TopicItemsAccordion
