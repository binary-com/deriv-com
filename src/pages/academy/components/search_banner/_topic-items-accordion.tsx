import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import type { TopicType } from '../../common/_constants'
import { StyledLink, StyledChevron, HoverChevron } from './_search-styled'
import { Flex } from 'components/containers'
import { Header } from 'components/elements'
import Chevron from 'images/svg/custom/chevron-thick.svg'
import { useOutsideClick } from 'components/hooks/use-outside-click'

type TopicItemsAccordionProps = {
    items?: TopicType
    setModal?: React.Dispatch<React.SetStateAction<boolean>>
    handleHref: (category: string) => void
}

const DetailsWrapper = styled(Flex)<{ is_expanded: boolean }>`
    height: auto;
    overflow: hidden;
    transition: max-height 0.5s ease;
    max-height: ${({ is_expanded }) => (is_expanded ? '180px' : '0')};

    :nth-last-child(-n + 2) {
        max-height: ${({ is_expanded }) => (is_expanded ? '110px' : '0')};
    }
`

const TopicItemsAccordion = ({ items, setModal, handleHref }: TopicItemsAccordionProps) => {
    const [is_expanded, setExpanded] = useState(false)

    const modal_ref = useRef(null)

    const toggleExpand = () => {
        setExpanded((prevState) => !prevState)
    }

    const closeModal = () => {
        setModal(false)
    }

    useOutsideClick(modal_ref, () => setExpanded(false))

    return (
        <Flex fd="column" ref={modal_ref}>
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
                        <StyledChevron src={Chevron} alt="chevron" is_expanded={is_expanded} />
                    </HoverChevron>
                </Flex>
            </Flex>
            <DetailsWrapper is_expanded={is_expanded} fd="column">
                {items.items.map((item) => {
                    return (
                        <StyledLink
                            key={item.title}
                            to={handleHref(item.title)}
                            onClick={closeModal}
                        >
                            {item.title}
                        </StyledLink>
                    )
                })}
            </DetailsWrapper>
        </Flex>
    )
}

export default TopicItemsAccordion
