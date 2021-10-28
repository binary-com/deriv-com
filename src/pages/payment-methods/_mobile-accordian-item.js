import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import MobileExpandedList from './_mobile-expanded-list'
import { Flex } from 'components/containers'
import { Header } from 'components/elements'
import { localize } from 'components/localization'

const ParentWrapper = styled(Flex)`
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

const MobileAccordianItem = ({ crypto_config, locale, pd }) => {
    return (
        <>
            <ParentWrapper>
                {pd.data.map((items, idx) => {
                    return (
                        <StyledAccordianItem key={idx} fd="column" ai="center">
                            <MobileExpandedList
                                payment_data={items}
                                locale={locale}
                                crypto_config={crypto_config}
                                is_crypto={pd.is_crypto}
                                is_fiat_onramp={pd.is_fiat_onramp}
                                is_dp2p={pd.is_dp2p}
                            ></MobileExpandedList>
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
