import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Flex, Box } from 'components/containers'
import device from 'themes/device'
import ChevronThick from 'images/svg/chevron-thick.svg'

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
    }
`
const Title = styled(Flex)`
    @media ${device.tabletL} {
        flex-direction: column;
    }
`
const StyledChevron = styled.img`
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
const MarketsAccordion = ({ renderTitle, renderDetails }) => {
    const [is_show_detail, setShow] = React.useState(false)
    return (
        <Wrapper>
            <Title>
                {renderTitle()}
                <Button onClick={() => setShow(!is_show_detail)}>
                    <StyledChevron
                        src={ChevronThick}
                        alt="chevron"
                        width="16px"
                        height="16px"
                        is_show_detail={String(is_show_detail)}
                    />
                </Button>
            </Title>
            {is_show_detail && (
                <Details background="var(--color-grey-23)">{renderDetails()}</Details>
            )}
        </Wrapper>
    )
}

MarketsAccordion.propTypes = {
    renderDetails: PropTypes.func,
    renderTitle: PropTypes.func,
}
export default MarketsAccordion
