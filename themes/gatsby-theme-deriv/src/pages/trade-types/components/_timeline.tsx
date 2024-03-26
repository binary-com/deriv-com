import React, { PropsWithChildren, ReactElement } from 'react'
import styled from 'styled-components'
import { Text, Header } from 'components/elements'
import Checklist from 'images/svg/trade-types/checklist-red.svg'
import device from 'themes/device'
import { Localize, localize } from 'components/localization'
import { TString } from 'types/generics'

type TItem = PropsWithChildren<{ title?: TString }>
type TTimeline = {
    children: Array<ReactElement<TItem>>
}

const StyledItem = styled.div`
    display: flex;
    border-left: var(--color-red) dashed 1px;
    position: relative;
    padding-bottom: 4rem;

    &:last-child {
        border-left: unset;
        padding-bottom: 0;
    }
    @media ${device.tabletL} {
        margin-left: 2rem;
    }
`
const Container = styled.div`
    margin-left: 40px;
`
const Oval = styled.img`
    position: absolute;
    left: -10px;
`

const Timeline = ({ children }: TTimeline) => {
    return (
        <div>
            {children.map((child, idx) => (
                <StyledItem key={idx}>
                    <Oval src={Checklist} alt={localize('_t_checklist_t_')} />
                    <Container>
                        <Header mb="0.8rem" mt="-5px" as="h4" size="2.4rem">
                            {child.props.title && <Localize translate_text={child.props.title} />}
                        </Header>
                        <Text>{child}</Text>
                    </Container>
                </StyledItem>
            ))}
        </div>
    )
}

const Item = ({ children }: TItem) => <span>{children}</span>

Timeline.Item = Item

export default Timeline
