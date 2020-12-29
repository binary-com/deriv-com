import styled, { css } from 'styled-components'
import { CssGrid, Flex } from 'components/containers'
import { Text } from 'components/elements'
import device from 'themes/device'

export const Col = styled(Flex)`
    max-width: 129px;
    padding: 0 4px;
`

export const ContentWrapper = styled(Flex)`
    flex-direction: column;
    margin: 0 auto;
    max-width: 792px;
`

export const CrashText = styled(Text)`
    width: 690px;
    @media ${device.tabletL} {
        width: 100%;
    }
`

export const Descriptions = styled.div`
    padding-bottom: 4rem;
    border-bottom: 1px solid var(--color-grey-21);
`

export const DetailsContainer = styled(Flex)`
    flex-direction: column;

    ${Text} {
        font-size: 1.4rem;
        margin-top: 1.6rem;

        @media ${device.tabletL} {
            margin-top: 1rem;
        }
    }
`

export const Row = styled(Flex)`
    ${({ is_accordion_row }) => {
        if (!is_accordion_row) {
            return css`
                border: 1px solid var(--color-grey-22);
                margin-top: 24px;
                border-radius: 8px;
            `
        }
    }}
    justify-content: flex-start;
    align-items: center;
`

export const MarketsList = styled(CssGrid)`
    border-left: 1px solid var(--color-grey-22);
    border-right: ${({ has_right_border }) =>
        has_right_border ? '1px solid var(--color-grey-22)' : 'unset'};
    grid-template-columns: ${({ col }) => `repeat(${col ?? 5}, 1fr)`};
    width: 100%;
    padding: 24px;
    grid-row-gap: 16px;

    @media ${device.tabletL} {
        grid-template-columns: ${({ tablet_col }) => `repeat(${tablet_col ?? 3}, 1fr)`};

        img {
            width: 16px;
            height: 16px;
            margin-right: 4px;
        }
        ${Text} {
            font-size: 1.5rem;
            line-height: 1.5;
        }
    }

    @media ${device.mobileL} {
        grid-template-columns: ${({ mobile_col }) => `repeat(${mobile_col ?? 2}, 1fr)`};
    }
`

export const MarketsWrapper = styled(Flex)`
    flex-direction: column;

    > div {
        margin-top: 24px;
    }
`

export const Options = styled(Descriptions)`
    margin-top: 2.4rem;

    ${Row} {
        margin-top: 4rem;
        border: unset;
        justify-content: space-between;

        @media ${device.tabletL} {
            flex-direction: column;
        }

        ${Col} {
            max-width: 38.4rem;
        }
    }
    div:first-child {
        margin-top: 0;
    }
`

export const StyledText = styled(Text)`
    @media ${device.tabletL} {
        font-size: 20px;
        text-align: left;
    }
`

export const Title = styled(Text)`
    text-align: center;
    font-weight: bold;

    @media ${device.tabletL} {
        font-weight: 600;
        font-size: 14px;
    }
`
