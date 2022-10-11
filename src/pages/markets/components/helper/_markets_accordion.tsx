import React, { HTMLProps } from 'react'
import styled from 'styled-components'
import { Flex, Box } from 'components/containers'
import device from 'themes/device'
import ChevronThick from 'images/svg/custom/chevron-thick.svg'

type StyledChevron = {
    is_show_detail: string
}

type MarketsAccordionProps = HTMLProps<HTMLDivElement> & {
    renderTitle: () => JSX.Element
}

const Wrapper = styled.div`
    border: 1px solid var(--color-grey-22);
    border-radius: 8px;
`
const Button = styled(Flex)`
    max-width: 5.8rem;
    margin: auto 0;
    cursor: pointer;

    @media ${device.tabletL} {
        max-width: unset;
        border-top: 1px solid var(--color-grey-22);
        min-height: 32px;
        align-items: center;
    }
`
const Title = styled(Flex)`
    @media ${device.tabletL} {
        flex-direction: column;
    }
`

const StyledChevron = styled.img<StyledChevron>`
    transform: rotate(${(props) => (props.is_show_detail == 'true' ? '0' : '180')}deg);
    transition: transform 100ms linear;

    @media ${device.tabletL} {
        height: 24px;
    }
`
const Details = styled(Box)`
    border-radius: 0 0 8px 8px;
    border-top: 1px solid var(--color-grey-22);
    padding: 0.8rem 2.4rem 2.4rem 2.4rem;

    @media ${device.tabletL} {
        padding: 1rem 1rem 2rem 1rem;
    }
`

const MarketsAccordion = ({ renderTitle, children }: MarketsAccordionProps) => {
    const [is_show_detail, setShow] = React.useState(false)
    return (
        <Wrapper>
            <Title>
                {renderTitle()}
                <Button onClick={() => setShow(!is_show_detail)}>
                    <StyledChevron
                        src={ChevronThick}
                        alt=""
                        width={16}
                        height={16}
                        is_show_detail={String(is_show_detail)}
                    />
                </Button>
            </Title>
            {is_show_detail && <Details background="var(--color-grey-23)">{children}</Details>}
        </Wrapper>
    )
}

export default MarketsAccordion
