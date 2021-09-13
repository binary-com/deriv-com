import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import MobileExpandedList from './_mobile-expanded-list'
import { Flex } from 'components/containers'
import { Header } from 'components/elements'
import { localize } from 'components/localization'
import Chevron from 'images/svg/chevron-thick.svg'

const StyledItemWrapper = styled(Flex)`
    border-bottom: ${(props) => (props.is_expanded ? '1px solid var(--color-grey-8)' : 'none')};
`
const StyledIconWrapper = styled.div`
    width: 100%;
    max-width: 128px;
    margin-left: 16px;
`
const StyledChevron = styled.img`
    height: 16px;
    width: 16px;
    margin: 26px 0 32px;
    transform: ${(props) => (props.expanded ? 'inherit' : 'rotate(-180deg)')};
    transition: transform 0.25s ease-out;
`
const HoverChevron = styled.div`
    transition: background 0.25s;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 16px;
`
const DetailsWrapper = styled(Flex)`
    display: ${(props) => (props.is_expanded ? 'flex' : 'none')};
`

const ExpandItems = ({
    crypto_config,
    is_crypto,
    is_fiat_onramp,
    is_dp2p,
    locale,
    payment_data,
}) => {
    const [is_expanded, setIsExpanded] = React.useState(false)
    const toggleExpand = () => {
        setIsExpanded(!is_expanded)
    }

    return (
        <>
            <StyledItemWrapper
                jc="space-between"
                ai="center"
                onClick={toggleExpand}
                is_expanded={is_expanded}
            >
                <StyledIconWrapper>{payment_data.method}</StyledIconWrapper>
                <HoverChevron>
                    <StyledChevron src={Chevron} alt="chevron" expanded={is_expanded} />
                </HoverChevron>
            </StyledItemWrapper>
            <DetailsWrapper is_expanded={is_expanded}>
                <MobileExpandedList
                    crypto_config={crypto_config}
                    locale={locale}
                    payment_data={payment_data}
                    is_crypto={is_crypto}
                    is_fiat_onramp={is_fiat_onramp}
                    is_dp2p={is_dp2p}
                />
            </DetailsWrapper>
        </>
    )
}
ExpandItems.propTypes = {
    crypto_config: PropTypes.object,
    is_crypto: PropTypes.bool,
    is_dp2p: PropTypes.bool,
    is_fiat_onramp: PropTypes.bool,
    locale: PropTypes.object,
    payment_data: PropTypes.object,
}

const ParentWrapper = styled(Flex)`
    /* background: red; */
    flex-direction: column;
`
const StyledAccordianItem = styled(Flex)`
    justify-content: space-between;
    border-bottom: 1px solid var(--color-grey-8);

    &:last-child {
        border-bottom: none;
    }
`
const Notes = styled.div`
    width: auto;
    background: var(--color-grey-8);
    margin: 0 -16px;
    padding: 16px;
`

// const MobileAccordianItem = ({ pd, crypto_config, locale }) => {
const MobileAccordianItem = ({ crypto_config, locale, pd }) => {
    return (
        <>
            <ParentWrapper>
                {pd.data.map((items, idx) => {
                    return (
                        <StyledAccordianItem key={idx} fd="column" ai="center">
                            <ExpandItems
                                payment_data={items}
                                locale={locale}
                                crypto_config={crypto_config}
                                is_crypto={pd.is_crypto}
                                is_fiat_onramp={pd.is_fiat_onramp}
                                is_dp2p={pd.is_dp2p}
                            ></ExpandItems>
                        </StyledAccordianItem>
                    )
                })}
            </ParentWrapper>

            {pd.note && (
                <Notes>
                    <Header type="paragraph-1" weight="normal">
                        {localize('Note:')} {pd.note}
                    </Header>
                </Notes>
            )}
        </>
    )
}

MobileAccordianItem.propTypes = {
    crypto_config: PropTypes.object,
    locale: PropTypes.object,
    pd: PropTypes.object,
}

export default MobileAccordianItem
